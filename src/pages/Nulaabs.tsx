import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ShowcaseHero } from '../components/ShowcaseHero';
import { 
  Sparkles, 
  Layers, 
  Map, 
  CheckCircle2, 
  ShoppingBag, 
  MousePointer,
  Plus,
  Database,
  Camera,
  Sliders
} from 'lucide-react';

export const Nulaabs = () => {
  const { language, getLanguagePath } = useLanguage();
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);
  const [dimensionToggle, setDimensionToggle] = useState<'1080' | '1440'>('1080');
  const [scrollProgress, setScrollProgress] = useState(0);

  // Content dictionary for EN/PT
  const content = {
    en: {
      heroTitle: 'Nulaabs Engine',
      heroSubtitle: 'SYNTHETIC CREATIVE SANDBOX',
      heroDesc: 'Our proprietary studio workflow sandboxing raw brand products, facial modeling roster, and curated lighting environments into production-ready campaign editorials with zero physical footprint.',
      capabilitiesLabel: '01. CORE INTERFACE',
      capabilitiesTitle: 'SANDBOX CAPABILITIES',
      capabilitiesDesc: 'We dismantle traditional high-prestige campaigns. No scouts, no bookings, no weather delays. Just pure editorial execution with mathematical control.',
      pillars: [
        {
          title: "Facial & Bodily Preservation",
          desc: "Our model rostering preserves exact identity. Swap garments, edit environments, or cycle through look variations while securing precise model and brand parameters across all outputs.",
          bullets: ["Locked-prompt identity consistency", "Virtual styling & outfit fits", "Dynamic poses & gaze directions"]
        },
        {
          title: "High-Fidelity CAD Ingestion",
          desc: "Ingest any physical asset—from structured couture, woven apparel to fine reflective jewellery. No generic textures; we preserve every metallic link, stone clarity, fabric drape, and stitch line.",
          bullets: ["Pre-aligned 3D projection meshes", "Real-world light physics rendering", "Ultra-macro clarity preservation"]
        },
        {
          title: "Curated Lighting Environments",
          desc: "Step inside premium environments modeled with precise ambient values. Choose between direct sunlight, soft studio glows, flooded architectural pavilions, or rustic stone courtyards.",
          bullets: ["Ray-traced lighting models", "Dynamic atmosphere adjustments", "Perfect shadow and reflection mapping"]
        }
      ],
      processLabel: '02. SYSTEM WORKFLOW',
      processTitle: 'HOW NULAABS WORKS',
      processDesc: 'Scroll through our four-part campaign lifecycle to see how we translate flat asset sheets and flatlays into luxury campaigns.',
      steps: [
        {
          number: '01',
          label: 'Concept & Cast',
          title: '01 / Concept & Cast',
          desc: "Lock in your brand's visual identity. nulaabs allows you to instantly generate locked-prompt moodboards and cast talent from an internal roster tailored perfectly to your campaign's aesthetic."
        },
        {
          number: '02',
          label: 'Seamless Product Placement',
          title: '02 / Seamless Product Placement',
          desc: "Import your entire physical inventory into your digital workspace. From high-end jewellery to structured apparel, build out custom asset sheets ready to be instantly placed into any editorial environment."
        },
        {
          number: '03',
          label: 'Infinite Environments',
          title: '03 / Infinite Environments',
          desc: "Place your products and models in any corner of the world. Select from our curated preset libraries—ranging from flooded luxury architecture to sun-drenched European courtyards—to establish a cohesive global aesthetic."
        },
        {
          number: '04',
          label: 'Platform-Ready Output',
          title: '04 / Platform-Ready Output',
          desc: "From high-fidelity lifestyle editorials to e-com-ready imagery optimized directly for Shopify. nulaabs outputs stunning, brand-consistent content ready for socials and storefronts alike, bypassing traditional post-production bottlenecks."
        }
      ],
      beforeAfterLabel: 'BEFORE / AFTER COMPARISON',
      beforeAfterDesc: 'Hover over the assets to see how raw flat inventory translates into final high-end social and storefront editorials.',
      ctaTitle: 'Ready to build your digital studio?',
      ctaDesc: 'Schedule a private consultation and watch how we integrate your physical collections into our visual synthesizer.',
      ctaButton: 'Book a discovery session',
      swimwearModel: 'Raw Apparel to High-End Lookbook',
      jewelrySocial: 'Raw Product Shot to Reflective Fine Jewelry',
      wineEcom: 'Prestige 3D Placement Commercial Output'
    },
    pt: {
      heroTitle: 'Motor Nulaabs',
      heroSubtitle: 'SANDBOX CRIATIVO SINTÉTICO',
      heroDesc: 'O nosso workflow proprietário de estúdio que encapsula produtos de marcas, modelos faciais e ambientes de luz curados em editoriais de campanhas prontos para produção, sem pegada física.',
      capabilitiesLabel: '01. INTERFACE PRINCIPAL',
      capabilitiesTitle: 'CAPACIDADES DO SANDBOX',
      capabilitiesDesc: 'Desmantelamos as campanhas tradicionais de alto prestígio. Sem batedores, sem marcações, sem atrasos meteorológicos. Apenas pura execução editorial com controlo matemático.',
      pillars: [
        {
          title: "Preservação Facial e Corporal",
          desc: "O nosso elenco de modelos preserva a identidade exata. Troque roupas, edite ambientes ou alterne variações de visual enquanto assegura parâmetros de modelo e marca precisos em todas as saídas.",
          bullets: ["Consistência de identidade locked-prompt", "Styling virtual e ajuste de roupas", "Poses dinâmicas e direções de olhar"]
        },
        {
          title: "Ingestão de CAD de Alta Fidelidade",
          desc: "Ingira qualquer ativo físico—desde alta-costura estruturada a joalharia fina refletora. Sem texturas genéricas; preservamos cada elo metálico, brilho de pedra, drapeado de tecido e costura.",
          bullets: ["Malhas de projeção 3D pré-alinhadas", "Renderização física de luz real", "Preservação de clareza ultra-macro"]
        },
        {
          title: "Ambientes de Luz Curados",
          desc: "Entre em ambientes premium modelados com valores de iluminação ambiente precisos. Escolha entre luz solar direta, brilho suave de estúdio, pavilhões luxuosos ou pátios de pedra rústicos.",
          bullets: ["Modelos de luz ray-traced", "Ajustes de atmosfera dinâmicos", "Mapeamento ideal de sombras e reflexos"]
        }
      ],
      processLabel: '02. FLUXO DO SISTEMA',
      processTitle: 'COMO FUNCIONA O NULAABS',
      processDesc: 'Percorra o nosso ciclo ecológico de campanha de quatro partes para ver como traduzimos inventário plano em campanhas de luxo imersivas.',
      steps: [
        {
          number: '01',
          label: 'Conceito e Elenco',
          title: '01 / Conceito e Elenco',
          desc: "Defina a identidade visual da sua marca. O Nulaabs permite gerar instantaneamente moodboards de prompt bloqueados e selecionar talentos de um elenco interno perfeitamente sintonizado com o seu estilo."
        },
        {
          number: '02',
          label: 'Colocação de Produto Orgânica',
          title: '02 / Colocação de Produto Orgânica',
          desc: "Importe o seu inventário físico completo para o seu espaço digital. De joias de luxo a vestuário estruturado, crie fichas de ativos prontas para serem aplicadas em qualquer ambiente editorial."
        },
        {
          number: '03',
          label: 'Ambientes Infinitos',
          title: '03 / Ambientes Infinitos',
          desc: "Coloque produtos e modelos em qualquer canto do mundo. Escolha a partir dos nossos catálogos de presets—desde pavilhões flutuantes a pátios europeus solarengos—para definir um visual coeso."
        },
        {
          number: '04',
          label: 'Visual Final Pronto',
          title: '04 / Visual Final Pronto',
          desc: "Desde editoriais de estilo de vida à alta-fidelidade de imagens de e-commerce otimizadas para Shopify. O Nulaabs exporta conteúdo deslumbrante pronto para as suas redes sociais e lojas."
        }
      ],
      beforeAfterLabel: 'COMPARAÇÃO ANTES / DEPOIS',
      beforeAfterDesc: 'Passe o cursor sobre os ativos para ver como o inventário de produtos bruto se traduz em campanhas luxuosas de redes sociais e ecomm.',
      ctaTitle: 'Pronto para criar o seu estúdio digital?',
      ctaDesc: 'Agende uma consulta privada e veja como integramos as suas coleções de produtos reais no nosso sintetizador visual.',
      ctaButton: 'Agendar sessão de descoberta',
      swimwearModel: 'Do Produto Bruto ao Lookbook Premium',
      jewelrySocial: 'Foto de Produto Bruta a Joalharia Fina com Reflexos',
      wineEcom: 'Colocação de Produto Comercial 3D de Alto Luxo'
    }
  };

  const t = content[language === 'pt' ? 'pt' : 'en'];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const totalHeight = rect.height - windowHeight;
      const progressed = -rect.top;
      
      if (totalHeight > 0) {
        let scrollFraction = progressed / totalHeight;
        scrollFraction = Math.max(0, Math.min(1, scrollFraction));
        setScrollProgress(scrollFraction);

        const step = Math.floor(scrollFraction * 4.2);
        setActiveStep(Math.min(3, Math.max(0, step)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const rotationAngle = scrollProgress * 720;

  const assets = {
    moodboard: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/party_moodboard.png',
    roster: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/model_rosta.png',
    swimwear: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Product_Library_Swimwear.png',
    jewellery: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/jewellery_product_library.png',
    preset: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Preset_Library.png',
    portuguesePreset: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/portuguese_presets.png',
    heroModel: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/WhatsApp%20Image%202026-06-22%20at%2013.32.55.jpeg',
    jewellerySocial: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/item-222-1k.png',
    rawJewellery: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/43e25b10-9c9e-4164-9d83-d2aceb203787.jpg',
    rawSwimwear: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/shorts2.jpeg',
    wineCommercial: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/item-384-1k.png'
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* ShowcaseHero */}
        <ShowcaseHero 
          title="NULAABS"
          titleClassName="text-4xl sm:text-6xl md:text-[clamp(3.5rem,9.5vw,145px)]"
          mobileTitle="Nulaabs Sandbox"
          subtitle={t.heroSubtitle}
          description={t.heroDesc}
          imageSrc={assets.heroModel}
          caseStudyNumber="06"
          sector="E-Commerce / Fashion"
          deliverables="3D Asset Ingestion / Virtual Casting / Infinite presets"
          railText="CREATIVE SYNTHESIZER / v2.5"
          imagePosition="center"
        />

        {/* Section 1: CAPABILITIES (Using the O Palmeiral aesthetic/Human checkpoint boxes as per guidelines) */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-8 block">{t.capabilitiesLabel}</span>
              <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                {t.capabilitiesTitle}<span className="text-red-600">.</span>
              </h2>
              <p className="text-xl text-black/60 max-w-2xl font-sans font-light">
                {t.capabilitiesDesc}
              </p>
            </div>

            {/* Human Checkpoint Box Pattern: rounding, border #EEEEEE, bg #F9F9F7, Lucide Icons in w-10 h-10 red, and md:grid-cols-3 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {t.pillars.map((pillar, i) => {
                const icons = [Sliders, Database, Camera];
                const Icon = icons[i];
                return (
                  <motion.div 
                    key={i}
                    {...fadeInUp}
                    className="p-8 border border-[#EEEEEE] bg-[#F9F9F7] rounded-md flex flex-col justify-between hover:border-red-600/30 hover:shadow-lg transition-all duration-500"
                  >
                    <div>
                      <div className="w-16 h-16 rounded-md bg-white border border-[#EEEEEE] flex items-center justify-center mb-6 shadow-sm">
                        <Icon className="w-10 h-10 text-red-600" />
                      </div>
                      <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tighter text-black">{pillar.title}</h3>
                      <p className="text-sm text-black/60 font-sans leading-relaxed mb-6 font-light">
                        {pillar.desc}
                      </p>
                    </div>
                    <ul className="space-y-2 border-t border-[#EEEEEE] pt-4">
                      {pillar.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs font-sans text-black/80">
                          <CheckCircle2 className="w-3.5 h-3.5 text-red-600 shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 2: THE INTERACTIVE WORKFLOW LIFE CYCLE (Explanatory system stepper in a gorgeous dark slate viewport) */}
        <div className="relative bg-black border-y border-white/5 py-12">
          <section 
            ref={containerRef} 
            className="relative h-[280vh] bg-black text-white overflow-visible select-none"
          >
            {/* Sticky view holder */}
            <div className="sticky top-0 h-screen w-full flex flex-col md:flex-row overflow-hidden bg-black justify-between items-center z-10">
            
              {/* Left Side: Copy & Step indicators in grey boxes matching results grid */}
              <div className="w-full md:w-[45%] h-[55vh] md:h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20 bg-black overflow-y-auto z-10 py-8 md:py-0 border-r border-white/5">
                
                {/* Label indicating the section app context */}
                <div className="mb-4">
                  <span className="text-[10px] font-bold text-red-600 tracking-[0.3em] uppercase block mb-1">
                    {language === 'pt' ? 'O FLUXO DE CAMPANHA CRIATIVO' : 'THE CREATIVE CAMPAIGN LIFECYCLE'}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-display font-medium tracking-tight mb-2 uppercase">
                    {language === 'pt' ? 'A MÁQUINA DE CRIAÇÃO' : 'NULAABS CREATIVE ENGINE'}<span className="text-red-600 font-sans">.</span>
                  </h3>
                  <p className="text-xs text-white/50 max-w-md hidden md:block">
                    {language === 'pt' 
                      ? 'Acompanhe como o Nulaabs traduz ativos brutos e parâmetros criativos em campanhas de alto luxo.' 
                      : 'Follow how the NULAABS sandbox translates flat asset sheets and raw parameters into high-end fashion and e-com imagery.'}
                  </p>
                </div>

                {/* Stepper Blocks */}
                <div className="space-y-4 mt-4 max-w-md">
                  {t.steps.map((step, index) => {
                    const worksAsActive = activeStep === index;
                    return (
                      <div 
                        key={index}
                        className={`p-5 rounded-md transition-all duration-500 select-none border-0 ${
                          worksAsActive 
                            ? 'bg-white/5 text-white opacity-100 shadow-xl' 
                            : 'bg-white/1 text-white/30 opacity-30 hover:opacity-40'
                        }`}
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-3">
                            <span className={`text-xs font-black font-mono tracking-widest ${
                              worksAsActive ? 'text-red-500' : 'text-white/40'
                            }`}>
                              {step.number}
                            </span>
                            <h4 className={`text-sm md:text-base font-bold font-display uppercase tracking-tight ${
                              worksAsActive ? 'text-white' : 'text-white/40'
                            }`}>
                              {step.label}
                            </h4>
                          </div>

                          <motion.div 
                            style={{ rotate: rotationAngle }}
                            className="flex-shrink-0"
                          >
                            <Plus className={`w-4 h-4 ${worksAsActive ? 'text-red-500' : 'text-white/20'}`} />
                          </motion.div>
                        </div>
                        
                        {worksAsActive && (
                          <motion.p 
                            initial={{ opacity: 0, y: 5 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs md:text-sm font-sans font-light leading-relaxed text-white/70 mt-3"
                          >
                            {step.desc}
                          </motion.p>
                        )}
                      </div>
                    );
                  })}
                </div>

                {/* Extra utility panel for eCommerce labels details */}
                {activeStep === 3 && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-6 p-3 rounded bg-white/5 max-w-md flex justify-between items-center text-[10px] font-mono text-white/60 select-none border-0"
                  >
                    <div className="flex items-center gap-2">
                      <ShoppingBag className="w-4 h-4 text-red-500" />
                      <span>Shopify Integration Engine</span>
                    </div>
                    <div className="flex gap-2">
                      <button 
                        onClick={() => setDimensionToggle('1080')}
                        className={`px-2 py-0.5 rounded transition cursor-pointer ${
                          dimensionToggle === '1080' ? 'bg-red-600 text-white font-bold' : 'bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        1080px (Standard)
                      </button>
                      <button 
                        onClick={() => setDimensionToggle('1440')}
                        className={`px-2 py-0.5 rounded transition cursor-pointer ${
                          dimensionToggle === '1440' ? 'bg-red-600 text-white font-bold' : 'bg-white/5 hover:bg-white/10'
                        }`}
                      >
                        1440px (Ultra)
                      </button>
                    </div>
                  </motion.div>
                )}

              </div>

              {/* Right Side: Mockup Frame (Sticky Content) */}
              <div className="relative w-full md:w-[55%] h-[45vh] md:h-screen flex items-center justify-center p-4 md:p-12 border-b border-white/5 md:border-b-0">
                <div className="relative w-full h-full max-w-[640px] max-h-[500px] md:max-h-[640px] flex items-center justify-center">
                  
                  <div className="absolute inset-0 bg-red-600/5 rounded-full blur-3xl opacity-30 pointer-events-none" />

                  <AnimatePresence mode="wait">
                    
                    {/* STEP 1: CONCEPTS & CAST (Mood & Talent) */}
                    {activeStep === 0 && (
                      <motion.div 
                        key="step-1"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full bg-[#0E0E0E] rounded-xl border border-white/10 p-4 md:p-6 flex flex-col gap-4 text-xs font-mono shadow-2xl relative overflow-hidden"
                      >
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          </div>
                          <span className="text-[10px] uppercase tracking-widest text-white/40">nulaabs.io // concept & talent</span>
                          <span className="text-[10px] text-red-500 font-bold bg-red-600/10 px-2 py-0.5 rounded border border-red-600/20 flex items-center gap-1 animate-pulse">
                            <Sparkles className="w-3 h-3" /> LIVE CORE
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0 relative">
                          <div className="flex flex-col gap-2 p-2 bg-white/5 border border-white/15 rounded-lg">
                            <div className="flex justify-between items-center text-[10px] text-white/40 border-b border-white/10 pb-1">
                              <span>AESTHETIC MOODBOARD</span>
                              <span className="text-red-500">94.2% FIT</span>
                            </div>
                            <div className="flex-1 relative rounded-md overflow-hidden bg-black/40">
                              <img 
                                src={assets.moodboard} 
                                alt="Concept Moodboard" 
                                className="w-full h-full object-cover opacity-80 filter saturate-75 rounded-none"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 text-[9px] text-white/80">
                                <p className="font-bold">#A1_PARTY_VIBE_LUMINESCENT</p>
                                <p className="text-white/40 text-[8px]">PROMPT LOCK ACTIVE</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 p-2 bg-white/5 border border-white/15 rounded-lg">
                            <div className="flex justify-between items-center text-[10px] text-white/40 border-b border-white/10 pb-1">
                              <span>INTERNAL TALENT ROSTER</span>
                              <span className="text-green-400">CAST READY</span>
                            </div>
                            <div className="flex-1 relative rounded-md overflow-hidden bg-black/40">
                              <img 
                                src={assets.roster} 
                                alt="Model Roster" 
                                className="w-full h-full object-cover filter contrast-[1.05] rounded-none"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-2.5 text-[9px] text-white/80">
                                <p className="font-bold">MODEL_ID_094 // AUSTIN_K</p>
                                <p className="text-white/40 text-[8px]">FACIAL PRESET APPLIED</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 2: THE INGESTION (Product Libraries) */}
                    {activeStep === 1 && (
                      <motion.div 
                        key="step-2"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full bg-[#0E0E0E] rounded-xl border border-white/10 p-4 md:p-6 flex flex-col gap-4 text-xs font-mono shadow-2xl relative overflow-hidden"
                      >
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          </div>
                          <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">nulaabs.io // product asset ingestion</span>
                          <span className="text-[10px] text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                            <Layers className="w-3 h-3 text-red-500" /> ASSET INVENTORY
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
                          <div className="flex flex-col gap-2 p-2 bg-white/5 border border-white/15 rounded-lg relative overflow-hidden">
                            <div className="flex justify-between items-center text-[9px] text-white/40 border-b border-white/10 pb-1">
                              <span>APPAREL LIBRARY</span>
                              <span className="text-red-500 flex items-center gap-1">
                                <CheckCircle2 className="w-2 h-2" /> ACTIVE
                              </span>
                            </div>
                            <div className="flex-1 relative rounded-md overflow-hidden bg-black/40">
                              <img 
                                src={assets.swimwear} 
                                alt="Product Swimwear" 
                                className="w-full h-full object-cover filter saturate-50 rounded-none"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-x-0 bottom-0 bg-black/70 p-2 text-[8px] text-white/80">
                                <p className="font-bold overflow-hidden text-ellipsis whitespace-nowrap">Swim_V3_FloralPattern_CAD</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 p-2 bg-white/5 border border-white/15 rounded-lg relative overflow-hidden">
                            <div className="flex justify-between items-center text-[9px] text-white/40 border-b border-white/10 pb-1">
                              <span>JEWELLERY STORAGE</span>
                              <span className="text-white/40 flex items-center gap-1">
                                CAD LOCKED
                              </span>
                            </div>
                            <div className="flex-1 relative rounded-md overflow-hidden bg-black/40">
                              <img 
                                src={assets.jewellery} 
                                alt="Jewellery library" 
                                className="w-full h-full object-cover filter contrast-[1.1] brightness-[0.9] rounded-none"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-x-0 bottom-0 bg-black/70 p-2 text-[8px] text-white/80">
                                <p className="font-bold overflow-hidden text-ellipsis whitespace-nowrap">Gold_LinkChain_Facet_24k</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 3: WORLDBUILDING (Infinite Environments) */}
                    {activeStep === 2 && (
                      <motion.div 
                        key="step-3"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full bg-[#0E0E0E] rounded-xl border border-white/10 p-4 md:p-6 flex flex-col gap-4 text-xs font-mono shadow-2xl relative overflow-hidden"
                      >
                        <div className="flex items-center justify-between border-b border-white/10 pb-3">
                          <div className="flex items-center gap-1.5">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-600/60" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                            <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          </div>
                          <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">nulaabs.io // environment catalog</span>
                          <span className="text-[10px] text-white/60 bg-white/5 px-2 py-0.5 rounded border border-white/10 flex items-center gap-1">
                            <Map className="w-3 h-3 text-red-500" /> PRESET LIBRARY
                          </span>
                        </div>

                        <div className="grid grid-cols-2 gap-4 flex-1 min-h-0">
                          <div className="flex flex-col gap-2 p-2 bg-white/5 border border-white/15 rounded-lg select-none group">
                            <div className="flex justify-between items-center text-[8px] text-white/40 border-b border-white/10 pb-1">
                              <span>ENVIRONMENT: 013</span>
                              <span className="text-[#E11D48] tracking-widest">SELECTED</span>
                            </div>
                            <div className="flex-1 relative rounded-md overflow-hidden bg-black/40">
                              <img 
                                src={assets.preset} 
                                alt="Luxury preset" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <p className="text-[9px] bg-black/80 px-2 py-1 rounded text-white tracking-widest uppercase">TEST PRESET LIGHTING</p>
                              </div>
                              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-[8px] text-white/80">
                                <p className="font-bold uppercase">Flooded Luxury Architecture</p>
                              </div>
                            </div>
                          </div>

                          <div className="flex flex-col gap-2 p-2 bg-white/5 border border-white/15 rounded-lg select-none group">
                            <div className="flex justify-between items-center text-[8px] text-white/40 border-b border-white/10 pb-1">
                              <span>ENVIRONMENT: 025</span>
                              <span className="text-white/20">PREVIEW</span>
                            </div>
                            <div className="flex-1 relative rounded-md overflow-hidden bg-black/40">
                              <img 
                                src={assets.portuguesePreset} 
                                alt="Portuguese courtyard" 
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                                referrerPolicy="no-referrer"
                              />
                              <div className="absolute inset-x-0 bottom-0 bg-black/60 p-2 text-[8px] text-white/80">
                                <p className="font-bold uppercase">Alentejo White Courtyard</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}

                    {/* STEP 4: PLATFORM-READY OUTPUT */}
                    {activeStep === 3 && (
                      <motion.div 
                        key="step-4"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.5 }}
                        className="w-full h-full lg:max-w-2xl bg-black rounded-lg text-xs font-mono shadow-2xl relative"
                      >
                        <div className="grid grid-cols-12 gap-3 h-full">
                          <div 
                            id="item-hero-floral"
                            className="col-span-8 row-span-12 relative overflow-hidden rounded-md border border-white/10 bg-zinc-950 group cursor-pointer aspect-[3/4]"
                            onMouseEnter={() => setHoveredImage('floral-model')}
                            onMouseLeave={() => setHoveredImage(null)}
                          >
                            <img 
                              src={assets.heroModel} 
                              alt="Campaign lookbook model" 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                              referrerPolicy="no-referrer"
                            />
                            
                            <AnimatePresence>
                              {hoveredImage === 'floral-model' && (
                                <motion.div 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="absolute inset-0 bg-black/85 backdrop-blur-sm p-4 flex flex-col justify-between z-20"
                                >
                                  <div className="flex flex-col gap-1">
                                    <span className="text-red-500 text-[9px] font-bold tracking-widest uppercase">INPUT ASSET</span>
                                    <h4 className="text-white text-xs font-bold font-sans">Raw Product Swimwear</h4>
                                  </div>
                                  <div className="w-full h-1/2 overflow-hidden rounded border border-white/15 bg-white/5 relative">
                                    <img 
                                      src={assets.rawSwimwear} 
                                      alt="Raw Swimwear" 
                                      className="w-full h-full object-cover filter saturate-50 brightness-90 rounded-none"
                                      referrerPolicy="no-referrer"
                                    />
                                  </div>
                                  <div className="text-[10px] text-white/50 border-t border-white/10 pt-2 flex items-center gap-1 md:gap-1.5 uppercase tracking-wider font-sans">
                                    <MousePointer className="w-3.5 h-3.5 text-red-500" /> {language === 'pt' ? 'ANTES / DEPOIS' : 'BEFORE / AFTER'}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            <div className="absolute top-2.5 left-2.5 bg-black/60 backdrop-blur-md text-white/95 px-2 py-1 text-[8px] font-bold rounded flex items-center gap-1 tracking-wider uppercase border border-white/10">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                              {language === 'pt' ? 'PRONTO PARA SHOPIFY' : 'Shopify Ready'}
                            </div>

                            <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-gradient-to-t from-black via-black/40 to-transparent p-2 text-white text-[9px]">
                              <p className="font-bold opacity-90">01 / LIFESTYLE LOOKBOOK</p>
                            </div>
                          </div>

                          <div 
                            id="item-commercial-wine"
                            className="col-span-4 row-span-6 relative overflow-hidden rounded-md border border-white/10 bg-zinc-950 group flex flex-col justify-end"
                          >
                            <img 
                              src={assets.wineCommercial} 
                              alt="Ecom commercial wine" 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                              referrerPolicy="no-referrer"
                            />
                            
                            <div className="absolute top-2 left-2 bg-red-600 text-white text-[8px] font-bold px-1.5 py-0.5 rounded tracking-widest uppercase font-sans">
                              4K
                            </div>

                            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors pointer-events-none text-right" />
                            
                            <div className="absolute bottom-2 left-2 right-2 p-1 bg-black/60 rounded text-white text-[8px] font-sans">
                              <p className="font-semibold uppercase tracking-tight text-center">02 / SHOPIFY Commercial</p>
                            </div>
                          </div>

                          <div 
                            id="item-social-flatlay"
                            className="col-span-4 row-span-6 relative overflow-hidden rounded-md border border-white/10 bg-zinc-950 group cursor-pointer"
                            onMouseEnter={() => setHoveredImage('jewellery-social')}
                            onMouseLeave={() => setHoveredImage(null)}
                          >
                            <img 
                              src={assets.jewellerySocial} 
                              alt="Jewelry flatlay social output" 
                              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                              referrerPolicy="no-referrer"
                            />

                            <AnimatePresence>
                              {hoveredImage === 'jewellery-social' && (
                                <motion.div 
                                  initial={{ opacity: 0 }}
                                  animate={{ opacity: 1 }}
                                  exit={{ opacity: 0 }}
                                  className="absolute inset-0 bg-black/85 backdrop-blur-sm p-3 flex flex-col justify-between z-20"
                                >
                                  <div className="flex flex-col">
                                    <span className="text-red-500 text-[8px] font-bold tracking-widest uppercase">INPUT ASSET</span>
                                    <h4 className="text-white text-[10px] font-bold font-sans">Raw Flat Studio CAD</h4>
                                  </div>
                                  <div className="w-full h-1/2 overflow-hidden rounded border border-white/15 bg-white/5">
                                    <img 
                                      src={assets.rawJewellery} 
                                      alt="Raw jewellery" 
                                      className="w-full h-full object-cover filter brightness-90 rounded-none"
                                      referrerPolicy="no-referrer"
                                    />
                                  </div>
                                  <div className="text-[8px] text-white/50 border-t border-white/10 pt-1 flex items-center gap-1 uppercase tracking-wider font-sans">
                                    <MousePointer className="w-3 text-red-500" /> {language === 'pt' ? 'ANTES / DEPOIS' : 'BEFORE / AFTER'}
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>

                            <div className="absolute bottom-2 left-2 right-2 p-1 bg-black/60 rounded text-white text-[8px] font-sans">
                              <p className="font-semibold uppercase tracking-tight text-center">03 / SOCIAL EDITORIAL</p>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </section>
        </div>

        {/* Section 3: REAL-WORLD BEFORE / AFTER GRID COMPARISON (Explaining the specific digital outputs) */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-b border-[#EEEEEE]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-20">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-8 block">{t.beforeAfterLabel}</span>
              <h2 className="text-4xl md:text-6xl font-display mb-6 tracking-tighter text-black uppercase text-center">
                FROM FLAT INVENTORY TO HIGH-END LUXURY<span className="text-red-600">.</span>
              </h2>
              <p className="text-black/60 text-lg max-w-2xl mx-auto font-sans font-light">
                {t.beforeAfterDesc}
              </p>
            </div>

            {/* Before-After Showcase Bento Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Product Comparison 1: Apparel to Lookbook (Swimwear) */}
              <motion.div 
                {...fadeInUp}
                className="group bg-white p-6 border border-[#EEEEEE] rounded-md shadow-sm"
              >
                <h3 className="text-xl font-display font-bold uppercase mb-4 tracking-tight border-b border-[#EEEEEE] pb-3 text-black">
                  {t.swimwearModel}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="aspect-[4/5] bg-neutral-100 rounded-md overflow-hidden relative border border-black/5">
                      <img 
                        src={assets.rawSwimwear} 
                        alt="Raw Shorts"
                        className="w-full h-full object-cover filter saturate-50"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-3 left-3 bg-black/75 text-white/90 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded">
                        Raw Apparel Input
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="aspect-[4/5] bg-neutral-100 rounded-md overflow-hidden relative border border-black/5">
                      <img 
                        src={assets.heroModel} 
                        alt="Lookbook output"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-3 left-3 bg-red-600 text-white text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded">
                        Lookbook Output
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Product Comparison 2: Jewellery */}
              <motion.div 
                {...fadeInUp}
                className="group bg-white p-6 border border-[#EEEEEE] rounded-md shadow-sm"
              >
                <h3 className="text-xl font-display font-bold uppercase mb-4 tracking-tight border-b border-[#EEEEEE] pb-3 text-black">
                  {t.jewelrySocial}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="aspect-[4/5] bg-neutral-100 rounded-md overflow-hidden relative border border-black/5">
                      <img 
                        src={assets.rawJewellery} 
                        alt="Raw necklace"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-3 left-3 bg-black/75 text-white/90 text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded">
                        CAD Raw Input
                      </span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="aspect-[4/5] bg-neutral-100 rounded-md overflow-hidden relative border border-black/5">
                      <img 
                        src={assets.jewellerySocial} 
                        alt="Fine jewelry output"
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute bottom-3 left-3 bg-red-600 text-white text-[9px] font-mono uppercase tracking-widest px-2 py-0.5 rounded">
                        Reflective Output
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* Section 4: THE PLATFORM CORE ADVANTAGES */}
        <section className="py-24 md:py-32 bg-black text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 tracking-tighter uppercase text-white">
                {language === 'pt' ? 'PRONTO PARA ESCALAR?' : 'READY TO SCALE?'}<span className="text-red-500">.</span>
              </h2>
              <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto font-sans font-light">
                {t.ctaDesc}
              </p>
              <div className="flex justify-center">
                <Link 
                  to={getLanguagePath('/contact')}
                  className="px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform shrink-0 rounded-none w-fit block"
                >
                  {t.ctaButton}
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </main>
    </div>
  );
};
