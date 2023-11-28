import { FaArrowDownLong, FaRegSquarePlus } from 'react-icons/fa6';
import { TbShare2 } from 'react-icons/tb';
import { messinaFont } from '@/app/fonts/fonts';
import * as Styled from './AddToHomeScreenModal.styled';

type AddToHomeScreenModalProps = {
  closePrompt: () => void;
  doNotShowAgain: () => void;
  isOpen: boolean;
};

const AddToHomeScreenModal: React.FC<AddToHomeScreenModalProps> = ({
  closePrompt,
  doNotShowAgain,
  isOpen,
}) => {
  return (
    <Styled.ModalWrapper
      open={isOpen}
      onCancel={closePrompt}
      centered
      footer={null}
      className={messinaFont.className}
    >
      <p className="">
        For the best experience, we recommend installing the Berserker Program
        app to your home screen!
      </p>
      <div className="flex flex-col w-full items-center gap-2">
        <div className="flex gap-2 items-end">
          <p>Click the</p>
          <TbShare2 className="text-4xl share" />
          <p>icon</p>
        </div>
        <FaArrowDownLong className="text-2xl" />
        <div className="flex flex-col gap-2 items-center text-lg w-full">
          <p>Scroll down and then click:</p>
          <div className="bg-zinc-800 flex justify-between items-center w-full px-4 py-2 rounded-lg">
            <p>Add to Home Screen</p>
            <FaRegSquarePlus className="text-2xl add" />
          </div>
        </div>
      </div>
      <button className="" onClick={doNotShowAgain}>
        Don&apos;t show again
      </button>
    </Styled.ModalWrapper>
  );
};

export default AddToHomeScreenModal;
