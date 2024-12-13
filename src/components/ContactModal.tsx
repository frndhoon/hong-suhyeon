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
                      className="flex flex-col py-2 border-b last:border-b-0"
                    >
                      <p className="font-medium">
                        {contact.name} ({contact.relation})
                      </p>
                      <p className="text-gray-600">{contact.phoneNumber}</p>
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
