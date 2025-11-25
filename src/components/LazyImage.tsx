import React, { useState, useEffect, useRef } from 'react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  placeholderSrc?: string;
  className?: string;
}

export const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  placeholderSrc = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect width="400" height="300" fill="%23f0f0f0"/%3E%3C/svg%3E',
  className = '',
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(placeholderSrc);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            const actualSrc = img.dataset.src;
            
            if (actualSrc && actualSrc !== imageSrc) {
              const imageLoader = new Image();
              imageLoader.src = actualSrc;
              imageLoader.onload = () => {
                setImageSrc(actualSrc);
                setIsLoaded(true);
              };
            }
            
            observer.unobserve(img);
          }
        });
      },
      {
        rootMargin: '50px',
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [src, imageSrc]);

  return (
    <img
      ref={imgRef}
      src={imageSrc}
      data-src={src}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-70'} transition-opacity duration-300`}
      loading="lazy"
      {...props}
    />
  );
};
