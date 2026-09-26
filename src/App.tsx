import React, { useState } from 'react';
import { CustomCursor, CursorType } from './components/CustomCursor';
import { ScrollProgress } from './components/ScrollProgress';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { ProjectShowcase } from './components/ProjectShowcase';
import { FeaturedProject } from './components/FeaturedProject';
import { Services } from './components/Services';
import { CreativeProcess } from './components/CreativeProcess';
import { AboutManifesto } from './components/AboutManifesto';
import { AILab } from './components/AILab';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ShowreelModal } from './components/ShowreelModal';
import { Project, PROJECTS } from './data/projects';

export default function App() {
  const [cursorType, setCursorTypeState] = useState<CursorType>('DEFAULT');
  const [cursorLabel, setCursorLabel] = useState<string | undefined>(undefined);

  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showreelOpen, setShowreelOpen] = useState(false);
  const [inquiryDrawerOpen, setInquiryDrawerOpen] = useState(false);

  const setCursorType = (type: CursorType, label?: string) => {
    setCursorTypeState(type);
    setCursorLabel(label);
  };

  const handleExploreWork = () => {
    const el = document.getElementById('work');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartProject = () => {
    setInquiryDrawerOpen(true);
  };

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] relative selection:bg-[var(--accent)] selection:text-[var(--bg-primary)]">
      {/* Film Grain Texture Overlay */}
      <div className="film-grain" />

      {/* Cinematic Custom Cursor */}
      <CustomCursor cursorType={cursorType} label={cursorLabel} />

      {/* Persistent Scene & Progress Tracker */}
      <ScrollProgress />

      {/* Floating Minimal Navigation */}
      <Navigation
        setCursorType={setCursorType}
        onOpenInquiry={() => setInquiryDrawerOpen(true)}
      />

      {/* Scene 01: Hero Overture */}
      <Hero
        setCursorType={setCursorType}
        onExploreWork={handleExploreWork}
        onStartProject={handleStartProject}
        onOpenShowreel={() => setShowreelOpen(true)}
      />

      {/* Scene 02: Selected Films & Commercials Archive */}
      <ProjectShowcase
        onSelectProject={(project) => setSelectedProject(project)}
        setCursorType={setCursorType}
      />

      {/* Scene 03: Flagship Commercial Anatomy (Solaris) */}
      <FeaturedProject
        project={PROJECTS[0]}
        onOpenModal={(project) => setSelectedProject(project)}
        setCursorType={setCursorType}
      />

      {/* Scene 04: Capabilities & Interactive Services */}
      <Services
        setCursorType={setCursorType}
        onOpenInquiry={() => setInquiryDrawerOpen(true)}
      />

      {/* Scene 05: Creative Process Methodology */}
      <CreativeProcess setCursorType={setCursorType} />

      {/* Scene 06: Director Manifesto */}
      <AboutManifesto
        setCursorType={setCursorType}
        onOpenInquiry={() => setInquiryDrawerOpen(true)}
      />

      {/* Scene 07: The AI Lab Experimental Archive */}
      <AILab setCursorType={setCursorType} />

      {/* Scene 08: Final Scene & Collaboration Inquiry */}
      <Contact
        setCursorType={setCursorType}
        isDrawerOpen={inquiryDrawerOpen}
        setIsDrawerOpen={setInquiryDrawerOpen}
      />

      {/* Closing Credits Footer */}
      <Footer setCursorType={setCursorType} />

      {/* Full Cinematic Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
        setCursorType={setCursorType}
      />

      {/* 2026 Official Showreel Player Modal */}
      <ShowreelModal
        isOpen={showreelOpen}
        onClose={() => setShowreelOpen(false)}
        setCursorType={setCursorType}
      />
    </div>
  );
}
