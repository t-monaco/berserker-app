'use client';

import { drukFont, messinaFont } from '@/app/fonts/fonts';
import * as Styled from './WorkoutBlock.styled';
import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

type WorkoutBlockProps = {
  id: number;
  title: string;
  type: string;
  category: string;
  description: string;
};

// TODO : move to utils
const contentOverflow = (text: string) => {
  const MAX_LINES = 3;
  return text.split('\n').length > MAX_LINES;
};

const WorkoutBlock: React.FC<WorkoutBlockProps> = ({
  title,
  type,
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
      <Styled.WorkoutBlock
        onClick={showModal}
        className={contentOverflow(description) ? 'overflow' : ''}
      >
        <Styled.WorkoutHeader>
          <h2 className="title">{title.toUpperCase()}</h2>
          <h3 className="type">{type.toUpperCase()}</h3>
        </Styled.WorkoutHeader>
        <Styled.WorkoutDescription className={messinaFont.className}>
          {description}
        </Styled.WorkoutDescription>
        <Styled.WorkoutCategory>
          {category.toUpperCase()}
        </Styled.WorkoutCategory>
        <Styled.ExpandIcon />
      </Styled.WorkoutBlock>
      <Styled.WorkoutModal
        open={isModalOpen}
        footer={null}
        onCancel={handleCancel}
        closeIcon={null}
        className={drukFont.className}
      >
        <Styled.WorkoutHeader>
          <h2 className="title">{title.toUpperCase()}</h2>
          <h3 className="type">{type.toUpperCase()}</h3>
        </Styled.WorkoutHeader>
        <Styled.WorkoutDescription className={messinaFont.className}>
          {description}
        </Styled.WorkoutDescription>
        <Styled.WorkoutCategory>
          {category.toUpperCase()}
        </Styled.WorkoutCategory>
      </Styled.WorkoutModal>
    </>
  );
};

export default WorkoutBlock;
