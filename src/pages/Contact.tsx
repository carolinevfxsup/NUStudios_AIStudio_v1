import { FadeIn } from '../components/FadeIn';

export const Contact = () => {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto min-h-screen">
      <FadeIn delay={0.1}>
        <h1 className="text-6xl md:text-9xl font-display font-bold uppercase tracking-tighter mb-12">
          Contact
        </h1>
      </FadeIn>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
        <FadeIn delay={0.2}>
          <div>
            <p className="text-2xl font-display font-bold uppercase mb-8">Let's Talk</p>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-sans font-bold uppercase tracking-widest">First Name*</label>
                  <input type="text" className="w-full bg-transparent border-b border-black py-2 focus:outline-none focus:border-red-600 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-sans font-bold uppercase tracking-widest">Last Name*</label>
                  <input type="text" className="w-full bg-transparent border-b border-black py-2 focus:outline-none focus:border-red-600 transition-colors" />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-xs font-sans font-bold uppercase tracking-widest">Email*</label>
                  <input type="email" className="w-full bg-transparent border-b border-black py-2 focus:outline-none focus:border-red-600 transition-colors" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-sans font-bold uppercase tracking-widest">Message</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-black py-2 focus:outline-none focus:border-red-600 transition-colors resize-none" />
              </div>

              <button className="bg-black text-white px-8 py-4 font-sans font-bold text-xs uppercase tracking-widest hover:bg-red-600 transition-colors">
                Send Message
              </button>
            </form>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="space-y-12">
            <div>
              <p className="text-xs font-sans font-bold uppercase tracking-widest mb-4 text-text/60">General Inquiries</p>
              <a href="mailto:info@nustudios.co.uk" className="text-2xl font-display font-bold hover:text-red-600 transition-colors">info@nustudios.co.uk</a>
            </div>

            <div>
              <p className="text-xs font-sans font-bold uppercase tracking-widest mb-4 text-text/60">Direct Contacts</p>
              <div className="space-y-6">
                <div>
                  <p className="font-bold">Caroline Pires</p>
                  <a href="mailto:caroline@nustudios.co.uk" className="block hover:text-red-600 transition-colors">caroline@nustudios.co.uk</a>
                  <p className="text-sm text-text/70">UK: +44(0)7506230988</p>
                  <p className="text-sm text-text/70">PT: +351 939 517 942</p>
                </div>
                <div>
                  <p className="font-bold">Claudio Marcos</p>
                  <a href="mailto:claudio@nustudios.co.uk" className="block hover:text-red-600 transition-colors">claudio@nustudios.co.uk</a>
                  <p className="text-sm text-text/70">AU: +61 431 371 024</p>
                  <p className="text-sm text-text/70">PT: +351 916 431 263</p>
                </div>
              </div>
            </div>

            <div>
              <p className="text-xs font-sans font-bold uppercase tracking-widest mb-4 text-text/60">Socials</p>
              <div className="flex flex-col gap-2">
                <a href="https://www.linkedin.com/company/112232643/" target="_blank" rel="noopener noreferrer" className="text-xl font-display font-bold hover:text-red-600 transition-colors">LinkedIn</a>
                <a href="https://www.instagram.com/nustudios.agency/" target="_blank" rel="noopener noreferrer" className="text-xl font-display font-bold hover:text-red-600 transition-colors">Instagram</a>
                <a href="https://www.youtube.com/@NUStudiosAIVFX" target="_blank" rel="noopener noreferrer" className="text-xl font-display font-bold hover:text-red-600 transition-colors">Youtube</a>
                <a href="https://www.tiktok.com/@nustudios_ai_vfx" target="_blank" rel="noopener noreferrer" className="text-xl font-display font-bold hover:text-red-600 transition-colors">TikTok</a>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};
