import { ResultsPageBento } from '../components/ResultsPageBento';
import { FadeIn } from '../components/FadeIn';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

// Results page component
export const Results = () => {
  const { t, getLanguagePath } = useLanguage();
  return (
    <div className="min-h-screen bg-white text-black pt-32">
      <section id="results" className="py-16 text-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header container */}
          <div className="mb-24">
            <FadeIn delay={0.1}>
              <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-black leading-[0.85]">
                {t.home.results.title}<span className="text-red-600">.</span>
              </h1>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.2}>
            <ResultsPageBento />
          </FadeIn>
          
          <div className="mt-24 text-center">
            <Link to={getLanguagePath('/showcase')} className="bg-black text-white px-8 py-4 font-sans font-bold text-xs uppercase tracking-widest hover:bg-red-600 transition-all">
              {t.home.results.cta}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
