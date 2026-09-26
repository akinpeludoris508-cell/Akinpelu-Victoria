import React, { useState } from 'react';
import { Terminal, Copy, Check, FlaskConical, Sliders, ExternalLink, Cpu } from 'lucide-react';
import { LabExperiment, LAB_EXPERIMENTS } from '../data/experiments';
import { CursorType } from './CustomCursor';

interface AILabProps {
  setCursorType: (type: CursorType, label?: string) => void;
}

export const AILab: React.FC<AILabProps> = ({ setCursorType }) => {
  const [selectedExp, setSelectedExp] = useState<LabExperiment>(LAB_EXPERIMENTS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = (prompt: string) => {
    navigator.clipboard.writeText(prompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="lab" className="py-28 px-6 md:px-12 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)]">
      <div className="max-w-7xl mx-auto">
        {/* Lab Header */}
        <div className="pb-10 border-b border-[var(--border-subtle)] flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-2">
              <FlaskConical className="w-3.5 h-3.5" />
              <span>07 // EXPERIMENTAL RESEARCH ARCHIVE</span>
            </div>
            <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[var(--text-primary)]">
              THE AI LAB
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[var(--text-secondary)] font-body max-w-md">
            Our sandbox for pushing latent diffusion bounds: testing zero-jitter optical flows,
            non-Euclidean architectural metamorphosis, and ultra-high-speed fluid physics.
          </p>
        </div>

        {/* Lab Workspace Layout: Interactive Terminal + Visual Matrix */}
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Experiments Selector Cards */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[var(--text-muted)] block">
              EXPERIMENT LOGS (SELECT TO INSPECT)
            </span>

            {LAB_EXPERIMENTS.map((exp) => {
              const isSelected = selectedExp.id === exp.id;
              return (
                <div
                  key={exp.id}
                  onClick={() => {
                    setSelectedExp(exp);
                    setCursorType('OPEN', 'INSPECT');
                  }}
                  onMouseEnter={() => setCursorType('OPEN', 'LOG')}
                  onMouseLeave={() => setCursorType('DEFAULT')}
                  className={`p-5 border cursor-pointer transition-all duration-200 ${
                    isSelected
                      ? 'border-[var(--accent)] bg-[var(--bg-surface)] shadow-lg'
                      : 'border-[var(--border-subtle)] bg-[var(--bg-surface)]/50 hover:border-[var(--border-strong)]'
                  }`}
                >
                  <div className="flex items-center justify-between text-xs font-mono mb-2">
                    <span className="text-[var(--accent)] font-semibold">{exp.code}</span>
                    <span className="text-[var(--text-muted)]">{exp.date}</span>
                  </div>

                  <h4 className="font-display font-bold text-lg uppercase text-[var(--text-primary)]">
                    {exp.title}
                  </h4>

                  <div className="mt-2 flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
                    <span>{exp.category}</span>
                    <span
                      className={`text-[10px] font-semibold ${
                        exp.status === 'BREAKTHROUGH' ? 'text-[var(--accent-bright)]' : 'text-emerald-400'
                      }`}
                    >
                      {exp.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Active Terminal Inspector & Frame */}
          <div className="lg:col-span-7 bg-[var(--bg-surface)] border border-[var(--border-strong)] p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 text-xs font-mono">
              <div className="flex items-center gap-2 text-[var(--text-primary)] font-semibold">
                <Terminal className="w-4 h-4 text-[var(--accent)]" />
                <span>EXPERIMENT INSPECTOR // {selectedExp.code}</span>
              </div>
              <span className="text-[var(--accent)] font-mono text-[11px]">{selectedExp.engine}</span>
            </div>

            {/* Experiment Visual Preview Frame */}
            <div className="relative aspect-[16/9] w-full overflow-hidden border border-[var(--border-subtle)] bg-black">
              <img
                key={selectedExp.id}
                src={selectedExp.image}
                alt={selectedExp.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover transition-opacity duration-300 animate-fadeIn"
              />
              <div className="absolute top-3 left-3 bg-black/80 px-2 py-0.5 text-[10px] font-mono text-emerald-400 border border-emerald-400/20">
                LATENT FPS: {selectedExp.fps} · STEPS: {selectedExp.steps}
              </div>
            </div>

            {/* Prompt Architecture Terminal */}
            <div className="bg-[var(--bg-primary)] p-4 border border-[var(--border-subtle)] font-mono text-xs">
              <div className="flex items-center justify-between text-[10px] text-[var(--text-muted)] mb-2 uppercase tracking-wider">
                <span>PROMPT ARCHITECTURE (RAW TOKENS)</span>
                <button
                  onClick={() => handleCopyPrompt(selectedExp.promptArchitecture)}
                  className="flex items-center gap-1 text-[var(--accent)] hover:underline cursor-pointer"
                >
                  {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  <span>{copied ? 'COPIED TO CLIPBOARD' : 'COPY TOKENS'}</span>
                </button>
              </div>
              <p className="text-[var(--text-primary)] leading-relaxed bg-black/40 p-2 border border-white/5 select-all">
                "{selectedExp.promptArchitecture}"
              </p>
            </div>

            {/* Hypothesis & Result Notes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-body">
              <div className="p-3 bg-[var(--bg-primary)]/70 border border-[var(--border-subtle)]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block mb-1">
                  RESEARCH HYPOTHESIS
                </span>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {selectedExp.hypothesis}
                </p>
              </div>

              <div className="p-3 bg-[var(--bg-primary)]/70 border border-[var(--border-subtle)]">
                <span className="text-[10px] font-mono uppercase tracking-widest text-emerald-400 block mb-1">
                  OBSERVED BENCHMARK RESULT
                </span>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {selectedExp.resultNotes}
                </p>
              </div>
            </div>

            {/* Telemetry Metrics */}
            <div className="pt-4 border-t border-[var(--border-subtle)] grid grid-cols-3 gap-4 text-xs font-mono">
              <div>
                <span className="text-[var(--text-muted)] text-[10px] block">LATENT COHERENCE</span>
                <span className="text-[var(--text-primary)] font-semibold">{selectedExp.interactiveMetrics.latentCoherence}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] text-[10px] block">MOTION VECTORS</span>
                <span className="text-[var(--text-primary)] font-semibold">{selectedExp.interactiveMetrics.motionVectors}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] text-[10px] block">TEMPORAL FIDELITY</span>
                <span className="text-[var(--text-primary)] font-semibold">{selectedExp.interactiveMetrics.temporalFidelity}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
