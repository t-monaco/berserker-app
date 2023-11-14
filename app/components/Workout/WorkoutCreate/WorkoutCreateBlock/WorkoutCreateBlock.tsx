import BasicInput from '@/app/components/Form/BasicInput/BasicInput';
import * as Styled from './WorkoutCreateBlock.styled';
import BasicTextArea from '@/app/components/Form/BasicTextArea/BasicTextArea';
import BasicSelect from '@/app/components/Form/BasicSelect/BasicSelect';
import { UseFormRegister } from 'react-hook-form';
import { IFormInput } from '../WorkoutCreate';

type WorkoutCreateBlockProps = {
  id: number;
  removeAction: (id: number) => void;
  register: UseFormRegister<IFormInput>;
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
}) => {
  return (
    <Styled.WorkoutCreateBlockWrapper>
      <Styled.DeleteBlockWrapper>
        <button onClick={() => removeAction(id)}>REMOVE BLOCK</button>
      </Styled.DeleteBlockWrapper>
      <BasicInput
        name="title"
        label="WORKOUT TITLE"
        register={register}
        id={id}
      />
      <BasicInput
        name="type"
        label="WORKOUT TYPE"
        register={register}
        id={id}
      />
      <BasicSelect
        name="category"
        label="SELECT CATEGORY"
        options={categoriesOpt}
      />
      <BasicTextArea name="description" label="WORKOUT DESCRIPTION" />
    </Styled.WorkoutCreateBlockWrapper>
  );
};

export default WorkoutCreateBlock;
