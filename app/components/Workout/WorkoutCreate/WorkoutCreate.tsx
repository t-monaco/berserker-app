import BasicInput from '../../Form/BasicInput/BasicInput';
import BasicSelect from '../../Form/BasicSelect/BasicSelect';
import BasicTextArea from '../../Form/BasicTextArea/BasicTextArea';
import DatePicker from '../../Form/DatePicker/DatePicker';

type WorkoutCreateProps = object;

const WorkoutCreate: React.FC<WorkoutCreateProps> = () => {
  return (
    <div>
      <BasicInput name="title" label="WORKOUT TITLE" />
      <BasicSelect name="program" label="SELECT PROGRAM" />
      <DatePicker name="date" label="SELECT DATE" />
      <BasicTextArea name="description" label="WORKOUT DESCRIPTION" />
    </div>
  );
};

export default WorkoutCreate;
