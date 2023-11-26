import { UseFormSetValue } from 'react-hook-form';
import toast, { Toast } from 'react-hot-toast';
import { IFormInput } from '.';

type NoDataToastProps = {
  t: Toast;
  setValue: UseFormSetValue<IFormInput>;
};

const NoDataToast: React.FC<NoDataToastProps> = ({ setValue, t }) => {
  return (
    <div className="flex flex-col gap-3">
      No data for selected date/program.
      <br />
      Clear form?
      <div className="flex justify-around gap-4">
        <button
          className="border-2 border-solid border-black rounded-md py-2 w-full"
          type="button"
          onClick={() => {
            toast.dismiss(t.id);
          }}
        >
          NO
        </button>
        <button
          className="border-2 border-solid border-black rounded-md py-2 w-full"
          type="button"
          onClick={() => {
            setValue('blocks', []);
            toast.dismiss(t.id);
          }}
        >
          YES
        </button>
      </div>
    </div>
  );
};

export default NoDataToast;
