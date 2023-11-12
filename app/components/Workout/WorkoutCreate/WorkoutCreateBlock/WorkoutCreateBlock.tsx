import BasicInput from '@/app/components/Form/BasicInput/BasicInput';
import * as Styled from './WorkoutCreateBlock.styled';
import BasicTextArea from '@/app/components/Form/BasicTextArea/BasicTextArea';
import BasicSelect from '@/app/components/Form/BasicSelect/BasicSelect';

type WorkoutCreateBlockProps = object;

const WorkoutCreateBlock: React.FC<WorkoutCreateBlockProps> = () => {
  return (
    <Styled.WorkoutCreateBlockWrapper>
      <BasicInput name="title" label="WORKOUT TITLE" />
      <BasicInput name="type" label="WORKOUT TYPE" />
      <BasicSelect name="category" label="SELECT CATEGORY" />
      <BasicTextArea name="description" label="WORKOUT DESCRIPTION" />
    </Styled.WorkoutCreateBlockWrapper>
  );
};

export default WorkoutCreateBlock;
