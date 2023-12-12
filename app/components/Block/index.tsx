import { sortBlockByCategory } from '@/app/utils/utils';
import * as Styled from './Block.styled';
import BlockItem from './BlockItem';
import { Prisma } from '@prisma/client';
import { getBlocks } from '@/actions/getBlocks';

type BlockWrapperProps = {
  blocks: Prisma.PromiseReturnType<typeof getBlocks>;
};

const EmptyBlocks = () => {
  return <h1 className="text-center">REST DAY, BITCH.</h1>;
};

const BlockWrapper: React.FC<BlockWrapperProps> = ({ blocks }) => {
  return (
    <Styled.BlockWrapper>
      {blocks?.length ? (
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
