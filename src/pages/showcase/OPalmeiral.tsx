import { Header } from '../../components/Header';
import { ProjectNavigation } from '../../components/ProjectNavigation';
import { ShowcaseHero } from '../../components/ShowcaseHero';
import { useLanguage } from '../../contexts/LanguageContext';
import { getAssetUrl } from '../../constants';
import { 
  Folder, ScanEye, Tags, Sparkles, ListOrdered, CalendarClock, 
  CheckSquare
} from 'lucide-react';

export const OPalmeiral = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-off-white">
      <Header />
      
      <main>
        <ShowcaseHero 
          title="O Palmeiral"
          subtitle={t.palmeiral.heroSubtitle}
          description={t.palmeiral.heroDescription}
          imageSrc="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/2Artboard%201.png"
          caseStudyNumber="03"
          sector="Restaurants"
          deliverables="Social Automation / Content"
          railText="ESTABLISHED IN LISBON / AUTOMATED"
          imagePosition="right"
        />

        {/* Section 1: The Brief */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1">
                <span className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-6 block">The Brief</span>
                <h2 className="text-3xl md:text-5xl font-sans font-bold italic mb-10 leading-tight">
                  "I have a Google Drive folder <br/>
                  full of photos. Can you make it post <br/>
                  <span className="text-primary">automatically to Instagram?</span>"
                </h2>
                
                <div className="space-y-8 text-lg text-narrative-shadow/80 leading-relaxed">
                  <div>
                    <p className="font-bold mb-2 text-black">O Palmeiral already had what most restaurants don't:</p>
                    <ul className="list-disc pl-5 space-y-1 text-narrative-shadow/60">
                      <li>A large library of high-quality photos</li>
                      <li>Regularly updated visual content</li>
                    </ul>
                  </div>
                  
                  <div>
                    <p className="font-bold mb-2 text-black">What they didn't have:</p>
                    <ul className="list-disc pl-5 space-y-1 text-narrative-shadow/60">
                      <li>Time to post daily</li>
                      <li>A system for consistency</li>
                      <li>A way to stay visible without manual effort</li>
                    </ul>
                  </div>
                  
                  <p className="italic font-serif text-xl text-black">
                    Instagram simply wasn't happening — even though the content existed.
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative">
                <div className="border border-black/5 shadow-2xl overflow-hidden bg-white bevel">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-content.png" 
                    alt="Google Drive Folder" 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-mono border border-black/10 shadow-sm">
                    SOURCE: GOOGLE DRIVE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: Automation — without giving up control */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="relative">
                <div className="max-w-md mx-auto border border-black/5 shadow-2xl overflow-hidden bg-white bevel">
                  <img 
                    src="https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/palmeiral-growth.png" 
                    alt="Instagram Post" 
                    className="w-full h-auto block" 
                    referrerPolicy="no-referrer"
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-black/5"></div>
              </div>
              
              <div>
                <h2 className="text-4xl md:text-6xl font-sans font-bold italic mb-10">
                  Automation — <br/>
                  <span className="text-primary">without giving up control</span>
                </h2>
                
                <div className="space-y-8 text-lg text-narrative-shadow/80 leading-relaxed">
                  <p>
                    Instead of blindly auto-posting everything, we designed a system that balances automation with approval.
                  </p>
                  
                  <div className="bg-white p-8 border-l-4 border-primary shadow-sm">
                    <p className="font-bold mb-4 text-black uppercase tracking-widest text-xs">The Result:</p>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3">
                        <CheckSquare className="w-5 h-5 text-primary" />
                        <span>The restaurant stays in control</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckSquare className="w-5 h-5 text-primary" />
                        <span>Posting still happens automatically</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <CheckSquare className="w-5 h-5 text-primary" />
                        <span>Nothing goes live without sign-off</span>
                      </li>
                    </ul>
                  </div>
                  
                  <p className="font-serif italic text-xl">
                    This turned a simple uploader into a content pipeline.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: How the system works */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-sans font-bold italic">
                How the <span className="text-primary">system works</span>
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { 
                  icon: Folder, 
                  title: "1. Content Source", 
                  desc: "A single Google Drive folder. Images can be added at any time." 
                },
                { 
                  icon: ScanEye, 
                  title: "2. Automatic Scanning", 
                  desc: "The system continuously scans the folder. New images are detected automatically." 
                },
                { 
                  icon: Tags, 
                  title: "3. Categorisation", 
                  desc: "Images are organised into four categories: Food, Drink, People, Decor." 
                },
                { 
                  icon: Sparkles, 
                  title: "4. Automated Enhancements", 
                  desc: "Hashtags generated automatically. Location tagging. Alternative text for accessibility." 
                },
                { 
                  icon: ListOrdered, 
                  title: "5. Queue Ready", 
                  desc: "Approved posts enter the queue. Visual preview before publishing." 
                },
                { 
                  icon: CalendarClock, 
                  title: "6. Scheduled Posting", 
                  desc: "Automatic posting at scheduled times. Consistent daily presence." 
                }
              ].map((step, i) => (
                <div key={i} className="p-8 bg-[#F9F9F9] rounded-md border border-black/5 hover:border-primary/50 transition-colors group">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm border border-black/5 group-hover:scale-110 transition-transform">
                    <step.icon className="w-6 h-6 text-black" />
                  </div>
                  <h3 className="font-bold text-lg mb-3">{step.title}</h3>
                  <p className="text-sm text-narrative-shadow/60 leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 4: Features (3 Columns) */}
        <section className="py-24 md:py-32 bg-[#F5F5F0] border-y border-black/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Column 1 */}
              <div className="bg-white p-6 shadow-sm border border-black/5">
                <div className="mb-6 h-12"></div>
                <h3 className="font-sans font-bold italic text-2xl mb-4">Posting logic that <span className="font-bold not-italic">feels human</span></h3>
                <p className="text-xs text-narrative-shadow/60 mb-4">Once images are detected, the system:</p>
                <ul className="space-y-2 text-xs font-medium">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-primary shrink-0" />
                    <span>Assigns each image to its category</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-primary shrink-0" />
                    <span>Rotates categories automatically</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-primary shrink-0" />
                    <span>Prevents repetitive content (no food-only weeks)</span>
                  </li>
                </ul>
                <p className="text-[10px] text-narrative-shadow/40 mt-4 italic">This ensures a balanced, visually interesting feed over time.</p>
              </div>

              {/* Column 2 */}
              <div className="bg-white p-6 shadow-sm border border-black/5">
                <div className="mb-6 h-12"></div>
                <h3 className="font-sans font-bold italic text-2xl mb-4">Always informed. <span className="font-bold not-italic">Never involved.</span></h3>
                <p className="text-xs text-narrative-shadow/60 mb-4">The system sends email notifications for:</p>
                <ul className="space-y-2 text-xs font-medium">
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-primary shrink-0" />
                    <span>New images detected</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-primary shrink-0" />
                    <span>Posts ready for approval</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckSquare className="w-4 h-4 text-primary shrink-0" />
                    <span>Content successfully published</span>
                  </li>
                </ul>
                <p className="text-[10px] text-narrative-shadow/40 mt-4 italic">This keeps the owner informed without requiring constant login.</p>
              </div>

              {/* Column 3 */}
              <div className="bg-white p-6 shadow-sm border border-black/5">
                <div className="mb-6 h-12"></div>
                <h3 className="font-sans font-bold italic text-2xl mb-4">Automation with a <span className="font-bold not-italic">human checkpoint</span></h3>
                <p className="text-xs text-narrative-shadow/60 mb-4">Before anything goes live:</p>
                <ul className="space-y-2 text-xs font-medium">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>New images are added to a post queue</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Captions, hashtags, location, and alt text are generated</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Dan receives an email notification</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></div>
                    <span>Posts can be approved or held</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: What changed for O Palmeiral */}
        <section className="py-24 md:py-32 bg-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl md:text-6xl font-sans font-bold mb-12">
              What changed for <span className="italic">O Palmeiral</span>
            </h2>
            
            <div className="space-y-4 text-lg md:text-xl text-narrative-shadow/80">
              <p>Daily Instagram posting without effort</p>
              <p>Consistent visual storytelling</p>
              <p>Improved organic visibility over time</p>
              <p>Zero day-to-day workload</p>
              <p className="font-bold text-black">Marketing now runs quietly in the background.</p>
            </div>
          </div>
        </section>

      <ProjectNavigation 
          prevProject={{ 
            title: t.saltLily.heroTitle, 
            slug: '/showcase/salt-lily', 
            thumbnail: getAssetUrl('Salt_lily_FEMME_product.png') 
          }}
          nextProject={{ 
            title: 'Franks Australia', 
            slug: '/showcase/franks-australia', 
            thumbnail: 'https://muncxkojigqqaakscbjs.supabase.co/storage/v1/object/public/Src/assets/franks/FRANKS_SHOW.png' 
          }}
        />
      </main>
    </div>
  );
};



