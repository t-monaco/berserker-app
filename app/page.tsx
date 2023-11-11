import Calendar from './components/Calendar/Calendar';
import ProgramSelector from './components/ProgramSelector/ProgramSeletor';

export default function Home() {
  return (
    <main className="flex flex-col gap-6">
      <Calendar />
      <ProgramSelector />
    </main>
  );
}
