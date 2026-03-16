import { Header } from '../../components/Header';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider';
import { useLanguage } from '../../contexts/LanguageContext';
import { ExternalLink, Heart, MessageCircle, Send, Bookmark } from 'lucide-react';

export const FranksAustralia = () => {
  const { t } = useLanguage();

  const instagramPosts = [
    {
      image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/1_SOCIAL_FRANKS.png",
      caption: "Sunshine State Of Mind... more",
      likes: "1,234"
    },
    {
      image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/2_SOCIAL_FRANKS.png",
      caption: "Pattern to Publication... more",
      likes: "856"
    },
    {
      image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/3_SOCIAL_FRANKS.png",
      caption: "Australian Sun... more",
      likes: "2,102"
    }
  ];

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main>
        <ShowcaseHero 
          title="Franks Australia"
          subtitle="From Pattern to Publication"
          description="A premium men’s swimwear brand that embodies the ”Australian Sun” lifestyle. They don’t just sell swim trunks; they sell a high-fidelity vision of summer."
          imageSrc="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/FRANKS_HEAD%20(1).jpg"
          caseStudyNumber="04"
          sector="Fashion"
          deliverables="Pattern / Publication / Video"
          railText="ESTABLISHED IN AUSTRALIA / PREMIUM"
          imagePosition="right"
        />

        {/* Section 01: Digital Prototyping */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">01. Digital Prototyping</span>
                <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-10">
                  From Pattern <span className="text-primary">to Reality</span>
                </h2>
                <div className="space-y-8 text-lg text-narrative-shadow/80 leading-relaxed">
                  <p>We bridge the gap between design and physical production. By ingesting your sewing patterns and technical CADs, we generate hyper-realistic digital samples.</p>
                  <div className="space-y-4">
                    <p><span className="font-bold text-black uppercase tracking-wider text-sm">The Power:</span> Eliminate the cost and 2–4 week delay of physical sampling.</p>
                    <p><span className="font-bold text-black uppercase tracking-wider text-sm">The Proof:</span> For Franks Australia, we visualize the drape and fit of new swim silhouettes before the first fabric roll is even printed.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <BeforeAfterSlider 
                  beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/SLIDE_1_1.png"
                  afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/SLIDE_2_1.png"
                  beforeLabel="PATTERN"
                  afterLabel="REALITY"
                  className="aspect-[4/5] shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Detail & Constancy */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">02. Detail & Constancy</span>
              <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-10">
                E-comm <span className="text-primary">Imagery</span>
              </h2>
              <div className="space-y-6 text-lg text-narrative-shadow/80 leading-relaxed">
                <p>The biggest flaw in standard AI is inconsistency. We solve this by using proprietary consistent models and e-commerce best practices.</p>
                <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                  <div className="bg-white p-8 border border-black/5">
                    <p className="font-bold text-black uppercase tracking-wider text-xs mb-3">The Power</p>
                    <p className="text-sm text-narrative-shadow/60">A full suite of product images with the same "talent" across every SKU. No "uncanny valley," just clean, high-conversion studio shots.</p>
                  </div>
                  <div className="bg-white p-8 border border-black/5">
                    <p className="font-bold text-black uppercase tracking-wider text-xs mb-3">The Control</p>
                    <p className="text-sm text-narrative-shadow/60">Full mastery over lighting, skin tones, and garment positioning.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="aspect-[9/16] overflow-hidden shadow-lg border border-black/5 rounded-md">
                <img src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/Eccom_1.png" className="w-full h-full object-cover rounded-md" alt="E-comm 1" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[9/16] overflow-hidden shadow-lg border border-black/5 rounded-md">
                <img src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/ECOM_FRONT.png" className="w-full h-full object-cover rounded-md" alt="E-comm 2" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[9/16] overflow-hidden shadow-lg border border-black/5 rounded-md">
                <img src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/ECOM_BACK_1%20(1).png" className="w-full h-full object-cover rounded-md" alt="E-comm 3" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Brand Building */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">03. Brand Building</span>
              <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-10">
                Lifestyle & <span className="text-primary">Editorial</span>
              </h2>
              <div className="space-y-6 text-lg text-narrative-shadow/80 leading-relaxed">
                <p>The biggest flaw in standard AI is inconsistency. We solve this by using proprietary consistent models and e-commerce best practices.</p>
                <div className="grid md:grid-cols-2 gap-8 mt-12 text-left">
                  <div className="bg-[#F5F5F0] p-8 border border-black/5">
                    <p className="font-bold text-black uppercase tracking-wider text-xs mb-3">The Power</p>
                    <p className="text-sm text-narrative-shadow/60">A full suite of product images with the same "talent" across every SKU. No "uncanny valley," just clean, high-conversion studio shots.</p>
                  </div>
                  <div className="bg-[#F5F5F0] p-8 border border-black/5">
                    <p className="font-bold text-black uppercase tracking-wider text-xs mb-3">The Control</p>
                    <p className="text-sm text-narrative-shadow/60">Full mastery over lighting, skin tones, and garment positioning.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div className="aspect-[9/16] overflow-hidden shadow-2xl rounded-md">
                <img src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/2Artboard%202.png" className="w-full h-full object-cover rounded-md" alt="Lifestyle 1" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-[9/16] overflow-hidden shadow-2xl max-w-sm mx-auto md:ml-auto rounded-md">
                <video 
                  src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/Franks%20Lifestyle.%20Vid%20.mp4" 
                  className="w-full h-full object-cover rounded-md" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Section: Getting Social */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center mb-20">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">Getting Social</span>
              <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-10">
                Social & <span className="text-primary">Engagement</span>
              </h2>
              <div className="space-y-8 text-lg text-narrative-shadow/80 leading-relaxed">
                <p>We close the loop between the studio and the feed. We cover the full lifecycle of a product launch, generating high-volume, platform-ready content in days rather than weeks.</p>
                <div className="grid md:grid-cols-2 gap-8 text-left">
                  <p><span className="font-bold text-black uppercase tracking-wider text-xs block mb-2">The Power:</span> Instant social assets—from high-fidelity product flatlays to macro detail shots and sun-drenched lifestyle content—all ready for Instagram and TikTok.</p>
                  <p><span className="font-bold text-black uppercase tracking-wider text-xs block mb-2">The Result:</span> A never-ending stream of high-engagement content that keeps the brand "always-on," feeding the algorithm with consistent quality and scaling visibility without manual friction.</p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {instagramPosts.map((post, i) => (
                <div key={i} className="bg-white border border-black/10 shadow-xl overflow-hidden rounded-md">
                  <div className="flex items-center p-3 gap-3">
                    <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-[10px] text-white font-bold">FA</div>
                    <div className="text-xs font-bold">franksaustralia • <span className="text-primary">Follow</span></div>
                  </div>
                  <div className="aspect-square overflow-hidden bg-gray-100">
                    <img src={post.image} className="w-full h-full object-cover" alt="Instagram post" referrerPolicy="no-referrer" />
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between mb-3">
                      <div className="flex gap-4">
                        <Heart className="w-6 h-6" />
                        <MessageCircle className="w-6 h-6" />
                        <Send className="w-6 h-6" />
                      </div>
                      <Bookmark className="w-6 h-6" />
                    </div>
                    <div className="text-sm font-bold mb-1">{post.likes} likes</div>
                    <div className="text-sm"><span className="font-bold">franksaustralia</span> {post.caption}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-5xl font-sans font-bold leading-tight">
              "By embracing the speed and efficiency of AI through <span className="italic">NUstudios</span>, Franks Australia has bypassed traditional production bottlenecks—allowing them to elevate their brand imagery and grow at a speed previously impossible for independent labels."
            </h2>
          </div>
        </section>

        {/* Speed. Soul. Scale. Section */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-t border-black/5">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-8xl font-serif italic mb-16">Speed. Soul. Scale.</h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a 
                href="/contact" 
                className="bg-black text-white px-10 py-5 text-sm font-black uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-primary transition-colors"
              >
                INQUIRE NOW <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="/creative" 
                className="bg-white text-black border border-black px-10 py-5 text-sm font-black uppercase tracking-[0.3em] hover:bg-black hover:text-white transition-colors"
              >
                VIEW FRAMEWORK
              </a>
            </div>
            <p className="mt-20 text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">© 2024 NUSTUDIOS × FRANKS AUSTRALIA.</p>
          </div>
        </section>

        <ProjectNavigation 
          prevProject={{ title: t.palmeiral.heroTitle, slug: '/showcase/o-palmeiral', thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/2Artboard%201.png' }}
          nextProject={{ title: t.quinta.heroTitle, slug: '/showcase/quinta-do-pinto', thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-wine-brands.png' }}
        />
      </main>
    </div>
  );
};

