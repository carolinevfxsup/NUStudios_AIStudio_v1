import { useState } from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const [essentialTab, setEssentialTab] = useState<'creative' | 'automation' | 'stack'>('stack');

  return (
    <div className="bg-bg min-h-screen pb-24 pt-32">
      <div className="max-w-7xl mx-auto px-6 mb-20 text-center">
        <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-6">
          Pricing & Engagements
        </h1>
        <p className="text-lg text-text/70 font-sans max-w-2xl mx-auto">
          Transparent, scalable solutions designed to prove value immediately and scale infinitely.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch">
        {/* Member Lab */}
        <div className="flex flex-col p-10 border border-border bg-bg h-full">
          <div className="min-h-[100px]">
            <h3 className="text-2xl font-display font-bold mb-2 tracking-tighter">MEMBER LAB</h3>
            <p className="text-sm font-sans font-bold text-text/60 uppercase tracking-widest mb-6">Studio Tools</p>
          </div>
          
          <div className="min-h-[60px] mb-8"></div> {/* Spacer for toggle alignment */}

          <div className="min-h-[80px] mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-display font-bold tracking-tighter">$99</span>
              <span className="text-xs font-sans font-bold text-text/60 uppercase tracking-widest">/mo</span>
            </div>
          </div>

          <div className="min-h-[100px] mb-8">
            <p className="text-sm font-sans text-text/80 leading-relaxed">"Access the same elite design tools our studio uses. Perfect for teams who want to create in-house."</p>
          </div>

          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Full studio tool access</li>
            <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Pre-set brand style guides</li>
            <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Standard creation credits</li>
            <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Direct help from our team</li>
          </ul>
          <button className="mt-auto w-full py-4 bg-text text-bg font-bold uppercase tracking-widest text-sm rounded-full hover:bg-text/90 transition-all">Access the Lab</button>
        </div>

        {/* Essential Stack (Toggleable) */}
        <div className="flex flex-col p-10 border border-border bg-bg h-full">
          <div className="min-h-[100px]">
            <h3 className="text-2xl font-display font-bold mb-2 tracking-tighter">
              {essentialTab === 'creative' ? 'CREATIVE LOCK' : essentialTab === 'automation' ? 'AUTOMATION LOCK' : 'THE ESSENTIAL STACK'}
            </h3>
            <p className="text-sm font-sans font-bold text-text/60 uppercase tracking-widest mb-6">
              {essentialTab === 'creative' ? 'Visual Gateway' : essentialTab === 'automation' ? 'System Gateway' : 'Foundational Gateway'}
            </p>
          </div>
          
          <div className="min-h-[60px] mb-8">
            <div className="flex p-1 bg-neutral rounded-full">
              <button onClick={() => setEssentialTab('creative')} className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${essentialTab === 'creative' ? 'bg-white shadow-sm' : 'text-text/40'}`}>Creative</button>
              <button onClick={() => setEssentialTab('automation')} className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${essentialTab === 'automation' ? 'bg-white shadow-sm' : 'text-text/40'}`}>Automation</button>
              <button onClick={() => setEssentialTab('stack')} className={`flex-1 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full transition-all ${essentialTab === 'stack' ? 'bg-white shadow-sm' : 'text-text/40'}`}>Stack</button>
            </div>
          </div>

          <div className="min-h-[80px] mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-display font-bold tracking-tighter">
                {essentialTab === 'creative' ? '$600' : essentialTab === 'automation' ? '$600' : '$1,000'}
              </span>
              <span className="text-xs font-sans font-bold text-text/60 uppercase tracking-widest">
                {essentialTab === 'creative' ? '(One-Off)' : essentialTab === 'automation' ? '+ $30/mo' : '(One-Off)'}
              </span>
            </div>
          </div>
          
          <div className="min-h-[100px] mb-8">
            <p className="text-sm font-sans text-text/80 leading-relaxed">
              {essentialTab === 'creative' && "Never worry about 'Identity Drift.' We map your signature aesthetic so every post looks world-"}
              {essentialTab === 'automation' && "Stop the manual posting grind. We build one autonomous system that keeps your brand active"}
              {essentialTab === 'stack' && "The total digital transition. We anchor your look and automate your reach in one single project."}
            </p>
          </div>
          
          <ul className="space-y-3 mb-8 flex-grow">
            {essentialTab === 'creative' && (
              <>
                <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> 5 high-prestige hero photos</li>
                <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Your signature style guide</li>
                <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Perfect lighting & textures</li>
                <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Expert designer oversight</li>
              </>
            )}
            {essentialTab === 'automation' && (
              <>
                <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Choice of 1 social platform</li>
                <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> 7 days of 'always-on' content</li>
                <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Zero technical setup for you</li>
                <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Continuous system support</li>
              </>
            )}
            {essentialTab === 'stack' && (
              <>
                <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> A permanent style lock</li>
                <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Choice of 1 social automation</li>
                <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Save 20% on setup fees</li>
                <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> No long-term commitment</li>
              </>
            )}
          </ul>
          
          <button className="mt-auto w-full py-4 bg-text text-bg font-bold uppercase tracking-widest text-sm rounded-full hover:bg-text/90 transition-all">
            {essentialTab === 'creative' || essentialTab === 'automation' ? 'Secure My Lock' : 'Secure My Stack'}
          </button>
        </div>

        {/* Growth Stack */}
        <div className="flex flex-col p-10 border border-border bg-bg h-full">
          <div className="min-h-[100px]">
            <h3 className="text-2xl font-display font-bold mb-2 tracking-tighter">GROWTH STACK</h3>
            <p className="text-sm font-sans font-bold text-text/60 uppercase tracking-widest mb-6">The Content Injection</p>
          </div>
          
          <div className="min-h-[60px] mb-8"></div> {/* Spacer for toggle alignment */}

          <div className="min-h-[80px] mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-display font-bold tracking-tighter">$1,500</span>
              <span className="text-xs font-sans font-bold text-text/60 uppercase tracking-widest">(One-Off)</span>
            </div>
          </div>

          <div className="min-h-[100px] mb-8">
            <p className="text-sm font-sans text-text/80 leading-relaxed">"A total visual reset. We flood your channels with a massive batch of campaign-ready photos and videos."</p>
          </div>

          <ul className="space-y-3 mb-8 flex-grow">
            <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Style lock & 1 automation</li>
            <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> 10 professional studio photos</li>
            <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> 10 short brand story videos</li>
            <li className="flex items-start gap-3 text-sm font-sans text-text/80"><Check className="w-4 h-4 shrink-0 mt-1" /> Ready for your next launch</li>
          </ul>
          <button className="mt-auto w-full py-4 bg-red-600 text-white font-bold uppercase tracking-widest text-sm rounded-full hover:bg-red-700 transition-all">Get the Growth Stack</button>
        </div>

        {/* Momentum */}
        <div className="flex flex-col p-10 border border-border bg-text text-bg h-full">
          <div className="min-h-[100px]">
            <h3 className="text-2xl font-display font-bold mb-2 tracking-tighter text-red-600">MOMENTUM</h3>
            <p className="text-sm font-sans font-bold text-bg/60 uppercase tracking-widest mb-6">Scale Retainer</p>
          </div>
          
          <div className="min-h-[60px] mb-8"></div> {/* Spacer for toggle alignment */}

          <div className="min-h-[80px] mb-8">
            <div className="flex items-baseline gap-2">
              <span className="text-4xl font-display font-bold tracking-tighter">$2,000</span>
              <span className="text-xs font-sans font-bold text-bg/60 uppercase tracking-widest">/mo</span>
            </div>
          </div>

          <div className="min-h-[100px] mb-8">
            <p className="text-sm font-sans text-bg/80 leading-relaxed">"Continuous high-equity flow. The output of a global creative team for the cost of one junior employee."</p>
          </div>

          <ul className="space-y-3 mb-8 flex-grow text-bg/80">
            <li className="flex items-start gap-3 text-sm font-sans"><Check className="w-4 h-4 shrink-0 mt-1" /> 2 high-end posts every day</li>
            <li className="flex items-start gap-3 text-sm font-sans"><Check className="w-4 h-4 shrink-0 mt-1" /> 4 professional brand blogs</li>
            <li className="flex items-start gap-3 text-sm font-sans"><Check className="w-4 h-4 shrink-0 mt-1" /> We manage the social buzz</li>
            <li className="flex items-start gap-3 text-sm font-sans"><Check className="w-4 h-4 shrink-0 mt-1" /> Full lab toolkit included</li>
          </ul>
          <button className="mt-auto w-full py-4 bg-bg text-text font-bold uppercase tracking-widest text-sm rounded-full hover:bg-bg/90 transition-all">Activate My Engine</button>
        </div>
      </div>
    </div>
  );
};
