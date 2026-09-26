import React from 'react';
import { Sparkles, Award, Globe2, Film, Check } from 'lucide-react';
import { CursorType } from './CustomCursor';

interface AboutManifestoProps {
  setCursorType: (type: CursorType, label?: string) => void;
  onOpenInquiry: () => void;
}

export const AboutManifesto: React.FC<AboutManifestoProps> = ({ setCursorType, onOpenInquiry }) => {
  return (
    <section id="about" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Kicker */}
      <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-6">
        <Sparkles className="w-3.5 h-3.5" />
        <span>06 // THE CREATIVE MANIFESTO</span>
      </div>

      {/* Main Manifesto Headline */}
      <div className="max-w-5xl">
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl uppercase tracking-tighter text-[var(--text-primary)] leading-[0.95]">
          <span>I DON’T JUST GENERATE VIDEOS.</span>
          <br />
          <span className="text-[var(--accent)]">I BUILD VISUAL WORLDS.</span>
        </h2>
      </div>

      {/* Editorial Split: Portrait & Principles */}
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Artistic Cinematic Creator Portrait */}
        <div className="lg:col-span-5 relative aspect-[3/4] w-full overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-surface)]">
          <img
            src="/src/assets/images/creator_manifesto_portrait_1790418059269.jpg"
            alt="AI Director Portrait"
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-80" />

          <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-xs font-mono text-white/90">
            <div>
              <span className="text-[10px] text-white/60 uppercase block">DIRECTOR & FOUNDER</span>
              <span className="text-base font-display font-bold">KAIROS</span>
            </div>
            <div className="text-right text-[10px] text-white/60">
              <span>EST. 2024</span>
              <br />
              <span>TOKYO · LA · PARIS</span>
            </div>
          </div>
        </div>

        {/* Right: Narrative Philosophy & Strategic Pillars */}
        <div className="lg:col-span-7 space-y-8">
          <p className="text-lg sm:text-xl text-[var(--text-primary)] font-body leading-relaxed font-normal">
            I use artificial intelligence as an uncompromising filmmaking instrument — transforming
            fleeting concepts into cinematic visuals, luxury product stories, advertisements, and
            impossible worlds.
          </p>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-body leading-relaxed">
            The era of random prompts and glossy robotic novelty is over. High-retention filmmaking
            demands intentional art direction: camera blocking, optics, color harmony, and emotive
            timing. I bridge the technical frontier of neural synthesis with the timeless principles
            of cinematic direction.
          </p>

          {/* 4 Pillars of the Studio */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-[var(--border-subtle)]">
            <div className="space-y-1.5">
              <span className="text-xs font-mono text-[var(--accent)] font-semibold">01 / CINEMATIC RIGOR</span>
              <h4 className="font-display font-bold text-base text-[var(--text-primary)]">Camera Physics First</h4>
              <p className="text-xs text-[var(--text-secondary)] font-body">
                We simulate real anamorphic glass, authentic focal lengths, and camera dampening rigs so the image feels physically captured.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono text-[var(--accent)] font-semibold">02 / BRAND ALCHEMY</span>
              <h4 className="font-display font-bold text-base text-[var(--text-primary)]">Commercial Precision</h4>
              <p className="text-xs text-[var(--text-secondary)] font-body">
                Respecting brand codes, packaging fidelity, and consumer psychology. Never sacrificing luxury credibility for novelty.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono text-[var(--accent)] font-semibold">03 / TEMPORAL CONSISTENCY</span>
              <h4 className="font-display font-bold text-base text-[var(--text-primary)]">Zero Jitter Latents</h4>
              <p className="text-xs text-[var(--text-secondary)] font-body">
                Multi-pass optical flow stabilization prevents silhouette morphing, flickering, and temporal noise across cuts.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-xs font-mono text-[var(--accent)] font-semibold">04 / SONIC WORLDBUILDING</span>
              <h4 className="font-display font-bold text-base text-[var(--text-primary)]">Spatial Audio Craft</h4>
              <p className="text-xs text-[var(--text-secondary)] font-body">
                Every frame is scored with custom sub-bass rumble, synthesized foley, and pristine spatial audio mastering.
              </p>
            </div>
          </div>

          {/* Verifiable Studio Milestones */}
          <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-between gap-6 text-xs font-mono">
            <div>
              <span className="text-[var(--text-muted)] block mb-1">GLOBAL REACH</span>
              <span className="font-display text-2xl font-bold text-[var(--text-primary)]">42M+</span>
              <span className="text-[10px] text-[var(--text-secondary)] block">Verified Views</span>
            </div>

            <div>
              <span className="text-[var(--text-muted)] block mb-1">AWARDS</span>
              <span className="font-display text-2xl font-bold text-[var(--accent)]">3× PRIX</span>
              <span className="text-[10px] text-[var(--text-secondary)] block">AI Film Fest 2025/2026</span>
            </div>

            <div>
              <span className="text-[var(--text-muted)] block mb-1">COMMISSIONED WORKS</span>
              <span className="font-display text-2xl font-bold text-[var(--text-primary)]">38+</span>
              <span className="text-[10px] text-[var(--text-secondary)] block">Commercial Masters</span>
            </div>

            <button
              onClick={onOpenInquiry}
              className="px-6 py-3 border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              onMouseEnter={() => setCursorType('OPEN', 'DISCUSS')}
              onMouseLeave={() => setCursorType('DEFAULT')}
            >
              COMMISSION A FILM →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
