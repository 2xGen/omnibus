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

const portfolio = [
  {
    name: 'FactuurBaas',
    description:
      'FactuurBaas is a fast and easy invoicing tool for freelancers and small businesses to create professional invoices in minutes—no registration required.',
    cta: 'Create Free Professional Invoices in Minutes',
    link: 'https://factuurbaas.nl/',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/sign/foto/Screenshot%202025-06-16%20150605.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YjkxZGZkZC1hYTQ1LTQ3NTUtODZiMy1iZDBhY2QyMjlkMjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3RvL1NjcmVlbnNob3QgMjAyNS0wNi0xNiAxNTA2MDUucG5nIiwiaWF0IjoxNzUwMDk0MzAzLCJleHAiOjE5MDc3NzQzMDN9.T6m86b-T281nZePGSM2IH-AeYjYSq5oQIhTrKNEmvvg',
  },
  {
    name: 'MyGoProfile',
    description:
      'MyGoProfile automates Google Business Profile management with AI-powered review responses, optimization insights, and multi-location control in one dashboard.',
    cta: 'Dominate Local Search with MyGoProfile',
    link: 'https://mygoprofile.com/',
    image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/MGP/Screenshot%202025-09-27%20212746.png',
  },
  {
    name: 'TopTours.ai',
    description:
      'TopTours.ai helps travelers discover curated tours and activities worldwide using AI-driven suggestions, interactive itineraries, and smart filters.',
    cta: 'Discover AI-Powered Tours',
    link: 'https://toptours.ai/',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/sign/foto/Screenshot%202025-06-24%20102145.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YjkxZGZkZC1hYTQ1LTQ3NTUtODZiMy1iZDBhY2QyMjlkMjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3RvL1NjcmVlbnNob3QgMjAyNS0wNi0yNCAxMDIxNDUucG5nIiwiaWF0IjoxNzUwNzUzMzQ2LCJleHAiOjE5MDg0MzMzNDZ9.28bDE7pLgNEKv7_5ystmLMQigixQ7HzUenzevGRrDWI',
  },
  {
    name: 'ArubaBuddies',
    description:
      'ArubaBuddies is a smart trip planning platform that curates local recommendations and interactive itineraries to make every Aruba vacation unforgettable.',
    cta: 'Plan Your Perfect Aruba Vacation',
    link: 'https://arubabuddies.com/',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/sign/foto/Screenshot%202025-06-16%20151003.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV83YjkxZGZkZC1hYTQ1LTQ3NTUtODZiMy1iZDBhY2QyMjlkMjMiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3RvL1NjcmVlbnNob3QgMjAyNS0wNi0xNiAxNTEwMDMucG5nIiwiaWF0IjoxNzUwMDkzOTQxLCJleHAiOjE5MDc3NzM5NDF9.uK6Hg29YlEqmJe1AFSJW_4Zhr3P3TdWLY_M1zMXg9ZI',
  },
  {
    name: 'AruList',
    description:
      'Buy and Sell in Aruba. The easiest marketplace for second-hand items, cars and housing in Aruba.',
    cta: 'Visit arulist.com - Aruba\'s Marketplace, Buy and Sell',
    link: 'https://arulist.com/',
    image:
      'https://iemgpccgdlwpsrsjuumo.supabase.co/storage/v1/object/public/AruList/arulist.png',
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
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Portfolio</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Explore the platforms we’ve built to make life easier, businesses smarter, and travel more exciting.
                </p>
              </div>

              <div className="space-y-12">
                {portfolio.map((item, index) => {
                  const isEven = index % 2 === 0;
                  return (
                    <article
                      key={item.name}
                      className={`grid gap-8 md:grid-cols-[0.95fr_1.05fr] items-center rounded-3xl border border-emerald-100 shadow-lg overflow-hidden ${
                        isEven ? 'bg-white' : 'bg-emerald-50'
                      }`}
                    >
                      <div className={`relative h-full bg-white ${isEven ? '' : 'md:order-2'}`}>
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>
                      <div className={`p-8 md:p-10 ${isEven ? '' : 'md:order-1'}`}>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-3">{item.name}</h3>
                        <p className="text-gray-600 mb-6">{item.description}</p>
                        <a
                          href={item.link}
                          target="_blank"
                          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
                        >
                          <span>{item.cta}</span>
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </article>
                  );
                })}
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

