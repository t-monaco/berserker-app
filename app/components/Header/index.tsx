'use client';

import { disableScroll, enableScroll } from '@/app/utils/utils';
import customDayJS from '@/lib/dayjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaCalculator } from 'react-icons/fa';
import { HiRefresh } from 'react-icons/hi';
import PercentageCalculator from '../PercentageCalculator';
import * as Styled from './Header.styled';

type HeaderProps = {
  isAdmin: boolean;
};

const Header: React.FC<HeaderProps> = ({ isAdmin }) => {
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
        {customDayJS().format('MMMM YYYY').toUpperCase()}
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
