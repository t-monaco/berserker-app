import { AdminBtn } from './Admin.styled';

export default function Admin() {
  return (
    <main className="flex flex-col gap-6 flex-1 justify-center items-center">
      <div className="flex flex-col gap-[5rem]">
        <h1 className="text-center text-[20px]">ADMIN PANEL</h1>
        <div className="flex flex-col gap-[1.3rem] text-[18px]">
          <AdminBtn position="left">CREATE WORKOUT</AdminBtn>
          <AdminBtn position="right">EDIT WORKOUT</AdminBtn>
          <AdminBtn position="left">COPY FROM WORKOUT</AdminBtn>
        </div>
      </div>
    </main>
  );
}
