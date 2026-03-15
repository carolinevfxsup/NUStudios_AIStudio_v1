import { ResultsPageBento } from '../components/ResultsPageBento';
import { FadeIn } from '../components/FadeIn';

// Results page component
export const Results = () => {
  return (
    <div className="min-h-screen bg-white text-black pt-32">
      <section id="results" className="py-16 text-black">
        <div className="max-w-7xl mx-auto px-6">
          {/* Header container */}
          <div className="mb-24">
            <FadeIn delay={0.1}>
              <h1 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter text-black">
                RESULTS<span className="text-red-600">.</span>
              </h1>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.2}>
            <ResultsPageBento />
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
