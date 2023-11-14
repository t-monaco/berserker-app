'use client';
import { useState } from 'react';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import BasicSelect from '../../Form/BasicSelect/BasicSelect';
import DatePicker from '../../Form/DatePicker/DatePicker';
import BasicBtn from '../../Form/SubmitBtn/SubmitBtn';
import * as Styled from './WorkoutCreate.styled';
import WorkoutCreateBlock from './WorkoutCreateBlock/WorkoutCreateBlock';

import { FormDataSchema } from '@/lib/schema';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

type Inputs = z.infer<typeof FormDataSchema>;

const programOpt = [
  { value: 'berserker lp', label: 'BERSERKER LP' },
  { value: 'odin', label: 'ODIN' },
  { value: 'valkyrie', label: 'VALKYRIE' },
  { value: 'fenrir', label: 'FENRIR' },
];

type WorkoutCreateProps = object;

type WorkoutBlock = {
  title: string;
  type: string;
};

export interface IFormInput {
  date: string;
  program: string;
  workouts: WorkoutBlock[];
}

const WorkoutCreate: React.FC<WorkoutCreateProps> = () => {
  const { register, control, handleSubmit, watch } = useForm<IFormInput>();
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'workouts',
  });

  const watchFieldArray = watch('workouts');
  const controlledFields = fields.map((field, index) => {
    return {
      ...field,
      ...watchFieldArray[index],
    };
  });

  const removeBlock = (i: number) => {
    remove(i);
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  type Inputs = z.infer<typeof FormDataSchema>;

  return (
    <Styled.WorkoutCreateWrapper onSubmit={handleSubmit(onSubmit)}>
      {/* <form onSubmit={handleSubmit(processForm)}> */}
      <div className="w-full flex flex-col flex-shrink-0 gap-7">
        <DatePicker name="date" label="SELECT DATE" />
        <BasicSelect
          name="program"
          label="SELECT PROGRAM"
          options={programOpt}
        />
      </div>
      <span className="divider" />
      <div className="w-full flex flex-col overflow-scroll flex-shrink-0 gap-7">
        {controlledFields.map((field, index) => {
          return (
            <WorkoutCreateBlock
              register={register}
              key={index}
              id={index}
              removeAction={removeBlock}
            />
          );
        })}

        <BasicBtn
          priority="secondary"
          onClick={() =>
            append({
              title: '',
              type: '',
            })
          }
        >
          ADD BLOCK
        </BasicBtn>
      </div>
      <BasicBtn type="submit">SAVE WORKOUT</BasicBtn>
      {/* </form> */}
    </Styled.WorkoutCreateWrapper>
  );
};

export default WorkoutCreate;
