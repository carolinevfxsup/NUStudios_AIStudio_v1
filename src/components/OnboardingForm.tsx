import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ArrowLeft, Check, Send, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';
import { Link } from 'react-router-dom';

type FormData = {
  businessName: string;
  website: string;
  size: string;
  market: string;
  socials: {
    instagram: string;
    tiktok: string;
    linkedin: string;
  };
  outcomes: string[];
  email: string;
  phone: string;
  message: string;
  file: File | null;
};

const INITIAL_DATA: FormData = {
  businessName: '',
  website: '',
  size: '',
  market: '',
  socials: {
    instagram: '',
    tiktok: '',
    linkedin: '',
  },
  outcomes: [],
  email: '',
  phone: '',
  message: '',
  file: null,
};

export const OnboardingForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const totalSteps = 5;

  const handleNext = () => setStep((s) => Math.min(s + 1, totalSteps));
  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const toggleOutcome = (outcome: string) => {
    setFormData(prev => ({
      ...prev,
      outcomes: prev.outcomes.includes(outcome)
        ? prev.outcomes.filter(o => o !== outcome)
        : [...prev.outcomes, outcome]
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.email && !formData.phone) {
      alert('Please provide either an email address or a phone number.');
      return;
    }

    setIsSubmitting(true);
    
    try {
      const { error } = await supabase
        .from('onboarding_submissions')
        .insert([
          {
            business_name: formData.businessName,
            website: formData.website,
            team_size: formData.size,
            market: formData.market,
            instagram: formData.socials.instagram,
            tiktok: formData.socials.tiktok,
            linkedin: formData.socials.linkedin,
            outcomes: formData.outcomes,
            email: formData.email,
            phone: formData.phone,
          }
        ]);

      if (error) throw error;

      // Send email
      const emailResponse = await fetch('/api/submit-brief', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!emailResponse.ok) throw new Error('Failed to send email');
      
      console.log('Form submitted successfully');
      setIsSubmitted(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your brief. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white p-12 rounded-3xl shadow-xl text-center max-w-2xl mx-auto border border-gray-100"
      >
        <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-8">
          <Check className="w-10 h-10" />
        </div>
        <h2 className="text-3xl font-bold mb-4">Brief Received.</h2>
        <p className="text-gray-500 mb-8">
          Thank you, {formData.businessName}. We're analyzing your profile and will reach out within 24 hours with a custom strategy.
        </p>
        <button 
          onClick={() => {
            setIsSubmitted(false);
            setStep(1);
            setFormData(INITIAL_DATA);
          }}
          className="text-xs font-black uppercase tracking-widest border-b-2 border-black pb-1 hover:text-primary hover:border-primary transition-all"
        >
          Start New Brief
        </button>
      </motion.div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="mb-12">
        <div className="flex justify-between items-center mb-4">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-500">
            Step {step} of {totalSteps}
          </span>
          <div className="flex gap-1">
            {[...Array(totalSteps)].map((_, i) => (
              <div 
                key={i} 
                className={`h-1 w-8 rounded-full transition-all duration-500 ${i + 1 <= step ? 'bg-white' : 'bg-white/10'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="min-h-[400px] flex flex-col">
        <AnimatePresence mode="wait">
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <Link to="/" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-white/60 transition-colors mb-8">
                <ArrowLeft className="w-4 h-4" />
                Back
              </Link>
              <h3 className="text-3xl font-bold tracking-tight mb-8">Let's start with the <span className="sans-pink italic">Basics.</span></h3>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Business Name</label>
                <input 
                  type="text"
                  required
                  value={formData.businessName}
                  onChange={e => setFormData({...formData, businessName: e.target.value})}
                  className="w-full bg-white/5 border-none p-4 rounded-xl focus:ring-2 focus:ring-white transition-all text-lg"
                  placeholder="e.g. Salt Lily"
                />
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Website / Store URL</label>
                <input 
                  type="url"
                  required
                  value={formData.website}
                  onChange={e => setFormData({...formData, website: e.target.value})}
                  className="w-full bg-white/5 border-none p-4 rounded-xl focus:ring-2 focus:ring-white transition-all text-lg"
                  placeholder="https://yourstore.com"
                />
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold tracking-tight mb-8">Size & <span className="sans-pink italic">Market.</span></h3>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4">Team Size</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {['1-5', '6-20', '21-50', '50+'].map(size => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setFormData({...formData, size})}
                      className={`p-4 rounded-xl font-bold text-sm border-2 transition-all ${formData.size === size ? 'border-white bg-white/10 text-white' : 'border-white/10 hover:border-white/20'}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-4">Primary Market</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {['UK', 'EU', 'US', 'Brazil', 'Other'].map(market => (
                    <button
                      key={market}
                      type="button"
                      onClick={() => setFormData({...formData, market})}
                      className={`p-4 rounded-xl font-bold text-sm border-2 transition-all ${formData.market === market ? 'border-white bg-white/10 text-white' : 'border-white/10 hover:border-white/20'}`}
                    >
                      {market}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold tracking-tight mb-8">Social <span className="sans-pink italic">Presence.</span></h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Instagram Handle</label>
                  <input 
                    type="text"
                    value={formData.socials.instagram}
                    onChange={e => setFormData({...formData, socials: {...formData.socials, instagram: e.target.value}})}
                    className="w-full bg-white/5 border-none p-4 rounded-xl focus:ring-2 focus:ring-white transition-all"
                    placeholder="@yourbrand"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">TikTok Handle</label>
                  <input 
                    type="text"
                    value={formData.socials.tiktok}
                    onChange={e => setFormData({...formData, socials: {...formData.socials, tiktok: e.target.value}})}
                    className="w-full bg-white/5 border-none p-4 rounded-xl focus:ring-2 focus:ring-white transition-all"
                    placeholder="@yourbrand"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">LinkedIn Page</label>
                  <input 
                    type="text"
                    value={formData.socials.linkedin}
                    onChange={e => setFormData({...formData, socials: {...formData.socials, linkedin: e.target.value}})}
                    className="w-full bg-white/5 border-none p-4 rounded-xl focus:ring-2 focus:ring-white transition-all"
                    placeholder="linkedin.com/company/yourbrand"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold tracking-tight mb-8">Desired <span className="sans-pink italic">Outcomes.</span></h3>
              <div className="grid grid-cols-1 gap-3">
                {[
                  'Brand Awareness & Reach',
                  'Lead Generation',
                  'Sales & Conversions',
                  'Content Scaling',
                  'Workflow Automation'
                ].map(outcome => (
                  <button
                    key={outcome}
                    type="button"
                    onClick={() => toggleOutcome(outcome)}
                    className={`p-4 rounded-xl font-bold text-left border-2 transition-all flex justify-between items-center ${formData.outcomes.includes(outcome) ? 'border-white bg-white/10 text-white' : 'border-white/10 hover:border-white/20'}`}
                  >
                    {outcome}
                    {formData.outcomes.includes(outcome) && <Check className="w-5 h-5" />}
                  </button>
                ))}
              </div>
            </motion.div>
          )}

          {step === 5 && (
            <motion.div
              key="step5"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-bold tracking-tight mb-8">Final <span className="sans-pink italic">Step.</span></h3>
              <p className="text-gray-400 mb-8">Where should we send your custom creative brief and strategy?</p>
              <div className="space-y-4">
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Work Email</label>
                  <input 
                    type="email"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                    className="w-full bg-white/5 border-none p-4 rounded-xl focus:ring-2 focus:ring-white transition-all text-lg"
                    placeholder="name@company.com"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Phone Number</label>
                  <input 
                    type="tel"
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                    className="w-full bg-white/5 border-none p-4 rounded-xl focus:ring-2 focus:ring-white transition-all text-lg"
                    placeholder="+44 7700 900000"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Message</label>
                  <textarea 
                    value={formData.message}
                    onChange={e => setFormData({...formData, message: e.target.value})}
                    className="w-full bg-white/5 border-none p-4 rounded-xl focus:ring-2 focus:ring-white transition-all text-lg h-32"
                    placeholder="Tell us more about your project..."
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black uppercase tracking-widest text-gray-500 mb-2">Attach Brief (Optional)</label>
                  <input 
                    type="file"
                    onChange={e => setFormData({...formData, file: e.target.files?.[0] || null})}
                    className="w-full bg-white/5 border-none p-4 rounded-xl focus:ring-2 focus:ring-white transition-all text-sm"
                  />
                </div>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl text-xs text-gray-400 leading-relaxed">
                By submitting this brief, you agree to our terms. We'll use this information to build a tailored proposal for your business.
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="mt-auto pt-12 flex justify-between items-center">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="flex items-center gap-2 text-xs font-black uppercase tracking-widest hover:text-white/60 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back
            </button>
          ) : (
            <div />
          )}

          {step < totalSteps ? (
            <button
              type="button"
              onClick={handleNext}
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/90 transition-all flex items-center gap-3"
            >
              Continue
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white text-black px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-white/90 transition-all flex items-center gap-3 disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                <>
                  Submit Brief
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
