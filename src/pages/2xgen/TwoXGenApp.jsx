import React from 'react';
import { Helmet } from 'react-helmet';
import { ExternalLink } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import CookieConsent from '@/components/CookieConsent';

const sections = [
  { id: 'home', title: 'Top' },
  { href: '/', title: 'Back to Omnibus Tennis' },
];

const pillars = [
  {
    title: 'Build from the Ground Up',
    description:
      'We design, build, and scale ventures end-to-end—crafting digital products and SaaS brands that deliver measurable impact.',
  },
  {
    title: 'Partnerships & Opportunities',
    description:
      'We collaborate with innovators who share our vision, forging partnerships that accelerate growth and unlock new markets.',
  },
  {
    title: 'Builders, Operators, Innovators',
    description:
      'Our team combines operational excellence with technical prowess, keeping every product focused on sustainable growth.',
  },
];

const ventures = [
  {
    name: 'TopTours.ai',
    description: 'AI-powered discovery for global travel experiences',
    link: 'https://toptours.ai/',
    domain: 'toptours.ai',
  },
  {
    name: 'ArubaBuddies.com',
    description: 'Curated local trip planning & itineraries',
    link: 'https://arubabuddies.com/',
    domain: 'arubabuddies.com',
  },
  {
    name: 'FactuurBaas',
    description: 'Streamlined invoicing for freelancers & small businesses',
    link: 'https://factuurbaas.nl/',
    domain: 'factuurbaas.nl',
  },
  {
    name: 'OneHappyFinance',
    description: 'Transparent, actionable financial information for Aruba',
    link: 'https://onehappyfinance.com/',
    domain: 'onehappyfinance.com',
  },
  {
    name: 'AruList',
    description: 'Community-driven marketplace supporting sustainable second-hand commerce',
    link: 'https://arulist.com/',
    domain: 'arulist.com',
  },
  {
    name: 'TOF Sports',
    description: 'Digital and physical ecosystem for youth tennis & padel development',
    link: 'https://tofsports.nl/',
    domain: 'tofsports.nl',
  },
  {
    name: 'MyGoProfile',
    description: 'AI-driven local profile management for businesses',
    link: 'https://mygoprofile.com/',
    domain: 'mygoprofile.com',
  },
  {
    name: 'BiteReserve',
    description: 'Track exactly which guest sources send revenue, no guessing',
    link: 'https://bitereserve.com/',
    domain: 'bitereserve.com',
  },
  {
    name: 'Aru365.com',
    description: 'Find the best tours and activities in Aruba',
    link: 'https://aru365.com/',
    domain: 'aru365.com',
  },
];

const TwoXGenApp = () => {
  return (
    <>
      <Helmet>
        <title>2xGen Digital Venture Studio | Omnibus Tennis</title>
        <meta
          name="description"
          content="Learn about 2xGen, the digital venture studio powering omnibustennis.com with next-gen SaaS products and web platforms."
        />
        <link rel="canonical" href="https://omnibustennis.com/2xgen/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="2xGen Digital Venture Studio" />
        <meta
          property="og:description"
          content="2xGen builds, validates, and scales SaaS products and web platforms that drive growth and long-term value."
        />
        <meta property="og:locale" content="en_US" />
      </Helmet>

      <div id="home" className="min-h-screen bg-white">
        <Header sections={sections} initialSolid />
        <main className="pt-32 md:pt-40 bg-gradient-to-b from-emerald-50 via-white to-white">
          <section className="px-4">
            <div className="max-w-5xl mx-auto text-center">
              <span className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold tracking-wide text-emerald-700 bg-emerald-100 rounded-full">
                2xGen
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                We Build the Future, Together
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
                2xGen is a digital venture studio. We build, validate, and scale SaaS products and web platforms that deliver
                growth and long-term value for partners and customers around the world.
              </p>
              <a
                href="https://2xgen.com/"
                target="_blank"
                className="inline-flex items-center gap-2 mt-8 px-8 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
              >
                <span>Visit 2xGen Digital Venture Studio</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </section>

          <section className="mt-16 px-4">
            <div className="max-w-6xl mx-auto grid gap-8 md:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="bg-white border border-emerald-100 rounded-3xl shadow-sm p-6">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3">{pillar.title}</h2>
                  <p className="text-gray-600">{pillar.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-20 px-4 pb-24">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Ventures</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  2xGen builds and operates digital platforms that combine strategic positioning, scalable architecture, and measurable impact.
                </p>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {ventures.map((venture) => (
                  <article
                    key={venture.name}
                    className="flex flex-col rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{venture.name}</h3>
                    <p className="text-sm text-gray-500 mb-2">{venture.domain}</p>
                    <p className="text-gray-600 mb-4 flex-1">{venture.description}</p>
                    <a
                      href={venture.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 self-start px-4 py-2 rounded-full bg-emerald-600 text-white text-sm font-semibold hover:bg-emerald-500 transition-colors"
                    >
                      <span>Visit {venture.name}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </article>
                ))}
              </div>
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

export default TwoXGenApp;

