import { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Send, Check, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (submitError) setSubmitError(null);
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
        setFormData({ firstName: '', lastName: '', email: '', message: '' });
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
                      <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/60">First Name*</label>
                      <div className="relative">
                        <input 
                          type="text" 
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors font-sans" 
                        />
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
                        <input 
                          type="text" 
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors font-sans" 
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
                    <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/60">Email*</label>
                    <div className="relative">
                      <input 
                        type="email" 
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors font-sans" 
                      />
                      <div className="absolute right-0 bottom-3 text-[#008080] opacity-50">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="square">
                          <path d="M7 4v16M17 4v16M7 12h10" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/60">Message</label>
                    <textarea 
                      name="message"
                      required
                      rows={1} 
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full bg-transparent border-b border-black/20 py-3 focus:outline-none focus:border-black transition-colors resize-none font-sans min-h-[100px]" 
                    />
                  </div>

                  {submitError && (
                    <div className="text-red-500 text-xs font-bold uppercase tracking-widest">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black text-white px-10 py-5 font-sans font-bold text-[10px] uppercase tracking-[0.2em] hover:bg-red-600 transition-all flex items-center justify-center gap-2 group disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-3 h-3 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Message Us</span>
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
                  className="flex flex-col items-start justify-center py-12 text-left space-y-6"
                >
                  <div className="w-20 h-20 rounded-none bg-[#E11D48]/10 flex items-center justify-center">
                    <Check className="w-10 h-10 text-[#E11D48]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-display font-bold uppercase tracking-tighter">Thank You<span className="text-red-600">.</span></h3>
                    <p className="text-black/60 font-sans max-w-sm">
                      Your message has been received. Our team will reach out to you shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors border-b border-black/20 pb-1"
                  >
                    Send another message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
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
