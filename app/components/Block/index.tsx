import BlockItem, { BlockItemProps } from './BlockItem';
import * as Styled from './Block.styled';
import { sortBlockByCategory } from '@/app/utils/utils';

type BlockWrapperProps = {
  blocks: {
    title: string;
    duration: string;
    category: string;
    description: string;
  }[];
};

const EmptyBlocks = () => {
  return (
    <h1 className="text-center">
      There are no workouts for Today.
      <br />
      Enjoy your day.
    </h1>
  );
};

const BlockWrapper: React.FC<BlockWrapperProps> = ({ blocks }) => {
  return (
    <Styled.BlockWrapper>
      {blocks.length ? (
        sortBlockByCategory(blocks).map((workoutData, idx) => (
          <BlockItem key={idx} {...workoutData} />
        ))
      ) : (
        <EmptyBlocks />
      )}
    </Styled.BlockWrapper>
  );
};

export default BlockWrapper;
