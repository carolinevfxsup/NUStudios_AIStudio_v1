import { useRef, useState, useEffect } from 'react';
import { Volume2, VolumeX, Play, Pause } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

interface LazyVideoProps extends React.VideoHTMLAttributes<HTMLVideoElement> {
  src: string;
  showControls?: boolean;
}

export const LazyVideo = ({ src, className, showControls, ...props }: LazyVideoProps) => {
  const { t } = useLanguage();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current);
      }
    };
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="relative w-full h-full group">
      <video
        ref={videoRef}
        src={isInView ? src : undefined}
        className={className}
        muted={isMuted}
        playsInline
        {...props}
      />
      {showControls && isInView && (
        <>
          <div className="absolute bottom-4 right-4 z-10 flex items-center gap-2">
            <button
              onClick={togglePlay}
              className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-all flex items-center justify-center"
            >
              {isPlaying ? <Pause size={14} /> : <Play size={14} />}
            </button>
            <button
              onClick={toggleMute}
              className="bg-black/50 hover:bg-black/70 text-white px-3 py-1.5 rounded-full text-[10px] font-bold tracking-widest backdrop-blur-sm transition-all flex items-center gap-2 uppercase"
            >
              {isMuted ? (
                <>
                  <VolumeX size={12} />
                  <span>UNMUTE</span>
                </>
              ) : (
                <>
                  <Volume2 size={12} />
                  <span>MUTE</span>
                </>
              )}
            </button>
          </div>
          <div className="absolute bottom-4 left-4 z-10">
            <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/60 drop-shadow-md">
              {t.common.playWithSound}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
