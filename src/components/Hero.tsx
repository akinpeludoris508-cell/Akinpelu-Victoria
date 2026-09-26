import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowDown, Play, Sparkles } from 'lucide-react';
import { CursorType } from './CustomCursor';

interface HeroProps {
  setCursorType: (type: CursorType, label?: string) => void;
  onExploreWork: () => void;
  onStartProject: () => void;
  onOpenShowreel: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  setCursorType,
  onExploreWork,
  onStartProject,
  onOpenShowreel,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const bgVideoRef = useRef<HTMLVideoElement>(null);
  const filmDataRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle cinematic zoom and float on background
      gsap.to(bgVideoRef.current, {
        scale: 1.08,
        y: -15,
        duration: 18,
        ease: 'sine.inOut',
        yoyo: true,
        repeat: -1,
      });

      // Staggered reveal for headline characters/words
      if (headlineRef.current) {
        gsap.fromTo(
          headlineRef.current.children,
          { opacity: 0, y: 35, filter: 'blur(8px)' },
          {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            duration: 1.2,
            stagger: 0.15,
            ease: 'power3.out',
            delay: 0.2,
          }
        );
      }

      // Metadata elements fade in
      if (filmDataRef.current) {
        gsap.fromTo(
          filmDataRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 1.5, delay: 0.8, ease: 'power2.out' }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden pt-28 pb-12 px-6 md:px-12 select-none"
    >
      {/* Background Visual Layer: Cinematic AI Atmosphere */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          ref={bgVideoRef}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter brightness-[0.68] contrast-[1.15]"
          src="https://res.cloudinary.com/so8uohki/video/upload/v1790425154/Creating_fashion_commercial_video_20260922112658.mp4"
        />

        {/* Cinematic Scrim Gradient: ensures 100% WCAG AAA legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/45 to-[var(--bg-primary)]/75" />

        {/* Anamorphic horizontal lens flare */}
        <div className="absolute top-1/3 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[var(--accent)]/35 to-transparent blur-[1px] pointer-events-none" />
      </div>

      {/* Viewfinder Top Bar */}
      <div
        ref={filmDataRef}
        className="relative z-10 w-full flex items-center justify-end text-[11px] font-mono tracking-widest text-[var(--text-secondary)] border-b border-[var(--border-subtle)] pb-4 opacity-80"
      >
        <span className="text-[var(--text-primary)] font-medium">AI FILMMAKER</span>
      </div>

      {/* Main Editorial Layout */}
      <div className="relative z-10 my-auto py-12 max-w-6xl">
        {/* Category kicker */}
        <div className="mb-6 flex items-center gap-3 text-xs font-mono tracking-widest text-[var(--accent)] uppercase">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI Video Creator · AI Product Ads & Commercials · AI Cinematic Videos</span>
        </div>

        {/* Primary Headline */}
        <h1
          ref={headlineRef}
          className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] leading-[0.9] tracking-tighter text-[var(--text-primary)] uppercase max-w-5xl"
          style={{ textWrap: 'balance' }}
        >
          <span className="block">I CREATE</span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[var(--text-primary)] to-[var(--text-secondary)]">
            WORLDS
          </span>
          <span className="block text-[var(--accent)]">WITH ARTIFICIAL</span>
          <span className="block">INTELLIGENCE.</span>
        </h1>

        {/* Supporting description */}
        <p className="mt-8 text-base sm:text-lg md:text-xl text-[var(--text-secondary)] max-w-2xl font-body font-normal leading-relaxed">
          Cinematic visuals, product stories, and impossible worlds — synthesized at the boundary
          of human art direction and state-of-the-art neural diffusion.
        </p>

        {/* Action Buttons & Showreel Trigger */}
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <button
            onClick={onExploreWork}
            className="group px-7 py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[var(--accent)] transition-all flex items-center gap-2"
            onMouseEnter={() => setCursorType('OPEN', 'WORK')}
            onMouseLeave={() => setCursorType('DEFAULT')}
          >
            <span>EXPLORE THE WORK</span>
            <ArrowDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
          </button>

          <button
            onClick={onStartProject}
            className="px-7 py-3.5 border border-[var(--border-strong)] text-[var(--text-primary)] font-mono text-xs font-bold uppercase tracking-wider hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all"
            onMouseEnter={() => setCursorType('OPEN', 'START')}
            onMouseLeave={() => setCursorType('DEFAULT')}
          >
            START A PROJECT
          </button>

          <button
            onClick={onOpenShowreel}
            className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors ml-2 py-2"
            onMouseEnter={() => setCursorType('PLAY', 'REEL')}
            onMouseLeave={() => setCursorType('DEFAULT')}
          >
            <span className="w-7 h-7 rounded-full border border-[var(--border-strong)] flex items-center justify-center">
              <Play className="w-3 h-3 fill-current ml-0.5" />
            </span>
            <span>WATCH 2026 REEL (01:15)</span>
          </button>
        </div>
      </div>

      {/* Frame Bottom Markers & Scroll Hint */}
      <div className="relative z-10 w-full flex items-end justify-between text-xs font-mono text-[var(--text-muted)] pt-6 border-t border-[var(--border-subtle)]">
        <div className="flex flex-col gap-1">
          <span className="text-[var(--text-secondary)]">KAIROS VISUAL LAB</span>
          <span className="text-[10px]">TOKYO · PARIS · LOS ANGELES</span>
        </div>

        <button
          onClick={onExploreWork}
          className="flex flex-col items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors cursor-pointer"
          onMouseEnter={() => setCursorType('OPEN', 'SCROLL')}
          onMouseLeave={() => setCursorType('DEFAULT')}
        >
          <span className="text-[10px] tracking-widest uppercase">SCROLL TO WITNESS</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </button>

        <div className="hidden sm:flex flex-col items-end gap-1 text-[10px] tabular-nums">
          <span>LATENT LATENCY: 0.14s</span>
          <span>4K MASTER READY</span>
        </div>
      </div>
    </section>
  );
};
