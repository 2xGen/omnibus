import React from 'react';
import { motion } from 'framer-motion';
import { Star, ExternalLink } from 'lucide-react';

const tourSlides = [
  {
    title: 'Aruba Happy Hour Sunset Sail',
    category: 'Tour Category: Sunset Cruises',
    rating: '4.7',
    price: 'Price from $85',
    description: 'Sail Aruba’s coastline with savory bites, an open bar, and unforgettable sunset views.',
    link: 'https://www.viator.com/tours/Aruba/Aruba-Happy-Hour-Sunset-Sail/d28-47607P4?pid=P00222666&mcid=42383&medium=link&campaign=Omnibus',
    image:
      'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/images//Aruba%20Happy%20Hour%20Sunset%20Sail%20with%20Savory%20Bites%20and%20Cocktails.jpg',
  },
  {
    title: 'Aruba North Coast ATV Desert and Beach Tour',
    category: 'Tour Categories: 4WD & Off-Road, Half Day & Full Day Tours',
    rating: '4.9',
    price: 'Price from $90',
    description: 'Drive rugged trails along Aruba’s dramatic north coast with stops at secret beaches and desert landmarks.',
    link: 'https://www.viator.com/tours/Aruba/Aruba-ATV-Tour/d28-6687ATV?pid=P00222666&mcid=42383&medium=link&campaign=Omnibus',
    image:
      'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/images//Aruba%20North%20Coast%20ATV%20Desert%20and%20Beach%20Tour.jpg',
  },
  {
    title: 'Half-Day Snorkel Sail Tour with Caribbean Lunch',
    category: 'Tour Category: Cruising & Sailing',
    rating: '4.7',
    price: 'Price from $107',
    description: 'Snorkel vibrant reefs and enjoy a Caribbean buffet lunch aboard a classic catamaran with an open bar.',
    link: 'https://www.viator.com/tours/Aruba/Aruba-Lunch-and-Snorkel-Half-Day-Cruise/d28-2785MORSNORKEL?pid=P00222666&mcid=42383&medium=link&campaign=Omnibus',
    image:
      'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tour//Half-Day%20Snorkel%20Sail%20Tour%20with%20Caribbean%20Lunch.jpg',
  },
  {
    title: 'Private Scuba Dive with Guide & Photographer',
    category: 'Tour Categories: Snorkeling & Diving, Photoshoots',
    rating: '5.0',
    price: 'Price from $120',
    description: 'Certified divers enjoy a private guided dive with a photographer capturing professional underwater shots.',
    link: 'https://www.viator.com/tours/Aruba/Private-Scuba-dive-with-photographer-certified-divers/d28-325347P4?pid=P00222666&mcid=42383&medium=link&campaign=Omnibus',
    image:
      'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tour//Private%20Scuba%20Dive%20with%20guide%20Photographer%20(Certified%20divers).jpg',
  },
  {
    title: 'Private Turtle Spotting Snorkeling Excursion',
    category: 'Tour Category: Snorkeling & Diving',
    rating: '5.0',
    price: 'Price from $97',
    description: 'Snorkel side-by-side with sea turtles in Aruba’s crystal waters during an intimate guided excursion.',
    link: 'https://www.viator.com/tours/Aruba/Turtle-spotting-snorkeling-excursion-in-Aruba/d28-325347P3?pid=P00222666&mcid=42383&medium=link&campaign=Omnibus',
    image:
      'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/tour//Private%20Turtle%20Spotting%20Snorkeling%20Excursion%20in%20Aruba.jpg',
  },
  {
    title: "UTV Morning Tour: Discover Aruba's Hidden Treasures",
    category: 'Tour Category: 4WD & Off-Road',
    rating: '4.7',
    price: 'Price from $220',
    description: 'Guided UTV expedition across Aruba’s rugged landscapes, hidden caves, and natural pools.',
    link: 'https://www.viator.com/tours/Aruba/UTV-OFFROAD-EXPERIENCE-NATURAL-POOL-and-CAVES/d28-39473P5?pid=P00222666&mcid=42383&medium=link&campaign=Omnibus',
    image:
      "https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/images//UTV%20Morning%20Tour%20Discover%20Aruba's%20Hidden%20Treasures.jpg",
  },
];

const resources = [
  {
    title: 'Find Aruba Restaurants',
    description: 'Browse handpicked dining spots across Aruba, from seaside favorites to hidden culinary gems.',
    link: 'https://arubabuddies.com/restaurants',
    cta: 'Explore Aruba Restaurants Guide',
  },
  {
    title: 'Book Tours & Excursions',
    description: 'Discover top-rated tours and excursions to make the most of your Aruba stay.',
    link: 'https://arubabuddies.com/tours-excursions',
    cta: 'Discover Aruba Tours & Excursions',
  },
];

const OtherThings = () => {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Other Things to Do in Aruba</h2>
          <p className="text-lg md:text-xl text-gray-600">
            Planning a full Aruba experience? Check out the{' '}
            <a
              href="https://arubabuddies.com/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700"
            >
              <span>ArubaBuddies travel guides</span>
              <ExternalLink className="w-4 h-4" />
            </a>{' '}
            to uncover the best restaurants and tours on the island.
          </p>
        </motion.div>

        <div className="mb-16">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {tourSlides.map((tour, index) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.2 }}
                className="bg-white rounded-3xl shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.35)] transition-shadow duration-300 overflow-hidden flex flex-col"
              >
                <div className="relative h-64">
                  <img
                    src={tour.image}
                    alt={`${tour.title} experience in Aruba`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 flex flex-col flex-1">
                  <span className="inline-block px-4 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-semibold mb-4">
                    {tour.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{tour.title}</h3>
                  <div className="flex items-center justify-center md:justify-start text-amber-500 font-semibold mb-4">
                    <Star className="w-5 h-5 mr-2 fill-current" />
                    <span>{tour.rating} rating</span>
                  </div>
                  <p className="text-gray-700 mb-4 flex-1">{tour.description}</p>
                  <p className="text-base font-medium text-gray-600 mb-6 text-center md:text-left">{tour.price}</p>
                  <a
                    href={tour.link}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
                  >
                    <span>View full details on Viator</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col text-center"
            >
              <h3 className="text-2xl font-semibold text-gray-900 mb-3">{resource.title}</h3>
              <p className="text-gray-600 flex-1">{resource.description}</p>
              <a
                href={resource.link}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center gap-2 mt-6 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-700 transition-colors"
              >
                <span>{resource.cta}</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherThings;

