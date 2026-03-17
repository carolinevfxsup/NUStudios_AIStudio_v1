import { founders } from '../data/founders';
import { FadeIn } from '../components/FadeIn';
import { useLanguage } from '../contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* About Section */}
        <div className="bg-black text-white border border-border rounded-none p-8 md:p-12 shadow-sm">
          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8 text-white">
              {t.about.title}
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-2xl font-display font-medium leading-tight mb-8">
              {t.about.subtitle}
              <br />
              <span className="text-white/60 text-xl">{t.about.subtext}</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="font-sans text-lg space-y-6 text-white/60">
              <p>{t.about.p1}</p>
              <p>
                <strong className="text-white">{t.about.p2}</strong>
                <br />
                {t.about.p3}
              </p>
              <p>
                <strong className="text-white">{t.about.p4}</strong> {t.about.p4Text}
              </p>
              <p>
                <strong className="text-white">{t.about.p5}</strong> {t.about.p5Text}
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Founders Section */}
        <div className="flex flex-col gap-6">
          <FadeIn delay={0.4}>
            <div className="bg-white border border-border rounded-none p-8 md:p-12 shadow-sm">
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase">{t.about.foundersTitle}<span className="text-red-600">.</span></h2>
              <p className="text-2xl font-display font-medium leading-tight mt-8">
                {t.about.foundersSubtitle}
              </p>
              <p className="text-lg font-sans leading-relaxed mt-4 text-text/70">
                {t.about.foundersDesc}
              </p>
            </div>
          </FadeIn>
          
          <div className="flex flex-col gap-6">
            {founders.map((founder, i) => (
              <FadeIn key={i} delay={0.5 + (i * 0.1)}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-white border border-border rounded-none p-6 md:p-8 shadow-sm aspect-square overflow-hidden border border-border flex-shrink-0 md:w-1/3">
                    <img 
                      src={founder.image || `https://picsum.photos/seed/founder${i}/1200/1200`}
                      alt={founder.name}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="bg-white border border-border rounded-none p-6 md:p-8 shadow-sm flex flex-col justify-center md:w-2/3">
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-1 tracking-tighter uppercase">{founder.name}</h3>
                    <p className="text-sm font-sans font-bold text-gray-500 mb-4 uppercase tracking-widest">{founder.role}</p>
                    <a href={`mailto:${founder.email}`} className="text-sm font-sans font-bold text-red-600 mb-4 hover:underline">{founder.email}</a>
                    <p className="text-sm text-text/70 font-sans leading-relaxed">{founder.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
