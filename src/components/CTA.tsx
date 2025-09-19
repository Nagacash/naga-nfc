import React, { useState, useEffect, useRef } from 'react';

const CTA: React.FC = () => {
  const [animatedTitle, setAnimatedTitle] = useState('');
  const [animatedDesc, setAnimatedDesc] = useState('');
  const [isTitleDone, setIsTitleDone] = useState(false);
  const [isDescDone, setIsDescDone] = useState(false);
  
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);

  const fullTitle = "Ready to Elevate Your Brand?";
  const fullDesc = "Let's create the perfect NFC solution for your needs. Get in touch with us today to start your project.";

  useEffect(() => {
    const currentRef = sectionRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          let titleIndex = 0;
          const titleInterval = setInterval(() => {
            setAnimatedTitle(fullTitle.substring(0, titleIndex));
            titleIndex++;
            if (titleIndex > fullTitle.length) {
              clearInterval(titleInterval);
              setIsTitleDone(true);

              let descIndex = 0;
              const descInterval = setInterval(() => {
                setAnimatedDesc(fullDesc.substring(0, descIndex));
                descIndex++;
                if (descIndex > fullDesc.length) {
                  clearInterval(descInterval);
                  setIsDescDone(true);
                }
              }, 25);
            }
          }, 60);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(currentRef);

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const BlinkingCursor = () => <span className="animate-pulse text-3xl">|</span>;

  return (
    <section ref={sectionRef} className="py-20 bg-brand-secondary px-4 sm:px-6"> {/* Added px-4 for mobile, sm:px-6 for larger */}
      <div className="container mx-auto text-center"> {/* Removed px-6 here as it's now on section */}
        <h2 className="text-3xl md:text-4xl font-display text-brand-primary-base mb-4 min-h-[84px] md:min-h-[56px] flex justify-center items-center">
          <span>{animatedTitle}</span>
          {!isTitleDone && hasAnimated.current && <BlinkingCursor />}
        </h2>
        <p className="text-brand-primary-base/80 max-w-2xl mx-auto mb-8 min-h-[72px]">
          <span>{animatedDesc}</span>
          {isTitleDone && !isDescDone && <BlinkingCursor />}
        </p>
        <div className="min-h-[52px]">
            {isDescDone && (
            <a 
              href="#contact" 
              className="bg-brand-accent text-brand-primary-base font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-secondary transition-all duration-300 transform hover:scale-105 inline-block animate-fadeInUp"
              style={{ animationDuration: '0.5s' }}
            >
              Contact Us Now
            </a>
            )}
        </div>
      </div>
    </section>
  );
};

export default CTA;
