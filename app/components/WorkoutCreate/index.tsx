'use client';

import { addWorkout } from '@/actions/addWorkout';
import { BasicBtn, BasicSelect, DatePicker } from '@/app/components';
import { fetcher } from '@/lib/fetcher';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { redirect } from 'next/navigation';
import { useEffect, useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';
import { BeatLoader, PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { SelectOption } from '../Form/BasicSelect';
import * as Styled from './WorkoutCreate.styled';
import WorkoutCreateBlock from './WorkoutCreateBlock';

type WorkoutCreateProps = {
  programs: SelectOption[];
  categories: SelectOption[];
};

export type Block = {
  id?: string;
  workoutId?: string;
  title: string;
  duration: string;
  categoryId: string;
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

  const [loadingPOST, setLoadingPOST] = useState(false);

  const blockObj = {
    title: '',
    duration: '',
    categoryId: '',
    description: '',
  };

  const {
    register,
    control,
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
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: 'blocks',
  });

  const watchedFields = watch(['date', 'programId']);

  const { data, isLoading } = useSWR(
    watchedFields[0] && watchedFields[1]
      ? `/api/workout?date=${watchedFields[0]}&programId=${watchedFields[1]}`
      : null,
    fetcher,
  );

  useEffect(() => {
    if (data?.data?.blocks.length) {
      replace(data?.data.blocks);
    }
    if (data?.data?.blocks.length === 0 || data?.data === null) {
      toast.warning('There is no data for the selected workout.');
    }
  }, [data, replace]);

  const processForm: SubmitHandler<IFormInput> = async (data) => {
    setLoadingPOST(true);
    const result = await addWorkout(data);

    if (result.success) {
      toast.success(result.message);
    } else {
      toast.error(result.message);
    }
    setLoadingPOST(false);
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
          fields.map((field, index) => {
            return (
              <WorkoutCreateBlock
                register={register}
                control={control}
                key={field.id}
                id={index}
                removeAction={remove}
                categories={categories}
                errors={errors}
              />
            );
          })
        )}

        <div className="buttonsWrapper w-full grid grid-cols-2 gap-7">
          <BasicBtn
            priority="secondary"
            type="button"
            bgColor="var(--secondary-color)"
            onClick={() => reset()}
          >
            RESET
          </BasicBtn>
          <BasicBtn
            priority="secondary"
            type="button"
            bgColor="var(--primary-color)"
            onClick={() => append(blockObj)}
          >
            <FaPlus />
          </BasicBtn>
        </div>
      </div>
      <BasicBtn
        type="submit"
        bgColor="var(--primary-color)"
        fontColor="var(--secondary-font-color)"
        disabled={loadingPOST}
      >
        {loadingPOST ? <BeatLoader speedMultiplier={0.7} /> : 'SAVE WORKOUT'}
      </BasicBtn>
      <Link className="shrink-0 w-full" href="/admin">
        <BasicBtn
          type="button"
          bgColor="var(--secondary-color)"
          fontColor="var(--primary-font-color)"
        >
          CANCEL
        </BasicBtn>
      </Link>
    </Styled.WorkoutCreateWrapper>
  );
};

export default WorkoutCreate;
