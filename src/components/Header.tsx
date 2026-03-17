import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ShowreelModal } from './ShowreelModal';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const navLinks = [
    { href: '/results', label: 'Results' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white py-3 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 group">
            <img 
              src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/logo-black.png" 
              alt="NuStudios" 
              className="h-8 md:h-16 w-auto"
              referrerPolicy="no-referrer"
            />
          </Link>
          
          <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-black">
              LETS GRAB A COFFE | BOOK A CALL NOW
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="hidden md:block bg-red-600 text-white px-6 py-2 rounded-full font-sans font-bold text-[10px] uppercase tracking-widest hover:bg-red-700 transition-all"
            >
              Watch Showreel
            </button>
            <button 
              className="flex items-center gap-2 px-2 py-2 transition-colors text-black font-sans font-bold text-[10px] uppercase tracking-widest hover:text-red-600"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="flex flex-col gap-1.5 items-end">
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'w-4'}`} />
                <span className={`block h-0.5 bg-current transition-all duration-300 ${isMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'}`} />
              </div>
              <span className="hidden sm:inline">{isMenuOpen ? 'Close' : 'Menu'}</span>
            </button>
          </div>
        </div>
      </header>

      <ShowreelModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg flex flex-col pt-32 pb-12 overflow-y-auto"
          >
            <div className="max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-12 gap-12">
              <nav className="lg:col-span-8 flex flex-col gap-2">
                {navLinks.map((link, i) => (
                  <Link 
                    key={i} 
                    to={link.href} 
                    className="group flex items-center gap-4 text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter text-text hover:text-red-600 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
              <div className="lg:col-span-4 flex flex-col justify-between h-full gap-12">
                <div className="space-y-8">
                  <Link to="/blog" className="block text-3xl font-display font-bold uppercase tracking-tighter text-text hover:text-red-600 transition-colors">
                    Blog
                  </Link>
                  <div className="h-px w-full bg-border" />
                  <div className="space-y-4">
                    <p className="font-sans text-sm font-bold uppercase tracking-widest text-text/60">Socials</p>
                    <div className="flex flex-col gap-2 text-sm font-sans font-bold uppercase tracking-widest text-text">
                      <a href="https://www.linkedin.com/company/112232643/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors flex items-center gap-2">LinkedIn <span className="text-xs">↗</span></a>
                      <a href="https://www.instagram.com/nustudios.agency/" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors flex items-center gap-2">Instagram <span className="text-xs">↗</span></a>
                      <a href="https://www.youtube.com/@NUStudiosAIVFX" target="_blank" rel="noopener noreferrer" className="hover:text-red-600 transition-colors flex items-center gap-2">Youtube <span className="text-xs">↗</span></a>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="font-sans text-sm font-bold uppercase tracking-widest text-text/60">Contact</p>
                  <a href="mailto:info@nustudios.co.uk" className="block text-xl font-display font-bold hover:text-red-600 transition-colors">
                    info@nustudios.co.uk
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
