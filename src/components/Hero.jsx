import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
const Hero = () => {
  const handleBookClass = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          className="w-full h-full object-cover"
          alt="Omnibus Tennis coach giving a tennis lesson on a court in Aruba"
          src="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/tennis%20hero.png"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto pt-20 md:pt-24">
        <motion.h1 initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        ease: 'easeOut'
      }} className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">Omnibus Tennis Aruba
      </motion.h1>
        
        <motion.p initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.2,
        ease: 'easeOut'
      }} className="text-xl md:text-2xl text-white/90 mb-8 font-light">
        Discover premier tennis lessons in Aruba from Omnibus Tennis. Our certified tennis coaches deliver tailored training on courts across the island so you can play tennis in Aruba at your best.
      </motion.p>
        
        <p className="mt-6 text-lg md:text-xl text-white/80 max-w-2xl mx-auto">
          PTR Professional Harry van Reek offers tennis coaching in Aruba in English and Dutch, ensuring every session feels personal and effective.
        </p>
        
        <motion.div initial={{
        opacity: 0,
        y: 30
      }} animate={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.8,
        delay: 0.4,
        ease: 'easeOut'
      }} className="mt-10">
          <Button onClick={handleBookClass} size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-6 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">Book Your Lesson</Button>
        </motion.div>
      </div>
    </section>;
};
export default Hero;