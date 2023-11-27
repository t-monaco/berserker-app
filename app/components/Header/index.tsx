'use client';

import dayjs from 'dayjs';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { HiRefresh } from 'react-icons/hi';
import { FaCalculator } from 'react-icons/fa';
import * as Styled from './Header.styled';
import PercentageCalculator from '../PercentageCalculator';

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

  const [isCalculatorOpen, setIsCalculatorOpen] = useState(false);

  const showCalculatorModal = () => {
    setIsCalculatorOpen(true);
  };

  const handleCancelCalculatorModal = () => {
    setIsCalculatorOpen(false);
  };

  return (
    <Styled.HeaderWrapper>
      <div className="month-year">
        {dayjs().format('MMMM YYYY').toUpperCase()}
        <div className="flex gap-4">
          {userRole === 'ADMIN' && <Link href="/admin">ADMIN</Link>}
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
