import { useState, useEffect } from 'react';
import { ServiceAccordionItem } from '../components/ServiceAccordionItem';
import { services } from '../data/services';
import { useSearchParams } from 'react-router-dom';
import { FadeIn } from '../components/FadeIn';

export const Services = () => {
  const [searchParams] = useSearchParams();
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const serviceIndex = searchParams.get('service');
    if (serviceIndex !== null) {
      setOpenIndex(parseInt(serviceIndex, 10));
    }
  }, [searchParams]);

  return (
    <div className="pt-32 pb-32 px-6 max-w-7xl mx-auto">
      <FadeIn delay={0.1}>
        <h1 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-24">
          Services<span className="text-red-600">.</span>
        </h1>
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <div className="flex flex-col border-t border-black">
          {services.map((service, index) => (
            <ServiceAccordionItem 
              key={index} 
              service={service} 
              isOpen={openIndex === index} 
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </FadeIn>
    </div>
  );
};
