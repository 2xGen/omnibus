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
        <title>Omnibus Tennis Aruba - Elite Tennis Lessons in Aruba</title>
        <meta
          name="description"
          content="Omnibus Tennis delivers personalized tennis lessons in Aruba for all ages and skill levels. Train with certified pros led by Harry van Reek and elevate your game today."
        />
        <link rel="canonical" href="https://omnibustennis.com/" />
        <meta name="keywords" content="tennis lessons in Aruba, Aruba tennis coaching, Omnibus Tennis, Harry van Reek, tennis academy Aruba, private tennis lessons Aruba" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Omnibus Tennis Aruba - Elite Tennis Lessons in Aruba" />
        <meta
          property="og:description"
          content="Book personalized tennis lessons in Aruba with Omnibus Tennis founder Harry van Reek. Certified coaching for beginners, juniors, and competitive players."
        />
        <meta property="og:image" content="https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/omnibus/harry%20tennis%20aruba.png" />
        <meta property="og:image:alt" content="Harry van Reek coaching tennis players in Aruba" />
        <meta property="og:locale" content="en_US" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Omnibus Tennis Aruba - Elite Tennis Lessons in Aruba" />
        <meta
          name="twitter:description"
          content="Certified tennis coaching in Aruba for every age and skill level. Train with PTR Professional Harry van Reek at Omnibus Tennis."
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
            description:
              'Omnibus Tennis provides private tennis lessons and coaching in Aruba for beginners, juniors, and competitive players.',
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Wednesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '07:00',
                closes: '21:00',
              },
            ],
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