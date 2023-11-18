import { BasicInput, BasicSelect, BasicTextArea } from '@/app/components';
import { Control, UseFormRegister } from 'react-hook-form';
import { IFormInput } from '..';
import * as Styled from './WorkoutCreateBlock.styled';
import prisma from '@/lib/prisma';
import { SelectOption } from '../../Form/BasicSelect';

type WorkoutCreateBlockProps = {
  id: number;
  removeAction: (id: number) => void;
  register: UseFormRegister<IFormInput>;
  control: Control<IFormInput, any>;
  categories: SelectOption[];
};

const categoriesOpt = [
  { value: 'structure', label: 'STRUCTURE' },
  { value: 'strength', label: 'STRENGTH' },
  { value: 'metcon', label: 'METCON' },
];

const WorkoutCreateBlock: React.FC<WorkoutCreateBlockProps> = ({
  id,
  removeAction,
  register,
  control,
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
        id={id}
      />
      <BasicInput
        name={`blocks.${id}.duration`}
        label="WORKOUT DURATION"
        register={register}
        id={id}
      />
      <BasicSelect
        name={`blocks.${id}.category`}
        label="SELECT CATEGORY"
        options={categoriesOpt}
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
