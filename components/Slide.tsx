import React, { useRef, useState } from "react";

export const Slide: React.FC<{
  children: JSX.Element | JSX.Element[];
  style?: React.CSSProperties;
  className?: string;
}> = function ({ children, style, className }) {
  const element = useRef<HTMLDivElement>(null);
  const [slideIndex, setSlideIndex] = useState<number>(0);
  const [prevSlideIndex, setPrevSlideIndex] = useState<number>(0);
  const [touchX, setTouchX] = useState<number>(0);

  const slides = Array.isArray(children) ? children : [children];

  return (
    <div className="relative overflow-hidden rounded-lg shadow-xl bg-neutral-200 dark:bg-neutral-900">
      <div
        className="flex transition duration-100 md:duration-300 ease-in-out flex-nowrap"
        style={{ transform: `translateX(-${slideIndex * 100}%)` }}
        ref={element}
      >
        {slides.map((item, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 w-full h-full ${className}`}
            style={{ ...style }}
            onTouchStart={(e) => {
              element.current?.classList.toggle("transition");
              element.current?.classList.toggle("duration-100");
              element.current?.classList.toggle("md:duration-300");
              setTouchX(e.touches[0].clientX);
              setPrevSlideIndex(slideIndex);
            }}
            onTouchMove={(e) => {
              const deltaX = touchX - e.touches[0].clientX;
              const percentScreen = (deltaX / window.innerWidth) * 1.5;

              if (
                prevSlideIndex + percentScreen > 0 &&
                prevSlideIndex + percentScreen < slides.length - 1
              ) {
                setSlideIndex(prevSlideIndex + percentScreen);
              }
            }}
            onTouchEnd={() => {
              element.current?.classList.toggle("transition");
              element.current?.classList.toggle("duration-100");
              element.current?.classList.toggle("md:duration-300");

              setSlideIndex((current) => Math.round(current));
            }}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="absolute left-0 right-0 text-center bottom-2">
        <span className="px-4 rounded-full text-zinc-600 dark:text-zinc-400 bg-neutral-200 dark:bg-neutral-900 bg-opacity-80 dark:bg-opacity-80">{`${Math.round(
          Math.round(slideIndex + 1),
        )} / ${slides.length}`}</span>
      </div>
      <button
        className="absolute top-0 bottom-0 left-0 hidden p-2 transition sm:block text-zinc-600 dark:text-zinc-400 bg-neutral-200 dark:bg-neutral-900 bg-opacity-80 dark:bg-opacity-80 hover:bg-opacity-70 dark:hover:hover:bg-opacity-70"
        onClick={() =>
          setSlideIndex((current) =>
            current - 1 < 0 ? slides.length - 1 : current - 1,
          )
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-0 bottom-0 right-0 hidden p-2 transition sm:block text-zinc-600 dark:text-zinc-400 bg-neutral-200 dark:bg-neutral-900 bg-opacity-80 dark:bg-opacity-80 hover:bg-opacity-70 dark:hover:hover:bg-opacity-70"
        onClick={() =>
          setSlideIndex((current) =>
            current + 1 > slides.length - 1 ? 0 : current + 1,
          )
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  );
};
