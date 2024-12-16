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
            aria-label="예식장 중심으로"
            className="flex flex-row items-center hover:text-gray-700 transition-colors"
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
            >
              <g id="SVGRepo_iconCarrier">
                <path d="M13.4227 17.3618L16.9348 8.19598C17.2164 7.46107 16.5389 6.78361 15.804 7.06521L6.63824 10.5773C5.80779 10.8955 5.78079 12.06 6.5981 12.3083L10.0751 13.3648C10.3455 13.447 10.553 13.6545 10.6352 13.9249L11.6917 17.4019C11.94 18.2192 13.1045 18.1922 13.4227 17.3618Z"></path>
              </g>
            </svg>
            <span className="text-sm">예식장 중심으로</span>
          </button>
        </div>
      </div>
    </>
  );
};
