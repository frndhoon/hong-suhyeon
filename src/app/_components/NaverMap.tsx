'use client';

import Script from 'next/script';
import { useRef } from 'react';

const naverMapClientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;

export const NaverMap = () => {
  const map = useRef<naver.maps.Map | null>(null);

  const lat = 36.010293;
  const lng = 129.362007;

  const initMap = () => {
    const position = new window.naver.maps.LatLng(lat, lng);

    map.current = new window.naver.maps.Map('naver-map', {
      center: position,
      zoom: 17,
    });

    new window.naver.maps.Marker({
      position: position,
      map: map.current,
    });
  };

  const onMoveToWeddingHall = () => {
    if (!map.current) return;

    const position = new window.naver.maps.LatLng(lat, lng);
    map.current.setCenter(position);

    map.current.setCenter(position);
    map.current.setZoom(17);
  };

  return (
    <>
      <Script
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${naverMapClientId}`}
        onLoad={initMap}
      />
      <div className="flex flex-col items-center relative w-full h-[300px]">
        <div id="naver-map" className="z-10 w-full h-full absolute"></div>
        <div className="z-20 absolute bottom-5 right-5">
          <button
            onClick={onMoveToWeddingHall}
            aria-label="결혼식장으로 이동"
            className="flex flex-row items-center hover:text-gray-700 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-sm">결혼식장으로 이동</span>
          </button>
        </div>
      </div>
    </>
  );
};
