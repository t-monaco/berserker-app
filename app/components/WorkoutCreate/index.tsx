'use client';

import { addWorkout } from '@/actions/addWorkout';
import { BasicBtn, BasicSelect, DatePicker } from '@/app/components';
import { fetcher } from '@/lib/fetcher';
import { CreateWorkoutForm } from '@/types/types';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { FaPlus } from 'react-icons/fa';
import { BeatLoader, PulseLoader } from 'react-spinners';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { SelectOption } from '../Form/BasicSelect';
import * as Styled from './WorkoutCreate.styled';
import WorkoutCreateBlock from './WorkoutCreateBlock';
import { BlockRecord } from '@/xata/xata';

type WorkoutCreateProps = {
  programs: SelectOption[];
  categories: SelectOption[];
};

const WorkoutCreate: React.FC<WorkoutCreateProps> = ({
  categories,
  programs,
}) => {
  const [loadingPOST, setLoadingPOST] = useState(false);

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

  const { data, isLoading } = useSWR<BlockRecord[], boolean>(
    watchedFields[0] && watchedFields[1]
      ? `/api/workout?date=${watchedFields[0]}&program=${watchedFields[1]}`
      : null,
    fetcher,
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
