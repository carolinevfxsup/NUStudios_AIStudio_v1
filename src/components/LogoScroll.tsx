import { motion } from 'motion/react';

const SUPABASE_ASSET_BASE = 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/';

// Updated with the correct filenames provided
const logos = [
  '2Artboard%203%20copy.png',
  '4%20-%20Copy.png',
  'Logo_0071_qp12-1024x534.png',
  'palmeira_web.png',
  'output-onlinepngtools.png'
];

export const LogoScroll = () => {
  return (
    <div className="relative py-16 md:py-24 overflow-hidden flex items-center min-h-[200px] bg-black">
      
      {/* Background Video - Using your Supabase link but ensuring attributes are set */}
      <video 
        key="bg-video"
        className="absolute inset-0 w-full h-full object-cover opacity-60 z-0"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={`${SUPABASE_ASSET_BASE}BG_rev.mp4`} type="video/mp4" />
      </video>
      
      {/* Dark Overlay to help logo legibility - reduced by 30% */}
      <div className="absolute inset-0 bg-black/20 z-1" />

      <div className="relative z-10 w-full overflow-hidden">
        
        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30, // Slower is usually more professional
              ease: "linear",
            },
          }}
        >
          {/* Loop twice for seamlessness */}
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="flex-shrink-0 h-12 w-32 md:w-48 flex items-center justify-center">
              <img 
                src={`${SUPABASE_ASSET_BASE}${logo}`} // Direct Supabase path
                alt="Partner Logo" 
                className="h-full w-full object-contain brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
