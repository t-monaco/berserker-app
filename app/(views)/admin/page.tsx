'use client';

import Link from 'next/link';
import { BasicHero } from '@/app/components/Generics/Generics.styled';

export default function Admin() {
  return (
    <main className="flex flex-col gap-6 flex-1 justify-center items-center">
      <div className="flex flex-col gap-[5rem]">
        <h1 className="text-center text-[20px]">ADMIN PANEL</h1>
        <div className="flex flex-col gap-[1.3rem] text-[18px]">
          <BasicHero position="left">
            <Link href="/admin/create">CREATE WORKOUT</Link>
          </BasicHero>
          <BasicHero position="right">
            <Link href="/admin/create"> EDIT WORKOUT</Link>
          </BasicHero>
          <BasicHero position="left">
            <Link href="/admin/create">COPY FROM WORKOUT</Link>
          </BasicHero>
        </div>
      </div>
    </main>
  );
}
