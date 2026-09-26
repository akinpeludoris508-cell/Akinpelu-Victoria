import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/projects';
import { ProjectCard } from './ProjectCard';
import { CursorType } from './CustomCursor';
import { Clapperboard, Filter } from 'lucide-react';

interface ProjectShowcaseProps {
  onSelectProject: (project: Project) => void;
  setCursorType: (type: CursorType, label?: string) => void;
}

export const ProjectShowcase: React.FC<ProjectShowcaseProps> = ({
  onSelectProject,
  setCursorType,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = [
    'ALL',
    'AI PRODUCT COMMERCIAL',
    'CINEMATIC AI FILM',
    'FASHION & BEAUTY',
  ];

  const filteredProjects =
    activeCategory === 'ALL'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeCategory);

  return (
    <section id="work" className="py-28 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[var(--border-subtle)]">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-3">
            <Clapperboard className="w-3.5 h-3.5" />
            <span>02 // ARCHIVE OF IMPOSSIBLE WORLDS</span>
          </div>
          <h2 className="font-display font-black text-4xl sm:text-6xl uppercase tracking-tight text-[var(--text-primary)]">
            SELECTED FILMS & COMMERCIALS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[var(--text-secondary)] font-body max-w-xl">
            Each piece is conceived as a self-contained cinematic universe — synthesizing
            photorealism, camera physics, and emotive audio design.
          </p>
        </div>

        {/* Functional Category Filter Controls */}
        <div className="flex flex-wrap items-center gap-1 p-1 bg-[var(--bg-surface)] border border-[var(--border-subtle)]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
              onMouseEnter={() => setCursorType('OPEN', 'FILTER')}
              onMouseLeave={() => setCursorType('DEFAULT')}
            >
              {cat === 'ALL' ? 'ALL WORKS (05)' : cat}
            </button>
          ))}
        </div>
      </div>

      {/* Editorial Grid Compositions */}
      <div className="mt-14 flex flex-col gap-12">
        {filteredProjects.map((project, idx) => {
          // Determine asymmetric layout variant
          let variant: 'full' | 'split' | 'vertical' | 'cinematic' = 'split';
          if (idx === 0) variant = 'full';
          else if (idx === 1) variant = 'split';
          else variant = 'split';

          return (
            <ProjectCard
              key={project.id}
              project={project}
              index={idx}
              layoutVariant={variant}
              onSelect={onSelectProject}
              setCursorType={setCursorType}
            />
          );
        })}
      </div>
    </section>
  );
};
