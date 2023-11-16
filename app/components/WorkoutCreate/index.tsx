'use client';
import { BasicBtn, BasicSelect, DatePicker } from '@/app/components';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { SelectOption } from '../Form/BasicSelect';
import * as Styled from './WorkoutCreate.styled';
import WorkoutCreateBlock from './WorkoutCreateBlock';

type WorkoutCreateProps = {
  programs: SelectOption[];
  categories: SelectOption[];
};

type WorkoutBlock = {
  title: string;
  duration: string;
  category: string;
  description: string;
};

export interface IFormInput {
  date: number;
  programId: string;
  workouts: WorkoutBlock[];
}

const WorkoutCreate: React.FC<WorkoutCreateProps> = ({
  categories,
  programs,
}) => {
  const { register, control, handleSubmit, watch } = useForm<IFormInput>({
    defaultValues: {
      date: 0,
      programId: '',
      workouts: [{ title: '', duration: '', category: '', description: '' }],
    },
  });
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

  const removeBlock = (blockIdx: number) => {
    remove(blockIdx);
  };

  const onSubmit: SubmitHandler<IFormInput> = (data) => console.log(data);

  return (
    <Styled.WorkoutCreateWrapper
      onSubmit={handleSubmit(onSubmit)}
      autoComplete="off"
    >
      <div className="w-full flex flex-col flex-shrink-0 gap-7">
        <DatePicker name="date" label="SELECT DATE" control={control} />
        <BasicSelect
          name="programId"
          label="SELECT PROGRAM"
          options={programs}
          control={control}
        />
      </div>
      <span className="divider" />
      <div className="w-full flex flex-col overflow-scroll flex-shrink-0 gap-7">
        {controlledFields.map((field, index) => {
          return (
            <WorkoutCreateBlock
              register={register}
              control={control}
              key={index}
              id={index}
              removeAction={removeBlock}
              categories={categories}
            />
          );
        })}

        <BasicBtn
          priority="secondary"
          onClick={() =>
            append({
              title: '',
              duration: '',
              category: '',
              description: '',
            })
          }
        >
          ADD BLOCK
        </BasicBtn>
      </div>
      <BasicBtn type="submit">SAVE WORKOUT</BasicBtn>
    </Styled.WorkoutCreateWrapper>
  );
};

export default WorkoutCreate;
