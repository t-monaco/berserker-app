import BasicInput from '@/app/components/Form/BasicInput/BasicInput';
import BasicSelect from '@/app/components/Form/BasicSelect/BasicSelect';
import BasicTextArea from '@/app/components/Form/BasicTextArea/BasicTextArea';
import { Control, UseFormRegister } from 'react-hook-form';
import { IFormInput } from '../WorkoutCreate';
import * as Styled from './WorkoutCreateBlock.styled';

type WorkoutCreateBlockProps = {
  id: number;
  removeAction: (id: number) => void;
  register: UseFormRegister<IFormInput>;
  control: Control<IFormInput, any>;
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
        name={`workouts.${id}.title`}
        label="WORKOUT TITLE"
        register={register}
        id={id}
      />
      <BasicInput
        name={`workouts.${id}.type`}
        label="WORKOUT TYPE"
        register={register}
        id={id}
      />
      <BasicSelect
        name={`workouts.${id}.category`}
        label="SELECT CATEGORY"
        options={categoriesOpt}
        control={control}
      />
      <BasicTextArea
        register={register}
        name={`workouts.${id}.description`}
        label="WORKOUT DESCRIPTION"
      />
    </Styled.WorkoutCreateBlockWrapper>
  );
};

export default WorkoutCreateBlock;
