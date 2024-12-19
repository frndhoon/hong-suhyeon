'use client';

import { useState } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { AnimatePresence } from 'framer-motion';
import { ImageWithModal } from '@/components/ImageWithModal';
import { NaverMap } from '@/components/NaverMap';
import { MapActionButton } from '@/components/MapActionButton';
import { AccountSelectBox } from '@/components/AccountSelectBox';
import { ContactModal } from '@/components/ContactModal';
import { ShareButton } from '@/components/ShareButton';
import { FadeInOut } from '@/components/FadeInOut';
import heartIcon from '@/public/icons/white_heart_128x128.png';
import ribbonIcon from '@/public/icons/ribbon_128x128.png';

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [sliderRef, setSliderRef] = useState<Slider | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const weddingImages = [
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FduN8o4%2FbtsLm59IOxY%2FKGOJxZkygf8sCTt1ACkvH1%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FMfRRw%2FbtsLnOGcki0%2F9xDp7t6BJkfbn1IqFxDy10%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbm2Ngm%2FbtsLop6ZfAg%2FjmdgUwRF6Ni0FGd3dcdyS1%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FdYNeBk%2FbtsLmmEckzZ%2F1wbvUhWhC626oy7jXk9p80%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FxMyFm%2FbtsLn7MhJ5y%2Fy6VPRnAbnAnuBUtTvCtwvk%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fn2B91%2FbtsLnldrjqA%2FEIMkot7eDwjaYC2o6Ge7N1%2Fimg.jpg',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbIC5dx%2FbtsLoavqPnd%2FZcK8K3eH4uDeMfhowkNnxk%2Fimg.jpg',
  ];

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
        <section>
          <FadeInOut>
            <ImageWithModal
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbwQrOj%2FbtsLm3D08YC%2FFaaRsoIjL6t7dHQd2yD5Jk%2Fimg.png"
              alt="메인 웨딩 사진"
              width={500}
              height={300}
              priority={true}
              className="my-4 rounded-lg object-cover w-[500px] h-[500px] object-top"
            />
            <div className="flex flex-col items-center">
              <h1>WEDDING INVITATION</h1>
              <h2>김홍 | 김수현</h2>
              <img
                src={heartIcon.src}
                alt="heart"
                width={30}
                height={30}
                className="my-2"
              />
              <p>2025년 2월 23일 일요일 오후 1:00</p>
              <p>티파니웨딩청솔밭 5F</p>
            </div>
          </FadeInOut>
        </section>
        <section>
          <FadeInOut delay={0.1}>
            <ImageWithModal
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbCa6Jx%2FbtsLnmi5gNp%2FXCodBjwesluDNNkAbubWx1%2Fimg.jpg"
              alt="서브 웨딩 사진"
              width={500}
              height={300}
              className="my-4 rounded-lg object-cover w-[500px] h-[500px] object-top"
            />
          </FadeInOut>
          <FadeInOut>
            <div className="w-full flex justify-center my-2">
              <svg
                className="w-full max-w-[500px] h-6 text-gray-300"
                viewBox="0 0 200 10"
              >
                <path
                  d="M0 5 Q 50 0, 100 5 T 200 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
            <p className="text-md text-center">
              차가운 바람이 따스함을 마주하려 할 때,
              <br />
              서로 다른 두 실을 하나의 어여쁜 매듭으로 만들고자 합니다.
              <br />
              부디 첫 매듭은 어떨지 함께 해주세요.
            </p>
            <div className="w-full flex justify-center my-2">
              <svg
                className="w-full max-w-[500px] h-6 text-gray-300"
                viewBox="0 0 200 10"
              >
                <path
                  d="M0 5 Q 50 10, 100 5 T 200 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </svg>
            </div>
          </FadeInOut>
          <FadeInOut delay={0.2}>
            <div className="flex flex-col items-center gap-2">
              <div className="flex flex-row items-center gap-3 mr-[13px]">
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
              <button
                className="border border-1 rounded-3xl px-2 py-1 hover:text-gray-600"
                onClick={() => setIsContactModalOpen(!isContactModalOpen)}
              >
                연락하기
              </button>
            </div>
          </FadeInOut>
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
          <FadeInOut delay={0.3}>
            <ImageWithModal
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fu873n%2FbtsLoLPxTvg%2FdMxgTuIGIvKCWFAkPbSrj0%2Fimg.png"
              alt="웨딩 사진"
              width={500}
              height={300}
              className="my-4 rounded-lg object-cover w-[500px] h-[500px] object-top"
            />
          </FadeInOut>
        </section>
        <section className="w-full">
          <FadeInOut delay={0.3}>
            <div className="slider-container mb-10">
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
            <img
              src={ribbonIcon.src}
              alt="ribbon"
              width={30}
              height={30}
              className="mx-auto mt-10"
            />
          </FadeInOut>
        </section>

        <section className="mt-10">
          <FadeInOut delay={0.3}>
            <h1 className="text-center mb-2">오시는 길</h1>
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
              <div className="flex flex-col break-keep">
                <h3 className="mb-2">교통안내</h3>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 flex-shrink-0">✼</span>
                    <div>
                      <span className="font-medium">시내버스</span>
                      <p className="text-gray-600">305번, 900번</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 flex-shrink-0">✼</span>
                    <div>
                      <span className="font-medium">자가운전</span>
                      <p className="text-gray-600 leading-relaxed">
                        대구・포항 고속도로 이용 후 포항IC → 포항시청 방향 →
                        대잠사거리 → 포스코, 형산로터리 방향 → 포항종합운동장
                        정문 건너편
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 flex-shrink-0">✼</span>
                    <div>
                      <span className="font-medium">KTX</span>
                      <p className="text-gray-600">
                        KTX에서 내려서 약 30분 소요 (택시 이용 시 15km 거리)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-2">
                    <span className="text-rose-400 flex-shrink-0">✼</span>
                    <div>
                      <span className="font-medium">터미널</span>
                      <p className="text-gray-600">
                        시외버스터미널: 1.5km (택시 이용)
                        <br />
                        고속버스터미널: 2km (택시 이용)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="break-keep">
                <h3 className="mb-2">주차안내</h3>
                <div className="flex items-start gap-2">
                  <span className="text-rose-400">✼</span>
                  <p className="text-gray-600">
                    웨딩홀 내 주차장 및 포항종합운동장 주차장 무료 이용 가능
                  </p>
                </div>
              </div>
            </div>
          </FadeInOut>
        </section>
        <section>
          <FadeInOut delay={0.3}>
            <div className="flex flex-col items-center gap-2">
              <h1>마음 전하실 곳</h1>
              <div className="max-w-[400px] min-w-[368px] flex flex-col gap-2 items-center">
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
            </div>
          </FadeInOut>
        </section>
        <FadeInOut>
          <img
            src={heartIcon.src}
            alt="heart"
            width={30}
            height={30}
            className="mx-auto mt-10"
          />
        </FadeInOut>
        <section className="mt-32">
          <FadeInOut>
            <ShareButton />
          </FadeInOut>
        </section>
      </main>
      <footer className="text-center py-10">
        <FadeInOut>
          <p>© 2024 NerdAnimals. All rights reserved.</p>
        </FadeInOut>
      </footer>
    </>
  );
}
