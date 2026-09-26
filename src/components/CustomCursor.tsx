import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export type CursorType = 'DEFAULT' | 'VIEW' | 'PLAY' | 'OPEN' | 'DRAG' | 'CLOSE';

interface CustomCursorProps {
  cursorType: CursorType;
  label?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorType, label }) => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detect touch device or reduced motion
    const checkTouch = () => {
      return (
        'ontouchstart' in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
        window.matchMedia('(pointer: coarse)').matches
      );
    };

    if (checkTouch()) {
      setIsTouch(true);
      return;
    }

    const cursor = cursorRef.current;
    if (!cursor) return;

    const onMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.18,
        ease: 'power3.out',
        overwrite: 'auto'
      });
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
    };
  }, [isVisible]);

  // Adjust cursor scale and style based on cursorType
  useEffect(() => {
    if (isTouch) return;
    const cursor = cursorRef.current;
    if (!cursor) return;

    if (cursorType === 'DEFAULT') {
      gsap.to(cursor, {
        width: 10,
        height: 10,
        backgroundColor: 'var(--text-primary)',
        borderColor: 'transparent',
        duration: 0.25,
        ease: 'power2.out'
      });
    } else {
      gsap.to(cursor, {
        width: 72,
        height: 72,
        backgroundColor: 'var(--text-primary)',
        borderColor: 'var(--accent)',
        duration: 0.28,
        ease: 'back.out(1.5)'
      });
    }
  }, [cursorType, isTouch]);

  if (isTouch) return null;

  const getLabel = () => {
    if (label) return label;
    switch (cursorType) {
      case 'VIEW': return 'VIEW';
      case 'PLAY': return 'PLAY';
      case 'OPEN': return 'OPEN';
      case 'DRAG': return 'DRAG';
      case 'CLOSE': return 'CLOSE';
      default: return '';
    }
  };

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none z-[9998] flex items-center justify-center transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
      style={{
        boxShadow: cursorType !== 'DEFAULT' ? '0 0 25px rgba(0, 166, 246, 0.5)' : 'none'
      }}
    >
      {cursorType !== 'DEFAULT' && (
        <span
          ref={textRef}
          className="text-[10px] font-mono tracking-widest font-semibold uppercase select-none text-[var(--bg-primary)] transition-colors duration-200"
        >
          {getLabel()}
        </span>
      )}
    </div>
  );
};
