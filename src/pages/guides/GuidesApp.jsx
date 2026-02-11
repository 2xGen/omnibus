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
];

const GuidesApp = () => {
  return (
    <>
      <Helmet>
        <title>Omnibus Tennis Gear Guides - Recommended Tennis Equipment for Aruba</title>
        <meta
          name="description"
          content="Explore Omnibus Tennis gear guides for shoes, rackets, strings, and sun-ready apparel tailored to Aruba’s tennis conditions."
        />
        <link rel="canonical" href="https://omnibustennis.com/guides/" />
        <meta name="keywords" content="tennis gear Aruba, tennis shoes Aruba, best tennis rackets, Omnibus Tennis guides" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Omnibus Tennis Gear Guides" />
        <meta
          property="og:description"
          content="Hand-picked tennis equipment recommendations for playing in Aruba, curated by Omnibus Tennis."
        />
        <meta
          property="og:image"
          content="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/tennis%20gear.png"
        />
        <meta property="og:image:alt" content="Omnibus Tennis coach with players on a court in Aruba" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Omnibus Tennis Gear Guides" />
        <meta
          name="twitter:description"
          content="Shop the tennis gear Omnibus Tennis pros rely on for coaching and play in Aruba."
        />
        <meta
          name="twitter:image"
          content="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/tennis%20gear.png"
        />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: 'What tennis gear do I need for playing in Aruba?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Start with lightweight, breathable tennis shoes suited for Aruba’s heat, along with sun-ready apparel and accessories that keep you cool during long sessions. Our gear guides highlight the exact products we trust on local courts.',
                },
              },
              {
                '@type': 'Question',
                name: 'Does Omnibus Tennis test the gear featured in the guides?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text:
                    'Yes. Every recommendation in our guides is tested by Omnibus Tennis professionals to ensure it works in Aruba’s climate and court conditions before we suggest it.',
                },
              },
            ],
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
                <li className="text-gray-700 font-medium">Tennis Gear Guides</li>
              </ol>
            </nav>
            <div className="max-w-4xl mx-auto text-center">
              <span className="inline-flex items-center justify-center px-5 py-2 text-sm font-semibold tracking-wide text-emerald-700 bg-emerald-100 rounded-full">
                Omnibus Tennis Gear Hub
              </span>
              <h1 className="mt-6 text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Expert Tennis Gear Guides for Every Player
              </h1>
              <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
                Find the best tennis gear to elevate your game on any court. Every recommendation is personally tested and
                approved by PTR Professional Harry van Reek and the Omnibus Tennis team. Explore our curated guides to discover
                top-rated tennis shoes, rackets, strings, and apparel designed for performance, comfort, and consistency all
                year long.
              </p>
            </div>
          </section>

          <section className="mt-16 px-4 pb-20">
            <div className="max-w-6xl mx-auto grid gap-10 md:grid-cols-2">
              {gearGuides.map((guide) => (
                <article
                  key={guide.slug}
                  className="bg-white/95 backdrop-blur-sm border border-emerald-100 rounded-3xl shadow-lg hover:shadow-[0_25px_50px_-12px_rgba(16,185,129,0.35)] transition-shadow duration-300 overflow-hidden flex flex-col"
                >
                  <img
                    src={guide.image.src}
                    alt={guide.image.alt}
                    className="w-full h-56 object-cover"
                    loading="lazy"
                  />
                  <div className="flex-1 flex flex-col p-8">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {guide.tags?.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-semibold tracking-wide text-emerald-700 bg-emerald-100 rounded-full uppercase"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="text-2xl font-semibold text-gray-900 mb-3">{guide.title}</h2>
                    <p className="text-gray-600 mb-4">{guide.shortDescription}</p>
                    <p className="text-gray-500 text-sm leading-relaxed flex-1">{guide.longDescription}</p>
                    {(() => {
                      const isInternal = guide.affiliateLink.startsWith('/');
                      return (
                        <a
                          href={guide.affiliateLink}
                          target={isInternal ? undefined : '_blank'}
                          rel={isInternal ? undefined : 'noopener noreferrer'}
                          className="mt-8 inline-flex items-center justify-center px-6 py-3 rounded-full bg-emerald-600 text-white font-semibold hover:bg-emerald-500 transition-colors"
                        >
                          <span>{guide.cta}</span>
                        </a>
                      );
                    })()}
                  </div>
                </article>
              ))}
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

export default GuidesApp;

