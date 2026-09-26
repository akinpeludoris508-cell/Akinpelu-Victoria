import React, { useState } from 'react';
import { Film, Compass, Cpu, Video, Volume2, CheckCircle2, ChevronRight } from 'lucide-react';
import { CursorType } from './CustomCursor';

interface CreativeProcessProps {
  setCursorType: (type: CursorType, label?: string) => void;
}

interface Step {
  num: string;
  title: string;
  tagline: string;
  description: string;
  milestones: string[];
  specs: string;
  icon: React.ComponentType<{ className?: string }>;
  previewImage: string;
}

const STEPS: Step[] = [
  {
    num: '01',
    title: 'CONCEPT',
    tagline: 'Idea Development & Creative Direction',
    description: 'We deconstruct the brand narrative into emotional beats, camera movements, and tonal reference boards. Every cinematic film begins with a concrete script and architectural visual treatment.',
    milestones: ['Narrative Treatment Deck', 'Emotional Mood & Tone Board', 'Key Frame Storyboard Blocks'],
    specs: 'PHASE: PRE-PRODUCTION',
    icon: Compass,
    previewImage: '/src/assets/images/creator_manifesto_portrait_1790418059269.jpg'
  },
  {
    num: '02',
    title: 'VISUAL WORLD',
    tagline: 'Building Environments, Characters & Atmosphere',
    description: 'Establishing custom stylistic tokens, color palettes, and environmental rules. Whether crafting volcanic Icelandic landscapes or hyper-luxurious fluid physics, the aesthetic universe is strictly defined.',
    milestones: ['Bespoke LoRA Finetunes', 'Lighting Matrix & Color Bible', 'Character & Geometry Consistency Passes'],
    specs: 'PHASE: WORLD ARCHITECTURE',
    icon: Film,
    previewImage: '/src/assets/images/project_biome_documentary_1790418032989.jpg'
  },
  {
    num: '03',
    title: 'GENERATION',
    tagline: 'Synthesizing High-Fidelity Video Sequences',
    description: 'Directing state-of-the-art diffusion models (Runway Gen-3, Sora, Flux) through multi-stage prompt engineering and latent upscaling passes to generate cinematic raw footage plates.',
    milestones: ['Seed Exploration (100+ variations)', 'High-Res Optical Flow Latent Passes', 'Artifact Removal & Zero-Jitter Clamping'],
    specs: 'PHASE: NEURAL PRODUCTION',
    icon: Cpu,
    previewImage: '/src/assets/images/project_solaris_fragrance_1790418010469.jpg'
  },
  {
    num: '04',
    title: 'MOTION',
    tagline: 'Camera Movement, Transitions & Cinematic Timing',
    description: 'Injecting authentic optical camera physics: simulated anamorphic lens distortion, 180-degree shutter angles, crane sweeps, and precision frame-rate pacing.',
    milestones: ['Motion Vector Path Guidance', 'Camera Rig Damping Simulation', 'Anamorphic Flare & Bokeh Dispersion'],
    specs: 'PHASE: MOTION DIRECTION',
    icon: Video,
    previewImage: '/src/assets/images/project_chrono_automotive_1790418022456.jpg'
  },
  {
    num: '05',
    title: 'SOUND',
    tagline: 'Voiceover, Ambience & Neural Audio Design',
    description: 'Sound is 50% of the film experience. We design bespoke synthetic foley, deep sub-rumble drone landscapes, spatial surround fields, and custom musical scores.',
    milestones: ['Multi-layer Foley Synthesis', 'Spatial Surround & Sub-Bass Engineering', 'Master Vocal / Narrative Mixing'],
    specs: 'PHASE: SONIC ARCHITECTURE',
    icon: Volume2,
    previewImage: '/src/assets/images/hero_cinematic_ai_1790417996387.jpg'
  },
  {
    num: '06',
    title: 'FINAL EDIT',
    tagline: 'Compositing, ACES Color Grading & Delivery',
    description: 'Mastered in DaVinci Resolve with ACEScc color science. We deliver broadcast-spec 4K/8K DCI deliverables formatted for global television, cinema screens, and multi-ratio social displays.',
    milestones: ['ACEScc Color Pipeline', 'Seamless Multi-Ratio Master Exports', 'DCP Theatrical Package Creation'],
    specs: 'PHASE: POST-PRODUCTION & MASTERING',
    icon: CheckCircle2,
    previewImage: '/src/assets/images/project_haute_cyber_1790418047662.jpg'
  }
];

export const CreativeProcess: React.FC<CreativeProcessProps> = ({ setCursorType }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);
  const activeStep = STEPS[activeStepIndex];

  return (
    <section id="process" className="py-28 px-6 md:px-12 bg-[var(--bg-surface)] border-y border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="pb-10 border-b border-[var(--border-subtle)] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-2">
              <Film className="w-3.5 h-3.5" />
              <span>05 // THE FILMMAKING METHODOLOGY</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[var(--text-primary)]">
              CREATIVE PROCESS
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-body max-w-md">
            How we transform an abstract concept into an unforgettable cinematic visual master
            through an exacting 6-stage production framework.
          </p>
        </div>

        {/* Step Progression Timeline Scrubber */}
        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {STEPS.map((step, idx) => {
            const isActive = idx === activeStepIndex;
            return (
              <button
                key={step.num}
                onClick={() => setActiveStepIndex(idx)}
                onMouseEnter={() => setCursorType('OPEN', `STEP ${step.num}`)}
                onMouseLeave={() => setCursorType('DEFAULT')}
                className={`text-left p-4 border transition-all duration-300 flex flex-col justify-between h-28 cursor-pointer ${
                  isActive
                    ? 'border-[var(--accent)] bg-[var(--bg-elevated)] shadow-md'
                    : 'border-[var(--border-subtle)] bg-[var(--bg-primary)]/50 hover:border-[var(--border-strong)]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`font-mono text-xs font-bold ${
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {step.num}
                  </span>
                  <step.icon
                    className={`w-4 h-4 ${
                      isActive ? 'text-[var(--accent)]' : 'text-[var(--text-muted)]'
                    }`}
                  />
                </div>
                <div>
                  <span
                    className={`font-display text-sm font-bold uppercase block tracking-tight ${
                      isActive ? 'text-[var(--text-primary)]' : 'text-[var(--text-secondary)]'
                    }`}
                  >
                    {step.title}
                  </span>
                  <span className="text-[10px] font-mono text-[var(--text-muted)] truncate block">
                    {step.specs}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Showcase */}
        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[var(--bg-primary)] border border-[var(--border-subtle)] p-8 sm:p-12">
          {/* Left: Narrative Stage Detail */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3 text-xs font-mono text-[var(--accent)]">
              <span>STAGE {activeStep.num} OF 06</span>
              <span>·</span>
              <span>{activeStep.specs}</span>
            </div>

            <h3 className="font-display text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-[var(--text-primary)]">
              {activeStep.title} — {activeStep.tagline}
            </h3>

            <p className="text-sm sm:text-base text-[var(--text-secondary)] font-body leading-relaxed">
              {activeStep.description}
            </p>

            <div className="space-y-2 pt-4 border-t border-[var(--border-subtle)]">
              <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] block mb-2">
                KEY DELIVERABLES IN THIS STAGE
              </span>
              {activeStep.milestones.map((m, i) => (
                <div key={i} className="flex items-center gap-2 text-xs font-mono text-[var(--text-primary)]">
                  <ChevronRight className="w-3.5 h-3.5 text-[var(--accent)]" />
                  <span>{m}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                disabled={activeStepIndex === 0}
                onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                className="px-4 py-2 border border-[var(--border-subtle)] text-xs font-mono disabled:opacity-30 disabled:cursor-not-allowed hover:border-[var(--text-primary)] transition-colors"
              >
                ← PREV STEP
              </button>
              <button
                disabled={activeStepIndex === STEPS.length - 1}
                onClick={() => setActiveStepIndex((prev) => Math.min(STEPS.length - 1, prev + 1))}
                className="px-4 py-2 bg-[var(--text-primary)] text-[var(--bg-primary)] text-xs font-mono font-semibold disabled:opacity-30 disabled:cursor-not-allowed hover:bg-[var(--accent)] transition-colors"
              >
                NEXT STEP →
              </button>
            </div>
          </div>

          {/* Right: Visual Stage Frame */}
          <div className="lg:col-span-6 relative aspect-[16/10] w-full overflow-hidden border border-[var(--border-strong)] bg-black">
            <img
              key={activeStep.num}
              src={activeStep.previewImage}
              alt={activeStep.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-opacity duration-500 animate-fadeIn"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 text-xs font-mono text-white/90">
              <span className="text-[10px] text-white/60 block">PRODUCTION FRAME</span>
              <span className="font-semibold uppercase tracking-wider">{activeStep.title} ARTIFACT</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
