import WorkoutCreate from '@/app/components/Workout/WorkoutCreate/WorkoutCreate';

export default function Admin() {
  return (
    <main className="flex flex-col gap-6 flex-1 justify-center items-center overflow-y-visible">
      <div className="flex flex-col gap-[5rem]">
        <h1 className="text-center text-[20px]">CREATE WORKOUT</h1>
        <WorkoutCreate />
      </div>
    </main>
  );
}
