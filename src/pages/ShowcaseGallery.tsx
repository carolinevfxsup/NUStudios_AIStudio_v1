import { HomeResultsBento } from '../components/HomeResultsBento';

export const ShowcaseGallery = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-32">
      <section id="results" className="py-16 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.8] uppercase text-white">RESULTS<span className="text-red-600">.</span></h2>
          </div>
          
          <HomeResultsBento />
        </div>
      </section>
    </div>
  );
};
