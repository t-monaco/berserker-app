import { drukFont, messinaFont } from '@/src/fonts/fonts';
import { Block } from '@/xata/xata';
import { ModalProps } from 'antd';
import Markdown from 'react-markdown';
import * as Styled from './BlockModal.styled';

type BlockModalProps = ModalProps & {
  selectedBlock: Block | null;
  handleComplete: (blockId?: string) => void;
  completed: boolean;
};

const BlockModal: React.FC<BlockModalProps> = ({
  open,
  onCancel,
  selectedBlock,
  handleComplete,
  completed,
}) => {
  return (
    <Styled.BlockModal
      open={open}
      footer={null}
      onCancel={onCancel}
      closeIcon={null}
      className={drukFont.className}
    >
      <Styled.BlockHeader>
        <h2 className="title">{selectedBlock?.title}</h2>
        <h3 className="duration">{selectedBlock?.duration}</h3>
      </Styled.BlockHeader>
      <Styled.BlockDescription className={messinaFont.className}>
        <Markdown>{selectedBlock?.description}</Markdown>
      </Styled.BlockDescription>
      <Styled.BlockCategory>
        {selectedBlock?.category?.name.toUpperCase()}
      </Styled.BlockCategory>
      <Styled.DoneIcon
        className={completed ? 'completed' : ''}
        onClick={() => handleComplete(selectedBlock?.id)}
      />
    </Styled.BlockModal>
  );
};

export default BlockModal;
