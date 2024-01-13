'use client';

import Loader from '@/src/components/Loader';

type LoadingProps = object;

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="w-full h-full grid place-items-center	">
      <div className="flex flex-col items-center">
        <h1>Loading</h1>
        <Loader />
      </div>
    </div>
  );
};

export default Loading;
