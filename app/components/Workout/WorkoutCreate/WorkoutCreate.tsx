'use client';
import { useState } from 'react';
import BasicSelect from '../../Form/BasicSelect/BasicSelect';
import DatePicker from '../../Form/DatePicker/DatePicker';
import SubmitBtn from '../../Form/SubmitBtn/SubmitBtn';
import * as Styled from './WorkoutCreate.styled';
import WorkoutCreateBlock from './WorkoutCreateBlock/WorkoutCreateBlock';

type WorkoutCreateProps = object;

const WorkoutCreate: React.FC<WorkoutCreateProps> = () => {
  const removeBlock = (id: number) => {
    console.log(blocksList);
    const filterBlocks = blocksList.filter((block) => block.props.id !== id);
    console.log(filterBlocks);
    setBlocksList(filterBlocks);
  };

  const [blocksList, setBlocksList] = useState([
    <WorkoutCreateBlock key={0} id={0} removeAction={removeBlock} />,
  ]);

  const onAddBtnClick = () => {
    setBlocksList(
      blocksList.concat(
        <WorkoutCreateBlock
          key={blocksList.length}
          id={blocksList.length}
          removeAction={removeBlock}
        />,
      ),
    );
  };

  return (
    <Styled.WorkoutCreateWrapper>
      <div className="w-full flex flex-col flex-shrink-0 gap-7">
        <DatePicker name="date" label="SELECT DATE" />
        <BasicSelect name="program" label="SELECT PROGRAM" />
      </div>
      <span className="divider" />
      <div className="w-full flex flex-col overflow-scroll flex-shrink-0 gap-7">
        {blocksList}
        <SubmitBtn
          priority="secondary"
          text="ADD BLOCK"
          onClick={onAddBtnClick}
        />
        <SubmitBtn text="SAVE WORKOUT" />
      </div>
    </Styled.WorkoutCreateWrapper>
  );
};

export default WorkoutCreate;
