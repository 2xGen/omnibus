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

const products = [
  {
    name: "K-Swiss Men's Hypercourt Express 2",
    link: 'https://amzn.to/3JsRw4q',
    image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/K%20Swiss%20mens%20Hypercourt%20Express%202%20Tennis%20Shoe.jpg',
    highlights: [
      'AOSTA 7.0 rubber outsole delivers heel-to-toe durability on abrasive courts.',
      '180° plantar support chassis keeps your foot stable during explosive cuts.',
      'SurgeLite cushioning softens landings without adding bulk.',
      'Durawrap Flex upper needs no break-in while shielding against toe drag.',
      'OrthoLite sock liner manages moisture for a cooler, drier interior.',
    ],
  },
  {
    name: "New Balance Men's FuelCell 996 v4",
    link: 'https://amzn.to/3JRGTbl',
    image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/New%20Balance%20Mens%20FuelCell%20996%20V4%20Hard%20Court%20Tennis%20Shoe.jpg',
    highlights: [
      'FuelCell midsole returns energy to keep your first step fast.',
      'NDure upper overlay adds abrasion resistance for hard-court play.',
      'Lockdown saddle secures the midfoot when you plant and drive.',
      'NDurance rubber zones protect high-wear areas for longer life.',
      'Non-marking outsole keeps resort courts scuff-free.',
    ],
  },
  {
    name: "ASICS Men's GEL-Resolution X",
    link: 'https://amzn.to/4p329Kd',
    image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/ASICS%20Mens%20Gel%20Resolution%20X%20Tennis%20Shoes.jpg',
    highlights: [
      'Fit tip: Runs large—consider ordering a half size down.',
      'PGUARD overlays armor the medial forefoot for players who slide.',
      'DYNAWALL stability system locks the midfoot during lateral surges.',
      'DYNAWRAP lacing cradles the upper for a glove-like fit.',
      'AHARPLUS rubber outsole plus forefoot GEL cushioning tame harsh landings.',
    ],
  },
  {
    name: "Wilson Rush Pro Lite Men's",
    link: 'https://amzn.to/4qUz1Xw',
    image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/WILSON%20Mens%20Rush%20Pro%20Lite%20Men%27s%20Tennis%20Shoes.jpg',
    highlights: [
      'Generous fit accommodates wider feet for lasting comfort.',
      'Pro Torque Chassis Light blends speed-friendly flex with arch support.',
      'Breathable mesh builds in airflow while keeping weight low.',
      'All-surface outsole grips well on acrylic, synthetic, and clay courts.',
      'Ideal for pros who coach all day and play league matches at night.',
    ],
  },
  {
    name: "HEAD Men's Revolt Evo",
    link: 'https://amzn.to/4qUwjkI',
    image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/HEAD%20Mens%20Revolt%20Evo%20Sneaker.jpg',
    highlights: [
      'Reinforced mesh upper with integrated straps keeps your foot centered.',
      'Comfort EVA midsole and torsion shank balance cushioning and control.',
      'Hybrid outsole handles multiple surfaces, from resort acrylic to clay alternatives.',
      'Lateral rubber outrigger stabilizes aggressive slides and recoveries.',
      'Non-marking rubber means no scuffs on hotel or private club courts.',
    ],
  },
];

const TennisShoesMenGuide = () => {
  const guide = gearGuides.find((item) => item.slug === 'tennis-shoes-men');

  return (
    <>
      <Helmet>
        <title>Men’s Heat-Ready Tennis Shoes | Omnibus Tennis</title>
        <meta
          name="description"
          content="Explore the top men’s tennis shoes for hot, humid conditions. Omnibus Tennis tests footwear for traction, durability, and support in Aruba."
        />
        <link rel="canonical" href="https://omnibustennis.com/guides/tennis-shoes-men/" />
        <meta
          name="keywords"
          content="men's tennis shoes Aruba, best tennis shoes for heat, Omnibus Tennis gear guide, tennis footwear review"
        />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Men’s Heat-Ready Tennis Shoes" />
        <meta
          property="og:description"
          content="See coach-approved men’s tennis shoes that stay cool, stable, and durable in warm climates."
        />
        <meta property="og:image" content={guide?.image.src} />
        <meta property="og:image:alt" content={guide?.image.alt} />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Men’s Heat-Ready Tennis Shoes" />
        <meta
          name="twitter:description"
          content="Handpicked tennis footwear for men, tested by Omnibus Tennis pros in Aruba’s heat."
        />
        <meta name="twitter:image" content={guide?.image.src} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: 'Men’s Heat-Ready Tennis Shoes',
            description:
              'Handpicked men’s tennis shoes tested in Aruba for traction, stability, and comfort in warm climates.',
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
                <li className="text-gray-700 font-medium">Men’s Tennis Shoes</li>
              </ol>
            </nav>

            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold tracking-wide text-emerald-700 bg-emerald-100 rounded-full">
                Men’s Performance Tennis Footwear
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Heat-Ready Tennis Shoes Built for Men Who Train Hard
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600">
                Discover the top men’s tennis shoes engineered for hot, humid conditions. Our pros tested lightweight, breathable,
                quick-dry footwear that keeps you powerful and stable on every surface. Each pair features reinforced drag zones,
                high-grip outsoles, and responsive cushioning—ready for daily coaching sessions, league play, and intense training
                blocks in warm climates.
              </p>
            </div>
          </section>

          <section className="mt-12 px-4">
            <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-[1.1fr_0.9fr] items-center">
              <div className="relative rounded-[32px] overflow-hidden shadow-xl">
                <img
                  src={guide?.image.src}
                  alt={guide?.image.alt}
                  className="w-full h-full object-contain bg-white"
                  loading="lazy"
                />
              </div>
              <div className="bg-white/90 backdrop-blur-sm border border-emerald-100 rounded-3xl shadow-lg p-8 md:p-10">
                <h2 className="text-2xl font-semibold text-gray-900 mb-4">What We Look For</h2>
                <ul className="space-y-4 text-gray-600">
                  <li>
                    <span className="font-semibold text-gray-900">Breathable Uppers:</span> Mesh constructions that release heat
                    and dry quickly between Aruba training blocks.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Island-Ready Traction:</span> Outsoles validated on resort hard
                    courts, clay alternatives, and public facilities.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Supportive Cushioning:</span> Responsive midsoles and stable
                    chassis for confident lateral movement.
                  </li>
                  <li>
                    <span className="font-semibold text-gray-900">Durability Enhancements:</span> Reinforced toe guards and drag
                    protection that withstand long coaching days.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mt-16 px-4 pb-24">
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
                        alt={`${product.name} tennis shoes for Aruba heat`}
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
        </main>

        <div className="px-4 pb-24">
          <div className="max-w-6xl mx-auto text-center">
            <a
              href="https://amzn.to/43jeeCE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
            >
              View more tennis shoes on Amazon
            </a>
            <p className="mt-4 text-sm text-gray-500">
              Disclosure: Omnibus Tennis is an Amazon Associate and may earn from qualifying purchases made through these links.
              This costs you nothing extra and helps us test more gear before we recommend it.
            </p>
          </div>
        </div>

        <Footer sections={sections} />
        <BackToTopButton />
      </div>
      <CookieConsent />
    </>
  );
};

export default TennisShoesMenGuide;

