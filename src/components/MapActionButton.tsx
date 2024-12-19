'use client';

import { useState } from 'react';
import toast from 'react-hot-toast';

export const MapActionButton = ({ address }: { address: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(address);
    setIsOpen(false);
    toast(
      <span>
        <strong>복사완료</strong>
        <br />
        {address}
      </span>
    );
  };

  const handleNaverMapClick = () => {
    const naverMapUrl = `https://map.naver.com/p/search/${address}`;

    window.location.href = naverMapUrl;
  };

  const handleKakaoMapClick = () => {
    const kakaoMapUrl = `https://map.kakao.com/?q=${address}`;

    window.location.href = kakaoMapUrl;
  };

  return (
    <div className="relative">
      <button
        className="flex flex-row items-center gap-1 hover:text-gray-600 transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
        >
          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
        </svg>
        <span className="text-sm">지도</span>
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 w-48 z-10">
          <div className="flex flex-col gap-2 p-2">
            <button
              className="p-2 hover:bg-gray-50 rounded-lg text-left"
              onClick={handleCopyAddress}
            >
              주소 복사
            </button>
            <button
              className="p-2 hover:bg-gray-50 rounded-lg text-left"
              onClick={handleNaverMapClick}
            >
              네이버 지도
            </button>
            <button
              className="p-2 hover:bg-gray-50 rounded-lg text-left"
              onClick={handleKakaoMapClick}
            >
              카카오맵
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
