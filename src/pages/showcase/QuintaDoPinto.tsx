import { Header } from '../../components/Header';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { Bot, Clapperboard, Camera } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';
import { getAssetUrl } from '../../constants';

export const QuintaDoPinto = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main>
        <ShowcaseHero 
          title="Quinta do Pinto"
          subtitle={t.quinta.heroSubtitle}
          description={t.quinta.heroDescription}
          imageSrc="quinta-wine-brands.png"
          caseStudyNumber="01"
          sector="Wine & Spirits"
          deliverables="AI Creative / Video / Stills"
          railText="ESTABLISHED IN LISBON / 2024"
        />

        <section className="py-24 bg-black text-white text-center border-b border-white/10">
          <div className="max-w-4xl mx-auto px-6">
            <blockquote className="text-3xl md:text-5xl font-serif italic leading-tight">
              "Crafting the future of wine storytelling through AI-driven creativity."
            </blockquote>
          </div>
        </section>

        {/* Section 01: The Brief */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-10">
                  The <span className="text-primary">brief</span>
                </h2>
                <div className="space-y-6 text-lg text-narrative-shadow/80 leading-relaxed">
                  <p>{t.quinta.briefText}</p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[4/5] overflow-hidden shadow-2xl bevel">
                  <img 
                    src={getAssetUrl('quinta-moodboard.jpg')} 
                    className="w-full h-full object-cover" 
                    alt="Moodboard" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur-sm px-8 py-4 rotate-[-5deg] shadow-xl border border-black/5">
                      <span className="text-black font-serif italic text-4xl uppercase tracking-widest">mood BOARD</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: What We Did */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-4">
                What <span className="text-primary">We Did</span>
              </h2>
              <p className="text-narrative-shadow/60 uppercase tracking-widest text-xs">{t.quinta.whatWeDidSubtitle}</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Bot, title: t.quinta.card1Title, desc: t.quinta.card1Text, num: '01' },
                { icon: Clapperboard, title: t.quinta.card2Title, desc: t.quinta.card2Text, num: '02' },
                { icon: Camera, title: t.quinta.card3Title, desc: t.quinta.card3Text, num: '03' }
              ].map((item, i) => (
                <div key={i} className="bg-white p-10 border border-black/5 relative group">
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 bg-[#F5F5F0] flex items-center justify-center rounded-lg">
                      <item.icon className="w-6 h-6 text-black" />
                    </div>
                    <span className="text-4xl font-serif italic text-black/10 group-hover:text-primary/20 transition-colors">{item.num}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-sm text-narrative-shadow/60 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 03: The Idea */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/6] overflow-hidden shadow-2xl bevel">
                  <img 
                    src={getAssetUrl('quinta-the-idea.gif')} 
                    className="w-full h-full object-cover" 
                    alt="The Idea" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-10">
                  The <span className="text-primary">idea</span>
                </h2>
                <div className="space-y-8 text-lg text-narrative-shadow/80 leading-relaxed">
                  <p>{t.quinta.theIdeaText1}</p>
                  <p>{t.quinta.theIdeaText2}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: From bottle to launch content */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-8">
                From bottle <span className="text-primary">to launch content</span>
              </h2>
              <p className="text-lg text-narrative-shadow/60 leading-relaxed">
                {t.quinta.fromBottleText}
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="aspect-[4/6] overflow-hidden bg-white border border-black/5 bevel">
                  <img 
                    src={getAssetUrl('quinta-before.png')} 
                    className="w-full h-full object-contain p-12" 
                    alt="Before" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">{t.quinta.beforeLabel}</p>
              </div>
              <div className="space-y-6">
                <div className="aspect-[4/6] overflow-hidden bg-white border border-black/5 shadow-xl bevel">
                  <img 
                    src={getAssetUrl('quinta-after.png')} 
                    className="w-full h-full object-cover" 
                    alt="After" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">{t.quinta.afterLabel}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05: Attention to detail */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-10">
                  Attention <span className="text-primary">to detail</span>
                </h2>
                <div className="space-y-8 text-lg text-narrative-shadow/80 leading-relaxed mb-12">
                  <p>{t.quinta.attentionText}</p>
                  <p>{t.quinta.attentionText2}</p>
                </div>
                <div className="space-y-4">
                  {t.quinta.attentionBullets.map((bullet, i) => (
                    <div key={i} className="flex gap-4 items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                      <p className="text-sm text-narrative-shadow/60 font-medium">{bullet}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-[9/16] overflow-hidden shadow-2xl bevel">
                  <video 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-attention-to-detail.mp4" 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 06: Results Matter */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-3xl mb-20">
              <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-8">
                Results <span className="text-primary">Matter</span>
              </h2>
              <div className="space-y-6 text-lg text-narrative-shadow/60 leading-relaxed">
                <p>{t.quinta.resultsText1}</p>
                <p>{t.quinta.resultsText2}</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-results-01.mp4",
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-results-02.mp4",
                "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-results-03.mp4"
              ].map((url, i) => (
                <div key={i} className="aspect-[4/6] overflow-hidden shadow-xl border border-black/5 bevel">
                  <video 
                    src={url} 
                    className="w-full h-full object-cover" 
                    autoPlay 
                    loop 
                    muted 
                    playsInline
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 07: Why this works for wine brands */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-10">
                  Why this <span className="text-primary">works for wine brands</span>
                </h2>
                <p className="text-lg text-narrative-shadow/60 mb-12 leading-relaxed">
                  {t.quinta.whyWineText}
                </p>
                <div className="space-y-10">
                  {[
                    { title: t.quinta.whyWine1Title, text: t.quinta.whyWine1Text },
                    { title: t.quinta.whyWine2Title, text: t.quinta.whyWine2Text },
                    { title: t.quinta.whyWine3Title, text: t.quinta.whyWine3Text }
                  ].map((item, i) => (
                    <div key={i} className="group">
                      <h4 className="text-xl font-bold mb-3 uppercase tracking-tight group-hover:text-primary transition-colors">{item.title}</h4>
                      <p className="text-base text-narrative-shadow/50 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-md shadow-2xl bevel">
                  <img 
                    src={getAssetUrl('quinta-wine-brands.png')} 
                    className="w-full h-full object-cover" 
                    alt="Why it works" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectNavigation 
          prevProject={{ 
            title: 'Franks Australia', 
            slug: '/showcase/franks-australia', 
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/FRANKS_SHOW.png' 
          }}
          nextProject={{ 
            title: t.saltLily.heroTitle, 
            slug: '/showcase/salt-lily', 
            thumbnail: getAssetUrl('Salt_lily_FEMME_product.png') 
          }}
        />
      </main>
    </div>
  );
};
