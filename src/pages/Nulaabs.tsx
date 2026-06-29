import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ShowcaseHero } from '../components/ShowcaseHero';
import { LazyVideo } from '../components/LazyVideo';
import { 
  ArrowUpRight,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

const Slideshow = ({ images }: { images: string[] }) => {
  const [validImages, setValidImages] = useState<string[]>(images);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    setValidImages(images);
    setIndex(0);
  }, [images]);

  useEffect(() => {
    if (validImages.length <= 1) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % validImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [validImages]);

  const handleImageError = (failedUrl: string) => {
    setValidImages((prev) => {
      const filtered = prev.filter((img) => img !== failedUrl);
      if (filtered.length > 0) {
        setIndex((prevIdx) => (prevIdx >= filtered.length ? 0 : prevIdx));
      }
      return filtered;
    });
  };

  if (validImages.length === 0) {
    return (
      <div className="relative w-full aspect-[4/5] bg-neutral-100 rounded-sm flex items-center justify-center border border-black/5">
        <span className="text-xs text-black/30 font-sans">Image Pending</span>
      </div>
    );
  }

  const currentImage = validImages[index] || validImages[0];

  return (
    <div className="relative w-full aspect-[4/5] bg-neutral-100 rounded-sm overflow-hidden flex border border-black/5">
      <AnimatePresence mode="wait">
        {currentImage && (
          <motion.img
            key={currentImage}
            src={currentImage}
            onError={() => handleImageError(currentImage)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 w-full h-full object-cover rounded-sm"
            referrerPolicy="no-referrer"
          />
        )}
      </AnimatePresence>
      {/* Indicator dots */}
      {validImages.length > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 z-10 bg-black/40 backdrop-blur-md px-2.5 py-1 rounded-full shadow-[0_2px_10px_rgba(0,0,0,0.15)]">
          {validImages.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                i === index ? 'bg-white w-3.5' : 'bg-white/40 hover:bg-white/75'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const Nulaabs = () => {
  const { language, getLanguagePath } = useLanguage();
  const scrollRef = useRef<HTMLDivElement>(null);

  // Content dictionary for EN/PT
  const content = {
    en: {
      heroTitle1: 'Your Digital Roster',
      heroTitle2: 'Every Product',
      heroTitle3: 'Every World',
      heroSubtitle: 'THE AI VIRTUAL PRODUCTION STUDIO',
      heroDesc: 'Upload your inventory, lock your models, and place them anywhere — from a clean e-com shot to a fully art-directed editorial. No studio. No shoot.',
      btnBeta: 'REQUEST BETA ACCESS',
      btnWaitlist: 'JOIN THE WAITLIST',
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
      heroTitle1: 'O Teu Elenco Digital',
      heroTitle2: 'Cada Produto',
      heroTitle3: 'Cada Mundo',
      heroSubtitle: 'O ESTÚDIO DE PRODUÇÃO VIRTUAL DE IA',
      heroDesc: 'Faz o upload do teu inventário, bloqueia os teus modelos e coloca-os em qualquer lugar — desde uma foto simples de e-commerce a um editorial totalmente dirigido de arte. Sem estúdio. Sem sessão fotográfica.',
      btnBeta: 'SOLICITAR ACESSO BETA',
      btnWaitlist: 'ADERIR À LISTA DE ESPERA',
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

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollRef.current.scrollTo({
        left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const features = [
    {
      id: 'model-creator',
      title: language === 'pt' ? 'Criador de Modelos' : 'Model Creator',
      desc: language === 'pt' 
        ? 'Gere modelos fotorrealistas exclusivos com traços e poses personalizadas.' 
        : 'Generate exclusive photorealistic models with custom traits and postures.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/04/item-7-2k.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/model_rosta.png'
    },
    {
      id: 'ecom-stylist',
      title: language === 'pt' ? 'Estilista E-Com' : 'E-Com Stylist',
      desc: language === 'pt' 
        ? 'Adicione roupas ao seu modelo, incluindo sapatos, chapéus, tops, etc.' 
        : 'Add clothes to your model, including shoes, hats, tops, and more.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/01/item-130-1k.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/shorts2.jpeg'
    },
    {
      id: 'virtual-tryon',
      title: language === 'pt' ? 'Provador Virtual' : 'Virtual Try-On',
      desc: language === 'pt' 
        ? 'Veja como as peças assentam instantaneamente em modelos digitais.' 
        : 'See how garments drape instantly on realistic digital models.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/WhatsApp%20Image%202026-06-22%20at%2013.32.55.jpeg',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Product_Library_Swimwear.png'
    },
    {
      id: 'background-remover',
      title: language === 'pt' ? 'Removedor de Fundo' : 'Background Remover',
      desc: language === 'pt' 
        ? 'Isole modelos e vestuário de fundos complexos em segundos.' 
        : 'Isolate models and clothing from complex backdrops in seconds.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/02/item-1-1k.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/02/item-0-1k.png'
    },
    {
      id: 'upscaler',
      title: language === 'pt' ? 'Super Resolução' : 'Upscaler',
      desc: language === 'pt' 
        ? 'Aumente a resolução para nitidez e detalhes ultra-macro perfeitos.' 
        : 'Enhance image resolution for pristine print and screen campaign details.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/item-222-1k.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/43e25b10-9c9e-4164-9d83-d2aceb203787.jpg'
    },
    {
      id: 'background-changer',
      title: language === 'pt' ? 'Alterador de Fundo' : 'Background Changer',
      desc: language === 'pt' 
        ? 'Substitua cenários de estúdio por paisagens exóticas ou minimalistas.' 
        : 'Swap studio backgrounds for exotic destinations or clean editorial stages.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/03/Artboard%201-80.jpg',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/party_moodboard.png'
    },
    {
      id: 'image-inpaint',
      title: language === 'pt' ? 'Pintura de Imagem' : 'Image Inpaint',
      desc: language === 'pt' 
        ? 'Modifique, adicione ou remova detalhes específicos de roupas com precisão.' 
        : 'Edit, add, or replace specific garment details with brush precision.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/01/4x5-for-socials.jpg',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/shorts2.jpeg'
    },
    {
      id: 'consistent-character',
      title: language === 'pt' ? 'Personagem Consistente' : 'Consistent Character',
      desc: language === 'pt' 
        ? 'Mantenha a consistência facial e corporal do modelo em toda a campanha.' 
        : 'Lock your model\'s facial and physical identity across all assets.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/04/item-8-2k.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/04/A_digital_interface_talent_roster_202606272304.jpeg'
    },
    {
      id: 'client-approval',
      title: language === 'pt' ? 'Aprovação do Cliente' : 'Client Approval',
      desc: language === 'pt' 
        ? 'Envie coleções com marcas de água para aprovação rápida do cliente.' 
        : 'Send your collections with custom watermarks for instant client sign-off.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/04/item-9-2k.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/model_rosta.png'
    },
    {
      id: 'model-swapper',
      title: language === 'pt' ? 'Substituição de Modelos' : 'Model Swapper',
      desc: language === 'pt' 
        ? 'Altere rostos, tons de pele ou expressões em fotos existentes.' 
        : 'Re-render photos with completely new models, tones, or features.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/02/item-337-2k.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/02/item-344-2k.png'
    },
    {
      id: 'flatlay-to-model',
      title: language === 'pt' ? 'Flatlay para Modelo' : 'Flatlay To Model',
      desc: language === 'pt' 
        ? 'Transforme fotos planas de roupas em sessões editoriais dinâmicas.' 
        : 'Transform flat garments into realistic on-model editorial lookbooks.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/item-127-1k.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/lisbon_necklace_social.png'
    },
    {
      id: 'video-generator',
      title: language === 'pt' ? 'Gerador de Vídeo' : 'Video Generator',
      desc: language === 'pt' 
        ? 'Crie movimentos de produto realistas a partir de imagens estáticas.' 
        : 'Create fluid high-fidelity videos and motions from static shots.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/item-384-1k.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/01/Gemini_Generated_Image_74ersr74ersr74er.png'
    },
    {
      id: 'repose',
      title: language === 'pt' ? 'Reposição de Poses' : 'Repose',
      desc: language === 'pt' 
        ? 'Ajuste posições corporais e poses de modelos para qualquer layout.' 
        : 'Adjust model postures and physical framing to fit any layout.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/03/Artboard%201%20copy%202-80.jpg',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/03/Artboard%201%20copy-80.jpg'
    },
    {
      id: 'preset-art-directions',
      title: language === 'pt' ? 'Direções de Arte Predefinidas' : 'Preset Art Directions',
      desc: language === 'pt' 
        ? 'Mais de 180 ambientes e iluminações predefinidos e dirigidos por arte para a sua campanha.' 
        : 'Over 180 preset art directed environments and lighting for your campaign.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Preset_Library.png',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/portuguese_presets.png'
    },
    {
      id: 'out-painting',
      title: language === 'pt' ? 'Extensão de Imagem' : 'Out Painting',
      desc: language === 'pt' 
        ? 'Estenda as suas imagens de forma inteligente.' 
        : 'Extend your images.',
      mainImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/03/Artboard%201-80.jpg',
      thumbImage: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/party_moodboard.png'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <main>
        {/* ShowcaseHero */}
        <ShowcaseHero 
          title="NULAABS"
          titleClassName="text-4xl sm:text-6xl md:text-[clamp(3.5rem,9.5vw,145px)]"
          mobileTitle="Nulaabs Sandbox"
          description={t.heroDesc}
          videoSrc="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/header_nulaabs-_v3.mp4"
          caseStudyNumber="06"
          sector="E-Commerce / Fashion"
          deliverables="CAD Asset Ingestion / Virtual Casting / Infinite presets"
          railText="CREATIVE SYNTHESIZER / v2.5"
          imagePosition="center"
          customCaseStudyLabel={t.heroSubtitle}
          customTitle={
            <h1 className="font-display font-bold italic text-white leading-[0.85] tracking-tighter mb-8 text-5xl sm:text-7xl md:text-[11vw] lg:text-[12vw]">
              NULAABS<span className="text-[#DC2626]">.</span>
            </h1>
          }
          customButtons={
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <a 
                href="https://nulaab.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-5 bg-[#DC2626] text-white border border-[#DC2626] text-xs font-sans font-bold uppercase tracking-[0.2em] hover:bg-transparent hover:text-white transition-all duration-300 text-center rounded-none shadow-[0_0_15px_rgba(220,38,38,0.3)] hover:shadow-none"
              >
                {t.btnBeta}
              </a>
              <a 
                href="https://nulaab.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-5 border border-white/20 text-white text-xs font-sans font-bold uppercase tracking-[0.2em] hover:bg-white hover:text-black hover:border-white transition-all duration-300 text-center rounded-none"
              >
                {t.btnWaitlist}
              </a>
            </div>
          }
        />

        {/* Showcase Feature Grid Slideshow Section */}
        <section className="py-24 px-6 md:px-12 bg-white border-b border-[#EEEEEE]">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-3xl md:text-5xl font-bold uppercase tracking-tighter text-black text-center mb-4 leading-[1.1]">
              {language === 'pt' ? 'Do Inventário Plano à Campanha de Alto Nível.' : 'From Flat Inventory to High-End Campaign.'}<br />
              {language === 'pt' ? 'Sem uma Única Sessão Fotográfica' : 'Without a Single Shoot'}<span className="text-[#DC2626]">.</span>
            </h2>
            <p className="font-sans font-light text-sm md:text-base text-black/60 text-center max-w-xl mx-auto mb-16 tracking-wide leading-relaxed">
              {language === 'pt' 
                ? 'Faça o upload do seu inventário, bloqueie os seus modelos e gere tudo, desde e-commerce a editorial — num único espaço de trabalho.'
                : 'Upload your inventory, lock your models, and generate everything from e-com to editorial — in one workspace.'}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
              {/* Grid 01 */}
              <div className="p-8 md:p-10 border border-[#EEEEEE] bg-[#F9F9F7] rounded-md flex flex-col justify-between hover:border-[#DC2626]/30 transition-all duration-500">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-[#DC2626] font-bold tracking-[0.12em]">01</span>
                    <a 
                      href="https://nulaab.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 border border-[#DC2626] text-[#DC2626] text-[11px] font-sans font-bold uppercase tracking-widest hover:bg-[#DC2626] hover:text-white transition-all duration-300 px-4 py-2 rounded-none cursor-pointer"
                    >
                      {language === 'pt' ? 'Experimentar' : 'Try It'} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wider text-black mb-3">
                    {language === 'pt' ? 'Do Plano para a Campanha' : 'From Flat to Campaign'}<span className="text-[#DC2626]">.</span>
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-black/60 font-light leading-relaxed mb-8">
                    {language === 'pt'
                      ? 'Desenho em plano ou CAD de entrada. Foto de e-commerce e depois editorial completo de saída. Um produto. Três saídas. Zero sessões fotográficas.'
                      : 'Flatlay or CAD drawing in. E-com shot, then full editorial out. One product. Three outputs. Zero shoots.'}
                  </p>
                </div>
                <div className="w-full">
                  <Slideshow images={[
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/01/Gemini_Generated_Image_74ersr74ersr74er.png",
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/01/4x5-for-socials.jpg",
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/01/item-130-1k.png"
                  ]} />
                </div>
              </div>

              {/* Grid 02 */}
              <div className="p-8 md:p-10 border border-[#EEEEEE] bg-[#F9F9F7] rounded-md flex flex-col justify-between hover:border-[#DC2626]/30 transition-all duration-500">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-[#DC2626] font-bold tracking-[0.12em]">02</span>
                    <a 
                      href="https://nulaab.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 border border-[#DC2626] text-[#DC2626] text-[11px] font-sans font-bold uppercase tracking-widest hover:bg-[#DC2626] hover:text-white transition-all duration-300 px-4 py-2 rounded-none cursor-pointer"
                    >
                      {language === 'pt' ? 'Experimentar' : 'Try It'} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wider text-black mb-3">
                    {language === 'pt' ? 'Coloque o seu Produto. Em qualquer lugar.' : 'Place Your Product. Anywhere'}<span className="text-[#DC2626]">.</span>
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-black/60 font-light leading-relaxed mb-8">
                    {language === 'pt'
                      ? 'Coloque qualquer produto num espaço com curadoria artística com um único clique — ou crie o seu próprio mundo a partir de um moodboard de campanha.'
                      : 'Drop any product into a curated art-directed space with one click — or build your own world from a campaign moodboard.'}
                  </p>
                </div>
                <div className="w-full">
                  <Slideshow images={[
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/02/item-0-1k.png",
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/02/item-337-2k.png",
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/02/item-344-2k.png",
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/02/item-1-1k.png"
                  ]} />
                </div>
              </div>

              {/* Grid 03 */}
              <div className="p-8 md:p-10 border border-[#EEEEEE] bg-[#F9F9F7] rounded-md flex flex-col justify-between hover:border-[#DC2626]/30 transition-all duration-500">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-[#DC2626] font-bold tracking-[0.12em]">03</span>
                    <a 
                      href="https://nulaab.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 border border-[#DC2626] text-[#DC2626] text-[11px] font-sans font-bold uppercase tracking-widest hover:bg-[#DC2626] hover:text-white transition-all duration-300 px-4 py-2 rounded-none cursor-pointer"
                    >
                      {language === 'pt' ? 'Experimentar' : 'Try It'} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wider text-black mb-3">
                    {language === 'pt' ? 'Do Conceito ao Momento' : 'Mood to Moment'}<span className="text-[#DC2626]">.</span>
                  </h3>
                  <p className="font-sans text-xs md:text-sm text-black/60 font-light leading-relaxed mb-8">
                    {language === 'pt'
                      ? 'Crie um moodboard, escolha do elenco de modelos e o seu modelo selecionado usará o seu produto dentro do mundo que criou.'
                      : 'Build a moodboard, cast from the roster, and your locked model wears your product inside the world you created.'}
                  </p>
                </div>
                <div className="w-full">
                  <Slideshow images={[
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/03/A_group_of_people_enjoying_202606291223.jpeg",
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/03/Artboard%201%20copy-80.jpg",
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/03/Artboard%201-80.jpg",
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/03/Artboard%201%20copy%202-80.jpg"
                  ]} />
                </div>
              </div>

              {/* Grid 04 */}
              <div className="p-8 md:p-10 border border-[#EEEEEE] bg-[#F9F9F7] rounded-md flex flex-col justify-between hover:border-[#DC2626]/30 transition-all duration-500">
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <span className="font-mono text-xs text-[#DC2626] font-bold tracking-[0.12em]">04</span>
                    <a 
                      href="https://nulaab.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 border border-[#DC2626] text-[#DC2626] text-[11px] font-sans font-bold uppercase tracking-widest hover:bg-[#DC2626] hover:text-white transition-all duration-300 px-4 py-2 rounded-none cursor-pointer"
                    >
                      {language === 'pt' ? 'Experimentar' : 'Try It'} <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                  <h3 className="font-display text-lg md:text-xl font-bold uppercase tracking-wider text-black mb-3">
                    {language === 'pt' ? 'Um Modelo. Cada Foto.' : 'One Model. Every Shot'}<span className="text-[#DC2626]">.</span>
                  </h3>
                   <p className="font-sans text-xs md:text-sm text-black/60 font-light leading-relaxed mb-8">
                     {language === 'pt'
                       ? 'Bloqueie um modelo para a sua marca. Alterações de pose, produto, fundo — a identidade permanece constante. Sempre sua.'
                       : 'Lock a model to your brand. Pose changes, product changes, background changes — identity stays constant. Always yours.'}
                   </p>
                </div>
                <div className="w-full">
                  <Slideshow images={[
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/04/A_digital_interface_talent_roster_202606272304.jpeg",
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/04/item-7-2k.png",
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/04/item-8-2k.png",
                    "https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/04/item-9-2k.png"
                  ]} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 1: FEATURED SECTION (A carousel of generative tools with input thumbs in the bottom-left corner of the card image) */}
        <section className="py-24 md:py-40 bg-black border-y border-white/10 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
              
              {/* Left Static Panel (3/12 wide) */}
              <div className="lg:col-span-4 sticky top-24">
                <span className="text-xs font-black uppercase tracking-[0.4em] text-[#DC2626] mb-6 block">
                  {language === 'pt' ? '01. CARACTERÍSTICAS' : '01. CORE FEATURES'}
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-[1.1] tracking-tighter uppercase text-white mb-6">
                  {language === 'pt' ? 'O que pode fazer com o NULaabs' : 'What can you do with NULaabs'}<span className="text-[#DC2626]">?</span>
                </h2>
                <p className="text-sm md:text-base text-white/60 font-sans leading-relaxed mb-8 font-light">
                  {language === 'pt'
                    ? "Explore as ferramentas generativas do NULAABS para transformar imagens simples de produtos, flatlays e modelos em editoriais e campanhas de luxo instantaneamente."
                    : "Explore NULAABS' generative tools to turn raw assets, flatlays, and models into high-end fashion campaigns instantly."}
                </p>
                
                {/* Navigation Arrows & Primary Action Button */}
                <div className="flex flex-col sm:flex-row lg:flex-col gap-6 items-start sm:items-center lg:items-start justify-between">
                  <div className="flex gap-3">
                    <button 
                      onClick={() => scroll('left')}
                      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                      aria-label="Scroll Left"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button 
                      onClick={() => scroll('right')}
                      className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
                      aria-label="Scroll Right"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <a 
                    href="https://nulaab.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-4 bg-white text-black hover:bg-[#DC2626] hover:text-white transition-colors text-xs font-sans font-bold uppercase tracking-widest flex items-center justify-center gap-2 rounded-none"
                  >
                    {language === 'pt' ? 'Explorar a nossa app' : 'Explore our app'} <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Horizontal Scrolling Slider Carousel (8/12 wide) */}
              <div className="lg:col-span-8 relative w-full overflow-hidden">
                <div 
                  ref={scrollRef}
                  className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory py-4 scroll-smooth"
                  style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                  {features.map((feature) => (
                    <div 
                      key={feature.id}
                      className="min-w-[280px] sm:min-w-[320px] md:min-w-[340px] max-w-[340px] bg-[#0E0E0E] rounded-md border border-white/10 overflow-hidden group shadow-sm hover:shadow-md hover:border-[#DC2626]/20 transition-all duration-500 snap-start flex flex-col justify-between"
                    >
                      {/* Image Frame with custom Input thumbnail overlay */}
                      <div className="relative aspect-[3/4] overflow-hidden bg-neutral-900 border-b border-white/10">
                        <img 
                          src={feature.mainImage} 
                          alt={feature.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                          referrerPolicy="no-referrer"
                        />
                        
                        {/* Before (Input) Thumbnail Inset */}
                        {feature.thumbImage && (
                          <div className="absolute bottom-3 left-3 w-16 h-20 bg-black/95 backdrop-blur-sm p-1.5 rounded border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.15)] flex flex-col justify-between overflow-hidden z-10 transition-transform duration-300 group-hover:scale-105">
                            <span className="text-[7px] font-black text-[#DC2626] tracking-wider uppercase font-sans text-center block leading-none mb-1">
                              INPUT
                            </span>
                            <div className="flex-1 w-full overflow-hidden rounded-sm bg-neutral-50">
                              <img 
                                src={feature.thumbImage} 
                                alt="Input thumbnail"
                                className="w-full h-full object-cover rounded-none"
                                referrerPolicy="no-referrer"
                              />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      {/* White Metadata Info Container */}
                      <div className="p-6 bg-[#0E0E0E] flex-1 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center justify-between gap-4 mb-2">
                            <h3 className="font-display font-bold uppercase tracking-wide text-sm md:text-base text-white group-hover:text-[#DC2626] transition-colors">
                              {feature.title}
                            </h3>
                            <ArrowUpRight className="w-4 h-4 text-white/30 group-hover:text-[#DC2626] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-300 shrink-0" />
                          </div>
                          <p className="font-sans text-xs md:text-sm text-white/60 font-light leading-relaxed">
                            {feature.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>



        {/* Section 2: WHAT WE'VE CREATED SO FAR (A stunning fashion showcase masonry grid interspersing 2D images and auto-playing silent videos) */}
        <section className="py-24 bg-white border-b border-[#EEEEEE]">
          <div className="max-w-7xl mx-auto px-6">
            
            <div className="text-center mb-12">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-red-600 mb-4 block">
                {language === 'pt' ? 'PORTFÓLIO' : 'PORTFOLIO'}
              </span>
              <h2 className="text-4xl md:text-5xl font-display font-bold uppercase text-black leading-none tracking-tighter">
                {language === 'pt' ? "O que criamos até agora" : "What we've created so far"}<span className="text-red-600">.</span>
              </h2>
            </div>

            <div className="flex justify-center mb-12">
              <div className="border border-black/15 bg-neutral-100/80 px-4 py-1.5 text-[11px] font-sans font-medium uppercase tracking-[0.15em] text-black/70 rounded-none shadow-sm">
                {language === 'pt' ? "PRODUÇÕES NULAABS" : "NULAABS PRODUCTIONS"}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {/* Column 1 */}
              <div className="flex flex-col gap-3">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-lg group shadow-sm hover:shadow-md transition-all duration-500 border border-black/5">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/WhatsApp%20Image%202026-06-22%20at%2013.32.55.jpeg" 
                    alt="Lookbook production" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100 rounded-lg group shadow-sm hover:shadow-md transition-all duration-500 border border-black/5">
                  <LazyVideo 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/pnn495jt8srmr0cwyy3a1q4te8_result_.mp4" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="flex flex-col gap-3">
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 rounded-lg group shadow-sm hover:shadow-md transition-all duration-500 border border-black/5">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/01/item-130-1k.png" 
                    alt="Apparel styling" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-lg group shadow-sm hover:shadow-md transition-all duration-500 border border-black/5">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/02/item-1-1k.png" 
                    alt="Isolate model" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Column 3 */}
              <div className="flex flex-col gap-3">
                <div className="relative aspect-square overflow-hidden bg-neutral-100 rounded-lg group shadow-sm hover:shadow-md transition-all duration-500 border border-black/5">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/04/item-7-2k.png" 
                    alt="Digital roster model" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-lg group shadow-sm hover:shadow-md transition-all duration-500 border border-black/5">
                  <LazyVideo 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/OP_SQUARE.mp4" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
              </div>

              {/* Column 4 */}
              <div className="flex flex-col gap-3">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-lg group shadow-sm hover:shadow-md transition-all duration-500 border border-black/5">
                  <LazyVideo 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/salt-lily-zoom.mp4" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden bg-neutral-100 rounded-lg group shadow-sm hover:shadow-md transition-all duration-500 border border-black/5">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/01/4x5-for-socials.jpg" 
                    alt="Editorial social shoot" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Column 5 */}
              <div className="flex flex-col gap-3">
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-lg group shadow-sm hover:shadow-md transition-all duration-500 border border-black/5">
                  <LazyVideo 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/Beach_Franks1.mp4" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden bg-neutral-100 rounded-lg group shadow-sm hover:shadow-md transition-all duration-500 border border-black/5">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/NULAABS/Section2/04/item-8-2k.png" 
                    alt="Fashion identity lookbook" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 rounded-none"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>



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
