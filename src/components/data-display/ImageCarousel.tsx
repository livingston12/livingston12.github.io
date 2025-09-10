'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image, { StaticImageData } from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselImage {
  light: string | StaticImageData;
  dark?: string | StaticImageData;
  alt?: string;
}

interface ImageCarouselProps {
  images: CarouselImage[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 0,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 1, spacing: 0 },
      },
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Slider */}
      <div ref={sliderRef} className="keen-slider rounded-lg overflow-hidden shadow-lg">
        {images.map((img, i) => {
          const src = theme === 'dark' && img.dark ? img.dark : img.light;
          return (
            <div key={i} className="keen-slider__slide">
              <Image
                src={src}
                alt={img.alt || `Preview ${i + 1}`}
                width={800}
                height={500}
                className="w-full h-[400px] object-cover"
                unoptimized
              />
            </div>
          );
        })}
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-700"
        onClick={() => instanceRef.current?.prev()}
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-800/60 text-white p-2 rounded-full hover:bg-gray-700"
        onClick={() => instanceRef.current?.next()}
      >
        <ChevronRight className="w-5 h-5" />
      </button>
    </div>
  );
};

export default ImageCarousel;