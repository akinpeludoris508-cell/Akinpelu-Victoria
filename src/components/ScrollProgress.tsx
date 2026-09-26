import React, { useEffect, useState } from 'react';

interface Scene {
  id: string;
  name: string;
  index: string;
}

const SCENES: Scene[] = [
  { id: 'hero', name: 'OVERTURE', index: '01' },
  { id: 'work', name: 'PROJECTS', index: '02' },
  { id: 'featured', name: 'CASE STUDY', index: '03' },
  { id: 'services', name: 'SERVICES', index: '04' },
  { id: 'process', name: 'PROCESS', index: '05' },
  { id: 'manifesto', name: 'MANIFESTO', index: '06' },
  { id: 'lab', name: 'AI LAB', index: '07' },
  { id: 'contact', name: 'INQUIRY', index: '08' }
];

export const ScrollProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [currentScene, setCurrentScene] = useState(SCENES[0]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      const pct = totalScroll > 0 ? (currentScroll / totalScroll) * 100 : 0;
      setProgress(Math.min(100, Math.max(0, pct)));

      // Detect current section
      for (const scene of [...SCENES].reverse()) {
        const el = document.getElementById(scene.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= window.innerHeight * 0.45) {
            setCurrentScene(scene);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-6 left-6 z-40 hidden md:flex items-center gap-4 text-xs font-mono tracking-wider pointer-events-none select-none text-[var(--text-secondary)] opacity-85">
      <div className="flex items-center gap-2">
        <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent)] animate-pulse" />
        <span className="text-[var(--text-primary)] font-medium">SCENE {currentScene.index}</span>
        <span>·</span>
        <span className="uppercase tracking-widest">{currentScene.name}</span>
      </div>

      <div className="w-20 h-[1px] bg-[var(--border-strong)] relative overflow-hidden">
        <div
          className="h-full bg-[var(--accent)] transition-all duration-150 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <span className="tabular-nums text-[10px] text-[var(--text-muted)]">
        {Math.round(progress)}%
      </span>
    </div>
  );
};
