import Link from 'next/link';
import { AdminBtn } from './Admin.styled';

export default function Admin() {
  return (
    <main className="flex flex-col gap-6 flex-1 justify-center items-center">
      <div className="flex flex-col gap-[5rem]">
        <h1 className="text-center text-[20px]">ADMIN PANEL</h1>
        <div className="flex flex-col gap-[1.3rem] text-[18px]">
          <AdminBtn position="left">
            <Link href="/admin/create">CREATE WORKOUT</Link>
          </AdminBtn>
          <AdminBtn position="right">
            <Link href="/admin/create"> EDIT WORKOUT</Link>
          </AdminBtn>
          <AdminBtn position="left">
            <Link href="/admin/create">COPY FROM WORKOUT</Link>
          </AdminBtn>
        </div>
      </div>
    </main>
  );
}
