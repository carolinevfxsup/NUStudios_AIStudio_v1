import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { 
  Cpu, 
  Zap, 
  ArrowRight, 
  Database, 
  Layers, 
  BarChart3,
  TrendingUp,
  Workflow,
  CheckCircle2,
  Activity,
  Sparkles
} from 'lucide-react';

export const Automations = () => {
  const { t } = useLanguage();

  const pipelines = [
    { title: t.automations.pipeline1Title, desc: t.automations.pipeline1Desc, icon: Layers },
    { title: t.automations.pipeline2Title, desc: t.automations.pipeline2Desc, icon: Zap },
    { title: t.automations.pipeline3Title, desc: t.automations.pipeline3Desc, icon: Database },
    { title: t.automations.pipeline4Title, desc: t.automations.pipeline4Desc, icon: BarChart3 }
  ];

  const techStack = [
    { name: 'HubSpot', category: 'CRM' },
    { name: 'Salesforce', category: 'CRM' },
    { name: 'Meta API', category: 'Social' },
    { name: 'TikTok API', category: 'Social' },
    { name: 'Shopify', category: 'E-comm' },
    { name: 'Klaviyo', category: 'Email' }
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero */}
      <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-text">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8 text-bg uppercase">
              AI is the Engine.<br />Reclaim Time to Scale.
            </h1>
            <p className="text-lg text-bg/70 max-w-md mx-auto mb-10 font-sans">
              {t.automations.heroSub}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-bg text-text px-8 py-4 font-sans font-bold text-xs uppercase tracking-widest hover:opacity-80 transition-all flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4" />
                Scan Your Brand DNA
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Flywheel */}
      <section className="py-32 bg-bg border-b border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold mb-6 tracking-tighter">
              {t.automations.flywheelTitle}
            </h2>
            <p className="text-lg text-text/70 font-sans max-w-2xl mx-auto">
              {t.automations.flywheelSub}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              { title: t.automations.flywheelStep1, icon: Workflow, desc: 'Locked Brand DNA' },
              { title: t.automations.flywheelStep2, icon: Cpu, desc: 'High-Velocity Output' },
              { title: t.automations.flywheelStep3, icon: TrendingUp, desc: 'Autonomous Growth' }
            ].map((step, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-neutral border border-border p-10 text-center"
              >
                <step.icon className="w-8 h-8 text-text/50 mx-auto mb-8" />
                <h3 className="text-xl font-display font-bold mb-4 uppercase tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-sm text-text/70 font-sans">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipelines */}
      <section className="py-32 bg-neutral">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20">
            <span className="text-xs font-sans font-bold uppercase tracking-widest text-text/50 mb-6 block">02 / Custom Workflows</span>
            <h2 className="text-5xl font-display font-bold mb-10 tracking-tighter leading-[0.9]">
              {t.automations.pipelinesTitle}
            </h2>
            <p className="text-lg text-text/70 font-sans max-w-2xl">
              {t.automations.pipelinesSub}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {pipelines.map((pipe, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="p-10 border border-border bg-bg group hover:bg-neutral transition-colors"
              >
                <pipe.icon className="w-8 h-8 text-text/50 mb-8" />
                <h3 className="text-2xl font-display font-bold mb-6 tracking-tighter uppercase">{pipe.title}</h3>
                <p className="text-sm text-text/70 font-sans leading-relaxed mb-10">
                  {pipe.desc}
                </p>
                <button className="flex items-center gap-2 font-sans font-bold text-xs uppercase tracking-widest border-b border-text pb-1 hover:text-text/50 hover:border-text/50 transition-all">
                  View Architecture <ArrowRight className="w-3 h-3" />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Moat */}
      <section className="py-32 bg-text text-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-xs font-sans font-bold uppercase tracking-widest text-bg/50 mb-6 block">03 / The Moat</span>
              <h2 className="text-5xl font-display font-bold mb-10 tracking-tighter leading-[0.9]">
                {t.automations.moatTitle}
              </h2>
              <p className="text-lg text-bg/70 font-sans mb-12 leading-relaxed">
                {t.automations.moatSub}
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {techStack.map((tech, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 border border-bg/10 bg-bg/5">
                    <CheckCircle2 className="w-4 h-4 text-bg/50" />
                    <div>
                      <p className="text-xs font-sans font-bold uppercase tracking-tight">{tech.name}</p>
                      <p className="text-[10px] text-bg/40 uppercase tracking-widest">{tech.category}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative flex items-center justify-center">
              <Activity className="w-32 h-32 text-bg/20 animate-pulse" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
