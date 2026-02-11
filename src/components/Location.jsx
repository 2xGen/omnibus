import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const Location = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      content: 'T: (+297) 560-0090',
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'harry@omnibustennis.com',
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      content: '+31 6 82716962',
      link: 'https://wa.me/31682716962?text=Hello%20Harry%2C%20i%20would%20like%20to%20schedule%20tennis%20lessons%20with%20you',
    },
    {
      icon: MapPin,
      title: 'Availability',
      content: "Harry is available during Aruba's high season from December through March.",
    },
  ];

  const rates = [
    {
      title: 'Private lesson (60 minutes)',
      detail: '$65',
      note: 'Additional $15 court surcharge may apply depending on the hotel where the lesson is booked.',
    },
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-emerald-50 to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Plan Your Lesson in Aruba</h2>
          <p className="text-xl text-gray-600">Reach out to customize your tennis program or reserve your preferred training time.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-semibold text-gray-900 mb-3">Meet Harry van Reek</h3>
              <p className="text-gray-600 leading-relaxed">
                Harry is a PTR Professional with 33+ years of coaching experience and founder of Omnibus Tennis. He specializes in customized lessons for every
                level—including reduced-mobility players—so you can grow your game in Aruba with confidence and energy.
              </p>
            </div>
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className={`flex items-start gap-4 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 ${
                  info.title === 'Availability' ? 'bg-white border border-orange-400 text-orange-700' : 'bg-white'
                }`}
              >
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${
                    info.title === 'Availability' ? 'bg-orange-400/20' : 'bg-emerald-100'
                  }`}
                >
                  <info.icon className={`w-6 h-6 ${info.title === 'Availability' ? 'text-orange-600' : 'text-emerald-600'}`} />
                </div>
                <div>
                  <h3
                    className={`font-semibold mb-1 ${
                      info.title === 'Availability' ? 'text-orange-700' : 'text-gray-900'
                    }`}
                  >
                    {info.title}
                  </h3>
                  {info.title === 'Email' ? (
                    <a href="mailto:harry@omnibustennis.com" className="text-emerald-600 hover:text-emerald-700 transition-colors">
                      harry@omnibustennis.com
                    </a>
                  ) : info.title === 'WhatsApp' ? (
                    <a 
                      href={info.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-2 mt-2 px-5 py-2.5 rounded-lg bg-emerald-600 text-white font-medium hover:bg-emerald-500 transition-colors shadow-sm hover:shadow-md"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>{info.content}</span>
                    </a>
                  ) : info.title === 'Availability' ? (
                    <p className="text-orange-700 font-medium">{info.content}</p>
                  ) : (
                    <p className="text-gray-600">{info.content}</p>
                  )}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="h-full rounded-xl overflow-hidden shadow-lg"
          >
            <img
              src="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/harry%20tennis%20aruba.png"
              alt="Harry van Reek coaching tennis players in Aruba"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12"
        >
          <div className="bg-white p-10 rounded-3xl shadow-xl text-center md:text-left md:flex md:items-center md:justify-between md:gap-12">
            <div>
              <h3 className="text-3xl font-semibold text-gray-900 mb-4">Private lesson (60 minutes)</h3>
              <p className="text-emerald-600 text-4xl font-bold mb-4">$65</p>
            </div>
            <p className="text-gray-600 max-w-xl">
              Additional $15 court surcharge may apply depending on the hotel where the lesson is booked.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;