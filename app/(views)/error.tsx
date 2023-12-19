'use client';

import BasicBtn from '@/app/components/Form/BasicBtn';

type ErrorProps = { reset: () => void };

const Error: React.FC<ErrorProps> = ({ reset }) => {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2>Something went wrong!</h2>
      <BasicBtn
        type="button"
        bgColor="var(--primary-color)"
        fontColor="var(--secondary-font-color)"
        onClick={() => reset()}
      >
        Try again
      </BasicBtn>
    </div>
  );
};

export default Error;
