import { PulseLoader } from 'react-spinners';

type LoadingProps = object;

const Loading: React.FC<LoadingProps> = () => {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="flex flex-col items-center">
        <h1>Loading</h1>
        <PulseLoader color="#fff" speedMultiplier={0.7} />
      </div>
    </div>
  );
};

export default Loading;
