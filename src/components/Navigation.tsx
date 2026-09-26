import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { CursorType } from './CustomCursor';

interface NavigationProps {
  setCursorType: (type: CursorType, label?: string) => void;
  onOpenInquiry: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  setCursorType,
  onOpenInquiry,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'AI Lab', href: '#lab' },
    { label: 'About', href: '#about' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'py-3.5 bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border-subtle)] shadow-sm'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Zone 1: Brand Logo */}
          <a
            href="#"
            className="flex items-center transition-opacity hover:opacity-85"
            onMouseEnter={() => setCursorType('DEFAULT')}
            aria-label="Home"
          >
            <img
              src="https://res.cloudinary.com/so8uohki/image/upload/v1790423640/vikky_logo_br.png"
              alt="Logo"
              className={`transition-all duration-300 object-contain drop-shadow-[0_0_24px_rgba(0,166,246,0.4)] ${
                scrolled
                  ? 'h-12 md:h-14 lg:h-16 w-auto max-w-[220px]'
                  : 'h-16 md:h-20 lg:h-24 w-auto max-w-[320px]'
              }`}
            />
          </a>

          {/* Zone 2: 4-6 clean text navigation links */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[var(--accent)] hover:after:w-full after:transition-all after:duration-250"
                onMouseEnter={() => setCursorType('DEFAULT')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            {/* CTA Button */}
            <button
              onClick={onOpenInquiry}
              className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono font-semibold uppercase tracking-wider text-[var(--bg-primary)] bg-[var(--text-primary)] rounded-none hover:bg-[var(--accent)] hover:text-[var(--bg-primary)] transition-colors whitespace-nowrap"
              onMouseEnter={() => setCursorType('OPEN')}
              onMouseLeave={() => setCursorType('DEFAULT')}
            >
              <span>START A PROJECT</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="md:hidden p-2 text-[var(--text-primary)]"
              aria-label="Open mobile menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-screen Mobile Cinematic Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[9999] bg-[var(--bg-primary)] flex flex-col justify-between p-8 animate-fadeIn">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-6">
            <img
              src="https://res.cloudinary.com/so8uohki/image/upload/v1790423640/vikky_logo_br.png"
              alt="Logo"
              className="h-14 sm:h-18 w-auto object-contain max-w-[240px] drop-shadow-[0_0_20px_rgba(0,166,246,0.35)]"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-[var(--text-primary)] hover:text-[var(--accent)]"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-6 my-auto">
            {navLinks.map((link, idx) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="group flex items-baseline gap-4 text-3xl font-display font-bold uppercase text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors"
              >
                <span className="text-xs font-mono text-[var(--text-muted)]">
                  0{idx + 1}
                </span>
                <span>{link.label}</span>
              </a>
            ))}
          </nav>

          <div className="pt-6 border-t border-[var(--border-subtle)] flex flex-col gap-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 bg-[var(--accent)] text-[var(--bg-primary)] font-mono text-xs font-bold uppercase tracking-widest text-center"
            >
              START A PROJECT →
            </button>
          </div>
        </div>
      )}
    </>
  );
};
