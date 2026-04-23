/**
 * Thin wrapper around <img> that prefers the WebP sibling of any .jpg/.jpeg/.png
 * served from /public. Also enforces width+height (prevents CLS)
 * and lazy-loading for below-the-fold images.
 */
interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
  priority?: boolean;
  sizes?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  sizes,
}: Props) {
  const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');
  const hasWebpVariant = /\.(jpe?g|png)$/i.test(src);

  return (
    <picture>
      {hasWebpVariant && <source srcSet={webpSrc} type="image/webp" />}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        sizes={sizes}
        loading={priority ? 'eager' : 'lazy'}
        decoding={priority ? 'sync' : 'async'}
        fetchPriority={priority ? 'high' : 'auto'}
      />
    </picture>
  );
}
