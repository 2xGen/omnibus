import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import PracticeCarousel from '@/components/PracticeCarousel';
import Location from '@/components/Location';
import OtherThings from '@/components/OtherThings';
import Footer from '@/components/Footer';
import BackToTopButton from '@/components/BackToTopButton';
import { Toaster } from '@/components/ui/toaster';
import CookieConsent from '@/components/CookieConsent';

function App() {
  const sections = {
    hero: { id: 'home', title: 'Home' },
    about: { id: 'about', title: 'About' },
    guides: { id: 'guides', title: 'Guides' },
    contact: { id: 'contact', title: 'Contact' },
    other: { id: 'other-things', title: 'Explore Aruba' },
  };

  const headerSections = [
    ...Object.values(sections),
    { title: 'Tennis Gear', href: '/guides/', variant: 'gear' },
  ];

  const footerSections = [
    { id: 'home', title: 'Home' },
    { title: 'Guides', href: '/guides/' },
    { title: "Men's Tennis Shoes", href: '/guides/tennis-shoes-men/' },
    { title: "Women's Tennis Shoes", href: '/guides/tennis-shoes-women/' },
  ];

  return (
    <>
      <Helmet>
        <title>Omnibus Tennis Aruba – Tennis Lessons &amp; Coaching in Aruba</title>
        <meta
          name="description"
          content="Book tennis lessons in Aruba with Omnibus Tennis. Certified tennis coach Harry van Reek offers private lessons on courts in the Palm Beach area. Tennis in Aruba for all levels."
        />
        <link rel="canonical" href="https://omnibustennis.com/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Omnibus Tennis Aruba – Tennis Lessons &amp; Coaching in Aruba" />
        <meta
          property="og:description"
          content="Book tennis lessons in Aruba. Certified tennis coach Harry van Reek offers private lessons on Palm Beach area courts. Tennis in Aruba for every level."
        />
        <meta property="og:image" content="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/harry%20tennis%20aruba.png" />
        <meta property="og:image:alt" content="Harry van Reek coaching tennis players in Aruba" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Omnibus Tennis Aruba – Tennis Lessons in Aruba" />
        <meta
          name="twitter:description"
          content="Tennis lessons in Aruba with a certified coach. Private lessons on Palm Beach area courts. Book with Omnibus Tennis."
        />
        <meta name="twitter:image" content="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/harry%20tennis%20aruba.png" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'SportsActivityLocation',
            name: 'Omnibus Tennis Aruba',
            image: 'https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/harry%20tennis%20aruba.png',
            url: 'https://omnibustennis.com/',
            telephone: '+2975600090',
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Palm Beach Area',
              addressLocality: 'Noord',
              addressRegion: 'AW',
              postalCode: '00000',
              addressCountry: 'AW',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: 12.5683,
              longitude: -70.0431,
            },
            areaServed: { '@type': 'Place', name: 'Aruba' },
            description:
              'Omnibus Tennis offers private tennis lessons and coaching in Aruba. Tennis coach Harry van Reek teaches on tennis courts in the Palm Beach area.',
            sport: 'Tennis',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '07:00',
                closes: '21:00',
              },
            ],
            hasOfferCatalog: {
              '@type': 'OfferCatalog',
              name: 'Tennis lessons',
              itemListElement: [
                {
                  '@type': 'Offer',
                  itemOffered: { '@type': 'Service', name: 'Private tennis lesson (60 min)' },
                },
              ],
            },
          })}
        </script>
      </Helmet>
      <div className="min-h-screen bg-white">
        <Header sections={headerSections} />
        <main>
          <div id={sections.hero.id}>
            <Hero />
          </div>
          <div id={sections.about.id}>
            <About />
          </div>
          <div id={sections.guides.id}>
            <PracticeCarousel />
          </div>
          <div id={sections.contact.id}>
            <Location />
          </div>
          <div id={sections.other.id}>
            <OtherThings />
          </div>
        </main>
        <Footer sections={footerSections} />
        <BackToTopButton />
        <Toaster />
      </div>
      <CookieConsent />
    </>
  );
}

export default App;