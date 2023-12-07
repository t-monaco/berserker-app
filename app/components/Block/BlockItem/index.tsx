'use client';

import { drukFont, messinaFont } from '@/app/fonts/fonts';
import * as Styled from './BlockItem.styled';
import { useState } from 'react';
import Markdown from 'react-markdown';
import {
  contentOverflow,
  disableScroll,
  enableScroll,
} from '@/app/utils/utils';
import { BlockReturnType } from '@/types/types';

const BlockItem: React.FC<BlockReturnType> = ({
  title,
  duration,
  category,
  description,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    disableScroll();
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    enableScroll();
    setIsModalOpen(false);
  };

  return (
    <>
      <Styled.BlockItemWrapper
        onClick={showModal}
        className={contentOverflow(description, 3) ? 'overflow' : ''}
      >
        <Styled.BlockHeader>
          <h2 className="title">{title}</h2>
          <h3 className="duration">{duration}</h3>
        </Styled.BlockHeader>
        <Styled.BlockDescription className={messinaFont.className}>
          <Markdown>{description}</Markdown>
        </Styled.BlockDescription>
        <Styled.BlockCategory>
          {category.name.toUpperCase()}
        </Styled.BlockCategory>
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
          <h2 className="title">{title}</h2>
          <h3 className="duration">{duration}</h3>
        </Styled.BlockHeader>
        <Styled.BlockDescription className={messinaFont.className}>
          <Markdown>{description}</Markdown>
        </Styled.BlockDescription>
        <Styled.BlockCategory>
          {category.name.toUpperCase()}
        </Styled.BlockCategory>
      </Styled.BlockModal>
    </>
  );
};

export default BlockItem;
