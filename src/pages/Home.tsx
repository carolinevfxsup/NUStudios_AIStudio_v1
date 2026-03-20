import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, FileText, Laptop, Send, Loader2, Check, ExternalLink, ArrowRight } from 'lucide-react';
import { LogoScroll } from '../components/LogoScroll';
import { HomeResultsBento } from '../components/HomeResultsBento';
import { Link, useNavigate } from 'react-router-dom';
import { getAssetUrl } from '../constants';
import { FadeIn } from '../components/FadeIn';
import { ShowreelModal } from '../components/ShowreelModal';
import { useLanguage } from '../contexts/LanguageContext';
import { LazyVideo } from '../components/LazyVideo';

const ServiceAccordionItem = ({ service, isOpen, onToggle }: { service: any, isOpen: boolean, onToggle: () => void }) => {
  const { t, getLanguagePath } = useLanguage();
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
            <div className={`grid grid-cols-1 ${service.id === '03' ? 'sm:grid-cols-1' : (service.id === '06' || service.id === '05' || service.id === '02' || service.id === '01' ? 'sm:grid-cols-3' : 'sm:grid-cols-2')} gap-8 mb-16`}>
              {service.images.map((img: any, idx: number) => (
                <div key={idx} className={service.id === '03' ? 'space-y-12' : 'space-y-4'}>
                  <div className={`${service.id === '04' ? 'aspect-[19/6]' : (service.id === '03' ? 'aspect-video' : 'aspect-[4/6]')} overflow-hidden rounded-none`}>
                    {img.src.endsWith('.mp4') ? (
                      <LazyVideo 
                        src={getAssetUrl(img.src)} 
                        className="w-full h-full object-cover rounded-none"
                        autoPlay={true}
                        loop 
                        muted={true}
                        playsInline
                        showControls={service.id === '03'}
                        controlsColor={service.id === '03' ? 'red-600' : undefined}
                        poster={img.poster}
                      />
                    ) : (
                      <img 
                        src={getAssetUrl(img.src)} 
                        alt={img.caption} 
                        className="w-full h-full object-cover rounded-none"
                        referrerPolicy="no-referrer"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-text/60 leading-tight">
                      {img.caption}
                    </p>
                    {service.id === '03' && (
                      <p className="text-[10px] font-sans font-bold uppercase tracking-widest text-red-600">
                        play with sound
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <Link to={getLanguagePath(service.id === '03' ? '/automation' : '/onboarding')} className="bg-white text-black border border-black px-10 py-5 font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white hover:border-red-600 transition-all flex items-center justify-center gap-3 w-fit group">
                {service.id === '06' ? t.home.services.ctaDemo : t.home.services.cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export const Home = () => {
  const { t, getLanguagePath } = useLanguage();
  const [url, setUrl] = useState('');
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError(null);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ firstName: '', lastName: '', phone: '', email: '', message: '' });
        setFile(null);
      } else {
        const data = await response.json();
        setSubmitError(data.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error(error);
      setSubmitError('An error occurred. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAnalyze = () => {
    if (url) {
      navigate(getLanguagePath(`/dna-scan?url=${encodeURIComponent(url)}`));
    }
  };

  return (
    <div className="flex flex-col bg-bg text-text">
      {/* Section 1: Hero (Header) */}
      <section id="growth" className="relative w-full h-screen flex items-center justify-center overflow-hidden border-b border-border">
        <div className="absolute inset-0 z-0">
          <video 
            src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Bird_Granade_HD.mp4" 
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
            className="bg-red-600 text-white border-2 border-red-600 px-6 py-3 font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
          >
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            {t.home.hero.watchShowreel}
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
                 <span className="text-[11px] font-sans font-bold uppercase tracking-widest text-text/60 mb-2">{t.home.vision.label}</span>
                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-text/40">
                   <path d="M12 4L12 20M12 20L18 14M12 20L6 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                 </svg>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-4xl md:text-6xl font-display font-bold tracking-tighter leading-[0.85] mb-12 uppercase mt-12 md:mt-0">
                {t.home.vision.title}
              </h2>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="text-sm md:text-base text-text/80 max-w-2xl mx-auto font-sans leading-relaxed mb-12">
                {t.home.vision.desc}
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <Link to={getLanguagePath('/onboarding')} className="bg-black text-white px-10 py-5 font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-red-600 transition-all flex items-center justify-center gap-3 w-fit mx-auto group">
                {t.home.vision.cta}
                <ExternalLink className="w-4 h-4" />
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
              <p className="section-label mb-4 !text-red-600 uppercase opacity-100">{t.home.results.label}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.8] uppercase text-white">{t.home.results.title}<span className="text-red-600">.</span></h2>
            </FadeIn>
          </div>
          
          <FadeIn delay={0.3}>
            <HomeResultsBento />
          </FadeIn>
          
          <div className="mt-16 text-center">
            <FadeIn delay={0.4}>
              <Link to={getLanguagePath('/results')} className="bg-white text-black border border-black px-10 py-5 font-sans font-bold text-xs uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white hover:border-red-600 transition-all flex items-center justify-center gap-3 w-fit mx-auto group">
                {t.home.results.cta}
                <ArrowRight className="w-4 h-4" />
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
              {t.home.quote}
            </h2>
          </FadeIn>
        </div>
      </section>

      {/* Section 4: Brands (Logo Scroll) */}
      <section className="border-b border-border">
        <div className="px-6 md:px-[120px] mb-2 flex items-end gap-4">
          <p className="text-[10px] font-black uppercase tracking-[0.3em] text-black/60">
            {t.home.partners}
          </p>
        </div>
        <LogoScroll />
      </section>

      {/* Section 5: Services (Accordion Style) */}
      <section id="services" className="py-32 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24 px-6">
            <FadeIn delay={0.1}>
              <p className="section-label mb-4 uppercase">{t.home.services.label}</p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <h2 className="text-5xl md:text-7xl font-display font-bold tracking-tighter leading-[0.8] uppercase">{t.home.services.title}<span className="text-red-600">.</span></h2>
            </FadeIn>
          </div>

          <div className="flex flex-col border-t border-border px-6 md:px-[60px]">
            {[
              { 
                id: '01', 
                title: t.home.services.items.branding.title,
                subHeading: t.home.services.items.branding.subHeading,
                desc: t.home.services.items.branding.desc,
                subServices: t.home.services.items.branding.subServices,
                images: [
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/BRAND_1.png', caption: t.home.services.items.branding.captions[0] },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/Brand_Trend.png', caption: t.home.services.items.branding.captions[1] },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/Brand_Develp.png', caption: t.home.services.items.branding.captions[2] }
                ]
              },
              { 
                id: '02', 
                title: t.home.services.items.creative.title,
                subHeading: t.home.services.items.creative.subHeading,
                desc: t.home.services.items.creative.desc,
                subServices: t.home.services.items.creative.subServices,
                images: [
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/CREAT_1.png', caption: t.home.services.items.creative.captions[0] },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/CREATE_2.png', caption: t.home.services.items.creative.captions[1] },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/CREAT_3.PNG', caption: t.home.services.items.creative.captions[2] }
                ]
              },
              { 
                id: '03', 
                title: t.home.services.items.automation.title, 
                desc: t.home.services.items.automation.desc,
                subServices: t.home.services.items.automation.subServices,
                images: [
                  { 
                    src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Automation%20Final%20Video%20v3.mp4', 
                    caption: 'AUTOMATION WORKFLOW',
                    poster: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Gemini_Generated_Image_n4ulyon4ulyon4ul%20(1).png'
                  }
                ]
              },
              { 
                id: '04', 
                title: t.home.services.items.growth.title, 
                subHeading: t.home.services.items.growth.subHeading,
                desc: t.home.services.items.growth.desc,
                subServices: t.home.services.items.growth.subServices,
                images: [
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/Growth_Vid.mp4', caption: t.home.services.items.growth.captions[0] }
                ]
              },
              { 
                id: '05', 
                title: t.home.services.items.ecomm.title, 
                subHeading: t.home.services.items.ecomm.subHeading,
                desc: t.home.services.items.ecomm.desc,
                subServices: t.home.services.items.ecomm.subServices,
                images: [
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/ECOMM_1.png', caption: t.home.services.items.ecomm.captions[0] },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/ECCOM_2.png', caption: t.home.services.items.ecomm.captions[1] },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/ECOMM_3.png', caption: t.home.services.items.ecomm.captions[2] }
                ]
              },
              { 
                id: '06', 
                title: t.home.services.items.aiToolkit.title, 
                subHeading: t.home.services.items.aiToolkit.subHeading,
                desc: t.home.services.items.aiToolkit.desc,
                subServices: t.home.services.items.aiToolkit.subServices,
                images: [
                { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/AI_TOOL_1.png', caption: t.home.services.items.aiToolkit.captions[0] },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/AI_TOOL_2_1.png', caption: t.home.services.items.aiToolkit.captions[1] },
                  { src: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/AI_TOOL_3.png', caption: t.home.services.items.aiToolkit.captions[2] }
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
              {t.home.industries.title}<span className="text-[#ff4081]">.</span>
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: t.home.industries.items.wineries.title, desc: t.home.industries.items.wineries.desc, image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-wine-brands.png" },
              { title: t.home.industries.items.hospitality.title, desc: t.home.industries.items.hospitality.desc, image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-main.png" },
              { title: t.home.industries.items.ecommerce.title, desc: t.home.industries.items.ecommerce.desc, image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/Services/ECCOM_2.png" },
              { title: t.home.industries.items.fashion.title, desc: t.home.industries.items.fashion.desc, image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/FRANKS_1.png" },
              { title: t.home.industries.items.jewellery.title, desc: t.home.industries.items.jewellery.desc, image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png" },
              { title: t.home.industries.items.b2b.title, desc: t.home.industries.items.b2b.desc, image: "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/quinta-do-pinto-header.jpg" }
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
                {t.home.stats.lisbon}<span className="text-red-600">.</span>
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0 }
                }}
              >
                {t.home.stats.melbourne}<span className="text-red-600">.</span>
              </motion.span>
              <motion.span
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                {t.home.stats.london}<span className="text-red-600">.</span>
              </motion.span>
            </motion.div>
          </div>
          <div className="grid grid-cols-2 gap-4 md:col-span-1">
            <div className="p-8 border border-white/10 flex flex-col justify-center">
              <span className="text-4xl font-display font-bold mb-2">30%</span>
              <span className="text-xs uppercase tracking-widest text-white/60">{t.home.stats.cost}</span>
            </div>
            <div className="p-8 border border-white/10 flex flex-col justify-center">
              <span className="text-4xl font-display font-bold mb-2">10x</span>
              <span className="text-xs uppercase tracking-widest text-white/60">{t.home.stats.output}</span>
            </div>
            <div className="p-8 border border-white/10 flex flex-col justify-center">
              <span className="text-4xl font-display font-bold mb-2">100%</span>
              <span className="text-xs uppercase tracking-widest text-white/60">{t.home.stats.onBrand}</span>
            </div>
            <div className="p-8 border border-white/10 flex flex-col justify-center">
              <span className="text-4xl font-display font-bold mb-2">24/7</span>
              <span className="text-xs uppercase tracking-widest text-white/60">{t.home.stats.automation}</span>
            </div>
          </div>
          <div className="md:col-span-1 p-6 border border-white/10 flex flex-col justify-center items-center text-center">
            <p className="text-2xl md:text-4xl font-display font-bold tracking-tighter leading-[1.2] text-white/70 max-w-3xl">{t.home.stats.quote}</p>
          </div>
        </div>
      </section>

      {/* Section: Ready to clear your plate? */}
      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="relative aspect-video rounded-md overflow-hidden border border-border">
                <LazyVideo 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover"
                  src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/leoaprd_01.mp4"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right">
              <div className="space-y-8">
                <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-[0.9]">
                  {t.home.ready.title}
                </h2>
                <p className="text-xl md:text-2xl text-text/70 font-sans leading-relaxed">
                  {t.home.ready.desc}
                </p>
              </div>
            </FadeIn>
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
              {t.nav.dnaScan}
            </h2>
            <p className="text-xl md:text-2xl text-text/60 mb-16 font-sans max-w-2xl leading-relaxed">
              {t.dnaScan.subtitle}
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
                {t.dnaScan.button}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Section: Contact Info */}
      <section id="contact-info" className="py-32 bg-[#f8f8f8] border-t border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left Column: Email/Call */}
            <FadeIn direction="left">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Laptop className="w-8 h-8 text-red-600" />
                  <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">{t.home.contact.emailTitle}</h2>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-8">
                  <div className="space-y-1">
                    <p className="text-xs font-sans font-bold text-text/40 uppercase tracking-widest">{t.home.contact.emailLabel}</p>
                    <p className="text-lg font-display font-bold">hello@nustudios.co.uk</p>
                  </div>
                </div>
                <p className="text-xl text-text/70 font-sans leading-relaxed max-w-md">
                  {t.home.contact.emailDesc}
                </p>
              </div>
            </FadeIn>

            {/* Right Column: Locations */}
            <FadeIn direction="right">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <Phone className="w-8 h-8 text-red-600" />
                  <h2 className="text-4xl md:text-5xl font-display font-bold uppercase tracking-tighter">{t.home.contact.locationsTitle}</h2>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  <div className="space-y-1">
                    <p className="text-xs font-sans font-bold text-text/40 uppercase tracking-widest">{t.home.stats.london}</p>
                    <a href="tel:+447506230988" className="text-xl font-display font-bold hover:text-red-600 transition-colors">+44 (0) 7506 230988</a>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-sans font-bold text-text/40 uppercase tracking-widest">{t.home.stats.lisbon}</p>
                    <a href="tel:+351939517942" className="text-xl font-display font-bold hover:text-red-600 transition-colors">+351 939 517 942</a>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-sans font-bold text-text/40 uppercase tracking-widest">{t.home.stats.melbourne}</p>
                    <a href="tel:+61431371024" className="text-xl font-display font-bold hover:text-red-600 transition-colors">+61 431 371 024</a>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Section: Contact Form */}
      <section id="contact-form" className="py-32 bg-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              <div>
                <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-12 leading-[0.8] !text-white">
                  {t.home.contact.title}<span className="text-red-600">.</span>
                </h2>
                <p className="text-2xl md:text-3xl font-display font-bold uppercase mb-12">{t.home.contact.subtitle}</p>
                
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.form
                      key="contact-form"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      onSubmit={handleSubmit}
                      className="space-y-12"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                        <div className="space-y-2 relative">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/60">{t.home.contact.form.firstName}</label>
                          <div className="relative">
                            <input
                              type="text"
                              name="firstName"
                              required
                              value={formData.firstName}
                              onChange={handleInputChange}
                              className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors text-white font-sans"
                            />
                            <div className="absolute right-0 bottom-3 text-[#008080] opacity-50">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                                <path d="M7 4v16M17 4v16M7 12h10" />
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="space-y-2 relative">
                          <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/60">{t.home.contact.form.lastName}</label>
                          <div className="relative">
                            <input
                              type="text"
                              name="lastName"
                              required
                              value={formData.lastName}
                              onChange={handleInputChange}
                              className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors text-white font-sans"
                            />
                            <div className="absolute right-0 bottom-3 text-[#008080] opacity-50">
                              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                                <path d="M7 4v16M17 4v16M7 12h10" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2 relative">
                        <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/60">{t.home.contact.form.email}</label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors text-white font-sans"
                          />
                          <div className="absolute right-0 bottom-3 text-[#008080] opacity-50">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                              <path d="M7 4v16M17 4v16M7 12h10" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/60">{t.home.contact.form.message}</label>
                        <textarea
                          name="message"
                          required
                          rows={1}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-white/30 py-3 focus:outline-none focus:border-white transition-colors resize-none text-white font-sans min-h-[100px]"
                        />
                      </div>

                      <div className="space-y-4">
                        <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/60">{t.home.contact.form.attachments}</label>
                        <div 
                          onClick={() => fileInputRef.current?.click()}
                          className="w-full border border-dashed border-white/10 rounded-sm p-8 flex flex-col items-center justify-center gap-3 cursor-pointer hover:border-white/30 hover:bg-white/5 transition-all group"
                        >
                          <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          {file ? (
                            <div className="flex items-center gap-2 text-white font-sans font-medium">
                              <FileText className="w-5 h-5" />
                              <span>{file.name}</span>
                            </div>
                          ) : (
                            <>
                              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-colors">
                                <span className="text-xl font-light text-white/40 group-hover:text-white">+</span>
                              </div>
                              <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-white/40 group-hover:text-white/60">{t.home.contact.form.addFile}</span>
                            </>
                          )}
                        </div>
                      </div>

                      {submitError && (
                        <div className="text-red-500 text-xs font-bold uppercase tracking-widest">
                          {submitError}
                        </div>
                      )}

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-white text-black px-10 py-5 font-sans font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-red-600 hover:text-white transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="w-3 h-3 animate-spin" />
                            <span>{t.home.contact.form.sending}</span>
                          </>
                        ) : (
                          <>
                            <span>{t.home.contact.form.button}</span>
                            <Send className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div
                      key="success-message"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex flex-col items-center justify-center py-20 text-center space-y-6"
                    >
                      <div className="w-20 h-20 rounded-none bg-[#E11D48]/10 flex items-center justify-center">
                        <Check className="w-10 h-10 text-[#E11D48]" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="text-3xl font-display font-bold uppercase tracking-tighter text-white">{t.home.contact.form.success.title}<span className="text-red-600">.</span></h3>
                        <p className="text-white/60 font-sans max-w-sm">
                          {t.home.contact.form.success.desc}
                        </p>
                      </div>
                      <button
                        onClick={() => setIsSubmitted(false)}
                        className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors border-b border-white/20 pb-1"
                      >
                        {t.home.contact.form.success.another}
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <div className="hidden lg:flex items-center justify-center">
                <div className="w-full max-w-md aspect-square overflow-hidden rounded-none border border-white/10">
                  <LazyVideo 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/pnn495jt8srmr0cwyy3a1q4te8_result_.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
};
