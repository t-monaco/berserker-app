'use client';
import { BasicBtn, BasicSelect, DatePicker } from '@/app/components';
import { SubmitHandler, useFieldArray, useForm } from 'react-hook-form';
import { SelectOption } from '../Form/BasicSelect';
import * as Styled from './WorkoutCreate.styled';
import WorkoutCreateBlock from './WorkoutCreateBlock';
import { addWorkout } from '@/actions/addWorkout';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

type WorkoutCreateProps = {
  programs: SelectOption[];
  categories: SelectOption[];
};

type Block = {
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
  const { register, control, handleSubmit, watch, reset } = useForm<IFormInput>(
    {
      defaultValues: {
        date: 0,
        programId: '',
        blocks: [{ title: '', duration: '', category: '', description: '' }],
      },
    },
  );
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

  const removeBlock = (blockIdx: number) => {
    remove(blockIdx);
  };

  const processForm: SubmitHandler<IFormInput> = async (data) => {
    const result = await addWorkout(data);

    if (result.success) {
      toast.success(result.message as string);
      reset();
      // redirect from next not working inside trycatch of server actions.
      router.push('/admin');
    } else {
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
          type="button"
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
