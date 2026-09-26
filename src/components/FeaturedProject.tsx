import React, { useState } from 'react';
import { Sparkles, Layers, Sliders, Play, ArrowUpRight } from 'lucide-react';
import { Project } from '../data/projects';
import { CursorType } from './CustomCursor';

interface FeaturedProjectProps {
  project: Project;
  onOpenModal: (project: Project) => void;
  setCursorType: (type: CursorType, label?: string) => void;
}

export const FeaturedProject: React.FC<FeaturedProjectProps> = ({
  project,
  onOpenModal,
  setCursorType,
}) => {
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percent = (x / rect.width) * 100;
    setSliderPos(percent);
  };

  return (
    <section id="featured" className="py-24 px-6 md:px-12 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[var(--border-subtle)]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>03 // FLAGSHIP COMMERCIAL STUDY</span>
            </div>
            <h2 className="font-display font-black text-3xl sm:text-5xl uppercase tracking-tight text-[var(--text-primary)]">
              SOLARIS · THE ANATOMY OF AN AI COMMERCIAL
            </h2>
          </div>
          <div className="text-xs font-mono text-[var(--text-secondary)]">
            <span>CLIENT: {project.client}</span>
            <span className="mx-2">·</span>
            <span className="text-[var(--accent)]">4K DCI BROADCAST</span>
          </div>
        </div>

        {/* Interactive Breakdown: Before (Latent Noise/3D Blockout) vs After (Final 4K Cinema Master) */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Column: Interactive Comparison Canvas */}
          <div className="lg:col-span-8">
            <div className="mb-3 flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
              <span className="text-[var(--text-primary)] flex items-center gap-1.5">
                <Sliders className="w-3.5 h-3.5 text-[var(--accent)]" />
                <span>INTERACTIVE COMPARISON: DRAG TO REVEAL PIPELINE</span>
              </span>
              <span>{Math.round(sliderPos)}% COMPOSITED</span>
            </div>

            <div
              className="relative aspect-[21/9] sm:aspect-[2.39/1] w-full overflow-hidden border border-[var(--border-strong)] cursor-ew-resize select-none"
              onMouseDown={() => {
                setIsDragging(true);
                setCursorType('DRAG');
              }}
              onMouseUp={() => {
                setIsDragging(false);
                setCursorType('DEFAULT');
              }}
              onMouseLeave={() => {
                setIsDragging(false);
                setCursorType('DEFAULT');
              }}
              onMouseMove={handleMouseMove}
            >
              {/* Background: Latent Vector / Raw Pass */}
              <div className="absolute inset-0 bg-[#0d0d0d] flex items-center justify-center overflow-hidden">
                <img
                  src={project.image}
                  alt="Raw Latent Pass"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover filter grayscale contrast-150 opacity-40 scale-105"
                />
                <div className="absolute top-4 left-4 bg-black/80 px-2 py-1 text-[10px] font-mono text-[var(--accent-bright)] border border-[var(--accent)]/30 shadow-[0_0_12px_rgba(0,166,246,0.2)]">
                  PASS A: NEURAL VECTOR & DEPTH MATRIX
                </div>
              </div>

              {/* Foreground: Final ACEScc Graded Master */}
              <div
                className="absolute inset-0 overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
              >
                <img
                  src={project.image}
                  alt="Final 4K Master"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/80 px-2 py-1 text-[10px] font-mono text-emerald-400 border border-emerald-400/30">
                  PASS B: 4K DCI COLOR GRADED FINISH
                </div>
              </div>

              {/* Slider Divider Bar */}
              <div
                className="absolute top-0 bottom-0 w-[2px] bg-[var(--accent)] pointer-events-none shadow-[0_0_10px_rgba(226,168,92,0.8)]"
                style={{ left: `${sliderPos}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-[var(--bg-primary)] border-2 border-[var(--accent)] flex items-center justify-center text-[10px] font-mono font-bold text-[var(--accent)]">
                  ↔
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
              <span>ZERO TEMPORAL JITTER</span>
              <span>1200 FPS EQUIVALENT FLUID DYNAMICS</span>
              <span>ACES COLOR SPACE</span>
            </div>
          </div>

          {/* Right Column: Production Narrative & CTA */}
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block mb-1">
                CREATIVE DIRECTION
              </span>
              <h3 className="font-display text-2xl font-bold uppercase text-[var(--text-primary)] leading-snug">
                Molten Basalt Meets Liquid Gold
              </h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)] font-body leading-relaxed">
                By harnessing custom-trained diffusion models, we captured fluid micro-physics,
                surface tension droplet kinetics, and refractive amber crystal at an fidelity level
                traditionally demanding months of CG simulation and physical studio rig time.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[var(--border-subtle)] text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-secondary)]">TIMELINE SAVINGS</span>
                <span className="text-[var(--text-primary)] font-semibold">12 WEEKS → 8 DAYS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-secondary)]">MASTER ASSETS</span>
                <span className="text-[var(--text-primary)] font-semibold">18 BESPOKE CUTS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-[var(--text-secondary)]">VIEWERSHIP REACH</span>
                <span className="text-[var(--text-primary)] font-semibold">14.8M IMPRESSIONS</span>
              </div>
            </div>

            <button
              onClick={() => onOpenModal(project)}
              className="w-full py-3.5 bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[var(--accent)] transition-colors flex items-center justify-center gap-2"
              onMouseEnter={() => setCursorType('OPEN', 'CASE')}
              onMouseLeave={() => setCursorType('DEFAULT')}
            >
              <span>INSPECT COMPLETE WORKFLOW</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
