import { FC } from 'react';
import { useSwiper } from 'swiper/react';

import { TCarouselPaginationProps } from './types';

export const CarouselPagination: FC<TCarouselPaginationProps> = ({
  slidesLength,
  currentSlide,
}) => {
  const swiper = useSwiper();

  return (
    <div className="flex gap-4 justify-center items-center mt-[8.8rem] sm:mt-[1.1rem]">
      {[...Array(slidesLength).keys()].map((slideIndex) => (
        <button
          className={`w-4 h-4 rounded-full ${
            currentSlide === slideIndex ? 'bg-pink' : 'bg-gray'
          }`}
          key={slideIndex}
          onClick={() => swiper.slideTo(slideIndex)}
        />
      ))}
    </div>
  );
};
