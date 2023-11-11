type WorkoutWrapperProps = object;
import WorkoutBlock from '../WorkoutBlock/WorkoutBlock';
import * as Styled from './WorkoutWrapper.styled';

const data = {
  date: '',
  program: '',
  workouts: [
    {
      id: 1,
      title: 'CORE',
      type: 'TABATA 30"ON 15"OFF',
      category: 'structure',
      description: 'Weighted Planks (80/50)',
    },
    {
      id: 2,
      title: 'upper body',
      type: 'to finish',
      category: 'structure',
      description:
        'Front Flies\nLateral Flies\nFront Flies\nLateral Flies\nFront Flies\nLateral Flies\nFront Flies\nLateral Flies\nFront Flies\nLateral Flies\nFront Flies\nLateral Flies\nFront Flies\nLateral Flies\nFront Flies\nLateral Flies',
    },
    {
      id: 2,
      title: 'upper body',
      type: 'to finish',
      category: 'structure',
      description: 'Front Flies\nLateral Flies',
    },
  ],
};
const WorkoutWrapper: React.FC<WorkoutWrapperProps> = () => {
  return (
    <Styled.WorkoutWrapper>
      {data.workouts.map((workoutData, idx) => (
        <WorkoutBlock key={idx} {...workoutData} />
      ))}
    </Styled.WorkoutWrapper>
  );
};

export default WorkoutWrapper;
