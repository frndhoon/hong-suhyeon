'use client';

import { useEffect } from 'react';

interface Contact {
  name: string;
  phoneNumber: string;
  relation: string;
  side: string;
}

interface ContactModalProps {
  contacts: Contact[];
  isOpen: boolean;
  onClose: () => void;
}

export const ContactModal = ({
  contacts,
  isOpen,
  onClose,
}: ContactModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg w-[400px] h-[600px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">연락처</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>

        <div className="p-4">
          {['신랑', '신부'].map((side) => (
            <div key={side} className={side === '신랑' ? 'mb-4' : ''}>
              <h3 className="font-bold mb-2">{side} 측</h3>
              <div className="space-y-2">
                {contacts
                  .filter((contact) => contact.side === side)
                  .map((contact, index) => (
                    <div
                      key={index}
                      className="flex flex-col p-2 border-b last:border-b-0"
                    >
                      <p className="font-medium">
                        {contact.name} ({contact.relation})
                      </p>
                      <div className="flex items-center justify-between">
                        <p className="text-gray-600">{contact.phoneNumber}</p>
                        <a href={`tel:${contact.phoneNumber}`}>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                          >
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g
                              id="SVGRepo_tracerCarrier"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></g>
                            <g id="SVGRepo_iconCarrier">
                              <path
                                d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z"
                                fill="#000000"
                              ></path>
                            </g>
                          </svg>
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
