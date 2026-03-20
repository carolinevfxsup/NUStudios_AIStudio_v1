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
  // Repeat logos multiple times to ensure they fill the screen and loop seamlessly
  const repeatedLogos = Array(20).fill(logos).flat();

  return (
    <div className="relative py-16 md:py-24 overflow-hidden flex items-center min-h-[200px] bg-black">
      
      {/* Background Video - Using standard video tag for background to ensure it loads immediately */}
      <div className="absolute inset-0 z-0">
        <video 
          key="bg-video"
          className="w-full h-full object-cover opacity-60"
          autoPlay 
          loop 
          muted 
          playsInline
          src={`${SUPABASE_ASSET_BASE}BG_rev.mp4`}
        />
      </div>
      
      {/* Dark Overlay to help logo legibility */}
      <div className="absolute inset-0 bg-black/20 z-[1]" />

      <div className="relative z-10 w-full overflow-hidden">
        
        <motion.div 
          className="flex whitespace-nowrap gap-16 md:gap-32 items-center w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 120, // Slower for a more premium feel
              ease: "linear",
            },
          }}
        >
          {repeatedLogos.map((logo, i) => (
            <div key={i} className="flex-shrink-0 h-12 w-32 md:w-48 flex items-center justify-center">
              <img 
                src={`${SUPABASE_ASSET_BASE}${logo}`}
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
