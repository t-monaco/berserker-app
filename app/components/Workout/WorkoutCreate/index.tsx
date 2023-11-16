'use client';
import { BasicBtn, BasicSelect, DatePicker } from '@/app/components';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import * as Styled from './WorkoutCreate.styled';
import WorkoutCreateBlock from './WorkoutCreateBlock';

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
  category: string;
  description: string;
};

export interface IFormInput {
  date: string;
  program: string;
  workouts: WorkoutBlock[];
}

const WorkoutCreate: React.FC<WorkoutCreateProps> = () => {
  const { register, control, handleSubmit, watch } = useForm<IFormInput>({
    defaultValues: {
      date: '',
      program: '',
      workouts: [{ title: '', type: '', category: '', description: '' }],
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
    <Styled.WorkoutCreateWrapper onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full flex flex-col flex-shrink-0 gap-7">
        <DatePicker name="date" label="SELECT DATE" control={control} />
        <BasicSelect
          name="program"
          label="SELECT PROGRAM"
          options={programOpt}
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
            />
          );
        })}

        <BasicBtn
          priority="secondary"
          onClick={() =>
            append({
              title: '',
              type: '',
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
