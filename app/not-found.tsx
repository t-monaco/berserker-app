'use client';

import Link from 'next/link';
import BasicBtn from '@/app/components/Form/BasicBtn';

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-xl">Not Found</h2>
      <p className="text-center">Could not find requested resource</p>
      <BasicBtn
        type="button"
        bgColor="var(--primary-color)"
        fontColor="var(--secondary-font-color)"
      >
        <Link href="/">Return Home</Link>
      </BasicBtn>
    </div>
  );
}
