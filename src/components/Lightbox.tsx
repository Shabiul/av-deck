'use client';

import { useEffect, useCallback } from 'react';

export interface LightboxItem {
  type: 'image' | 'video';
  src: string;
  poster?: string;
  title: string;
  tag?: string;   // service / tool label
  meta?: string;  // secondary line (equipment · venue)
}

interface LightboxProps {
  items: LightboxItem[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
}

/**
 * Shared modal for images AND videos. Dark overlay, large media, caption bar,
 * prev/next arrows, keyboard support (Esc / ← / →), body scroll lock.
 * Videos use preload="metadata"; changing item remounts the <video> (via key)
 * so only one ever plays and it stops on navigate/close.
 */
export default function Lightbox({ items, index, onClose, onIndexChange }: LightboxProps) {
  const open = index !== null;

  const go = useCallback(
    (dir: number) => {
      if (index === null || items.length === 0) return;
      onIndexChange((index + dir + items.length) % items.length);
    },
    [index, items.length, onIndexChange],
  );

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') go(1);
      else if (e.key === 'ArrowLeft') go(-1);
    };
    document.addEventListener('keydown', onKey);
    document.body.classList.add('no-scroll');
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.classList.remove('no-scroll');
    };
  }, [open, go, onClose]);

  if (index === null) return null;
  const item = items[index];

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
      onClick={onClose}
    >
      <button className="lightbox-close" type="button" onClick={onClose} aria-label="Close">
        &times;
      </button>

      {items.length > 1 && (
        <>
          <button
            className="lightbox-arrow prev"
            type="button"
            aria-label="Previous"
            onClick={(e) => { e.stopPropagation(); go(-1); }}
          >
            <svg viewBox="0 0 24 24"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
          <button
            className="lightbox-arrow next"
            type="button"
            aria-label="Next"
            onClick={(e) => { e.stopPropagation(); go(1); }}
          >
            <svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6" /></svg>
          </button>
          <span className="lightbox-counter">{index + 1} / {items.length}</span>
        </>
      )}

      {item.type === 'video' ? (
        <video
          key={item.src}
          className="lightbox-video"
          src={encodeURI(item.src)}
          poster={item.poster}
          controls
          autoPlay
          preload="metadata"
          playsInline
          onClick={(e) => e.stopPropagation()}
        />
      ) : (
        <img src={item.src} alt={item.title} onClick={(e) => e.stopPropagation()} />
      )}

      <div className="lightbox-caption">
        <h3>{item.title}</h3>
        {item.tag && <span className="cap-tag">{item.tag}</span>}
        {item.meta && <p>{item.meta}</p>}
      </div>
    </div>
  );
}
