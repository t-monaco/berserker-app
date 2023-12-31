'use client';

import { messinaFont } from '@/src/fonts/fonts';
import { contentOverflow } from '@/src/utils/utils';
import { Block } from '@/xata/xata';
import Markdown from 'react-markdown';
import * as Styled from './BlockItem.styled';

type BlockItemProps = {
  completed: boolean;
  onClick: (block: Block) => void;
  blockData: Block;
};

const BlockItem: React.FC<BlockItemProps> = ({
  blockData,
  onClick,
  completed,
}) => {
  return (
    <>
      <Styled.BlockItemWrapper
        onClick={() => onClick(blockData)}
        className={
          completed
            ? 'completed'
            : contentOverflow(blockData.description, 3)
              ? 'overflow'
              : ''
        }
      >
        <Styled.BlockHeader>
          <h2 className="title">{blockData.title}</h2>
          <h3 className="duration">{blockData.duration}</h3>
        </Styled.BlockHeader>
        <Styled.BlockDescription className={messinaFont.className}>
          <Markdown>{blockData.description}</Markdown>
        </Styled.BlockDescription>
        <Styled.BlockCategory>
          {blockData.category!.name.toUpperCase()}
        </Styled.BlockCategory>
        <Styled.ExpandIcon />
      </Styled.BlockItemWrapper>
    </>
  );
};

export default BlockItem;
