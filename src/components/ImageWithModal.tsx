'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface ImageWithModalProps {
  src: string;
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isModalOpen]);

  return (
    <>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`cursor-zoom-in shadow-md ${className}`}
        onClick={() => setIsModalOpen(true)}
      />

      {mounted &&
        createPortal(
          <AnimatePresence>
            {isModalOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ ease: 'easeInOut', duration: 0.3 }}
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
                        <path
                          d="M9 4L9 11L4.5 7.5L9 4Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </button>
                  )}
                  <img
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
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
};
