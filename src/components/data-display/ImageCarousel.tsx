'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image, { StaticImageData } from 'next/image';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

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

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: 'free-snap',
    slides: {
      perView: 1.25,
      spacing: 16,
    },
    breakpoints: {
      '(min-width: 768px)': {
        slides: { perView: 2.5, spacing: 24 },
      },
    },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div ref={sliderRef} className="keen-slider max-w-full">
      {images.map((img, i) => {
        const src = theme === 'dark' && img.dark ? img.dark : img.light;
        return (
          <div
            key={i}
            className="keen-slider__slide rounded-lg overflow-hidden shadow-md"
          >
            <Image
              src={src}
              alt={img.alt || `Preview ${i + 1}`}
              width={600}
              height={400}
              className="w-full h-auto object-contain"
              unoptimized
            />
          </div>
        );
      })}
    </div>
  );
};

export default ImageCarousel;