'use client';

import { disableScroll, enableScroll } from '@/app/utils/utils';
import { useUser } from '@clerk/nextjs';
import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { FaCalculator } from 'react-icons/fa';
import { HiRefresh } from 'react-icons/hi';
import PercentageCalculator from '../PercentageCalculator';
import * as Styled from './Header.styled';

type HeaderProps = {
  // TODO: if I used clerk's organization i can remove this props and get the role from the useUser
};

const Header: React.FC<HeaderProps> = () => {
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

  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const { user } = useUser();

  const isAdmin = useMemo(() => {
    return user?.organizationMemberships?.[0]?.role === 'admin';
  }, [user]);

  const showCalculatorModal = () => {
    disableScroll();
    setIsCalculatorOpen(true);
  };

  const handleCancelCalculatorModal = () => {
    enableScroll();
    setIsCalculatorOpen(false);
  };

  return (
    <Styled.HeaderWrapper>
      <div className="month-year">
        {dayjs().format('MMMM YYYY').toUpperCase()}
        <div className="flex gap-4">
          {isAdmin && <Link href="/admin">ADMIN</Link>}
          <span className="icon-wrapper" onClick={() => showCalculatorModal()}>
            <FaCalculator />
          </span>
          <span className="icon-wrapper" onClick={() => handleRefresh()}>
            <HiRefresh className={rotate ? 'rotate' : ''} />
          </span>
        </div>
      </div>
      <PercentageCalculator
        isOpen={isCalculatorOpen}
        onCancel={handleCancelCalculatorModal}
      />
    </Styled.HeaderWrapper>
  );
};

export default Header;
