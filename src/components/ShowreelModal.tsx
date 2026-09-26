import React, { useRef, useState, useEffect } from 'react';
import { X, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { CursorType } from './CustomCursor';

interface ShowreelModalProps {
  isOpen: boolean;
  onClose: () => void;
  setCursorType: (type: CursorType, label?: string) => void;
}

export const ShowreelModal: React.FC<ShowreelModalProps> = ({ isOpen, onClose, setCursorType }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

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
    <div className="fixed inset-0 z-[9999] bg-black/95 backdrop-blur-2xl flex flex-col justify-between p-6 sm:p-10 animate-fadeIn">
      {/* Top Header */}
      <div className="flex items-center justify-between text-xs font-mono text-white/80 border-b border-white/10 pb-4">
        <div className="flex items-center gap-3">
          <span className="text-[var(--accent)] font-bold">KAIROS // 2026 OFFICIAL SHOWREEL</span>
          <span>·</span>
          <span>4K DCI DIRECTOR’S CUT (01:15)</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 border border-white/20 hover:border-[var(--accent)] hover:text-[var(--accent)] text-white transition-colors"
          onMouseEnter={() => setCursorType('CLOSE')}
          onMouseLeave={() => setCursorType('DEFAULT')}
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Main Video Screen */}
      <div className="my-auto max-w-5xl mx-auto w-full aspect-[2.39/1] relative bg-black border border-white/15 overflow-hidden shadow-2xl">
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/so8uohki/video/upload/v1790425154/Creating_fashion_commercial_video_20260922112658.mp4"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Video Scrim & Player Controls */}
        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-xs font-mono text-white/90 bg-black/70 backdrop-blur-md px-4 py-2.5 border border-white/10">
          <div className="flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            >
              {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              <span>{isPlaying ? 'PAUSE' : 'PLAY'}</span>
            </button>

            <button
              onClick={toggleMute}
              className="hover:text-[var(--accent)] transition-colors flex items-center gap-1.5"
            >
              {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              <span>{isMuted ? 'MUTED' : 'AUDIO ON'}</span>
            </button>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-white/60">
            <span>24 FPS · ACEScc · DOLBY 5.1</span>
          </div>
        </div>
      </div>

      {/* Footer Info */}
      <div className="text-center text-xs font-mono text-white/50 pt-4">
        <span>PRESS [ESC] TO CLOSE CINEMATIC REEL</span>
      </div>
    </div>
  );
};
