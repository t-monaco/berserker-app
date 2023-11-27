'use client';

import { addWorkout } from '@/actions/addWorkout';
import { BasicBtn, BasicSelect, DatePicker } from '@/app/components';
import { fetcher } from '@/lib/fetcher';
import { useUser } from '@clerk/nextjs';
import { redirect, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { BeatLoader, PulseLoader } from 'react-spinners';
import useSWR from 'swr';
import { SelectOption } from '../Form/BasicSelect';
import * as Styled from './WorkoutCreate.styled';
import WorkoutCreateBlock from './WorkoutCreateBlock';
import Link from 'next/link';
import NoDataToast from './NoDataToast';

type WorkoutCreateProps = {
  programs: SelectOption[];
  categories: SelectOption[];
};

export type Block = {
  title: string;
  duration: string;
  category: string;
  description: string;
};

export interface IFormInput {
  date: number;
  programId: string;
  blocks: Block[];
}

const WorkoutCreate: React.FC<WorkoutCreateProps> = ({
  categories,
  programs,
}) => {
  //This should be fixed by clerk, auth method not retrieving the correct information.
  const { isLoaded, user } = useUser();

  if (isLoaded && user?.organizationMemberships?.[0]?.role !== 'admin') {
    redirect('/');
  }

  const [loading, setLoading] = useState(false);

  const blockObj = {
    title: '',
    duration: '',
    category: '',
    description: '',
  };

  const {
    register,
    control,
    setValue,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<IFormInput>({
    defaultValues: {
      date: 0,
      programId: '',
      blocks: [],
    },
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'blocks',
  });

  const router = useRouter();

  const watchFieldArray = watch('blocks');
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  const watchedFields = watch(['date', 'programId']);

  const { data, error, isLoading } = useSWR(
    watchedFields[0] && watchedFields[1]
      ? `/api/workout?date=${watchedFields[0]}&programId=${watchedFields[1]}`
      : null,
    fetcher,
  );

  useEffect(() => {
    const workoutData = data?.data;
    if (workoutData) {
      setValue('blocks', data.data.blocks);
    } else if (workoutData === null && controlledFields.length > 0) {
      toast.loading((t) => <NoDataToast t={t} setValue={setValue} />, {
        duration: Infinity,
      });
    }
  }, [data?.data]);

  const processForm: SubmitHandler<IFormInput> = async (data) => {
    setLoading(true);
    const result = await addWorkout(data);

    if (result.success) {
      toast.success(result.message as string);
      reset();
      // redirect from next not working inside trycatch of server actions.
      router.push('/admin');
    } else {
      setLoading(false);
      toast.error(result.message);
    }
  };

  return (
    <Styled.WorkoutCreateWrapper
      onSubmit={handleSubmit(processForm)}
      autoComplete="off"
    >
      <div className="w-full flex flex-col flex-shrink-0 gap-7">
        <DatePicker name="date" label="SELECT DATE" control={control} />
        <BasicSelect
          name="programId"
          label="SELECT PROGRAM"
          options={programs}
          control={control}
          error={errors.programId?.message}
        />
      </div>
      <span className="divider" />
      <div className="w-full flex flex-col overflow-scroll flex-shrink-0 gap-7">
        {isLoading ? (
          <div className="m-auto">
            <PulseLoader color="#adfe19" />
          </div>
        ) : (
          controlledFields.map((_, index) => {
            return (
              <WorkoutCreateBlock
                register={register}
                control={control}
                key={index}
                id={index}
                removeAction={remove}
                categories={categories}
                errors={errors}
              />
            );
          })
        )}

        <BasicBtn
          priority="secondary"
          type="button"
          onClick={() => append(blockObj)}
        >
          ADD BLOCK
        </BasicBtn>
      </div>
      <BasicBtn type="submit" disabled={loading}>
        {loading ? <BeatLoader speedMultiplier={0.7} /> : 'SAVE WORKOUT'}
      </BasicBtn>
      <Link className="shrink-0 w-full" href="/admin">
        <BasicBtn type="button">CANCEL</BasicBtn>
      </Link>
    </Styled.WorkoutCreateWrapper>
  );
};

export default WorkoutCreate;
