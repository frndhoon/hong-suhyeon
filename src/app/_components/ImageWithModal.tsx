'use client';

import { useState } from 'react';
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
}

const totalSlides = 7;

export const ImageWithModal = ({
  src,
  alt,
  width = 500,
  height = 300,
  className = '',
  currentSlide = 0,
  isSlide = false,
}: ImageWithModalProps) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
            <div className="relative max-w-[90vw] max-h-[90vh]">
              <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className="w-auto h-auto max-w-full max-h-[90vh] object-contain rounded-lg shadow-xl"
                onClick={() => setIsModalOpen(false)}
              />
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
