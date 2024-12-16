'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { ImageWithModal } from '@/components/ImageWithModal';
import { NaverMap } from '@/components/NaverMap';
import { MapActionButton } from '@/components/MapActionButton';
import { AccountSelectBox } from '@/components/AccountSelectBox';
import mainWeddingImg from '@/public/images/mainWeddingImg.jpg';
import subWeddingImg from '@/public/images/subWeddingImg.jpg';
import calendarWeddingImg from '@/public/images/calendarWeddingImg.jpg';
import { ContactModal } from '@/components/ContactModal';
import { ShareButton } from '@/components/ShareButton';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const weddingImages = Array.from({ length: 7 }).map(
    (_, index) => `/images/weddingImg0${index + 1}.jpg`
  );

  const handlePrevImage = () => {
    setModalImageIndex((prev) =>
      prev === 0 ? weddingImages.length - 1 : prev - 1
    );
  };

  const handleNextImage = () => {
    setModalImageIndex((prev) =>
      prev === weddingImages.length - 1 ? 0 : prev + 1
    );
  };

  const sliderSettings = {
    dots: true,
    className: 'center',
    centerMode: true,
    infinite: true,
    centerPadding: '15px',
    slidesToShow: 3,
    speed: 500,
    beforeChange: (currentSlide: number, nextSlide: number) => {
      setCurrentSlide(nextSlide);
    },
  };

  const contacts = [
    {
      name: '김완수',
      phoneNumber: '010-9999-3402',
      relation: '부',
      side: '신랑',
    },
    {
      name: '권가영',
      phoneNumber: '010-8519-0041',
      relation: '모',
      side: '신랑',
    },
    {
      name: '김홍',
      phoneNumber: '010-9950-2556',
      relation: '본인',
      side: '신랑',
    },
    {
      name: '김성규',
      phoneNumber: '010-9699-7114',
      relation: '부',
      side: '신부',
    },
    {
      name: '이금란',
      phoneNumber: '010-9927-7114',
      relation: '모',
      side: '신부',
    },
    {
      name: '김수현',
      phoneNumber: '010-2556-7114',
      relation: '본인',
      side: '신부',
    },
  ];
  const handleImageClick = (index: number) => {
    if (sliderRef) {
      sliderRef.slickGoTo(index);
    }
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
            className="my-4 rounded-lg object-cover w-[500px] h-[500px] object-top"
          />

          <h1>WEDDING INVITATION</h1>
          <h2>김홍 | 김수현</h2>
          <p>2025년 2월 23일 일요일 오후 1:00</p>
          <hr />
          <p>티파니웨딩청솔밭 5F</p>
        </section>
        <section className="w-full flex flex-col items-center gap-2">
          <ImageWithModal
            src={subWeddingImg}
            alt="서브 웨딩 사진"
            width={500}
            height={300}
            className="my-4 rounded-lg object-cover w-[500px] h-[500px] object-top"
          />
          <div className="w-full flex justify-center my-2">
            <svg className="w-[500px] h-6 text-gray-300" viewBox="0 0 200 10">
              <path
                d="M0 5 Q 50 0, 100 5 T 200 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </svg>
          </div>
          <p className="text-md">
            차가운 바람이 따스함을 마주하려 할 때,
            <br />
            서로 다른 두 실을 하나의 어여쁜 매듭으로 만들고자 합니다.
            <br />
            부디 첫 매듭은 어떨지 함께 해주세요.
          </p>
          <div className="w-full flex justify-center my-2">
            <svg className="w-[500px] h-6 text-gray-300" viewBox="0 0 200 10">
              <path
                d="M0 5 Q 50 10, 100 5 T 200 5"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
              />
            </svg>
          </div>
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
          <button
            className="border border-1 rounded-3xl px-2 py-1 hover:text-gray-600"
            onClick={() => setIsContactModalOpen(!isContactModalOpen)}
          >
            연락하기
          </button>
          <AnimatePresence>
            {isContactModalOpen && (
              <ContactModal
                contacts={contacts}
                isOpen={isContactModalOpen}
                onClose={() => setIsContactModalOpen(false)}
              />
            )}
          </AnimatePresence>
        </section>
        <section>
          <ImageWithModal
            src={calendarWeddingImg}
            alt="웨딩 사진"
            width={500}
            height={300}
            className="my-4 rounded-lg object-cover w-[500px] h-[500px] object-top"
          />
        </section>
        <section className="w-full">
          <div className="slider-container">
            <Slider ref={setSliderRef} {...sliderSettings}>
              {weddingImages.map((imageSrc, index) => (
                <div
                  className="px-2 center-slide cursor-pointer"
                  key={index}
                  onClick={() => {
                    handleImageClick(index);
                    setModalImageIndex(index);
                  }}
                >
                  {currentSlide === index ? (
                    <ImageWithModal
                      src={imageSrc}
                      alt="웨딩 사진"
                      width={500}
                      height={300}
                      className="rounded-lg w-full"
                      currentSlide={modalImageIndex}
                      isSlide={true}
                      totalSlides={weddingImages.length}
                      currentImage={weddingImages[modalImageIndex]}
                      onPrevClick={handlePrevImage}
                      onNextClick={handleNextImage}
                    />
                  ) : (
                    <Image
                      src={imageSrc}
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

        <section className="w-full flex flex-col items-center gap-2">
          <h1>오시는 길</h1>
          <NaverMap />
          <div className="flex flex-col gap-5 p-4">
            <div className="flex flex-row gap-2 items-start w-full justify-between">
              <div>
                <p>경북 포항시 남구 희망대로 815</p>
                <p>티파니웨딩 5F 컨벤션홀</p>
                <p>054-283-0077</p>
              </div>
              <MapActionButton address="경북 포항시 남구 희망대로 815" />
            </div>
            <div className="break-keep">
              <p>교통안내</p>
              <p>✼ 시내버스: 305번, 900번</p>
              <p>
                ✼ 자가운전: 대구・포항 고속도로 이용 후 포항IC → 포항시청 방향 →
                대잠사거리 → 포스코, 형산로터리 방향 → 포항종합운동장 정문
                건너편
              </p>
              <p>
                ✼ KTX 이용 시: KTX에서 내려서 약 30분 소요 (택시 이용 시 15km
                거리)
              </p>
              <p>✼ 시외버스터미널에서 택시 이용 시: 1.5km</p>
              <p>✼ 고속버스터미널에서 택시 이용 시: 2km</p>
            </div>
            <div>
              <p>주차안내</p>
              <p>✼ 웨딩홀 내 주차장 및 포항종합운동장 주차장 무료 이용 가능</p>
            </div>
          </div>
        </section>
        <section className="w-full flex flex-col items-center gap-2">
          <h1>마음 전하실 곳</h1>
          <div className="w-full flex flex-col gap-2 items-center">
            <AccountSelectBox
              title="신랑측 계좌번호"
              accounts={[
                {
                  name: '신랑 김홍',
                  accountName: '카카오뱅크',
                  accountNumber: '3333-04-5085349',
                },
                {
                  name: '아버지 김완수',
                  accountName: '우리은행',
                  accountNumber: '010-9999-3402',
                },
                {
                  name: '어머니 권가영',
                  accountName: '농협은행',
                  accountNumber: '302-1008-6057-51',
                },
              ]}
            />
            <AccountSelectBox
              title="신부측 계좌번호"
              accounts={[
                {
                  name: '신부 김수현',
                  accountName: '카카오뱅크',
                  accountNumber: '3333-07-0061867',
                },
                {
                  name: '아버지 김성규',
                  accountName: '국민은행',
                  accountNumber: '801301-01-345656',
                },
                {
                  name: '어머니 이금란',
                  accountName: '국민은행',
                  accountNumber: '99927711449',
                },
              ]}
            />
          </div>
        </section>
        <div className="w-full flex items-center justify-center gap-4 my-4">
          <div className="h-px bg-gray-200 flex-grow" />
          <div className="text-gray-400">❀</div>
          <div className="h-px bg-gray-200 flex-grow" />
        </div>
        <section className="w-full flex flex-col items-center mt-24">
          <ShareButton />
        </section>
      </main>
      <footer className="w-full text-center py-4">
        <p>© 2024 NerdAnimals. All rights reserved.</p>
      </footer>
    </>
  );
}
