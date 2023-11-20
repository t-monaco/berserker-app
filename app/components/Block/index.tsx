import BlockItem, { BlockItemProps } from './BlockItem';
import * as Styled from './Block.styled';

type BlockWrapperProps = {
  blocks: BlockItemProps[];
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
        blocks.map((workoutData, idx) => (
          <BlockItem key={idx} {...workoutData} />
        ))
      ) : (
        <EmptyBlocks />
      )}
    </Styled.BlockWrapper>
  );
};

export default BlockWrapper;
