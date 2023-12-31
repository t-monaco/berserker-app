'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';

const DynamicBasicBtn = dynamic(() => import('@/src/components/Form/BasicBtn'));

export default function NotFound() {
  return (
    <div className="flex flex-col items-center gap-6">
      <h2 className="text-xl">Not Found</h2>
      <p className="text-center">Could not find requested resource</p>
      <DynamicBasicBtn
        type="button"
        bgColor="var(--primary-color)"
        fontColor="var(--secondary-font-color)"
      >
        <Link href="/">Return Home</Link>
      </DynamicBasicBtn>
    </div>
  );
}
