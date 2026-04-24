import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import type { GalleryItem } from '../data/galleryManifest';

interface Props {
  items: readonly GalleryItem[];
  index: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function GalleryLightbox({ items, index, isOpen, onClose, onPrev, onNext }: Props) {
  const item = items[index];

  const onKey = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onKey]);

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isOpen]);

  if (!isOpen || !item) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/92 backdrop-blur-sm"
      role="dialog"
      aria-modal
      aria-label="Gallery image"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
        aria-label="Close"
      >
        <X size={24} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        className="absolute left-2 md:left-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
        aria-label="Previous"
      >
        <ChevronLeft size={32} />
      </button>
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        className="absolute right-2 md:right-4 z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white"
        aria-label="Next"
      >
        <ChevronRight size={32} />
      </button>
      <figure
        className="max-w-[min(100%,960px)] max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <picture className="rounded-lg overflow-hidden shadow-2xl">
          <source srcSet={item.avif} type="image/avif" />
          <source srcSet={item.webp} type="image/webp" />
          <img
            src={item.webp}
            alt={item.alt}
            width={item.width}
            height={item.height}
            className="max-h-[75vh] w-auto h-auto object-contain mx-auto"
            loading="eager"
            decoding="sync"
          />
        </picture>
        <figcaption className="text-center text-sm text-slate-300 mt-3 px-4 line-clamp-2">{item.alt}</figcaption>
        <p className="text-center text-xs text-slate-500 mt-1">
          {index + 1} / {items.length}
        </p>
      </figure>
    </div>
  );
}
