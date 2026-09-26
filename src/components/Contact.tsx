import React, { useState } from 'react';
import { Mail, ArrowUpRight, Send, CheckCircle2, MessageSquare, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { CursorType } from './CustomCursor';

interface ContactProps {
  setCursorType: (type: CursorType, label?: string) => void;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
}

export const Contact: React.FC<ContactProps> = ({
  setCursorType,
  isDrawerOpen,
  setIsDrawerOpen,
}) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'AI Product Commercial',
    timeline: '2–4 Weeks',
    budget: '$15k – $35k',
    brief: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Keep feedback visible
    }, 500);
  };

  return (
    <section id="contact" className="relative py-32 px-6 md:px-12 bg-[var(--bg-surface)] border-t border-[var(--border-subtle)] overflow-hidden">
      {/* Background cinematic lens flare glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[var(--accent-glow)] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Film Scene Kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest text-[var(--accent)] uppercase mb-6">
          <span>SCENE 08 // FINAL SEQUENCE</span>
          <span>·</span>
          <span>INITIATE COLLABORATION</span>
        </div>

        {/* Large Statement */}
        <h2 className="font-display font-black text-4xl sm:text-6xl md:text-7xl lg:text-8xl uppercase tracking-tighter text-[var(--text-primary)] leading-[0.95]">
          HAVE AN IDEA <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--text-primary)] via-[var(--accent)] to-[var(--text-primary)]">
            WORTH SEEING?
          </span>
        </h2>

        {/* Supporting statement */}
        <p className="mt-8 text-base sm:text-xl text-[var(--text-secondary)] font-body max-w-2xl mx-auto leading-relaxed">
          Let’s turn your concept into something people can’t stop watching.
          We collaborate with visionary brands, production companies, and directors worldwide.
        </p>

        {/* Primary CTA */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={() => setIsDrawerOpen(true)}
            className="w-full sm:w-auto px-10 py-5 bg-[var(--accent)] text-[var(--bg-primary)] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest hover:bg-[var(--text-primary)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
            onMouseEnter={() => setCursorType('OPEN', 'START')}
            onMouseLeave={() => setCursorType('DEFAULT')}
          >
            <span>START A PROJECT</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </button>

          <a
            href="mailto:contact@kairos-studio.ai"
            className="w-full sm:w-auto px-8 py-5 border border-[var(--border-strong)] text-[var(--text-primary)] font-mono text-xs sm:text-sm font-bold uppercase tracking-widest hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all flex items-center justify-center gap-2"
            onMouseEnter={() => setCursorType('OPEN', 'EMAIL')}
            onMouseLeave={() => setCursorType('DEFAULT')}
          >
            <Mail className="w-4 h-4" />
            <span>CONTACT@KAIROS-STUDIO.AI</span>
          </a>
        </div>

        {/* Direct Transmission Social Coordinates */}
        <div className="mt-16 pt-12 border-t border-[var(--border-subtle)] flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-[var(--text-secondary)]">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            onMouseEnter={() => setCursorType('OPEN', 'IG')}
            onMouseLeave={() => setCursorType('DEFAULT')}
          >
            <Instagram className="w-4 h-4" />
            <span>INSTAGRAM / @KAIROS.CINEMA</span>
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            onMouseEnter={() => setCursorType('OPEN', 'IN')}
            onMouseLeave={() => setCursorType('DEFAULT')}
          >
            <Linkedin className="w-4 h-4" />
            <span>LINKEDIN / KAIROS-STUDIO</span>
          </a>

          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            onMouseEnter={() => setCursorType('OPEN', 'YT')}
            onMouseLeave={() => setCursorType('DEFAULT')}
          >
            <Youtube className="w-4 h-4" />
            <span>YOUTUBE 4K DIRECTORS CUTS</span>
          </a>
        </div>
      </div>

      {/* Interactive Project Commission Modal / Drawer */}
      {isDrawerOpen && (
        <div className="fixed inset-0 z-[9995] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
          <div className="bg-[var(--bg-primary)] border border-[var(--border-strong)] w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-10 shadow-2xl relative">
            <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-4 mb-6">
              <div>
                <span className="text-xs font-mono text-[var(--accent)] uppercase tracking-widest block">
                  COMMISSION BRIEF
                </span>
                <h3 className="font-display text-2xl font-bold uppercase text-[var(--text-primary)]">
                  START A CINEMATIC PROJECT
                </h3>
              </div>
              <button
                onClick={() => setIsDrawerOpen(false)}
                className="text-xs font-mono px-3 py-1 border border-[var(--border-subtle)] hover:border-[var(--accent)] text-[var(--text-secondary)] hover:text-[var(--accent)]"
              >
                CLOSE [✕]
              </button>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto" />
                <h4 className="font-display text-2xl font-bold uppercase text-[var(--text-primary)]">
                  BRIEF TRANSMITTED SUCCESSFULLY
                </h4>
                <p className="text-sm text-[var(--text-secondary)] font-body max-w-md mx-auto">
                  Thank you for reaching out. Director Kairos and the visual team will review your
                  concept and respond with a customized cinematic treatment deck within 24 hours.
                </p>
                <button
                  onClick={() => {
                    setFormSubmitted(false);
                    setIsDrawerOpen(false);
                  }}
                  className="px-6 py-2.5 bg-[var(--text-primary)] text-[var(--bg-primary)] font-mono text-xs uppercase font-bold"
                >
                  RETURN TO SCREENING
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Elena Rostova"
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="elena@brand.com"
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                      Company / Brand
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Maison Solaris"
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                      Project Format
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                    >
                      <option>AI Product Commercial (Broadcast / Social)</option>
                      <option>Cinematic Narrative Film / Music Video</option>
                      <option>Motion Key Visuals & Brand Campaign</option>
                      <option>AI Creative Direction & Studio Consulting</option>
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                      Target Timeline
                    </label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                    >
                      <option>Rush (7–14 Days)</option>
                      <option>Standard (2–4 Weeks)</option>
                      <option>Multi-Phase Campaign (1–2 Months)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                      Estimated Production Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                    >
                      <option>$10k – $20k</option>
                      <option>$20k – $50k</option>
                      <option>$50k – $100k+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-1.5">
                    Concept Vision / Brief Summary *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.brief}
                    onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
                    placeholder="Tell us about the world, mood, product, or narrative you want to bring to life..."
                    className="w-full px-3.5 py-2.5 bg-[var(--bg-surface)] border border-[var(--border-subtle)] text-sm text-[var(--text-primary)] focus:border-[var(--accent)] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[var(--accent)] text-[var(--bg-primary)] font-mono text-xs font-bold uppercase tracking-widest hover:bg-[var(--text-primary)] transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT PROJECT BRIEF →</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
