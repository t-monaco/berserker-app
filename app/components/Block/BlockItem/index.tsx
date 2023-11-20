'use client';

import { drukFont, messinaFont } from '@/app/fonts/fonts';
import * as Styled from './BlockItem.styled';
import { useState } from 'react';

export type BlockItemProps = {
  title: string;
  duration: string;
  category: string;
  description: string;
};

// TODO : move to utils
const contentOverflow = (text: string) => {
  const MAX_LINES = 3;
  return text.split('\n').length > MAX_LINES;
};

const BlockItem: React.FC<BlockItemProps> = ({
  title,
  duration,
  category,
  description,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Styled.BlockItemWrapper
        onClick={showModal}
        className={contentOverflow(description) ? 'overflow' : ''}
      >
        <Styled.BlockHeader>
          <h2 className="title">{title.toUpperCase()}</h2>
          <h3 className="duration">{duration.toUpperCase()}</h3>
        </Styled.BlockHeader>
        <Styled.BlockDescription className={messinaFont.className}>
          {description}
        </Styled.BlockDescription>
        <Styled.BlockCategory>{category.toUpperCase()}</Styled.BlockCategory>
        <Styled.ExpandIcon />
      </Styled.BlockItemWrapper>

      {/* //TODO: Move modal to different folder */}
      <Styled.BlockModal
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        closeIcon={null}
        className={drukFont.className}
      >
        <Styled.BlockHeader>
          <h2 className="title">{title.toUpperCase()}</h2>
          <h3 className="duration">{duration.toUpperCase()}</h3>
        </Styled.BlockHeader>
        <Styled.BlockDescription className={messinaFont.className}>
          {description}
        </Styled.BlockDescription>
        <Styled.BlockCategory>{category.toUpperCase()}</Styled.BlockCategory>
      </Styled.BlockModal>
    </>
  );
};

export default BlockItem;