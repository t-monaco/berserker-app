import Calendar from './components/Calendar/Calendar';
import ProgramSelector from './components/ProgramSelector/ProgramSeletor';
import WorkoutWrapper from './components/Workout/WorkoutWrapper/WorkoutWrapper';

export default function Home() {
  return (
    <main className="flex flex-col gap-6 flex-1">
      <Calendar />
      <ProgramSelector />
      <WorkoutWrapper />
    </main>
  );
}
