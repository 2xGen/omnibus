import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useInView } from '@/hooks/useInView';
import gearGuides from '@/data/gearGuides';
const PracticeCarousel = () => {
  const [ref, isInView] = useInView({
    threshold: 0.2
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const guides = gearGuides;
  const nextSlide = () => {
    setCurrentIndex(prev => (prev + 1) % guides.length);
  };
  const prevSlide = () => {
    setCurrentIndex(prev => (prev - 1 + guides.length) % guides.length);
  };
  return <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Tennis Gear Guides & Resources</h2>
          <p className="text-xl text-gray-600">
            Discover curated buying guides for the gear we trust most. Every recommended product supports Omnibus Tennis through affiliate partnerships.
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden rounded-3xl shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.div key={guides[currentIndex].slug} initial={{
              opacity: 0,
              x: 100
            }} animate={{
              opacity: 1,
              x: 0
            }} exit={{
              opacity: 0,
              x: -100
            }} transition={{
              duration: 0.5
            }} className="relative h-[480px] md:h-[600px]">
                <img
                  src={guides[currentIndex].image.src}
                  alt={guides[currentIndex].image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
                  <motion.h3 initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.2
                }} className="text-3xl md:text-4xl font-bold mb-4">
                    {guides[currentIndex].title}
                  </motion.h3>
                  <motion.p initial={{
                  opacity: 0,
                  y: 20
                }} animate={{
                  opacity: 1,
                  y: 0
                }} transition={{
                  delay: 0.3
                }} className="text-lg md:text-xl text-white/90 max-w-2xl">
                    {guides[currentIndex].shortDescription}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mt-6"
                  >
                    {(() => {
                      const currentGuide = guides[currentIndex];
                      const isInternal = currentGuide.affiliateLink.startsWith('/');
                      return (
                        <a
                          href={currentGuide.affiliateLink}
                          target={isInternal ? undefined : '_blank'}
                          rel={isInternal ? undefined : 'noopener noreferrer'}
                          className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
                        >
                          {currentGuide.cta}
                        </a>
                      );
                    })()}
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <Button onClick={prevSlide} variant="outline" size="icon" className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg z-10">
            <ChevronLeft className="w-6 h-6" />
          </Button>

          <Button onClick={nextSlide} variant="outline" size="icon" className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-lg z-10">
            <ChevronRight className="w-6 h-6" />
          </Button>

          <div className="mt-6 flex md:hidden justify-center gap-4">
            <Button onClick={prevSlide} variant="outline" size="icon" className="w-12 h-12 rounded-full bg-white shadow-lg">
              <ChevronLeft className="w-6 h-6 text-emerald-600" />
            </Button>
            <Button onClick={nextSlide} variant="outline" size="icon" className="w-12 h-12 rounded-full bg-white shadow-lg">
              <ChevronRight className="w-6 h-6 text-emerald-600" />
            </Button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {guides.map((guide, index) => (
              <button
                key={guide.slug}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-emerald-600 w-8' : 'bg-gray-300'}`}
                aria-label={`View ${guide.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>;
};
export default PracticeCarousel;