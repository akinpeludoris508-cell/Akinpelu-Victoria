import React, { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { CursorType } from './CustomCursor';

interface FooterProps {
  setCursorType: (type: CursorType, label?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCursorType }) => {
  const [times, setTimes] = useState({ tokyo: '', paris: '', la: '' });

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date();
      setTimes({
        tokyo: new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Asia/Tokyo',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now),
        paris: new Intl.DateTimeFormat('en-GB', {
          timeZone: 'Europe/Paris',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now),
        la: new Intl.DateTimeFormat('en-GB', {
          timeZone: 'America/Los_Angeles',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        }).format(now),
      });
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 md:px-12 bg-[var(--bg-primary)] border-t border-[var(--border-subtle)] text-xs font-mono text-[var(--text-secondary)]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        {/* Brand & Copyright */}
        <div className="flex flex-col gap-3">
          <img
            src="https://res.cloudinary.com/so8uohki/image/upload/v1790423640/vikky_logo_br.png"
            alt="Logo"
            className="h-12 md:h-14 w-auto object-contain self-start drop-shadow-[0_0_16px_rgba(0,166,246,0.3)]"
          />
          <div className="flex items-center gap-2">
            <span className="font-display font-extrabold text-sm uppercase text-[var(--text-primary)]">
              KAIROS
            </span>
            <span>·</span>
            <span>AI CINEMATOGRAPHY & COMMERCIAL STUDIO</span>
          </div>
          <span className="text-[10px] text-[var(--text-muted)]">
            © 2026 KAIROS VISUAL WORLDS. ALL RIGHTS RESERVED. ACES STANDARDS ENFORCED.
          </span>
        </div>

        {/* Studio Real-Time Clocks */}
        <div className="hidden lg:flex items-center gap-6 text-[11px] tabular-nums text-[var(--text-muted)]">
          <div>
            <span className="text-[9px] block">TOKYO</span>
            <span className="text-[var(--text-primary)]">{times.tokyo || '19:20:15'} JST</span>
          </div>
          <div>
            <span className="text-[9px] block">PARIS</span>
            <span className="text-[var(--text-primary)]">{times.paris || '11:20:15'} CET</span>
          </div>
          <div>
            <span className="text-[9px] block">LOS ANGELES</span>
            <span className="text-[var(--text-primary)]">{times.la || '02:20:15'} PST</span>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors p-2 border border-[var(--border-subtle)] hover:border-[var(--accent)] cursor-pointer"
          onMouseEnter={() => setCursorType('OPEN', 'TOP')}
          onMouseLeave={() => setCursorType('DEFAULT')}
        >
          <span>REPLAY FROM TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
