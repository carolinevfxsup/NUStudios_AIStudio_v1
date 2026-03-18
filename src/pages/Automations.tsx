import { Link } from 'react-router-dom';
import { ShowcaseHero } from '../components/ShowcaseHero';
import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'framer-motion';
import { 
  ArrowRight,
  CheckCircle2,
  Bot,
  Settings,
  Send,
  Clapperboard
} from 'lucide-react';

export const Automations = () => {
  const { t, getLanguagePath } = useLanguage();

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen bg-white">
      <main>
        <ShowcaseHero 
          title="AUTONOMOUS SYSTEMS"
          subtitle="VOLUME & QUALITY"
          description="Autonomous systems that keep your brand voice, protect your margins and give you back your time."
          imageSrc="https://images.unsplash.com/photo-1639322537228-f710d846310a?auto=format&fit=crop&q=80&w=1920"
          caseStudyNumber="04"
          sector="B2B / SaaS"
          deliverables="Autonomous Systems / Brand Protection"
          railText="VOLUME & QUALITY / 2024"
          imagePosition="center"
        />

        {/* Section 1: WHAT WE AUTOMATE (Service Breakdown) */}
        <section className="py-24 md:py-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-20">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">01. CAPABILITIES</span>
              <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                WHAT WE AUTOMATE<span className="text-primary">.</span>
              </h2>
              <p className="text-xl text-black/60 max-w-2xl font-sans">
                Surgical precision across every touchpoint. We build the connective tissue that powers your brand lifecycle.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "AI Chatbots",
                  icon: Bot,
                  items: [
                    "Customer support (24/7 replies)",
                    "Sales chatbots (lead conversion)",
                    "Instagram & Messenger automation",
                    "FAQ + product recommendation bots"
                  ]
                },
                {
                  title: "Workflow Automation",
                  icon: Settings,
                  items: [
                    "Repetitive tasks eliminated",
                    "Internal operations automated",
                    "CRM + API integrations",
                    "Order / client workflows"
                  ]
                },
                {
                  title: "Marketing Automation",
                  icon: Send,
                  items: [
                    "Email flows (welcome, abandoned cart)",
                    "Lead nurturing systems",
                    "Campaign automation",
                    "Retention systems"
                  ]
                },
                {
                  title: "Content & Social Automation",
                  icon: Clapperboard,
                  items: [
                    "Auto-posting systems (like O Palmeiral)",
                    "Content pipelines (Drive → IG/TikTok)",
                    "AI-assisted content generation",
                    "Scheduling & repurposing"
                  ]
                }
              ].map((pillar, i) => (
                <motion.div 
                  key={i}
                  {...fadeInUp}
                  className="p-10 border border-border bg-neutral rounded-md group hover:bg-black hover:text-white transition-all duration-500"
                >
                  <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-8 shadow-sm border border-border group-hover:bg-primary group-hover:border-primary transition-colors">
                    <pillar.icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-3xl font-display font-bold mb-8 uppercase tracking-tighter text-black group-hover:text-white transition-colors">{pillar.title}</h3>
                  <ul className="space-y-4">
                    {pillar.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-4 text-lg font-sans opacity-70 group-hover:opacity-100">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 2: THE ARCHITECTURE (How It Works) */}
        <section className="py-24 md:py-40 bg-[#F9F9F7] border-y border-border overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-24">
              <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">02. PROCESS</span>
              <h2 className="text-4xl md:text-6xl font-display mb-6 text-black uppercase tracking-tighter">
                THE ARCHITECTURE<span className="text-primary">.</span>
              </h2>
              <p className="text-black/40 text-lg max-w-2xl mx-auto font-sans">
                A horizontal flow from audit to autonomous scale, connected by a circuit-board-style trace.
              </p>
            </div>

            <div className="relative">
              {/* Circuit Trace Line - Positioned between circle and title */}
              <div className="absolute top-[96px] left-0 w-full h-[1px] bg-primary/20 hidden md:block" />
              
              <div className="grid md:grid-cols-4 gap-12 relative z-10">
                {[
                  { step: "01", title: "Audit", desc: "We map your existing workflows and identify efficiency leaks." },
                  { step: "02", title: "Strategy", desc: "Architecting the custom AI layer tailored to your brand soul." },
                  { step: "03", title: "Build", desc: "Developing and stress-testing your autonomous pipelines." },
                  { step: "04", title: "Scale", desc: "Hands-off growth with 24/7 HITL-certified monitoring." }
                ].map((item, i) => (
                  <div key={i} className="text-center group">
                    <div className="w-20 h-20 bg-white border border-border rounded-full flex items-center justify-center mx-auto mb-8 group-hover:border-primary transition-all duration-500 relative shadow-sm">
                      <span className="text-xl font-display font-bold text-primary">{item.step}</span>
                      {/* Pulsing Marker - Only on rollover */}
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full animate-ping opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <h3 className="text-2xl font-display font-bold mb-4 uppercase tracking-tighter">{item.title}</h3>
                    <p className="text-base text-black/50 font-sans leading-relaxed px-4">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: REAL IMPACT (Case Studies) */}
        <section className="pt-24 md:pt-40 pb-0 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
              <div>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">03. CASE STUDIES</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  REAL IMPACT<span className="text-primary">.</span>
                </h2>
                <p className="text-black/40 text-lg uppercase tracking-widest font-sans mt-4">Proven results for elite brands</p>
              </div>
              <Link 
                to={getLanguagePath('/showcase')}
                className="text-xs font-black uppercase tracking-widest text-black/60 hover:text-primary transition-colors flex items-center gap-2 group border-b border-black/10 pb-2"
              >
                VIEW ALL WORK
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* O Palmeiral Card */}
              <motion.div
                {...fadeInUp}
                className="group bg-neutral border border-border rounded-md overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/2Artboard%201.png" 
                    alt="O Palmeiral" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-display font-bold mb-6 uppercase tracking-tighter">O Palmeiral</h3>
                  <p className="text-lg text-black/60 font-sans mb-10 leading-relaxed">
                    How we turned a static Google Drive into a 24/7 automated marketing engine.
                  </p>
                  <div className="grid grid-cols-2 gap-8 border-t border-border pt-10">
                    <div>
                      <div className="text-4xl font-display font-bold text-primary tracking-tighter">0h</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-black/40 mt-2">Manual Posting Time</div>
                    </div>
                    <div>
                      <div className="text-4xl font-display font-bold text-black tracking-tighter">Daily</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-black/40 mt-2">Content Cadence</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Salt Lily Card */}
              <motion.div
                {...fadeInUp}
                className="group bg-neutral border border-border rounded-md overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/salt-lily/necklace_and_hoops.png" 
                    alt="Salt Lily" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-display font-bold mb-6 uppercase tracking-tighter">Salt Lily</h3>
                  <p className="text-lg text-black/60 font-sans mb-10 leading-relaxed">
                    Automating high-intent SEO blogs and Shopify product syncs for revenue growth.
                  </p>
                  <div className="grid grid-cols-2 gap-8 border-t border-border pt-10">
                    <div>
                      <div className="text-4xl font-display font-bold text-primary tracking-tighter">+200%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-black/40 mt-2">Organic Traffic</div>
                    </div>
                    <div>
                      <div className="text-4xl font-display font-bold text-black tracking-tighter">100%</div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-black/40 mt-2">Autonomous Sync</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 4: ROI / Margin Protector */}
        <section className="pt-12 md:pt-[150px] pb-24 md:pb-40 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">04. {t.automations.roiTitle}</span>
                <h2 className="text-4xl md:text-7xl font-display mb-12 leading-[0.9] tracking-tighter uppercase text-black">
                  {t.automations.roiTitle}<span className="text-primary">.</span>
                </h2>
                <p className="text-xl text-black/60 leading-relaxed mb-12">
                  {t.automations.roiSub}
                </p>
                <div className="grid grid-cols-2 gap-8 border-t border-black/5 pt-12">
                  <div>
                    <div className="text-5xl font-display font-bold text-primary mb-2 tracking-tighter">90%</div>
                    <div className="text-xs font-black uppercase tracking-widest text-black/40">{t.automations.roiStat1}</div>
                  </div>
                  <div>
                    <div className="text-5xl font-display font-bold text-black mb-2 tracking-tighter">4.5X</div>
                    <div className="text-xs font-black uppercase tracking-widest text-black/40">{t.automations.roiStat2}</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="relative border border-black/5 shadow-2xl overflow-hidden rounded-md bg-neutral p-12">
                  <div className="space-y-6">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="h-16 bg-white rounded border border-border flex items-center px-6 justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <CheckCircle2 className="w-4 h-4 text-primary" />
                          </div>
                          <div className="w-32 h-2 bg-border rounded-full" />
                        </div>
                        <div className="w-12 h-4 bg-primary/20 rounded" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section 5: BENEFITS (Emotional Triggers) */}
        <section className="py-24 md:py-40 bg-[#0A0A0A] text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
              <motion.div {...fadeInUp}>
                <span className="text-xs font-black uppercase tracking-[0.4em] text-primary mb-8 block">05. THE OUTCOME</span>
                <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 leading-[0.85] tracking-tighter uppercase text-white">
                  THIS SOLVES <br />MY LIFE<span className="text-primary">.</span>
                </h2>
                <div className="space-y-8">
                  {[
                    "Stop answering the same messages every day",
                    "Never miss a lead again",
                    "Run your business 24/7 without hiring",
                    "Focus on creative work, not admin",
                    "Scale without increasing workload"
                  ].map((benefit, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-center gap-6 group"
                    >
                      <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-500">
                        <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                      </div>
                      <span className="text-xl md:text-2xl font-display font-medium tracking-tight text-white/80 group-hover:text-white transition-colors">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="relative hidden lg:block"
              >
                <div className="absolute inset-0 bg-primary/20 blur-[120px] rounded-full animate-pulse" />
                <div className="relative aspect-square border border-white/10 rounded-full flex items-center justify-center">
                  <div className="w-3/4 h-3/4 border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
                  <div className="absolute w-1/2 h-1/2 border border-primary/20 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                  <Bot className="w-32 h-32 text-primary" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-24 md:py-40 bg-black text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <motion.div {...fadeInUp}>
              <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 tracking-tighter uppercase text-white">
                READY TO <br />SCALE<span className="text-primary">?</span>
              </h2>
              <p className="text-xl text-white/60 mb-16 max-w-2xl mx-auto font-sans">
                Stop trading your creative margins for repetitive execution. Build your autonomous moat today.
              </p>
              <div className="flex flex-col md:flex-row gap-6 justify-center">
                <Link 
                  to={getLanguagePath('/contact')}
                  className="px-12 py-5 bg-red-600 text-white font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform rounded-none"
                >
                  Book a Strategy Call
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

