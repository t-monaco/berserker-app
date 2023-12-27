import { sortBlockByCategory } from '@/src/utils/utils';
import { Block } from '@/xata/xata';
import { useState } from 'react';
import * as Styled from './Block.styled';
import BlockItem from './BlockItem';
import BlockModal from './BlockModal';

type BlockWrapperProps = {
  blocks: Block[];
};

const EmptyBlocks = () => {
  return <h1 className="text-center">REST DAY, BITCH.</h1>;
};

const BlockWrapper: React.FC<BlockWrapperProps> = ({ blocks }) => {
  const [selectedBlock, setSelectedBlock] = useState<Block | null>(null);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const handleBlockClick = (block: Block) => {
    setIsModalOpen(true);
    setSelectedBlock(block);
  };

  return (
    <>
      <Styled.BlockWrapper>
        {blocks?.length ? (
          sortBlockByCategory(blocks).map((block) => (
            <BlockItem
              key={block.id}
              onClick={handleBlockClick}
              blockData={block}
            />
          ))
        ) : (
          <EmptyBlocks />
        )}
      </Styled.BlockWrapper>
      <BlockModal
        open={isModalOpen}
        onCancel={handleCancel}
        selectedBlock={selectedBlock}
      />
    </>
  );
};

export default BlockWrapper;
