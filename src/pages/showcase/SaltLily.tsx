import { Header } from '../../components/Header';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { BeforeAfterSlider } from '../../components/BeforeAfterSlider';
import { useLanguage } from '../../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { Sparkles, Check, Zap, Camera, Play, ShoppingCart, Globe, ExternalLink, TrendingUp, Share2 } from 'lucide-react';

export const SaltLily = () => {
  const { t } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
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
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">01. THE BRAND</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  The Brand We Built This For<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed">
                  <p>Salt Lily is a modern waterproof jewellery brand with an established Shopify store and an active, engaged Instagram presence. Their visual identity is refined, their audience loyal.</p>
                  <p className="text-narrative-shadow/60">The challenge wasn't creating content—it was producing enough high-quality visuals at scale while maintaining the brand consistency their customers expect.</p>
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="aspect-square overflow-hidden shadow-2xl rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/Gemini_Generated_Image_gx9357gx9357gx93_1.jpeg" 
                    className="w-full h-full object-cover rounded-md" 
                    alt="Salt Lily Brand" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 02: Feed-Ready Imagery */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">02. CONTENT ENGINE</span>
              <h2 className="text-4xl md:text-7xl font-display mb-8 leading-[0.9] tracking-tighter uppercase text-black">
                Feed-Ready Imagery<span className="text-primary">.</span>
              </h2>
              <p className="text-xl text-narrative-shadow/60 leading-relaxed">
                AI-assisted imagery created specifically for Salt Lily's Instagram grid, matching the look and quality of their existing posts.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { title: 'Basic product photography', src: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/jewelry_prodoct.jpg", icon: Camera },
                { title: 'Earring product photo', src: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/49b80539-fe19-479e-9dae-e0eb82e19511.jpg", icon: Sparkles },
                { title: 'Finished social-ready AI Image', src: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png", icon: Check },
                { title: 'Video content', src: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/sped_up_video.mp4", icon: Play, isVideo: true }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="space-y-6 group"
                >
                  <div className="aspect-[3/4] overflow-hidden bg-white border border-[#EEEEEE] shadow-sm group-hover:shadow-md transition-all rounded-md">
                    {item.isVideo ? (
                      <video src={item.src} className="w-full h-full object-cover rounded-md" autoPlay loop muted playsInline />
                    ) : (
                      <img src={item.src} className="w-full h-full object-cover rounded-md" alt={item.title} referrerPolicy="no-referrer" />
                    )}
                  </div>
                  <div className="flex items-center gap-3">
                    <item.icon className="w-5 h-5 text-primary" />
                    <p className="text-[10px] font-bold uppercase tracking-widest text-narrative-shadow/60">{item.title}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 03: Challenges */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="order-2 lg:order-1"
              >
                <div className="aspect-[4/5] overflow-hidden shadow-2xl rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/FEMME_HER.png" 
                    className="w-full h-full object-cover rounded-md" 
                    alt="Jewellery Detail" 
                    referrerPolicy="no-referrer"
                  />
                </div>
              </motion.div>
              <motion.div {...fadeInUp} className="order-1 lg:order-2">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">03. THE CHALLENGE</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  Jewellery Precision<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed">
                  <p>Jewellery presents unique challenges that expose the limitations of most AI image generation. Reflections on polished metal surfaces, accurate colour representation of gold, silver, and rose gold, the way light interacts with gemstones—these details matter.</p>
                  <div className="p-8 bg-[#F9F9F7] border-l-4 border-primary rounded-r-md">
                    <p className="italic font-serif">"Our approach is controlled, human-directed AI. Every output is reviewed, refined, and approved before it represents the brand."</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 04: From Still Images to Scroll-Stopping Video */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">04. MOTION ASSETS</span>
              <h2 className="text-4xl md:text-7xl font-display mb-8 leading-[0.9] tracking-tighter uppercase text-black">
                Still to Video<span className="text-primary">.</span>
              </h2>
              <p className="text-xl text-narrative-shadow/60 leading-relaxed">
                Still imagery transformed into video content suitable for Reels, TikTok, and paid social—without traditional filming.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div {...fadeInUp} className="space-y-6">
                <div className="aspect-square overflow-hidden bg-white border border-[#EEEEEE] shadow-sm rounded-md">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/baae6b23-4f9e-49d9-8b07-9c5b8efbd951-aXWCm98I%20(1).jpg" 
                    className="w-full h-full object-cover rounded-md" 
                    alt="Source Still" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-black/40">SOURCE STILL</p>
              </motion.div>
              <motion.div {...fadeInUp} className="space-y-6">
                <div className="aspect-video overflow-hidden bg-white border border-[#EEEEEE] shadow-xl rounded-md">
                  <video 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily-zoom.mp4" 
                    className="w-full h-full object-cover rounded-md" 
                    autoPlay loop muted playsInline
                  />
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">RESULTING SHORT-FORM VIDEO</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 05: Product Imagery Built for Conversion */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center max-w-3xl mx-auto mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">05. CONVERSION</span>
              <h2 className="text-4xl md:text-7xl font-display mb-8 leading-[0.9] tracking-tighter uppercase text-black">
                Built for Conversion<span className="text-primary">.</span>
              </h2>
              <p className="text-xl text-narrative-shadow/60 leading-relaxed">
                Lifestyle and close-up images designed for Shopify product and collection pages. These visuals support customer trust, clarity, and conversion.
              </p>
            </motion.div>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-12">
                <motion.div {...fadeInUp} className="border border-[#EEEEEE] shadow-sm rounded-md overflow-hidden">
                  <BeforeAfterSlider 
                    beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/Salt_lily_FEMME_product_earring.png" 
                    afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/Salt_lily_FEMME_product.png" 
                    beforeLabel="Before" 
                    afterLabel="After"
                    className="aspect-square"
                  />
                </motion.div>
                <motion.div {...fadeInUp} className="border border-[#EEEEEE] shadow-sm rounded-md overflow-hidden">
                  <BeforeAfterSlider 
                    beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/94eb8954-6637-43f2-9553-042705895ff8.jpg" 
                    afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/ChunkyFinal.jpg" 
                    beforeLabel="Before" 
                    afterLabel="After"
                    className="aspect-square"
                  />
                </motion.div>
              </div>
              <div className="space-y-12">
                <motion.div {...fadeInUp} className="border border-[#EEEEEE] shadow-sm rounded-md overflow-hidden">
                  <BeforeAfterSlider 
                    beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/5a56838a-7813-48c8-ae76-5898844dc13a.jpg" 
                    afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/Gemini_Generated_Image_nqssybnqssybnqss.png" 
                    beforeLabel="Before" 
                    afterLabel="After"
                    className="aspect-square"
                  />
                </motion.div>
                <motion.div {...fadeInUp} className="border border-[#EEEEEE] shadow-sm rounded-md overflow-hidden">
                  <BeforeAfterSlider 
                    beforeImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/21be479c-78f9-4710-8412-0dbeee5747a7_1.jpg" 
                    afterImage="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/smiling_no_watermark.jpeg" 
                    beforeLabel="Before" 
                    afterLabel="After"
                    className="aspect-square"
                  />
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 06: The AI Brain Behind the Publishing */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">06. AUTOMATION</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  The AI Brain<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8 text-xl text-narrative-shadow/80 leading-relaxed mb-12">
                  <p>We built a system for Salt Lily that scans their Shopify products and posts daily on Instagram, Facebook and TikTok — and publishes an SEO-optimised blog every day.</p>
                </div>
                <div className="grid grid-cols-2 gap-8">
                  {[
                    { icon: ShoppingCart, title: 'Shopify Sync', text: 'Real-time product data ingestion.' },
                    { icon: Globe, title: 'SEO Blog', text: 'Automated high-intent articles.' },
                    { icon: Zap, title: 'Daily Posts', text: 'Hands-off social distribution.' },
                    { icon: Sparkles, title: 'AI Creative', text: 'Continuous asset generation.' }
                  ].map((item, i) => (
                    <div key={i} className="space-y-3 group">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 flex items-center justify-center shrink-0">
                          <item.icon className="w-10 h-10 text-primary" />
                        </div>
                        <h4 className="font-bold uppercase tracking-tight text-xs group-hover:text-primary transition-colors">{item.title}</h4>
                      </div>
                      <p className="text-sm text-narrative-shadow/50 leading-relaxed">{item.text}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
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
              </motion.div>
            </div>
          </div>
        </section>

        {/* Impact Section: Bento Grid */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div {...fadeInUp} className="text-center mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">THE IMPACT</span>
              <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                Results that Scale<span className="text-primary">.</span>
              </h2>
            </motion.div>
 
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: TrendingUp, title: "Growth", text: "200% increase in organic traffic through daily SEO-optimized publishing." },
                { icon: Share2, title: "Presence", text: "Always-on social strategy with zero manual content creation required." },
                { icon: Sparkles, title: "Quality", text: "Premium jewelry visuals that outperform traditional photography in engagement." }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 bg-[#F9F9F7] border border-[#EEEEEE] rounded-md shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-14 h-14 flex items-center justify-center mb-8">
                    <item.icon className="w-10 h-10 text-primary" />
                  </div>
                  <h3 className="font-bold text-xl mb-4 uppercase tracking-tight">{item.title}</h3>
                  <p className="text-narrative-shadow/60 leading-relaxed">{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Section */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-black/5">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <motion.p 
              {...fadeInUp}
              className="text-3xl md:text-5xl text-black font-serif italic leading-tight"
            >
              “NUstudios didn't just give us content; they gave us a content engine. Our brand is now always-on, always-growing, and always-consistent across every platform.”
            </motion.p>
          </div>
        </section>

        {/* Speed. Soul. Scale. Section */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <h2 className="text-6xl md:text-8xl font-display uppercase mb-16 leading-[0.9] tracking-tighter text-black">
              Speed. Soul. Scale<span className="text-primary">.</span>
            </h2>
            <div className="flex flex-col md:flex-row gap-6 justify-center">
              <a 
                href="/contact" 
                className="bg-black text-white px-10 py-5 text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform flex items-center justify-center gap-3"
              >
                INQUIRE NOW <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="/creative" 
                className="bg-white text-black border border-black px-10 py-5 text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform"
              >
                VIEW FRAMEWORK
              </a>
            </div>
            <p className="mt-24 text-[10px] font-bold uppercase tracking-[0.5em] text-black/20">© 2024 NUSTUDIOS × SALT LILY.</p>
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

