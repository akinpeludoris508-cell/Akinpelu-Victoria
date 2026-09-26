import React, { useEffect, useRef, useState } from 'react';
import { X, Play, Pause, Volume2, VolumeX, ArrowLeft, ArrowRight, Sparkles, Layers, Cpu, Video, CheckCircle2 } from 'lucide-react';
import { Project, PROJECTS } from '../data/projects';
import { CursorType } from './CustomCursor';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  setCursorType: (type: CursorType, label?: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  onClose,
  onSelectProject,
  setCursorType,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeTab, setActiveTab] = useState<'overview' | 'workflow' | 'specs'>('overview');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const prevProject = PROJECTS[(currentIndex - 1 + PROJECTS.length) % PROJECTS.length];
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed inset-0 z-[9990] bg-[var(--bg-primary)]/95 backdrop-blur-xl flex flex-col justify-between overflow-y-auto overflow-x-hidden animate-fadeIn">
      {/* Top Floating Control Bar */}
      <div className="sticky top-0 z-50 flex items-center justify-between px-6 py-4 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-subtle)]">
        <div className="flex items-center gap-3 text-xs font-mono text-[var(--text-secondary)]">
          <span className="text-[var(--accent)] font-bold">CASE STUDY // {project.category}</span>
          <span>·</span>
          <span>{project.client}</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[var(--text-muted)]">
            <button
              onClick={() => onSelectProject(prevProject)}
              className="hover:text-[var(--text-primary)] transition-colors p-1"
              title="Previous Film"
            >
              PREV [←]
            </button>
            <span>/</span>
            <button
              onClick={() => onSelectProject(nextProject)}
              className="hover:text-[var(--text-primary)] transition-colors p-1"
              title="Next Film"
            >
              NEXT [→]
            </button>
          </div>

          <button
            onClick={onClose}
            className="p-2 border border-[var(--border-strong)] text-[var(--text-primary)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors rounded-none"
            aria-label="Close Case Study"
            onMouseEnter={() => setCursorType('CLOSE')}
            onMouseLeave={() => setCursorType('DEFAULT')}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-6xl mx-auto px-6 py-10 w-full flex-1">
        {/* Cinema Video Player Viewport */}
        <div className="relative aspect-[21/9] sm:aspect-[2.39/1] w-full bg-black border border-[var(--border-strong)] overflow-hidden shadow-2xl">
          {project.videoUrl ? (
            <video
              ref={videoRef}
              src={project.videoUrl}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="w-full h-full object-cover"
            />
          ) : (
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          )}

          {/* Player Controls Bar */}
          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs font-mono text-white/90 bg-black/60 backdrop-blur-md px-4 py-2 border border-white/10">
            <div className="flex items-center gap-4">
              <button
                onClick={togglePlay}
                className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
              >
                {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
                <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
              </button>

              <button
                onClick={toggleMute}
                className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
              >
                {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5" />}
                <span>{isMuted ? 'UNMUTE AUDIO' : 'MUTED'}</span>
              </button>
            </div>

            <div className="flex items-center gap-3 text-[11px] text-white/60">
              <span>{project.filmSpecs.resolution}</span>
              <span>·</span>
              <span>{project.filmSpecs.fps}</span>
            </div>
          </div>
        </div>

        {/* Film Head Title & Subheading */}
        <div className="mt-10 flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[var(--border-subtle)]">
          <div>
            <span className="text-xs font-mono text-[var(--accent)] tracking-widest uppercase block mb-2">
              RELEASED {project.year} · DIRECTED BY KAIROS
            </span>
            <h1 className="font-display text-3xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight text-[var(--text-primary)]">
              {project.title}
            </h1>
            <p className="mt-3 text-base sm:text-lg text-[var(--text-secondary)] font-body max-w-2xl">
              {project.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2 border border-[var(--border-subtle)] p-1 bg-[var(--bg-surface)]">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                activeTab === 'overview'
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              OVERVIEW
            </button>
            <button
              onClick={() => setActiveTab('workflow')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                activeTab === 'workflow'
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              AI WORKFLOW
            </button>
            <button
              onClick={() => setActiveTab('specs')}
              className={`px-3 py-1.5 text-xs font-mono uppercase tracking-wider transition-colors ${
                activeTab === 'specs'
                  ? 'bg-[var(--text-primary)] text-[var(--bg-primary)] font-semibold'
                  : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)]'
              }`}
            >
              SPECS
            </button>
          </div>
        </div>

        {/* Tab Content Panes */}
        {activeTab === 'overview' && (
          <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-8 space-y-6">
              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-2">
                  THE BRIEF & NARRATIVE
                </h4>
                <p className="text-sm sm:text-base text-[var(--text-primary)] font-body leading-relaxed">
                  {project.description}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-2">
                  PRODUCTION APPROACH
                </h4>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] font-body leading-relaxed">
                  {project.productionApproach}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-mono uppercase tracking-widest text-[var(--accent)] mb-2">
                  FINAL DELIVERY & REACH
                </h4>
                <p className="text-sm sm:text-base text-[var(--text-secondary)] font-body leading-relaxed">
                  {project.finalDelivery}
                </p>
              </div>
            </div>

            <div className="md:col-span-4 space-y-6 bg-[var(--bg-surface)] p-6 border border-[var(--border-subtle)]">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                  CLIENT
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)] font-body">
                  {project.client}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block">
                  ROLE
                </span>
                <span className="text-sm font-semibold text-[var(--text-primary)] font-body">
                  {project.role}
                </span>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-[var(--text-muted)] block mb-2">
                  TOOLS & PIPELINE
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-1 text-[11px] font-mono bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)]"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'workflow' && (
          <div className="mt-8 space-y-8 bg-[var(--bg-surface)] p-8 border border-[var(--border-subtle)]">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-[var(--accent)] uppercase mb-2">
                <Cpu className="w-4 h-4" />
                <span>NEURAL SYNTHESIS PIPELINE</span>
              </div>
              <h3 className="font-display text-2xl font-bold uppercase text-[var(--text-primary)]">
                HOW THIS FILM WAS CREATED WITH AI
              </h3>
              <p className="mt-3 text-sm text-[var(--text-secondary)] font-body leading-relaxed max-w-3xl">
                {project.aiWorkflow}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-[var(--border-subtle)]">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[var(--accent)]">STEP 01 // LATENT SEED</span>
                <h5 className="font-semibold text-sm text-[var(--text-primary)]">Prompt Architecture</h5>
                <p className="text-xs text-[var(--text-secondary)] font-body">
                  Constructing multi-token spatial framing guides, lighting parameters, and camera motion physics.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[var(--accent)]">STEP 02 // MOTION VECTORS</span>
                <h5 className="font-semibold text-sm text-[var(--text-primary)]">Temporal Optical Flow</h5>
                <p className="text-xs text-[var(--text-secondary)] font-body">
                  Stabilizing camera rotation arcs to eliminate frame stutter, ghost silhouettes, and texture morphing.
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-[var(--accent)]">STEP 03 // ACES FINISHING</span>
                <h5 className="font-semibold text-sm text-[var(--text-primary)]">Color & Sound Master</h5>
                <p className="text-xs text-[var(--text-secondary)] font-body">
                  ACEScc wide-gamut finishing in DaVinci Resolve with synthetic foley, sub-bass rumble, and spatial Atmos audio.
                </p>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'specs' && (
          <div className="mt-8 bg-[var(--bg-surface)] p-8 border border-[var(--border-subtle)]">
            <h3 className="font-display text-xl font-bold uppercase text-[var(--text-primary)] mb-6">
              CINEMATOGRAPHIC SPECIFICATIONS
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-xs font-mono">
              <div>
                <span className="text-[var(--text-muted)] block mb-1">FRAME RATE</span>
                <span className="text-[var(--text-primary)] text-sm font-semibold">{project.filmSpecs.fps}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] block mb-1">RESOLUTION</span>
                <span className="text-[var(--text-primary)] text-sm font-semibold">{project.filmSpecs.resolution}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] block mb-1">COLOR ENCODING</span>
                <span className="text-[var(--text-primary)] text-sm font-semibold">{project.filmSpecs.colorSpace}</span>
              </div>
              <div>
                <span className="text-[var(--text-muted)] block mb-1">CAMERA / OPTICS</span>
                <span className="text-[var(--text-primary)] text-sm font-semibold">{project.filmSpecs.cameraLens}</span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Bottom Film Switcher Footer */}
      <div className="px-6 py-4 border-t border-[var(--border-subtle)] bg-[var(--bg-surface)] flex items-center justify-between text-xs font-mono">
        <button
          onClick={() => onSelectProject(prevProject)}
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>PREV: {prevProject.title}</span>
        </button>

        <button
          onClick={() => onSelectProject(nextProject)}
          className="flex items-center gap-2 text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
        >
          <span>NEXT: {nextProject.title}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
