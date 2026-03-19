import { Link } from 'react-router-dom';
import { showcases } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyVideo } from './LazyVideo';

export const HomeResultsBento = () => {
  const { getLanguagePath } = useLanguage();
  // Home theme is dark
  const bgColor = 'bg-white/5';
  const textColor = 'text-white';

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-1">
      {/* Project 1 (Wide) */}
      <Link to={getLanguagePath(showcases[0].slug)} className={`relative md:col-span-8 aspect-video ${bgColor} flex flex-col items-center justify-center`}>
        <div className="relative w-full h-full md:w-[75%] md:h-[75%] overflow-hidden rounded-md">
          <LazyVideo 
            src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/salt-lily-zoom.mp4" 
            className="w-full h-full object-cover block transition-all duration-700" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
        <div className="w-[75%] p-4">
          <h3 className={`text-xs font-display font-bold tracking-tighter uppercase ${textColor}`}>{showcases[0].title}</h3>
        </div>
      </Link>

      {/* Project 3 (Portrait 9:16) - Quinta Do Pinto */}
      <Link to={getLanguagePath(showcases[2].slug)} className={`relative md:col-span-4 md:row-span-2 ${bgColor} flex flex-col items-center justify-center`}>
        <div className="relative w-full h-full md:w-[75%] md:h-[75%] overflow-hidden rounded-md">
          <LazyVideo 
            src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-results-02.mp4" 
            className="w-full h-full object-cover block transition-all duration-700" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
        <div className="w-[75%] p-4">
          <h3 className={`text-xs font-display font-bold tracking-tighter uppercase ${textColor}`}>{showcases[2].title}</h3>
        </div>
      </Link>

      {/* Quote Block 1 (Square) */}
      <div className={`md:col-span-4 p-8 flex flex-col justify-center italic ${bgColor} aspect-square`}>
        <p className={`text-xl font-display font-medium leading-tight mb-6 ${textColor}`}>
          "NUstudios didn't just give us content; they gave us a system that scales with our ambition."
        </p>
        <p className="section-label text-red-600">— Sarah J., Brand Director</p>
      </div>

      {/* Project 2 (Portrait) - Franks Australia */}
      <Link to={getLanguagePath(showcases[1].slug)} className={`relative md:col-span-4 md:row-span-2 ${bgColor} flex flex-col items-center justify-center`}>
        <div className="relative w-full h-full md:w-[75%] md:h-[75%] overflow-hidden rounded-md">
          <LazyVideo 
            src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/Beach_Franks1.mp4" 
            className="w-full h-full object-cover block transition-all duration-700" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
        <div className="w-[75%] p-4">
          <h3 className={`text-xs font-display font-bold tracking-tighter uppercase ${textColor}`}>{showcases[1].title}</h3>
        </div>
      </Link>

      {/* Project 4 (Square) - O Palmeiral */}
      <Link to={getLanguagePath(showcases[3].slug)} className={`relative md:col-span-4 aspect-square ${bgColor} flex flex-col items-center justify-center`}>
        <div className="relative w-full h-full md:w-[75%] md:h-[75%] overflow-hidden rounded-md">
          <LazyVideo 
            src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/OP_SQUARE.mp4" 
            className="w-full h-full object-cover block transition-all duration-700" 
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
        <div className="w-[75%] p-4">
          <h3 className={`text-xs font-display font-bold tracking-tighter uppercase ${textColor}`}>{showcases[3].title}</h3>
        </div>
      </Link>

      {/* Quote Block 2 (Square) */}
      <div className={`md:col-span-4 p-8 flex flex-col justify-center italic ${bgColor}`}>
        <p className={`text-xl font-display font-medium leading-tight mb-6 ${textColor}`}>
          "The speed at which they turn around high-quality creative is unlike anything we've seen in the industry."
        </p>
        <p className="section-label text-red-600">— Michael R., CMO</p>
      </div>
    </div>
  );
};
