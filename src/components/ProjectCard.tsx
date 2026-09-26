import React, { useRef, useState } from 'react';
import { Play, Maximize2, Sparkles, Film } from 'lucide-react';
import { Project } from '../data/projects';
import { CursorType } from './CustomCursor';

interface ProjectCardProps {
  project: Project;
  index: number;
  layoutVariant: 'full' | 'split' | 'vertical' | 'cinematic';
  onSelect: (project: Project) => void;
  setCursorType: (type: CursorType, label?: string) => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  layoutVariant,
  onSelect,
  setCursorType,
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    setCursorType('VIEW', 'EXPAND');
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCursorType('DEFAULT');
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const formattedIndex = String(index + 1).padStart(2, '0');

  // Compositions based on variant
  if (layoutVariant === 'full') {
    return (
      <article
        onClick={() => onSelect(project)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative w-full cursor-pointer overflow-hidden border border-[var(--border-subtle)] bg-[var(--bg-surface)] transition-all duration-500"
      >
        <div className="relative aspect-[21/9] sm:aspect-[2.39/1] w-full overflow-hidden">
          {project.videoUrl ? (
            <video
              ref={videoRef}
              src={project.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              poster={project.image}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}

          {/* Scrim overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-[var(--bg-primary)]/30 to-transparent opacity-85 transition-opacity group-hover:opacity-75" />

          {/* Top Metadata Header */}
          <div className="absolute top-4 left-6 right-6 flex items-center justify-between text-xs font-mono tracking-widest text-[var(--text-secondary)]">
            <div className="flex items-center gap-3">
              <span className="text-[var(--accent)] font-semibold">FILM #{formattedIndex}</span>
              <span>·</span>
              <span>{project.category}</span>
              <span>·</span>
              <span className="hidden sm:inline">{project.year}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider">{project.aspectRatio}</span>
              <Maximize2 className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          </div>

          {/* Bottom Project Details */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-wider block mb-1">
                {project.client}
              </span>
              <h3 className="font-display text-2xl sm:text-4xl md:text-5xl font-extrabold uppercase tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-[var(--text-secondary)] line-clamp-2 font-body max-w-xl">
                {project.tagline}
              </p>
            </div>

            <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-secondary)] shrink-0">
              <span className="px-3 py-1.5 border border-[var(--border-strong)] text-[var(--text-primary)] group-hover:bg-[var(--accent)] group-hover:text-[var(--bg-primary)] group-hover:border-[var(--accent)] transition-all flex items-center gap-1.5">
                <Play className="w-3 h-3 fill-current" />
                <span>EXPAND CASE STUDY</span>
              </span>
            </div>
          </div>
        </div>
      </article>
    );
  }

  if (layoutVariant === 'split') {
    return (
      <article
        onClick={() => onSelect(project)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative grid grid-cols-1 lg:grid-cols-12 cursor-pointer border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden transition-all duration-500 hover:border-[var(--accent)]/50"
      >
        {/* Left Column: Narrative & Technical Specs */}
        <div className="lg:col-span-5 p-8 flex flex-col justify-between order-2 lg:order-1">
          <div>
            <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-secondary)] mb-4">
              <span className="text-[var(--accent)] font-semibold">FILM #{formattedIndex}</span>
              <span>·</span>
              <span>{project.category}</span>
            </div>

            <h3 className="font-display text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
              {project.title}
            </h3>

            <p className="mt-3 text-sm text-[var(--text-secondary)] font-body leading-relaxed">
              {project.description}
            </p>

            {/* AI Tools Specs */}
            <div className="mt-6 pt-6 border-t border-[var(--border-subtle)]">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block mb-2">
                SYNTHESIS ENGINE & TOOLS
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-mono text-[var(--text-secondary)]">
                {project.tools.slice(0, 3).map((tool, i) => (
                  <span key={i} className="inline-block text-[var(--text-primary)]">
                    {tool} {i < 2 ? '·' : ''}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
            <span className="text-[var(--accent)] font-medium uppercase">
              {project.filmSpecs.resolution}
            </span>
            <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform text-[var(--text-primary)]">
              <span>EXPLORE</span>
              <span>→</span>
            </span>
          </div>
        </div>

        {/* Right Column: Visual Frame */}
        <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden order-1 lg:order-2">
          {project.videoUrl ? (
            <video
              ref={videoRef}
              src={project.videoUrl}
              autoPlay
              muted
              loop
              playsInline
              poster={project.image}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/80 via-transparent to-transparent opacity-60" />
          <div className="absolute bottom-4 right-4 bg-[var(--bg-primary)]/80 backdrop-blur-sm px-2.5 py-1 text-[10px] font-mono text-[var(--text-secondary)]">
            {project.duration}
          </div>
        </div>
      </article>
    );
  }

  // Vertical / Standard Cinematic Card
  return (
    <article
      onClick={() => onSelect(project)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative cursor-pointer border border-[var(--border-subtle)] bg-[var(--bg-surface)] overflow-hidden transition-all duration-500 hover:border-[var(--accent)]/50 flex flex-col justify-between"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        {project.videoUrl ? (
          <video
            ref={videoRef}
            src={project.videoUrl}
            autoPlay
            muted
            loop
            playsInline
            poster={project.image}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <img
            src={project.image}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)] via-transparent to-transparent opacity-60" />
        <div className="absolute top-3 left-3 text-[10px] font-mono tracking-widest text-[var(--text-secondary)] bg-[var(--bg-primary)]/75 backdrop-blur-sm px-2 py-0.5">
          #{formattedIndex} · {project.category}
        </div>
        <div className="absolute bottom-3 right-3 text-[10px] font-mono tracking-widest text-[var(--text-secondary)] bg-[var(--bg-primary)]/75 backdrop-blur-sm px-2 py-0.5">
          {project.duration}
        </div>
      </div>

      <div className="p-6">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--accent)] block mb-1">
          {project.client}
        </span>
        <h3 className="font-display text-xl sm:text-2xl font-bold uppercase tracking-tight text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
          {project.title}
        </h3>
        <p className="mt-2 text-xs text-[var(--text-secondary)] line-clamp-2 font-body">
          {project.tagline}
        </p>

        <div className="mt-4 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-secondary)]">
          <span>{project.filmSpecs.fps}</span>
          <span className="text-[var(--text-primary)] group-hover:text-[var(--accent)] flex items-center gap-1 transition-colors">
            <span>VIEW CASE</span>
            <span>→</span>
          </span>
        </div>
      </div>
    </article>
  );
};
