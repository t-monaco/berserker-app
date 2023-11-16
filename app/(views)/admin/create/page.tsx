import WorkoutCreate from '@/app/components/WorkoutCreate';

export default function Admin() {
  return (
    <main className="flex flex-col gap-10 flex-1 justify-center items-center overflow-scroll">
      <h1 className="text-center text-[20px] flex-shrink-0">CREATE WORKOUT</h1>
      <WorkoutCreate />
    </main>
  );
}
