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

  return (
    <>
      <Script
        type="text/javascript"
        src={`https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${naverMapClientId}`}
        onLoad={initMap}
      />
      <div className="flex flex-col items-center relative w-full h-[300px]">
        <div id="naver-map" className="z-10 w-full h-full absolute"></div>
        <div className="z-20 absolute bottom-5 right-5"></div>
      </div>
    </>
  );
};
