import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import CookieConsent from '@/components/CookieConsent';
import gearGuides from '@/data/gearGuides';

const sections = [
  { id: 'home', title: 'Top' },
  { href: '/', title: 'Book Your Tennis Lessons in Aruba' },
  { href: '/guides/', title: 'Back to Gear Guides' },
];

const focusAreas = [
  {
    title: 'Match-Day Confidence',
    description:
      'Look for low-profile cushioning and secure lacing systems that keep you explosive from the first serve to match point.',
  },
  {
    title: 'Humidity-Friendly Comfort',
    description:
      'Mesh uppers, moisture-wicking liners, and quick-dry materials let your feet breathe—even during double sessions in Aruba’s sun.',
  },
  {
    title: 'Multi-Surface Traction',
    description:
      'Hybrid outsoles and reinforced drag zones provide grip across resort hard courts, public facilities, and clay alternatives.',
  },
];

const products = [
  {
    name: "Wilson Women's Intrigue Lite",
    link: 'https://amzn.to/4nGzsBF',
    image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/WILSON%20Women%20s%20Intrigue%20Lite%20Tennis%20Sneaker.jpg',
    highlights: [
      "Women's-specific fit supports arches and heel shape tailored to female athletes.",
      'Springy cushioning softens impact and accelerates transitions between shots.',
      'All-court design blends comfort, responsiveness, and durability for training and match play.',
      'DuraLast rubber outsole offers abrasion resistance and traction on multiple surfaces.',
      'Midfoot support system stabilizes lateral movement for confident cuts.',
    ],
  },
  {
    name: "K-Swiss Women's Hypercourt Supreme 2",
    link: 'https://amzn.to/441zRrl',
    image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/K-Swiss%20Womens%20Hypercourt%20Supreme%202%20Tennis%20Shoe.jpg',
    highlights: [
      'AOSTA 7.0 high-density outsole boosts durability from heel to toe.',
      'DragGuard 7.0 reinforcement shields high-wear zones at the toe and heel.',
      'Durawrap Flex upper protects without needing break-in time.',
      'Heel Grip lining locks down your foot and minimizes slippage.',
      'Surge 7.0 midsole gives lightweight cushioning and energized rebound.',
    ],
  },
  {
    name: "ASICS Women's GEL-Resolution X",
    link: 'https://amzn.to/3JLoUTR',
    image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/ASICS%20Womens%20Gel-Resolution%20X%20Tennis%20Shoes.jpg',
    highlights: [
      'Fit note: Runs narrow—consider sizing up half a size or choosing the Wide option.',
      'PGUARD overlays add durability along the medial forefoot for sliders.',
      'DYNAWALL technology improves stability during aggressive lateral moves.',
      'DYNAWRAP lacing secures the upper for a dynamic, supportive fit.',
      'AHARPLUS rubber plus forefoot GEL cushioning absorb impact and extend outsole life.',
    ],
  },
  {
    name: "New Balance Women's FuelCell 796 v4",
    link: 'https://amzn.to/4qNnzMX',
    image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/New%20Balance%20Womens%20FuelCell%20796%20V4%20Hard%20Court%20Tennis%20Shoe.jpg',
    highlights: [
      'FuelCell foam delivers a propulsive feel to drive you forward.',
      'NDure upper overlays add structure and durability for hard-court play.',
      'NDurance rubber protects high-wear areas for longer-lasting traction.',
      'Flexible, non-marking outsole keeps private club courts pristine.',
      'Balanced support ideal for quick sprints and sudden direction changes.',
    ],
  },
  {
    name: 'adidas Women’s Gamecourt 2',
    link: 'https://amzn.to/4qQI7nM',
    image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/adidas%20Womens%20Gamecourt%202%20WSneaker.jpg',
    highlights: [
      'Open mesh upper breathes and flexes for lasting comfort.',
      'Lightweight EVA midsole cushions without slowing you down.',
      'ADIWEAR rubber outsole offers durable grip for all-court play.',
      'Padded collar supports the ankle during quick pivots.',
      'Made with at least 20% recycled materials to reduce environmental impact.',
    ],
  },
];

const TennisShoesWomenGuide = () => {
  const guide = gearGuides.find((item) => item.slug === 'tennis-shoes-women');

  return (
    <>
      <Helmet>
        <title>Women’s Tennis Shoes for Aruba – Heat-Ready Picks | Omnibus Tennis</title>
        <meta
          name="description"
          content="Best women’s tennis shoes for warm-weather play. Breathable, stable options tested by Omnibus Tennis—ideal for ladies’ tennis and court time in Aruba."
        />
        <link rel="canonical" href="https://omnibustennis.com/guides/tennis-shoes-women/" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Women’s Tennis Shoes for Aruba – Heat-Ready Picks" />
        <meta
          property="og:description"
          content="Women’s tennis shoes that stay cool and supportive in warm climates. Picks from Omnibus Tennis for play in Aruba."
        />
        <meta property="og:image" content={guide?.image.src} />
        <meta property="og:image:alt" content={guide?.image.alt} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Women’s Tennis Shoes for Aruba" />
        <meta
          name="twitter:description"
          content="Best women’s tennis shoes for warm-weather play. Tested by Omnibus Tennis in Aruba."
        />
        <meta name="twitter:image" content={guide?.image.src} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Women’s Heat-Ready Tennis Shoes',
            description:
              'Curated list of women’s tennis shoes tested by Omnibus Tennis for cooling, cushioning, and grip in Aruba.',
            itemListElement: products.map((product, index) => ({
              '@type': 'ListItem',
              position: index + 1,
              name: product.name,
              url: product.link,
            })),
          })}
        </script>
      </Helmet>

      <div id="home" className="min-h-screen bg-white">
        <Header sections={sections} initialSolid />
        <main className="pt-32 md:pt-40 bg-gradient-to-b from-emerald-50 via-white to-white">
          <section className="px-4">
            <nav className="max-w-6xl mx-auto mb-6 text-sm text-gray-500">
              <ol className="flex flex-wrap items-center gap-2">
                <li>
                  <a href="/" className="hover:text-emerald-600 transition-colors">
                    Home
                  </a>
                  <span className="mx-1 text-gray-400">/</span>
                </li>
                <li>
                  <a href="/guides/" className="hover:text-emerald-600 transition-colors">
                    Gear Guides
                  </a>
                  <span className="mx-1 text-gray-400">/</span>
                </li>
                <li className="text-gray-700 font-medium">Women’s Tennis Shoes</li>
              </ol>
            </nav>

            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold tracking-wide text-emerald-700 bg-emerald-100 rounded-full">
                Women’s Performance Tennis Footwear
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Lightweight Tennis Shoes Crafted for Warm-Climate Play
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600">
                Discover breathable, quick-dry tennis shoes that women pros and coaches trust in Aruba’s heat. Each recommendation
                focuses on comfort, stability, and style—without sacrificing the responsive support you need for confident footwork
                and all-day training.
              </p>
            </div>
          </section>

          <section className="mt-12 px-4">
            <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="relative rounded-[32px] overflow-hidden shadow-xl bg-white">
                <img
                  src={guide?.image.src}
                  alt={guide?.image.alt}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>
              <div className="bg-white/90 backdrop-blur-sm border border-emerald-100 rounded-3xl shadow-lg p-8 md:p-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">Omnibus Tennis Testing Checklist</h2>
                <ul className="space-y-4 text-gray-600">
                  <li>
                    <span className="font-semibold text-gray-900">Cooling &amp; Comfort:</span> Lightweight uppers and breathable
                    liners that keep feet dry in tropical humidity.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Supportive Cushioning:</span> Responsive midsoles and padded
                    collars to handle split-steps, lunges, and sudden directional changes.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Durability:</span> Reinforced drag guards and consistent rubber
                    compounds that stand up to long drills and regular match play.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Secure Fit:</span> Stabilizing chassis and adaptive lacing systems
                    that hug the midfoot without uncomfortable pressure.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-16 px-4">
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
              {focusAreas.map((item) => (
                <div key={item.title} className="bg-white border border-emerald-100 rounded-3xl shadow-sm p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-16 px-4">
            <div className="max-w-6xl mx-auto space-y-10">
              {products.map((product, index) => {
                const isEven = index % 2 === 0;

                return (
                  <article
                    key={product.name}
                    className={`grid gap-8 md:grid-cols-[0.9fr_1.1fr] items-center rounded-3xl border border-emerald-100 shadow-lg overflow-hidden ${
                      isEven ? 'bg-white' : 'bg-emerald-50'
                    }`}
                  >
                    <div className={`relative h-full ${isEven ? '' : 'md:order-2'}`}>
                      <img
                        src={product.image}
                        alt={`${product.name} tennis shoes for women in Aruba`}
                        className="w-full h-full object-contain bg-white"
                        loading="lazy"
                      />
                    </div>
                    <div className={`p-8 md:p-10 ${isEven ? '' : 'md:order-1'}`}>
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">{product.name}</h3>
                      <ul className="space-y-3 text-gray-600 mb-6">
                        {product.highlights.map((highlight) => (
                          <li key={highlight} className="flex items-start gap-3">
                            <span className="mt-1 w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
                      >
                        View pricing &amp; specs on Amazon
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>

          <section className="mt-16 px-4 pb-24">
            <div className="max-w-6xl mx-auto text-center">
              <p className="text-gray-600 mb-6">
                Ready to update your rotation? Browse our curated Amazon collection for women’s tennis shoes that passed the Omnibus
                Tennis play-test in Aruba.
              </p>
            <a
              href="https://www.amazon.com/s?k=women%27s+tennis+shoes&tag=omnibustennis-20"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
            >
              Shop women’s tennis shoes on Amazon
            </a>
              <p className="mt-4 text-sm text-gray-500">
                Disclosure: Omnibus Tennis is an Amazon Associate and may earn from qualifying purchases made through these links.
                This costs you nothing extra and helps us test more gear before we recommend it.
              </p>
            </div>
          </section>
        </main>

        <Footer sections={sections} />
        <BackToTopButton />
      </div>
      <CookieConsent />
    </>
  );
};

export default TennisShoesWomenGuide;

