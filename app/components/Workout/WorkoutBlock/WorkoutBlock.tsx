import { messinaFont } from '@/app/fonts/fonts';
import * as Styled from './WorkoutBlock.styled';

type WorkoutBlockProps = {
  id: number;
  title: string;
  type: string;
  category: string;
  description: string;
};

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
  return (
    <Styled.WorkoutBlock
      className={contentOverflow(description) ? 'overflow' : ''}
    >
      <Styled.WorkoutHeader>
        <h2 className="title">{title.toUpperCase()}</h2>
        <h3 className="type">{type.toUpperCase()}</h3>
      </Styled.WorkoutHeader>
      <Styled.WorkoutDescription className={messinaFont.className}>
        {description}
      </Styled.WorkoutDescription>
      <Styled.WorkoutCategory>{category.toUpperCase()}</Styled.WorkoutCategory>
    </Styled.WorkoutBlock>
  );
};

export default WorkoutBlock;
