import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '@/hooks/useInView';
import { Users, Languages } from 'lucide-react';
import TennisIcon from '@/components/icons/TennisIcon';
import TripadvisorIcon from '@/components/icons/TripadvisorIcon';

const About = () => {
  const [ref, isInView] = useInView({
    threshold: 0.2
  });
  const [activeReview, setActiveReview] = useState(0);
  const features = [
    {
      icon: TennisIcon,
      title: 'Custom Coaching Plans',
      description:
        'Flexible daily and weekly programs tailored to beginners, competitive juniors, and adult players seeking high-performance training.',
    },
    {
      icon: Users,
      title: 'All Levels Welcome',
      description:
        'From first-time players to seasoned tournament competitors, our certified professionals adapt every session to your goals.',
    },
    {
      icon: Languages,
      title: 'Multilingual Instruction',
      description:
        'Lessons available in English and Dutch so you can train comfortably in your preferred language.',
    },
  ];
  const reviews = [
    {
      author: 'YanYan Z · Beijing, China',
      text:
        '“Harry tailored drills to our level and quickly corrected technique flaws. We left Aruba with stronger strokes and huge smiles.”',
    },
    {
      author: 'Alex · New York City',
      text:
        '“Some of the best tennis instruction out there. Harry and Mike improved every part of my game while keeping clinics fun for families.”',
    },
    {
      author: 'Randel H · USA',
      text:
        '“After time away from tennis, Harry refined my strokes and strategies. Lessons were insightful, motivating, and fun.”',
    },
    {
      author: 'Rob W · USA',
      text:
        '“Book a private lesson on vacation—Harry keeps both partners engaged with the perfect mix of strategy, technique, and exercise.”',
    },
  ];
  return <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-white to-emerald-50">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={isInView ? {
        opacity: 1,
        y: 0
      } : {}} transition={{
        duration: 0.6
      }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Omnibus Tennis Aruba</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer first-class tennis instruction from certified tennis coaches who understand how to elevate your game. Our tennis academy in Aruba adapts to every player’s
            training needs with programs that fit your schedule, intensity, and learning style. Whether you’re
            exploring the sport for the first time or preparing for your next tournament, our academy welcomes everyone who loves tennis.
          </p>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Our coaching roster brings together personable tennis professionals from the Netherlands, the United States, and the Caribbean—each one committed to
            helping you grow every aspect of your game in Aruba’s year-round perfect climate.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 30
        }} animate={isInView ? {
          opacity: 1,
          y: 0
        } : {}} transition={{
          duration: 0.6,
          delay: index * 0.2
        }} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6">
                <feature.icon className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>)}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white border border-emerald-100 rounded-3xl shadow-xl p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            <div className="flex items-center gap-4">
              <div className="w-24 h-24 bg-white rounded-full border border-emerald-100 shadow-md flex items-center justify-center overflow-hidden">
                <TripadvisorIcon className="w-20 h-20 object-contain" />
              </div>
              <div>
                <p className="text-sm uppercase tracking-widest text-emerald-600 font-semibold">Tripadvisor Travelers’ Choice</p>
                <h3 className="text-2xl font-bold text-gray-900">5.0 ⭐⭐⭐⭐⭐ · 23 Verified Reviews</h3>
                <a
                  href="https://www.tripadvisor.com/Attraction_Review-g488162-d3663474-Reviews-Omnibus_Tennis-Noord_Aruba.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-2 text-emerald-600 font-semibold hover:text-emerald-500"
                >
                  Read reviews on Tripadvisor
                </a>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={reviews[activeReview].author}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="bg-emerald-50/80 rounded-2xl p-6 text-gray-700 shadow-inner"
                  >
                    <p className="italic leading-relaxed text-base md:text-lg">{reviews[activeReview].text}</p>
                    <p className="mt-4 font-semibold text-gray-900">{reviews[activeReview].author}</p>
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="flex justify-center gap-3 mt-6">
                {reviews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveReview(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      activeReview === index ? 'bg-emerald-600 w-8' : 'bg-gray-300'
                    }`}
                    aria-label={`Show review ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>;
};
export default About;