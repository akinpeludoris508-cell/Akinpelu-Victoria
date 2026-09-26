import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, CheckCircle2 } from 'lucide-react';
import { ServiceItem, SERVICES } from '../data/services';
import { CursorType } from './CustomCursor';

interface ServicesProps {
  setCursorType: (type: CursorType, label?: string) => void;
  onOpenInquiry: () => void;
}

export const Services: React.FC<ServicesProps> = ({ setCursorType, onOpenInquiry }) => {
  const [activeService, setActiveService] = useState<ServiceItem>(SERVICES[0]);

  return (
    <section id="services" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="pb-10 border-b border-[var(--border-subtle)] flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04 // CAPABILITIES & COMMERCIAL PRACTICE</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[var(--text-primary)]">
            HOW WE BUILD WORLDS
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[var(--text-secondary)] font-body max-w-md">
          Merging Hollywood cinematography conventions with cutting-edge diffusion pipelines.
          We replace logistical production gridlock with pure creative iteration.
        </p>
      </div>

      {/* Interactive Service Archive Layout */}
      <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Service List Selector */}
        <div className="lg:col-span-6 flex flex-col divide-y divide-[var(--border-subtle)]">
          {SERVICES.map((service) => {
            const isSelected = activeService.id === service.id;
            return (
              <div
                key={service.id}
                onMouseEnter={() => {
                  setActiveService(service);
                  setCursorType('OPEN', 'SELECT');
                }}
                onMouseLeave={() => setCursorType('DEFAULT')}
                onClick={() => setActiveService(service)}
                className={`py-8 cursor-pointer transition-all duration-300 group ${
                  isSelected ? 'pl-4' : 'hover:pl-2'
                }`}
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span
                    className={`text-xs font-mono tracking-widest transition-colors ${
                      isSelected ? 'text-[var(--accent)] font-bold' : 'text-[var(--text-muted)]'
                    }`}
                  >
                    {service.number} // CAPABILITY
                  </span>
                  <span className="text-[11px] font-mono text-[var(--text-muted)] opacity-0 group-hover:opacity-100 transition-opacity">
                    {service.statValue}
                  </span>
                </div>

                <h3
                  className={`font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold uppercase tracking-tight transition-colors ${
                    isSelected
                      ? 'text-[var(--text-primary)]'
                      : 'text-[var(--text-secondary)] group-hover:text-[var(--text-primary)]'
                  }`}
                >
                  {service.title}
                </h3>

                <p className="mt-3 text-sm text-[var(--text-secondary)] font-body leading-relaxed max-w-xl">
                  {service.description}
                </p>

                {isSelected && (
                  <div className="mt-6 flex flex-wrap gap-2 animate-fadeIn">
                    {service.deliverables.map((d, i) => (
                      <span
                        key={i}
                        className="text-xs font-body text-[var(--text-primary)] flex items-center gap-1.5 bg-[var(--bg-surface)] px-2.5 py-1 border border-[var(--border-subtle)]"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[var(--accent)] shrink-0" />
                        <span>{d}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right: Dynamic Visual Preview Display */}
        <div className="lg:col-span-6 sticky top-28 space-y-6">
          <div className="relative aspect-[16/10] w-full overflow-hidden border border-[var(--border-strong)] bg-[var(--bg-surface)]">
            <img
              key={activeService.id}
              src={activeService.previewImage}
              alt={activeService.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-opacity duration-700 animate-fadeIn"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-transparent" />

            <div className="absolute top-4 left-4 bg-[var(--bg-primary)]/80 backdrop-blur-md px-3 py-1 text-[11px] font-mono text-[var(--accent)] border border-[var(--border-subtle)]">
              ACTIVE PREVIEW // {activeService.number}
            </div>

            <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between text-xs font-mono text-white/90">
              <div>
                <span className="text-[10px] text-white/60 uppercase block">TARGET CLIENTS</span>
                <span className="font-semibold text-xs">{activeService.clientFit}</span>
              </div>
            </div>
          </div>

          {/* Quick Metrics Card */}
          <div className="p-6 bg-[var(--bg-surface)] border border-[var(--border-subtle)] flex items-center justify-between">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                {activeService.statLabel}
              </span>
              <span className="font-display text-xl font-bold text-[var(--accent)]">
                {activeService.statValue}
              </span>
            </div>

            <button
              onClick={onOpenInquiry}
              className="px-5 py-2.5 bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs font-bold uppercase tracking-wider hover:bg-[var(--accent)] transition-colors flex items-center gap-1.5"
              onMouseEnter={() => setCursorType('OPEN', 'BOOK')}
              onMouseLeave={() => setCursorType('DEFAULT')}
            >
              <span>COMMISSION THIS</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
