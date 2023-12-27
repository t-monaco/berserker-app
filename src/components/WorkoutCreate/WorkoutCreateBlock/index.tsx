import BasicInput from '@/src/components/Form/BasicInput';
import BasicSelect from '@/src/components/Form/BasicSelect';
import BasicTextArea from '@/src/components/Form/BasicTextArea';
import { CreateWorkoutForm, SelectOption } from '@/src/types/types';
import {
  Control,
  FieldErrors,
  UseFieldArrayRemove,
  UseFormRegister,
} from 'react-hook-form';
import * as Styled from './WorkoutCreateBlock.styled';

type WorkoutCreateBlockProps = {
  id: number;
  removeAction: UseFieldArrayRemove;
  register: UseFormRegister<CreateWorkoutForm>;
  control: Control<CreateWorkoutForm, any>;
  categories: SelectOption[];
  errors?: FieldErrors<CreateWorkoutForm>;
};

const WorkoutCreateBlock: React.FC<WorkoutCreateBlockProps> = ({
  id,
  removeAction,
  register,
  control,
  categories,
  errors,
}) => {
  return (
    <Styled.WorkoutCreateBlockWrapper>
      <Styled.DeleteBlockWrapper>
        <button type="button" onClick={() => removeAction(id)}>
          REMOVE BLOCK
        </button>
      </Styled.DeleteBlockWrapper>
      <BasicInput
        name={`blocks.${id}.title`}
        label="WORKOUT TITLE"
        register={register}
        error={errors?.['blocks']?.[id]?.['title']?.message}
      />
      <BasicInput
        name={`blocks.${id}.duration`}
        label="WORKOUT DURATION"
        register={register}
        error={errors?.['blocks']?.[id]?.['duration']?.message}
      />
      <BasicSelect
        name={`blocks.${id}.category`}
        label="SELECT CATEGORY"
        options={categories}
        control={control}
        error={errors?.['blocks']?.[id]?.['category']?.message}
      />
      <BasicTextArea
        register={register}
        name={`blocks.${id}.description`}
        label="WORKOUT DESCRIPTION"
        error={errors?.['blocks']?.[id]?.['description']?.message}
      />
    </Styled.WorkoutCreateBlockWrapper>
  );
};

export default WorkoutCreateBlock;
