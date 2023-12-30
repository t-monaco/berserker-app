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

  const [completedBlocks, setCompletedBlock] = useState<string[]>([]);

  const handleDoneClick = (blockId?: string) => {
    // TODO: temporary if, just wanted to test the workflow
    if (!blockId) return;
    if (completedBlocks.includes(blockId)) {
      setCompletedBlock(completedBlocks.filter((id) => id !== blockId));
      handleCancel();
    } else {
      setCompletedBlock([...completedBlocks, blockId]);
      handleCancel();
    }
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
              completed={completedBlocks.includes(block.id) ? true : false}
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
        handleComplete={handleDoneClick}
        completed={
          selectedBlock && completedBlocks.includes(selectedBlock.id)
            ? true
            : false
        }
      />
    </>
  );
};

export default BlockWrapper;
