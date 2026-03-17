import { useLanguage } from '../contexts/LanguageContext';
import { motion } from 'motion/react';
import { 
  Cpu, 
  TrendingUp,
  Mic,
  Mail,
  Search,
  ShoppingCart,
  Megaphone
} from 'lucide-react';

export const Automations = () => {
  const { t } = useLanguage();

  const services = [
    { title: t.automationPage.sections.voice.title, desc: t.automationPage.sections.voice.desc, icon: Mic },
    { title: t.automationPage.sections.marketing.title, desc: t.automationPage.sections.marketing.desc, icon: Megaphone },
    { title: t.automationPage.sections.seo.title, desc: t.automationPage.sections.seo.desc, icon: Search },
    { title: t.automationPage.sections.ecomm.title, desc: t.automationPage.sections.ecomm.desc, icon: ShoppingCart },
    { title: t.automationPage.sections.email.title, desc: t.automationPage.sections.email.desc, icon: Mail }
  ];

  return (
    <div className="min-h-screen bg-bg">
      {/* Hero */}
      <section className="relative w-full h-[80vh] flex items-center justify-center overflow-hidden bg-text">
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-6xl md:text-8xl font-display font-bold leading-[0.9] tracking-tighter mb-8 text-bg uppercase">
              {t.automationPage.heroTitle}<br />{t.automationPage.heroSubtitle}
            </h1>
            <p className="text-lg text-bg/70 max-w-2xl mx-auto mb-10 font-sans">
              {t.automationPage.heroDesc}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-bg">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="p-10 border border-border bg-neutral group hover:bg-text hover:text-bg transition-all duration-500"
              >
                <service.icon className="w-10 h-10 mb-8 text-red-600" />
                <h3 className="text-3xl font-display font-bold mb-6 tracking-tighter uppercase">{service.title}</h3>
                <p className="text-lg font-sans leading-relaxed opacity-70">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section - Human Checkpoint Style */}
      <section className="py-32 bg-neutral border-y border-border">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-display font-bold mb-6 tracking-tighter uppercase">
              Our Process<span className="text-red-600">.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Audit', icon: Search, desc: 'We scan your brand DNA and current workflows.' },
              { title: 'Build', icon: Cpu, desc: 'We architect custom AI agents and pipelines.' },
              { title: 'Scale', icon: TrendingUp, desc: 'Autonomous systems drive 24/7 growth.' }
            ].map((step, i) => (
              <div key={i} className="bg-bg border border-[#EEEEEE] p-10 rounded-md">
                <step.icon className="w-10 h-10 text-red-600 mb-8" />
                <h3 className="text-xl font-display font-bold mb-4 uppercase tracking-tighter">
                  {step.title}
                </h3>
                <p className="text-sm text-text/70 font-sans">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
