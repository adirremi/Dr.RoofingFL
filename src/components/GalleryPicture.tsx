interface Props {
  webp: string;
  avif: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  onClick?: () => void;
}

/**
 * Next-gen first: AVIF, then WebP, then <img> WebP (universal support today).
 * Fixes CLS with explicit width/height.
 */
export default function GalleryPicture({
  webp,
  avif,
  alt,
  width,
  height,
  className = '',
  imgClassName = '',
  sizes = '(min-width: 1280px) 25vw, (min-width: 768px) 33vw, 50vw',
  priority = false,
  onClick,
}: Props) {
  return (
    <div className={`overflow-hidden ${className}`} onClick={onClick} role={onClick ? 'button' : undefined}>
      <picture>
        <source srcSet={avif} type="image/avif" />
        <source srcSet={webp} type="image/webp" />
        <img
          src={webp}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          className={imgClassName}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={priority ? 'high' : 'auto'}
        />
      </picture>
    </div>
  );
}
