'use client';

import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { HiRefresh } from 'react-icons/hi';
import * as Styled from './Header.styled';

type HeaderProps = {
  // TODO: if I used clerk's organization i can remove this props and get the role from the useUser
  userRole?: string;
};

const Header: React.FC<HeaderProps> = ({ userRole }) => {
  // TODO: this should be updated, using pending status from next/navigation or the fetched query.
  const [rotate, setRotate] = useState(false);
  const router = useRouter();

  const handleRefresh = () => {
    setRotate(true);
    router.refresh();
    setTimeout(() => {
      setRotate(false);
    }, 3000);
  };

  return (
    <Styled.HeaderWrapper>
      <div className="month-year">
        {dayjs().format('MMMM YYYY').toUpperCase()}
        <div className="flex gap-4">
          {userRole === 'ADMIN' && <Link href="/admin">ADMIN</Link>}
          <span className="icon-wrapper" onClick={() => handleRefresh()}>
            <HiRefresh className={rotate ? 'rotate' : ''} />
          </span>
        </div>
      </div>
    </Styled.HeaderWrapper>
  );
};

export default Header;
