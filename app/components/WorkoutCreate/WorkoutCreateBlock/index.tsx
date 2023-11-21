import { BasicInput, BasicSelect, BasicTextArea } from '@/app/components';
import { Control, UseFormRegister } from 'react-hook-form';
import { IFormInput } from '..';
import * as Styled from './WorkoutCreateBlock.styled';
import { SelectOption } from '../../Form/BasicSelect';

type WorkoutCreateBlockProps = {
  id: number;
  removeAction: (id: number) => void;
  register: UseFormRegister<IFormInput>;
  control: Control<IFormInput, any>;
  categories: SelectOption[];
};

const WorkoutCreateBlock: React.FC<WorkoutCreateBlockProps> = ({
  id,
  removeAction,
  register,
  control,
  categories,
}) => {
  return (
    <Styled.WorkoutCreateBlockWrapper>
      <Styled.DeleteBlockWrapper>
        <button onClick={() => removeAction(id)}>REMOVE BLOCK</button>
      </Styled.DeleteBlockWrapper>
      <BasicInput
        name={`blocks.${id}.title`}
        label="WORKOUT TITLE"
        register={register}
      />
      <BasicInput
        name={`blocks.${id}.duration`}
        label="WORKOUT DURATION"
        register={register}
      />
      <BasicSelect
        name={`blocks.${id}.category`}
        label="SELECT CATEGORY"
        options={categories}
        control={control}
      />
      <BasicTextArea
        register={register}
        name={`blocks.${id}.description`}
        label="WORKOUT DESCRIPTION"
      />
    </Styled.WorkoutCreateBlockWrapper>
  );
};

export default WorkoutCreateBlock;
