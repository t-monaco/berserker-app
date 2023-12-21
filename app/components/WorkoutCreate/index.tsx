'use client';

import { addWorkout } from '@/actions/addWorkout';
import { trpc } from '@/app/_trpc/client';
import BasicBtn from '@/app/components/Form/BasicBtn';
import BasicSelect from '@/app/components/Form/BasicSelect';
import DatePicker from '@/app/components/Form/DatePicker';
import Loader from '@/app/components/Loader';
import { CreateWorkoutForm, SelectOption } from '@/types/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';
import { BeatLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import * as Styled from './WorkoutCreate.styled';
import WorkoutCreateBlock from './WorkoutCreateBlock';

type WorkoutCreateProps = {
  programs: SelectOption[];
  categories: SelectOption[];
};

const WorkoutCreate: React.FC<WorkoutCreateProps> = ({
  categories,
  programs,
}) => {
  const [loadingPOST, setLoadingPOST] = useState(false);
  const trpcUtils = trpc.useUtils();

  const blockObj = {
    title: '',
    duration: '',
    category: '',
    description: '',
  };

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm<CreateWorkoutForm>({
    defaultValues: {
      date: 0,
      program: '',
      blocks: [],
    },
  });
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: 'blocks',
  });

  const watchedFields = watch(['date', 'program']);

  const { data, isLoading, isFetching } =
    trpc.getBlocksByDateAndProgram.useQuery(
      {
        dateUnix: watchedFields[0],
        programId: watchedFields[1],
      },
      { enabled: Boolean(watchedFields[0]) && Boolean(watchedFields[1]) },
    );

  useEffect(() => {
    if (data?.length) {
      replace(
        data.map(({ title, duration, description, category, id }) => ({
          id: id,
          title: title!,
          duration: duration!,
          description: description!,
          category: category!.id,
        })),
      );
    }
    if (data?.length === 0) {
      toast.warning('There is no data for the selected workout.');
    }
  }, [data, replace]);

  const processForm: SubmitHandler<CreateWorkoutForm> = async (data) => {
    setLoadingPOST(true);
    const result = await addWorkout(data);

    if (result.success) {
      toast.success(result.message);
      trpcUtils.getBlocksByDateAndProgram.invalidate(); // this revalidate the above GET request.
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
          name="program"
          label="SELECT PROGRAM"
          options={programs}
          control={control}
          error={errors.program?.message}
        />
      </div>
      <span className="divider" />
      <div className="w-full flex flex-col overflow-scroll flex-shrink-0 gap-7 items-center">
        {isLoading && isFetching ? (
          <Loader />
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
