import { Header } from '../../components/Header';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider';
import { Sparkles, Check, Zap, Camera, Play, ShoppingCart, Globe } from 'lucide-react';
import { useLanguage } from '../../contexts/LanguageContext';

export const SaltLily = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      <main>
        <ShowcaseHero 
          title="Salt Lily"
          subtitle="Scaling Jewellery Content"
          description="A full visual and automation system built for Salt Lily—designed to create, manage, and distribute premium jewellery content at scale."
          imageSrc="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png"
          caseStudyNumber="02"
          sector="Jewellery"
          deliverables="AI Imagery / Automation / SEO"
          railText="ESTABLISHED IN 2023 / SCALABLE"
        />

        {/* Section 01: The Brand We Built This For */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-10">
                  The Brand We <span className="text-primary">Built This For</span>
                </h2>
                <div className="space-y-6 text-lg text-narrative-shadow/80 leading-relaxed">
                  <p>Salt Lily is a modern waterproof jewellery brand with an established Shopify store and an active, engaged Instagram presence. Their visual identity is refined, their audience loyal.</p>
                  <p className="text-narrative-shadow/60">The challenge wasn't creating content—it was producing enough high-quality visuals at scale while maintaining the brand consistency their customers expect.</p>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden shadow-2xl rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/Gemini_Generated_Image_gx9357gx9357gx93_1.jpeg" 
                    className="w-full h-full object-cover rounded-md" 
                    alt="Salt Lily Brand" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 02: Feed-Ready Imagery */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-6">
                Feed-Ready Imagery <span className="text-primary">That Matches the Brand</span>
              </h2>
              <p className="text-lg text-narrative-shadow/60 leading-relaxed">
                AI-assisted imagery created specifically for Salt Lily's Instagram grid, matching the look and quality of their existing posts.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { title: 'Basic product photography', src: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/jewelry_prodoct.jpg", icon: Camera },
                { title: 'Earring product photo', src: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/49b80539-fe19-479e-9dae-e0eb82e19511.jpg", icon: Sparkles },
                { title: 'Finished social-ready AI Image', src: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png", icon: Check },
                { title: 'Video content', src: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/sped_up_video.mp4", icon: Play, isVideo: true }
              ].map((item, i) => (
                <div key={i} className="space-y-4 group">
                  <div className="aspect-[3/4] overflow-hidden bg-white border border-black/5 shadow-lg group-hover:shadow-xl transition-shadow rounded-md">
                    {item.isVideo ? (
                      <video src={item.src} className="w-full h-full object-cover rounded-md" autoPlay loop muted playsInline />
                    ) : (
                      <img src={item.src} className="w-full h-full object-cover rounded-md" alt={item.title} referrerPolicy="no-referrer" />
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <item.icon className="w-4 h-4 text-primary" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-narrative-shadow/60">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 03: The Brand We Built This For (Challenges) */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="order-2 lg:order-1">
                <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/FEMME_HER.png" 
                    className="w-full h-full object-cover rounded-md" 
                    alt="Jewellery Detail" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-10">
                  The Brand We <span className="text-primary">Built This For</span>
                </h2>
                <div className="space-y-8 text-lg text-narrative-shadow/80 leading-relaxed">
                  <p>Jewellery presents unique challenges that expose the limitations of most AI image generation. Reflections on polished metal surfaces, accurate colour representation of gold, silver, and rose gold, the way light interacts with gemstones—these details matter.</p>
                  <div className="p-8 bg-[#F5F5F0] border-l-4 border-primary">
                    <p className="italic font-sans">"Our approach is controlled, human-directed AI. Every output is reviewed, refined, and approved before it represents the brand."</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 04: From Still Images to Scroll-Stopping Video */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-6">
                From Still Images <span className="text-primary">to Scroll-Stopping Video</span>
              </h2>
              <p className="text-lg text-narrative-shadow/60 leading-relaxed">
                Still imagery transformed into video content suitable for Reels, TikTok, and paid social—without traditional filming.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="aspect-square overflow-hidden bg-white border border-black/5 shadow-xl rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/baae6b23-4f9e-49d9-8b07-9c5b8efbd951-aXWCm98I%20(1).jpg" 
                    className="w-full h-full object-cover rounded-md" 
                    alt="Source Still" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">SOURCE STILL</p>
              </div>
              <div className="space-y-4">
                <div className="aspect-video overflow-hidden bg-white border border-black/5 shadow-2xl rounded-md">
                  <video 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily-zoom.mp4" 
                    className="w-full h-full object-cover rounded-md" 
                    autoPlay loop muted playsInline
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">RESULTING SHORT-FORM VIDEO</p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 05: Product Imagery Built for Conversion */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-6">
                Product Imagery <span className="text-primary">Built for Conversion</span>
              </h2>
              <p className="text-lg text-narrative-shadow/60 leading-relaxed">
                Lifestyle and close-up images designed for Shopify product and collection pages. These visuals support customer trust, clarity, and conversion.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-8">
                <div className="border border-black/5 shadow-xl rounded-md">
                  <BeforeAfterSlider 
                    beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/Salt_lily_FEMME_product_earring.png" 
                    afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/Salt_lily_FEMME_product.png" 
                    beforeLabel="Before" 
                    afterLabel="After"
                    className="aspect-square rounded-md"
                  />
                </div>
                <div className="border border-black/5 shadow-xl rounded-md">
                  <BeforeAfterSlider 
                    beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/94eb8954-6637-43f2-9553-042705895ff8.jpg" 
                    afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/ChunkyFinal.jpg" 
                    beforeLabel="Before" 
                    afterLabel="After"
                    className="aspect-square rounded-md"
                  />
                </div>
              </div>
              <div className="space-y-8">
                <div className="border border-black/5 shadow-xl rounded-md">
                  <BeforeAfterSlider 
                    beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/5a56838a-7813-48c8-ae76-5898844dc13a.jpg" 
                    afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/Gemini_Generated_Image_nqssybnqssybnqss.png" 
                    beforeLabel="Before" 
                    afterLabel="After"
                    className="aspect-square rounded-md"
                  />
                </div>
                <div className="border border-black/5 shadow-xl rounded-md">
                  <BeforeAfterSlider 
                    beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/21be479c-78f9-4710-8412-0dbeee5747a7_1.jpg" 
                    afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/smiling_no_watermark.jpeg" 
                    beforeLabel="Before" 
                    afterLabel="After"
                    className="aspect-square rounded-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 06: The AI Brain Behind the Publishing */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-10">
                  The AI Brain <span className="text-primary">Behind the Publishing</span>
                </h2>
                <div className="space-y-8 text-lg text-narrative-shadow/80 leading-relaxed mb-12">
                  <p>We built a system for Salt Lily that scans their Shopify products and posts daily on Instagram, Facebook and TikTok — and publishes an SEO-optimised blog every day.</p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { icon: ShoppingCart, title: 'Shopify Sync', text: 'Real-time product data ingestion.' },
                    { icon: Globe, title: 'SEO Blog', text: 'Automated high-intent articles.' },
                    { icon: Zap, title: 'Daily Posts', text: 'Hands-off social distribution.' },
                    { icon: Sparkles, title: 'AI Creative', text: 'Continuous asset generation.' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center gap-2">
                        <item.icon className="w-4 h-4 text-primary" />
                        <h4 className="font-bold uppercase tracking-tight text-xs">{item.title}</h4>
                      </div>
                      <p className="text-xs text-narrative-shadow/50">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-full border-8 border-white shadow-2xl">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/socials.webp" 
                    className="w-full h-full object-cover" 
                    alt="AI Automation System" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary flex items-center justify-center rounded-full shadow-xl rotate-12">
                  <Sparkles className="w-12 h-12 text-black" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <ProjectNavigation 
          prevProject={{ 
            title: t.quinta.heroTitle, 
            slug: '/showcase/quinta-do-pinto', 
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-wine-brands.png' 
          }}
          nextProject={{ 
            title: t.palmeiral.heroTitle, 
            slug: '/showcase/o-palmeiral', 
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/2Artboard%201.png' 
          }}
        />
      </main>
    </div>
  );
};
