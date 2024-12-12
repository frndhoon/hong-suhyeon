'use client';

import { useState } from 'react';

export const AccountSelectBox = ({
  title,
  accounts,
}: {
  title: string;
  accounts: { name: string; accountName: string; accountNumber: string }[];
}) => {
  const [isSelectedOpen, setIsSelectedOpen] = useState(false);

  return (
    <div className="w-full flex flex-col gap-4 items-center">
      <div className="w-[400px] border rounded-lg p-4">
        <button
          onClick={() => setIsSelectedOpen(!isSelectedOpen)}
          className="w-full text-left cursor-pointer hover:text-gray-600"
        >
          {title}
        </button>
        {isSelectedOpen && (
          <div className="mt-4 flex flex-col gap-2">
            {accounts.map((account) => (
              <div
                key={account.name}
                className="hover:bg-gray-50 p-2 rounded transition-colors"
              >
                <p className="font-medium">{account.name}</p>
                <span>{account.accountName}</span>{' '}
                <span>{account.accountNumber}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
