import { founders } from '../data/founders';
import { FadeIn } from '../components/FadeIn';

export const About = () => {
  return (
    <div className="pt-32 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* About Section */}
        <div className="bg-black text-white border border-border rounded-none p-8 md:p-12 shadow-sm">
          <FadeIn delay={0.1}>
            <h1 className="text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter mb-8 text-white">
              About
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-2xl font-display font-medium leading-tight mb-8">
              Agency Thinking. AI Execution.
              <br />
              <span className="text-white/60 text-xl">The perfect blend of human taste and modern technology.</span>
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="font-sans text-lg space-y-6 text-white/60">
              <p>
                A lot of people are using AI right now, and to be honest, a lot of it looks cheap, generic, and fake. That’s because AI is just a paintbrush. Without a skilled artist holding the brush, it’s just noise.
              </p>
              <p>
                <strong className="text-white">We are the artists.</strong>
                <br />
                We don't do "set it and forget it" automation. We offer a hand-held, fully guided partnership. We take the time to deeply understand your brand’s soul, your colors, your vibe, and your goals. Then, we use our mastery of AI to build stunning campaigns, beautiful product photography, and daily social content faster and more affordably than a traditional agency ever could.
              </p>
              <p>
                <strong className="text-white">Context over Guesswork:</strong> We train our tools on your specific brand. Nothing we make will ever look like your competitors.
              </p>
              <p>
                <strong className="text-white">Taste is Never Automated:</strong> Every single image, video, and post is art-directed and approved by our founders. We never let the machines run unsupervised.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Founders Section */}
        <div className="flex flex-col gap-6">
          <FadeIn delay={0.4}>
            <div className="bg-white border border-border rounded-none p-8 md:p-12 shadow-sm">
              <h2 className="text-6xl md:text-8xl font-display font-bold tracking-tighter uppercase">FOUNDERS<span className="text-red-600">.</span></h2>
              <p className="text-2xl font-display font-medium leading-tight mt-8">
                The Artist & The Technologist
              </p>
              <p className="text-lg font-sans leading-relaxed mt-4 text-text/70">
                We grew up in the world of physical products and tangible art. Now, we use the world's most advanced tools to bring that reality to the digital space.
              </p>
            </div>
          </FadeIn>
          
          <div className="flex flex-col gap-6">
            {founders.map((founder, i) => (
              <FadeIn key={i} delay={0.5 + (i * 0.1)}>
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="bg-white border border-border rounded-none p-6 md:p-8 shadow-sm aspect-square overflow-hidden border border-border flex-shrink-0 md:w-1/3">
                    <img 
                      src={founder.image || `https://picsum.photos/seed/founder${i}/1200/1200`}
                      alt={founder.name}
                      className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="bg-white border border-border rounded-none p-6 md:p-8 shadow-sm flex flex-col justify-center md:w-2/3">
                    <h3 className="text-xl md:text-2xl font-display font-bold mb-1 tracking-tighter uppercase">{founder.name}</h3>
                    <p className="text-sm font-sans font-bold text-gray-500 mb-4 uppercase tracking-widest">{founder.role}</p>
                    <a href={`mailto:${founder.email}`} className="text-sm font-sans font-bold text-red-600 mb-4 hover:underline">{founder.email}</a>
                    <p className="text-sm text-text/70 font-sans leading-relaxed">{founder.bio}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
