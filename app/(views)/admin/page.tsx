'use client';

import { BasicHero } from '@/app/components/Generics/Generics.styled';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';
import { redirect } from 'next/navigation';

export default function Admin() {
  //This should be fixed by clerk, auth method not retrieving the correct information.
  const { isLoaded, user } = useUser();

  if (isLoaded && user?.organizationMemberships?.[0]?.role !== 'admin') {
    redirect('/');
  }

  return (
    <main className="flex flex-col gap-6 flex-1 justify-center items-center w-full">
      <div className="flex flex-col gap-[5rem] w-full">
        <h1 className="text-center text-[20px]">ADMIN PANEL</h1>
        <div className="flex flex-col gap-[1.3rem] text-[18px]">
          <BasicHero position="left">
            <Link href="/admin/create">CREATE WORKOUT</Link>
          </BasicHero>
          <BasicHero position="right">
            <Link href="/admin/create"> EDIT WORKOUT</Link>
          </BasicHero>
          <BasicHero position="left">
            <Link href="/admin/create">COPY WORKOUT</Link>
          </BasicHero>
          <BasicHero position="right">
            <Link href="/">BACK TO HOME</Link>
          </BasicHero>
        </div>
      </div>
    </main>
  );
}
