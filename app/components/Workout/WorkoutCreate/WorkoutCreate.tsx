import BasicInput from '../../Form/BasicInput/BasicInput';
import BasicSelect from '../../Form/BasicSelect/BasicSelect';
import BasicTextArea from '../../Form/BasicTextArea/BasicTextArea';
import DatePicker from '../../Form/DatePicker/DatePicker';
import SubmitBtn from '../../Form/SubmitBtn/SubmitBtn';

type WorkoutCreateProps = object;

const WorkoutCreate: React.FC<WorkoutCreateProps> = () => {
  return (
    <div>
      <BasicInput name="title" label="WORKOUT TITLE" />
      <BasicSelect name="program" label="SELECT PROGRAM" />
      <DatePicker name="date" label="SELECT DATE" />
      <BasicTextArea name="description" label="WORKOUT DESCRIPTION" />
      <SubmitBtn text="SAVE WORKOUT" />
      <SubmitBtn priority="secondary" text="COPY WORKOUT" />
    </div>
  );
};

export default WorkoutCreate;
