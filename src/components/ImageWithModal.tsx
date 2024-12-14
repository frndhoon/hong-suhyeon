'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import { createPortal } from 'react-dom';

interface ImageWithModalProps {
  src: string | StaticImageData;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
  currentSlide?: number;
  isSlide?: boolean;
  totalSlides?: number;
  currentImage?: string;
  onPrevClick?: () => void;
  onNextClick?: () => void;
}

export const ImageWithModal = ({
  src,
  alt,
  width = 500,
  height = 300,
  className = '',
  currentSlide = 0,
  isSlide = false,
  totalSlides = 7,
  currentImage,
  onPrevClick,
  onNextClick,
}: ImageWithModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-zoom-in ${className}`}
        onClick={() => setIsModalOpen(true)}
      />

      {isModalOpen &&
        createPortal(
          <div
            className="fixed inset-0 backdrop-blur-sm flex flex-col items-center justify-center z-50 p-4 cursor-zoom-out gap-3"
            onClick={() => setIsModalOpen(false)}
          >
            <div className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center gap-3">
              {isSlide && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onPrevClick?.();
                  }}
                  className="absolute left-0 p-2"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9 4L9 11L4.5 7.5L9 4Z" fill="currentColor"></path>
                  </svg>
                </button>
              )}
              <Image
                src={currentImage || src}
                alt={alt}
                width={width}
                height={height}
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
                onClick={() => setIsModalOpen(false)}
              />
              {isSlide && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onNextClick?.();
                  }}
                  className="absolute right-0 p-2"
                >
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6 11L6 4L10.5 7.5L6 11Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              )}
            </div>
            <p className="text-md">
              {isSlide ? `${totalSlides}장 중 ${currentSlide + 1}장` : ''}
            </p>
          </div>,
          document.body
        )}
    </>
  );
};
