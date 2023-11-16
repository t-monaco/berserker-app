import BlockItem from './BlockItem';
import * as Styled from './Block.styled';

const data = {
  date: '',
  program: '',
  workouts: [
    {
      id: 1,
      title: 'CORE',
      duration: 'TABATA 30"ON 15"OFF',
      category: 'structure',
      description: 'Weighted Planks (80/50)',
    },
    {
      id: 2,
      title: 'upper body',
      duration: 'to finish',
      category: 'structure',
      description:
        'Front Flies\nLateral Flies\nFront Flies\nLateral Flies\nFront Flies\nLateral Flies\nFront Flies\nLateral Flies\nFront Flies\nLateral Flies\nFront Flies\nLateral Flies\nFront Flies\nLateral Flies\nFront Flies\nLateral Flies',
    },
    {
      id: 3,
      title: 'strictify',
      duration: "FOR time - TC 14'",
      category: 'metcon',
      description:
        '10 rounds:\n- 3 Strict MU\n- 5 Strict HSPU\n- 8 KBx2 Snatch (24/26)',
    },
    {
      id: 3,
      title: 'SABADO AHI AHI',
      duration: 'TO FINISH',
      category: 'strength',
      description: 'After\nAfter del after\nAfter del after del after',
    },
  ],
};

type BlockWrapperProps = object;

const BlockWrapper: React.FC<BlockWrapperProps> = () => {
  return (
    <Styled.BlockWrapper>
      {data.workouts.map((workoutData, idx) => (
        <BlockItem key={idx} {...workoutData} />
      ))}
    </Styled.BlockWrapper>
  );
};

export default BlockWrapper;
