'use client';

import { disableScroll, enableScroll } from '@/app/utils/utils';
import customDayJS from '@/lib/dayjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState, useTransition } from 'react';
import { FaCalculator } from 'react-icons/fa';
import { HiRefresh } from 'react-icons/hi';
import PercentageCalculator from '../PercentageCalculator';
import * as Styled from './Header.styled';

type HeaderProps = {
  isAdmin: boolean;
  resetDates: () => void;
};

const Header: React.FC<HeaderProps> = ({ isAdmin, resetDates }) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleRefresh = () => {
    startTransition(() => {
      router.refresh();
    });
  };

  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

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
        <p onClick={isAdmin ? () => resetDates() : undefined}>
          {customDayJS().format('MMMM YYYY').toUpperCase()}
        </p>
        <div className="flex gap-4">
          {isAdmin && <Link href="/admin">ADMIN</Link>}
          <span className="icon-wrapper" onClick={() => showCalculatorModal()}>
            <FaCalculator />
          </span>
          <span className="icon-wrapper" onClick={() => handleRefresh()}>
            <HiRefresh className={isPending ? 'rotate' : ''} />
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
