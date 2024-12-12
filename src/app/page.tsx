'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { ImageWithModal } from '@/app/_components/ImageWithModal';
import { NaverMap } from '@/app/_components/NaverMap';
import { MapActionButton } from '@/app/_components/MapActionButton';
import mainWeddingImg from '@/public/images/mainWeddingImg.jpg';
import subWeddingImg from '@/public/images/subWeddingImg.jpg';
import calendarWeddingImg from '@/public/images/calendarWeddingImg.jpg';

export default function Home() {
  const [isGroomOpen, setIsGroomOpen] = useState(false);
  const [isBrideOpen, setIsBrideOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const sliderSettings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '60px',
    slidesToShow: 3,
    speed: 500,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      setCurrentSlide(nextSlide);
    },
  };
  return (
    <>
      <main className="w-full max-w-[600px] mx-auto px-4 flex flex-col items-center gap-2">
        <section className="w-full flex flex-col items-center">
          <ImageWithModal
            src={mainWeddingImg}
            alt="메인 웨딩 사진"
            width={500}
            height={300}
            priority={true}
            className="my-4 rounded-lg w-full max-w-[500px]"
          />
          <h1>WEDDING INVITATION</h1>
          <h2>김홍 | 김수현</h2>
          <p>2025년 2월 23일 일요일 오후 1:00</p>
          <hr />
          <p>티파니웨딩청솔밭 5F</p>
        </section>
        <section className="w-full flex flex-col items-center">
          <ImageWithModal
            src={subWeddingImg}
            alt="서브 웨딩 사진"
            width={500}
            height={300}
            className="my-4 rounded-lg w-full max-w-[500px]"
          />
          <p>오셔서 축하해주시면 감사하겠습니다.</p>
          <div>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-col">
                <p>김완수</p>
                <p>권가영</p>
              </div>
              <p>의 장남 홍</p>
            </div>
            <div className="flex flex-row items-center gap-3">
              <div className="flex flex-col">
                <p>김성규</p>
                <p>이금란</p>
              </div>
              <p>의 장녀 수현</p>
            </div>
          </div>
          <button className="border border-1 rounded-3xl px-2 py-1 hover:text-gray-600">
            연락하기
          </button>
        </section>
        <section>
          <ImageWithModal
            src={calendarWeddingImg}
            alt="웨딩 사진"
            width={500}
            height={300}
            className="my-4 rounded-lg w-full max-w-[500px]"
          />
        </section>
        <section className="w-full">
          <div className="slider-container">
            <Slider {...sliderSettings}>
              {Array.from({ length: 7 }).map((_, index) => (
                <div className="px-2 center-slide" key={index + 1}>
                  {currentSlide === index ? (
                    <ImageWithModal
                      src={`/images/weddingImg0${index + 1}.jpg`}
                      alt="웨딩 사진"
                      width={500}
                      height={300}
                      className="rounded-lg w-full"
                    />
                  ) : (
                    <Image
                      src={`/images/weddingImg0${index + 1}.jpg`}
                      alt="웨딩 사진"
                      width={500}
                      height={300}
                      className="rounded-lg w-full"
                    />
                  )}
                </div>
              ))}
            </Slider>
          </div>
        </section>

        <section className="w-full flex flex-col items-center">
          <h1>오시는 길</h1>
          <NaverMap />
          <div className="flex flex-row gap-2 items-start w-full justify-between p-4">
            <div>
              <p>경북 포항시 남구 희망대로 815</p>
              <p>티파니웨딩 5F 컨벤션홀</p>
              <p>054-283-0077</p>
            </div>
            <MapActionButton address="경북 포항시 남구 희망대로 815" />
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-2">
          <h1>마음 전하실 곳</h1>
          <div className="w-full flex flex-col gap-4 items-center">
            <div className="w-[300px] border rounded-lg p-4 transition-all duration-300">
              <button
                onClick={() => setIsGroomOpen(!isGroomOpen)}
                className="w-full text-left cursor-pointer hover:text-gray-600"
              >
                신랑측 계좌번호
              </button>
              {isGroomOpen && (
                <div className="mt-4 flex flex-col gap-2 animate-fadeIn">
                  <div className="hover:bg-gray-50 p-2 rounded transition-colors">
                    <p className="font-medium">신랑 김홍</p>
                    <p>카카오뱅크 3333-04-5085349</p>
                  </div>
                  <div className="hover:bg-gray-50 p-2 rounded transition-colors">
                    <p className="font-medium">아버지 김완수</p>
                    <p>우리은행 010-9999-3402</p>
                  </div>
                  <div className="hover:bg-gray-50 p-2 rounded transition-colors">
                    <p className="font-medium">어머니 권가영</p>
                    <p>농협은행 302-1008-6057-51</p>
                  </div>
                </div>
              )}
            </div>
            <div className="w-[300px] border rounded-lg p-4 transition-all duration-300">
              <button
                onClick={() => setIsBrideOpen(!isBrideOpen)}
                className="w-full text-left cursor-pointer hover:text-gray-600"
              >
                신부측 계좌번호
              </button>
              {isBrideOpen && (
                <div className="mt-4 flex flex-col gap-2 animate-fadeIn">
                  <div className="hover:bg-gray-50 p-2 rounded transition-colors">
                    <p className="font-medium">신부 김수현</p>
                    <p>카카오뱅크 3333-07-0061867</p>
                  </div>
                  <div className="hover:bg-gray-50 p-2 rounded transition-colors">
                    <p className="font-medium">아버지 김성규</p>
                    <p>국민은행 801301-01-345656</p>
                  </div>
                  <div className="hover:bg-gray-50 p-2 rounded transition-colors">
                    <p className="font-medium">어머니 이금란</p>
                    <p>국민은행 99927711449</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full text-center py-4">
        <p>© 2024 NerdAnimals. All rights reserved.</p>
      </footer>
    </>
  );
}
