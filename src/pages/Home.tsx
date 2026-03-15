import { useState } from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { LogoScroll } from '../components/LogoScroll';
import { HomeResultsBento } from '../components/HomeResultsBento';
import { Link, useNavigate } from 'react-router-dom';
import { getAssetUrl } from '../constants';
import { FadeIn } from '../components/FadeIn';
import { ShowreelModal } from '../components/ShowreelModal';

const ServiceAccordionItem = ({ service, isOpen, onToggle }: { service: any, isOpen: boolean, onToggle: () => void }) => {
  return (
    <div className="border-b border-border overflow-hidden">
      <button 
        onClick={onToggle}
        className="w-full flex items-center justify-between py-12 text-left group"
      >
        <div className="flex items-baseline gap-8">
          <span className="text-red-600 font-display font-bold text-2xl md:text-3xl">{service.id}</span>
          <h3 className="text-4xl md:text-7xl font-display font-bold tracking-tighter uppercase group-hover:text-red-600 transition-colors">{service.title}</h3>
        </div>
        <div className="text-4xl font-light text-red-600">
          {isOpen ? '×' : '+'}
        </div>
      </button>
      
      {isOpen && (
        <div className="pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12 animate-in fade-in slide-in-from-top-4 duration-500">
          <div className="lg:col-span-1 hidden lg:block"></div>
          <div className="lg:col-span-10">
            <div className="flex justify-between items-start mb-12">
              {service.subHeading && (
                <h4 className="text-2xl font-display font-bold uppercase text-red-600">{service.subHeading}</h4>
              )}
            </div>
            
            {/* Description + Sub-services */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <p className="text-xl md:text-2xl text-text/70 font-sans leading-relaxed">
                {service.desc}
              </p>
              <ul className="space-y-4">
                {service.subServices.map((sub: string, idx: number) => (
                  <li key={idx} className="flex items-center gap-4 text-xl font-sans text-text">
                    <span className="w-1.5 h-1.5 bg-black rounded-full" />
                    {sub}
                  </li>
                ))}
              </ul>
            </div>

            {/* Images */}
            <div className={`grid grid-cols-1 ${service.id === '06' || service.id === '05' || service.id === '02' || service.id === '03' || service.id === '01' ? 'sm:grid-cols-3' : 'sm:grid-cols-2'} gap-8 mb-16`}>
              {service.images.map((img: any, idx: number) => (
                <div key={idx} className="space-y-4">
                  <div className={`${service.id === '04' ? 'aspect-[19/6]' : 'aspect-[4/6]'} overflow-hidden rounded-md`}>
                    {img.src.endsWith('.mp4') ? (
                      <video 
                        src={getAssetUrl(img.src)} 
                        className="w-full h-full object-cover rounded-md"
                        autoPlay 
                        loop 
                        muted 
                        playsInline
                      />
                    ) : (
                      <img 
                        src={getAssetUrl(img.src)} 
                        alt={img.caption} 
                        className="w-full h-full object-cover rounded-md"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                  <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-text/60 leading-tight">
                    {img.caption}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <Link to="/onboarding" className="bg-red-600 text-white px-10 py-4 rounded-full font-sans font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-all w-fit">
                {service.id === '06' ? 'Book A Demo' : 'Learn More'}
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Home = () => {
  const [url, setUrl] = useState('');
  const [essentialTab, setEssentialTab] = useState<'creative' | 'automation' | 'stack'>('stack');
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleAnalyze = () => {
    if (url) {
      navigate(`/dna-scan?url=${encodeURIComponent(url)}`);
    }
  };

  return (
    <div className="flex flex-col bg-bg text-text">
      {/* Section 1: Hero (Header) */}
      <section id="growth" className="relative w-full h-screen flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <video 
            src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/HNG/Starling_Investigates_Grenade_Loop.mp4" 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          />
        </div>
        <div className="absolute bottom-[28px] left-1/2 -translate-x-1/2 z-10 md:hidden">
          <button 
            onClick={() => setIsModalOpen(true)}
            className="bg-red-600 text-white px-8 py-3 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all shadow-xl"
          >
            Watch Showreel
          </button>
        </div>
      </section>

      <ShowreelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      {/* Section 2: Vision */}
      <section className="py-32 px-6 md:px-[60px] bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4">
          <div className="hidden md:block"></div>
          <div className="md:col-span-2 text-center relative">
            <FadeIn delay={0.1}>
              <div className="absolute -top-16 md:-top-24 left-1/2 -translate-x-1/2 flex flex-col items-center">
                 <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-text/60 mb-2">AI Like You Mean Business</span>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text/40">
                   <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-[0.85] mb-12 uppercase mt-12 md:mt-0">
                Time to trigger explosive growth.
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-sm md:text-base text-text/80 max-w-2xl mx-auto font-sans leading-relaxed mb-12">
                We help independent businesses, ambitious founders, and local visionaries look and operate like global industry leaders. We don't just provide "pretty pictures"—we hand build creative and automation systems using the power of Ai designed for tangible growth.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Link to="/onboarding" className="bg-red-600 text-white px-10 py-4 rounded-full font-sans font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-all">
                Grow Your Business
              </Link>
            </FadeIn>
          </div>
          <div className="hidden md:block"></div>
        </div>
      </section>

      {/* Section 3: Results (Bento Box) */}
      <section id="results" className="py-32 bg-black text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <FadeIn delay={0.1}>
              <p className="section-label mb-4 !text-red-600 uppercase opacity-100">OUR WORK</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.8] uppercase text-white">RESULTS<span className="text-red-600">.</span></h2>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3}>
            <HomeResultsBento />
          </FadeIn>
          
          <div className="mt-16 text-center">
            <FadeIn delay={0.4}>
              <Link to="/results" className="bg-red-600 text-white px-10 py-4 rounded-full font-sans font-bold text-xs uppercase tracking-widest hover:bg-red-700 transition-all">
                View All Results
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section 3.5: Quote */}
      <section className="py-24 md:py-32 px-6 md:px-[120px] bg-white text-black">
        <div className="max-w-7xl">
          <FadeIn delay={0.1}>
            <h2 className="text-2xl md:text-4xl font-display font-bold tracking-tighter leading-[1.2] max-w-3xl">
              Forget the algorithms, the AI hype, and the tech buzzwords. We use the world's most advanced technology to do two very simple, human things: make your brand look beautiful, and give you your weekends back.
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: Brands (Logo Scroll) */}
      <section className="border-b border-border">
        <div className="px-6 md:px-[120px] mb-2 flex items-end gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/60">
            OUR PARTNERS
          </p>
        </div>
        <LogoScroll />
      </section>

      {/* Section 5: Services (Accordion Style) */}
      <section id="services" className="py-32 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 px-6">
            <FadeIn delay={0.1}>
              <p className="section-label mb-4 uppercase">OUR CAPABILITIES</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.8] uppercase">SERVICES<span className="text-red-600">.</span></h2>
            </FadeIn>
          </div>

          <div className="flex flex-col border-t border-border px-6 md:px-[60px]">
            {[
              { 
                id: '01', 
                title: 'Branding',
                subHeading: 'Strategy & Identity',
                desc: "Our Identity Mapping process begins here. Before a single pixel is moved, we define your strategic foundation. We conduct deep Market Research and Brand Strategy to craft a Visual Identity and Messaging framework that anchors your brand soul.",
                subServices: ['Market Research', 'Brand Strategy', 'Strategic Messaging', 'Brand Positioning', 'Visual DNA Mapping'],
                images: [
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/BRAND_1.png', caption: 'Brand Visual DNA Mapping' },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/Brand_Trend.png', caption: 'Forcasting & Research' },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/Brand_Develp.png', caption: 'DEFINING THE STRATEGIC DNA' }
                ]
              },
              { 
                id: '02', 
                title: 'Creative',
                subHeading: 'The Virtual Studio',
                desc: 'Premium Art Direction at the speed of AI, powered by our HITL (Human-In-The-Loop) standard. We translate your Branding into high-impact Campaigns, Editorial Shoots, and Social Media content, ensuring consistent artistic prestige across every output.',
                subServices: ['Art Direction', 'Campaign Production', 'Graphic Design', 'Social Media Content', 'Location-Based Shoots', 'Model & Lighting Control'],
                images: [
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/CREAT_1.png', caption: 'ELEVATING E-COMMERCE THROUGH ARTFUL DESIGN' },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/CREATE_2.png', caption: 'CRAFTING IMMERSIVE BRAND EXPERIENCES' },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/CREAT_3.PNG', caption: 'CRAFTING IMMERSIVE BRAND EXPERIENCES' }
                ]
              },
              { 
                id: '03', 
                title: 'Automation', 
                desc: "The connective tissue of the agency. We build autonomous systems that power the entire brand lifecycle. From our bread-and-butter Social Media Automation to bespoke AI-driven marketing systems, we ensure your brand remains 'always-on' while protecting your creative margins.",
                subServices: ['Social Media Automation', 'Workflow Automation', 'AI Pipeline Design', 'Content Iteration Tools', 'API & CRM Integration', 'Autonomous Production'],
                images: [
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-content.png', caption: 'POSTING LOGIC THAT FEELS HUMAN' },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/AUTO_STACK.png', caption: 'AUTOMATION WORKFLOWS' },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-growth.png', caption: 'AUTOMATION WITH A HUMAN CHECKPOINT' }
                ]
              },
              { 
                id: '04', 
                title: 'Growth', 
                subHeading: 'Blogs & Social Engagement',
                desc: "Feeding the social media beast so you don't have to. We produce high-equity long-form content and drive active social engagement to ensure your brand is not just seen, but heard. From SEO-optimized blogs to community management, we keep your audience anchored and growing.",
                subServices: ['SEO Blog Production', 'Community Management', 'Social Engagement Strategy', 'Newsletter Curation', 'Narrative Long-form', 'Active Audience Growth'],
                images: [
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/Growth_Vid.mp4', caption: 'SCALING BRAND GROWTH' }
                ]
              },
              { 
                id: '05', 
                title: 'Ecomm', 
                subHeading: 'Product & Storefront',
                desc: 'The Technical Engine. We function as an embedded department for surgical product execution. From high-fidelity Product Flatlays to specialized Pattern Repeats and CADs, we handle the precision required to turn art into shippable product.',
                subServices: ['Ecomm Product Flatlays', 'Product shots on models', 'Product Development', 'Technical CAD Design', 'Pattern Repeats', 'Shopify Storefronts'],
                images: [
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/ECOMM_1.png', caption: 'PRODUCT FLAT-LAYS' },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/ECCOM_2.png', caption: 'PRODUCT IMAGERY' },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/ECOMM_3.png', caption: 'ECOMM PRODUCT IMAGES' }
                ]
              },
              { 
                id: '06', 
                title: 'Ai Tool Kit', 
                subHeading: 'Subscription-Based Member Lab',
                desc: 'Ultimate editorial control for high-growth brands. Our subscription-based Tool Kit provides members with private infrastructure to generate, style, and lock their brand identity with surgical precision and cinematic quality.',
                subServices: ['Directors Chair: Ultimate GFX/Video Control', 'Model Agency: Locked Brand Models', 'The Virtual Stylist: AI Outfit Generator', 'Garment Fit & Accessory Tools', 'Infinite Generation Bandwidth', 'Member-Only API Access'],
                images: [
                { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/AI_TOOL_1.png', caption: 'EDITORIAL SHOTS' },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/AI_TOOL_2_1.png', caption: 'CONSISTENT MODELS' },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/AI_TOOL_3.png', caption: 'ADD & REMOVE ACCESSORIES' }
                ]
              }
            ].map((service, i) => (
              <ServiceAccordionItem 
                key={i} 
                service={service} 
                isOpen={openServiceIndex === i} 
                onToggle={() => setOpenServiceIndex(openServiceIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5.1: Industry Solutions */}
      <section className="py-32 bg-[#f8f8f8] border-b border-border">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <FadeIn delay={0.1}>
            <h2 className="text-5xl md:text-[80px] font-display font-bold tracking-tighter leading-[0.9] uppercase text-left mb-24 text-[#111]">
              INDUSTRY SOLUTIONS<span className="text-[#ff4081]">.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "WINERIES", desc: "Capturing terroir and heritage through high-prestige visuals.", image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-wine-brands.png" },
              { title: "HOSPITALITY", desc: "Immersive culinary and architectural atmospheres.", image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-main.png" },
              { title: "ECOMMERCE", desc: "High-conversion narratives and product consistency.", image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/ECCOM_2.png" },
              { title: "FASHION", desc: "From raw sketches to fully realized studio shoots.", image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/FRANKS_1.png" },
              { title: "JEWELLERY", desc: "Macro shots emphasizing stone clarity and luster.", image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png" },
              { title: "B2B", desc: "Elevating infrastructure into strategic narratives.", image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-do-pinto-header.jpg" }
            ].map((industry, idx) => (
              <FadeIn key={idx} delay={0.1 * (idx + 1)}>
                <div className="group relative bg-white rounded-md p-10 h-[320px] flex flex-col justify-between overflow-hidden cursor-pointer transition-all duration-500 hover:-translate-y-2 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
                  <div className="absolute inset-0 bg-black/40 transition-colors duration-500 z-0">
                    {industry.image && (
                      <img src={industry.image} className="w-full h-full object-cover mix-blend-overlay opacity-100 transition-opacity duration-500" alt={industry.title} referrerPolicy="no-referrer" />
                    )}
                  </div>
                  
                  <div className="relative z-10 flex justify-between items-start">
                    <h3 className="text-2xl font-display font-bold uppercase tracking-tight text-white transition-colors duration-500">{industry.title}</h3>
                    <span className="text-white font-light text-3xl leading-none transition-colors duration-500">+</span>
                  </div>
                  
                  <div className="relative z-10">
                    <p className="text-white/90 font-sans text-sm md:text-base leading-relaxed max-w-[85%] transition-colors duration-500">
                      {industry.desc}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5.5: Bento Infographic */}
      <section className="bg-black text-white py-24 px-6 md:px-[60px]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-1 p-6 border border-white/10 flex flex-col justify-center items-start overflow-hidden">
            <motion.div 
              className="flex flex-col gap-2 text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter text-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.2 } },
                hidden: {}
              }}
            >
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: -20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                LISBON<span className="text-red-600">.</span>
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                MELBOURNE<span className="text-red-600">.</span>
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                LONDON<span className="text-red-600">.</span>
              </motion.span>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            <div className="p-8 border border-white/10 flex flex-col justify-center">
              <span className="text-4xl font-display font-bold mb-2">30%</span>
              <span className="text-xs uppercase tracking-widest text-white/60">The Cost of A Standard Agency</span>
            </div>
            <div className="p-8 border border-white/10 flex flex-col justify-center">
              <span className="text-4xl font-display font-bold mb-2">10x</span>
              <span className="text-xs uppercase tracking-widest text-white/60">The Content Output</span>
            </div>
            <div className="p-8 border border-white/10 flex flex-col justify-center">
              <span className="text-4xl font-display font-bold mb-2">100%</span>
              <span className="text-xs uppercase tracking-widest text-white/60">On Brand</span>
            </div>
            <div className="p-8 border border-white/10 flex flex-col justify-center">
              <span className="text-4xl font-display font-bold mb-2">24/7</span>
              <span className="text-xs uppercase tracking-widest text-white/60">Automation Output</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border border-white/10 flex flex-col justify-center items-center text-center">
            <p className="text-2xl md:text-4xl font-display font-bold tracking-tighter leading-[1.2] text-white/70 max-w-3xl">The world is moving at machine speed. Don't get left behind because you were too busy doing things the old way.</p>
          </div>
        </div>
      </section>

      {/* Section 6: DNA Scan CTA */}
      <section id="dna-scan-cta" className="py-32 bg-bg border-b border-border hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-[60px]">
          <div className="p-16 md:p-24 bg-neutral border border-border flex flex-col items-center text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-600/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2" />
            
            <p className="section-label mb-12">Vision Lab / Phase 01</p>
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 tracking-tighter leading-[0.8] uppercase">
              DNA Scan
            </h2>
            <p className="text-xl md:text-2xl text-text/60 mb-16 font-sans max-w-2xl leading-relaxed">
              Map your brand's visual soul and unlock unstoppable growth. Enter your URL to begin the analysis.
            </p>
            
            <div className="w-full max-w-2xl flex flex-col sm:flex-row gap-4">
              <input 
                type="url" 
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                placeholder="brand.com" 
                className="flex-1 bg-bg border border-border px-8 py-6 text-text focus:outline-none focus:border-red-600 transition-colors font-sans text-lg"
              />
              <button 
                onClick={handleAnalyze}
                className="bg-red-600 text-white px-12 py-6 font-sans font-bold text-sm uppercase tracking-widest hover:bg-red-700 transition-all whitespace-nowrap"
              >
                Analyze Brand
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Pricing */}
      <section className="bg-bg pb-32">
        <div className="px-6 md:px-[60px] text-center">
          <FadeIn delay={0.1}>
            <h2 className="pt-32 text-4xl md:text-6xl font-display font-bold tracking-tighter leading-[0.8] uppercase mb-4">
              Ready to clear your plate?
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="pb-[60px] text-xl md:text-2xl font-sans text-text/70 max-w-xl mb-0 mx-auto">
              We don’t just sell "graphics." We build creative systems that help your business grow, engage your community, and save you countless hours.
            </p>
          </FadeIn>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
          {/* Member Lab */}
          <div className="flex flex-col p-10 border border-border bg-bg h-full">
            <div className="min-h-[100px]">
              <h3 className="text-2xl font-display font-bold mb-2 tracking-tighter">MEMBER LAB</h3>
              <p className="text-sm font-sans font-bold text-text/60 uppercase tracking-widest mb-6">Studio Tools</p>
            </div>
            
            <div className="min-h-[60px] mb-8"></div> {/* Spacer for toggle alignment */}

            <div className="min-h-[80px] mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-bold tracking-tighter">$99</span>
                <span className="text-xs font-sans font-bold text-text/60 uppercase tracking-widest">/mo</span>
              </div>
            </div>

            <div className="min-h-[100px] mb-8">
              <p className="text-sm font-sans text-text/80 leading-relaxed">"Access the same elite design tools our studio uses. Perfect for teams who want to create in-house."</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Full studio tool access</li>
              <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Pre-set brand style guides</li>
              <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Standard creation credits</li>
              <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Direct help from our team</li>
            </ul>
            <button className="mt-auto w-full py-4 bg-text text-bg font-bold uppercase tracking-widest text-sm rounded-full hover:bg-text/90 transition-all">Access the Lab</button>
          </div>

          {/* Essential Stack (Toggleable) */}
          <div className="flex flex-col p-10 border border-border bg-bg h-full">
            <div className="min-h-[100px]">
              <h3 className="text-2xl font-display font-bold mb-2 tracking-tighter">
                {essentialTab === 'creative' ? 'CREATIVE LOCK' : essentialTab === 'automation' ? 'AUTOMATION LOCK' : 'THE ESSENTIAL STACK'}
              </h3>
              <p className="text-sm font-sans font-bold text-text/60 uppercase tracking-widest mb-6">
                {essentialTab === 'creative' ? 'Visual Gateway' : essentialTab === 'automation' ? 'System Gateway' : 'Foundational Gateway'}
              </p>
            </div>
            
            <div className="min-h-[60px] mb-8">
              <div className="flex p-1 bg-neutral rounded-full">
                <button onClick={() => setEssentialTab('creative')} className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${essentialTab === 'creative' ? 'bg-white shadow-sm' : 'text-text/40'}`}>Creative</button>
                <button onClick={() => setEssentialTab('automation')} className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${essentialTab === 'automation' ? 'bg-white shadow-sm' : 'text-text/40'}`}>Automation</button>
                <button onClick={() => setEssentialTab('stack')} className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${essentialTab === 'stack' ? 'bg-white shadow-sm' : 'text-text/40'}`}>Stack</button>
              </div>
            </div>

            <div className="min-h-[80px] mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-bold tracking-tighter">
                  {essentialTab === 'creative' ? '$600' : essentialTab === 'automation' ? '$600' : '$1,000'}
                </span>
                <span className="text-xs font-sans font-bold text-text/60 uppercase tracking-widest">
                  {essentialTab === 'creative' ? '(One-Off)' : essentialTab === 'automation' ? '+ $30/mo' : '(One-Off)'}
                </span>
              </div>
            </div>
            
            <div className="min-h-[100px] mb-8">
              <p className="text-sm font-sans text-text/80 leading-relaxed">
                {essentialTab === 'creative' && "Never worry about 'Identity Drift.' We map your signature aesthetic so every post looks world-"}
                {essentialTab === 'automation' && "Stop the manual posting grind. We build one autonomous system that keeps your brand active"}
                {essentialTab === 'stack' && "The total digital transition. We anchor your look and automate your reach in one single project."}
              </p>
            </div>
            
            <ul className="space-y-3 mb-8 flex-grow">
              {essentialTab === 'creative' && (
                <>
                  <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> 5 high-prestige hero photos</li>
                  <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Your signature style guide</li>
                  <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Perfect lighting & textures</li>
                  <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Expert designer oversight</li>
                </>
              )}
              {essentialTab === 'automation' && (
                <>
                  <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Choice of 1 social platform</li>
                  <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> 7 days of 'always-on' content</li>
                  <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Zero technical setup for you</li>
                  <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Continuous system support</li>
                </>
              )}
              {essentialTab === 'stack' && (
                <>
                  <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> A permanent style lock</li>
                  <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Choice of 1 social automation</li>
                  <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Save 20% on setup fees</li>
                  <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> No long-term commitment</li>
                </>
              )}
            </ul>
            
            <button className="mt-auto w-full py-4 bg-text text-bg font-bold uppercase tracking-widest text-sm rounded-full hover:bg-text/90 transition-all">
              {essentialTab === 'creative' || essentialTab === 'automation' ? 'Secure My Lock' : 'Secure My Stack'}
            </button>
          </div>

          {/* Growth Stack */}
          <div className="flex flex-col p-10 border border-border bg-bg h-full">
            <div className="min-h-[100px]">
              <h3 className="text-2xl font-display font-bold mb-2 tracking-tighter">GROWTH STACK</h3>
              <p className="text-sm font-sans font-bold text-text/60 uppercase tracking-widest mb-6">The Content Injection</p>
            </div>
            
            <div className="min-h-[60px] mb-8"></div> {/* Spacer for toggle alignment */}

            <div className="min-h-[80px] mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-bold tracking-tighter">$1,500</span>
                <span className="text-xs font-sans font-bold text-text/60 uppercase tracking-widest">(One-Off)</span>
              </div>
            </div>

            <div className="min-h-[100px] mb-8">
              <p className="text-sm font-sans text-text/80 leading-relaxed">"A total visual reset. We flood your channels with a massive batch of campaign-ready photos and videos."</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow">
              <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Style lock & 1 automation</li>
              <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> 10 professional studio photos</li>
              <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> 10 short brand story videos</li>
              <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Ready for your next launch</li>
            </ul>
            <button className="mt-auto w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-red-700 transition-all">Get the Growth Stack</button>
          </div>

          {/* Momentum */}
          <div className="flex flex-col p-10 border border-border bg-text text-bg h-full">
            <div className="min-h-[100px]">
              <h3 className="text-2xl font-display font-bold mb-2 tracking-tighter text-red-600">MOMENTUM</h3>
              <p className="text-sm font-sans font-bold text-bg/60 uppercase tracking-widest mb-6">Scale Retainer</p>
            </div>
            
            <div className="min-h-[60px] mb-8"></div> {/* Spacer for toggle alignment */}

            <div className="min-h-[80px] mb-8">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-display font-bold tracking-tighter">$2,000</span>
                <span className="text-xs font-sans font-bold text-bg/60 uppercase tracking-widest">/mo</span>
              </div>
            </div>

            <div className="min-h-[100px] mb-8">
              <p className="text-sm font-sans text-bg/80 leading-relaxed">"Continuous high-equity flow. The output of a global creative team for the cost of one junior employee."</p>
            </div>

            <ul className="space-y-3 mb-8 flex-grow text-bg/80">
              <li className="flex items-start gap-3 text-sm font-sans"><Check className="w-4 h-4 shrink-0 mt-1" /> 2 high-end posts every day</li>
              <li className="flex items-start gap-3 text-sm font-sans"><Check className="w-4 h-4 shrink-0 mt-1" /> 4 professional brand blogs</li>
              <li className="flex items-start gap-3 text-sm font-sans"><Check className="w-4 h-4 shrink-0 mt-1" /> We manage the social buzz</li>
              <li className="flex items-start gap-3 text-sm font-sans"><Check className="w-4 h-4 shrink-0 mt-1" /> Full lab toolkit included</li>
            </ul>
            <button className="mt-auto w-full py-4 bg-bg text-text font-bold uppercase tracking-widest text-sm rounded-full hover:bg-bg/90 transition-all">Activate My Engine</button>
          </div>
        </div>
      </section>

    </div>
  );
};
