'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import toast from 'react-hot-toast';
import tossSymbolIcon from '@/public/icons/tossSymbolIcon.png';

export const AccountSelectBox = ({
  title,
  accounts,
}: {
  title: string;
  accounts: { name: string; accountName: string; accountNumber: string }[];
}) => {
  const [isSelectedOpen, setIsSelectedOpen] = useState(false);

  const handleAccountCopy = (account: string) => {
    navigator.clipboard.writeText(account);
    toast('계좌번호가 복사되었습니다.');
  };

  const handleTossSend = (account: {
    name: string;
    accountNumber: string;
    accountName: string;
  }) => {
    const cleanAccountNumber = account.accountNumber.replace(/-/g, '');

    // 은행은 제대로 매핑되지 않는 문제 수정 필요
    const bankCode: { [key: string]: string } = {
      카카오뱅크: '090',
      우리은행: '002',
      농협은행: '011',
      국민은행: '032',
    };

    const tossUrl = `supertoss://send?bank=${
      bankCode[account.accountName]
    }&accountNo=${cleanAccountNumber}&origin=web`;

    window.open(tossUrl, '_blank');
  };

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="w-full max-w-[400px] border rounded-lg p-4 mx-2">
        <button
          onClick={() => setIsSelectedOpen(!isSelectedOpen)}
          className="w-full text-left cursor-pointer hover:text-gray-600"
        >
          {title}
        </button>

        <AnimatePresence>
          {isSelectedOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{
                opacity: 0,
                height: 0,
              }}
              transition={{ ease: 'easeIn', duration: 0.3 }}
              className="mt-4 flex flex-col gap-2"
            >
              {accounts.map((account) => (
                <div
                  key={account.name}
                  className="hover:bg-gray-50 p-2 rounded transition-colors"
                >
                  <div className="flex flex-col">
                    <p className="font-medium">{account.name}</p>
                    <span>{account.accountName}</span>{' '}
                    <span>{account.accountNumber}</span>
                  </div>
                  <div className="flex flex-row gap-2 items-center justify-end">
                    <button
                      onClick={() => handleAccountCopy(account.accountNumber)}
                    >
                      <svg
                        viewBox="0 0 24.00 24.00"
                        width="24"
                        height="24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g
                          id="SVGRepo_tracerCarrier"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></g>
                        <g id="SVGRepo_iconCarrier">
                          <path
                            d="M8 16V18.8C8 19.9201 8 20.4802 8.21799 20.908C8.40973 21.2843 8.71569 21.5903 9.09202 21.782C9.51984 22 10.0799 22 11.2 22H18.8C19.9201 22 20.4802 22 20.908 21.782C21.2843 21.5903 21.5903 21.2843 21.782 20.908C22 20.4802 22 19.9201 22 18.8V11.2C22 10.0799 22 9.51984 21.782 9.09202C21.5903 8.71569 21.2843 8.40973 20.908 8.21799C20.4802 8 19.9201 8 18.8 8H16M5.2 16H12.8C13.9201 16 14.4802 16 14.908 15.782C15.2843 15.5903 15.5903 15.2843 15.782 14.908C16 14.4802 16 13.9201 16 12.8V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H5.2C4.0799 2 3.51984 2 3.09202 2.21799C2.71569 2.40973 2.40973 2.71569 2.21799 3.09202C2 3.51984 2 4.07989 2 5.2V12.8C2 13.9201 2 14.4802 2.21799 14.908C2.40973 15.2843 2.71569 15.5903 3.09202 15.782C3.51984 16 4.07989 16 5.2 16Z"
                            stroke="#000000"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </g>
                      </svg>
                    </button>
                    <button onClick={() => handleTossSend(account)}>
                      <Image
                        src={tossSymbolIcon}
                        alt="toss"
                        width={24}
                        height={24}
                        className="opacity-70 hover:opacity-100 transition-opacity"
                      />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
