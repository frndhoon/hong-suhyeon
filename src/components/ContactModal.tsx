'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

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
    <motion.div
      className="fixed inset-0 backdrop-blur-sm flex items-center justify-center z-50 p-4"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeInOut', duration: 0.3 }}
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
                        <div className="flex items-center gap-2">
                          <a href={`tel:${contact.phoneNumber}`}>
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M9 16C2.814 9.813 3.11 5.134 5.94 3.012l.627-.467a1.483 1.483 0 0 1 2.1.353l1.579 2.272a1.5 1.5 0 0 1-.25 1.99L8.476 8.474c-.38.329-.566.828-.395 1.301.316.88 1.083 2.433 2.897 4.246 1.814 1.814 3.366 2.581 4.246 2.898.474.17.973-.015 1.302-.396l1.314-1.518a1.5 1.5 0 0 1 1.99-.25l2.276 1.58a1.48 1.48 0 0 1 .354 2.096l-.47.633C19.869 21.892 15.188 22.187 9 16z"
                                  fill="#000000"
                                ></path>
                              </g>
                            </svg>
                          </a>
                          <a href={`sms:${contact.phoneNumber}`}>
                            <svg
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                              width={24}
                              height={24}
                            >
                              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                <path
                                  d="M3 7.2C3 6.07989 3 5.51984 3.21799 5.09202C3.40973 4.71569 3.71569 4.40973 4.09202 4.21799C4.51984 4 5.0799 4 6.2 4H17.8C18.9201 4 19.4802 4 19.908 4.21799C20.2843 4.40973 20.5903 4.71569 20.782 5.09202C21 5.51984 21 6.0799 21 7.2V20L17.6757 18.3378C17.4237 18.2118 17.2977 18.1488 17.1656 18.1044C17.0484 18.065 16.9277 18.0365 16.8052 18.0193C16.6672 18 16.5263 18 16.2446 18H6.2C5.07989 18 4.51984 18 4.09202 17.782C3.71569 17.5903 3.40973 17.2843 3.21799 16.908C3 16.4802 3 15.9201 3 14.8V7.2Z"
                                  stroke="#000000"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                ></path>
                              </g>
                            </svg>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};
