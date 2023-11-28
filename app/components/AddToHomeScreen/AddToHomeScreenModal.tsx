import { messinaFont } from '@/app/fonts/fonts';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { FaArrowDownLong, FaRegSquarePlus } from 'react-icons/fa6';
import { MdInstallMobile } from 'react-icons/md';
import { TbShare2 } from 'react-icons/tb';
import * as Styled from './AddToHomeScreenModal.styled';

type AddToHomeScreenModalProps = {
  closePrompt: () => void;
  doNotShowAgain: () => void;
  isOpen: boolean;
  isIOS: boolean | null;
};

const AddToHomeScreenModal: React.FC<AddToHomeScreenModalProps> = ({
  closePrompt,
  doNotShowAgain,
  isOpen,
  isIOS,
}) => {
  return (
    <Styled.ModalWrapper
      open={isOpen}
      onCancel={closePrompt}
      centered
      footer={null}
      className={messinaFont.className}
      maskClosable={false}
    >
      <p className="text-xl">
        For the best experience, we recommend installing the Berserker Program
        app to your home screen!
      </p>
      <div className="flex flex-col w-full items-start gap-2 text-lg">
        <div className="flex gap-2 items-end">
          <p>1. Look for the</p>
          {!isIOS ? (
            <BsThreeDotsVertical className="text-4xl share pb-1" />
          ) : (
            <TbShare2 className="text-4xl share pb-1" />
          )}
          <p>icon.</p>
        </div>
        <p className="text-left">2. Click it.</p>
        <div className="flex flex-col gap-2 items-start w-full">
          <p className="text-left">
            3. Scroll down and look for the following button :
          </p>
          {!isIOS ? (
            <div className="bg-zinc-700 flex justify-start items-center w-full gap-4 px-4 py-2 rounded-lg">
              <MdInstallMobile className="text-2xl add" />
              <p>Install application</p>
            </div>
          ) : (
            <div className="bg-zinc-700 flex justify-between items-center w-full px-4 py-2 rounded-lg">
              <p>Add to Home Screen</p>
              <FaRegSquarePlus className="text-2xl add" />
            </div>
          )}
        </div>
        <p className="text-left">4. Click it.</p>
      </div>
      <button className="text-lg" onClick={doNotShowAgain}>
        Don&apos;t show again
      </button>
    </Styled.ModalWrapper>
  );
};

export default AddToHomeScreenModal;
