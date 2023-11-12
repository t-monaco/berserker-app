import BasicSelect from '../../Form/BasicSelect/BasicSelect';
import DatePicker from '../../Form/DatePicker/DatePicker';
import SubmitBtn from '../../Form/SubmitBtn/SubmitBtn';
import * as Styled from './WorkoutCreate.styled';
import WorkoutCreateBlock from './WorkoutCreateBlock/WorkoutCreateBlock';

type WorkoutCreateProps = object;

const WorkoutCreate: React.FC<WorkoutCreateProps> = () => {
  return (
    <Styled.WorkoutCreateWrapper>
      <DatePicker name="date" label="SELECT DATE" />
      <BasicSelect name="program" label="SELECT PROGRAM" />
      <span className='divider'/>
      <WorkoutCreateBlock />
      <SubmitBtn priority="secondary" text="ADD BLOCK" />
      <SubmitBtn text="SAVE WORKOUT" />
    </Styled.WorkoutCreateWrapper>
  );
};

export default WorkoutCreate;
