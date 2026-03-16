import { FadeIn } from '../components/FadeIn';
import { Send } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <FadeIn delay={0.1}>
        <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-12 leading-[0.8]">
          CONTACT US<span className="text-red-600">.</span>
        </h1>
      </FadeIn>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <FadeIn delay={0.2}>
          <div>
            <p className="text-2xl md:text-3xl font-display font-bold uppercase mb-12">Let's Talk</p>
            <form className="space-y-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-2 relative">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/60">First Name*</label>
                  <div className="relative">
                    <input type="text" className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors font-sans" />
                    <div className="absolute right-0 bottom-3 text-[#008080] opacity-50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                        <path d="M7 4v16M17 4v16M7 12h10" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="space-y-2 relative">
                  <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/60">Last Name*</label>
                  <div className="relative">
                    <input type="text" className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors font-sans" />
                    <div className="absolute right-0 bottom-3 text-[#008080] opacity-50">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                        <path d="M7 4v16M17 4v16M7 12h10" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-2 relative">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/60">Email*</label>
                <div className="relative">
                  <input type="email" className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors font-sans" />
                  <div className="absolute right-0 bottom-3 text-[#008080] opacity-50">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                      <path d="M7 4v16M17 4v16M7 12h10" />
                    </svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/60">Message</label>
                <textarea rows={1} className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors resize-none font-sans min-h-[100px]" />
              </div>

              <button className="bg-black text-white px-10 py-5 rounded-full font-sans font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-red-600 transition-all flex items-center justify-center gap-2 group">
                <span>Message Us</span>
                <Send className="w-3 h-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </button>
            </form>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} className="hidden lg:flex items-center justify-center">
          <div className="w-full max-w-md aspect-square overflow-hidden rounded-none border border-black/10">
            <video 
              src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/pnn495jt8srmr0cwyy3a1q4te8_result_.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
