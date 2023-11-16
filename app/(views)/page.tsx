import Calendar from '../components/Calendar';
import ProgramSelector from '../components/ProgramSelector';
import BlockWrapper from '../components/Block';

export default function Home() {
  return (
    <main className="flex flex-col gap-6 flex-1">
      <Calendar />
      <ProgramSelector />
      <BlockWrapper />
    </main>
  );
}
