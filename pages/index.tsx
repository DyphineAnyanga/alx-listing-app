// pages/index.tsx

import Head from 'next/head';
import { PROPERTYLISTINGSAMPLE } from '@/constants';
import PropertyCard from '@/components/PropertyCard';
import HeroSection from '@/components/HeroSection';
import FilterSection from '@/components/FilterSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>Responsive Property Listings</title>
        <meta name="description" content="Browse properties across Kenya with responsive filtering and layout." />
      </Head>

      <main className="min-h-screen bg-gray-50 px-4 md:px-12 py-6">
        <HeroSection />

        <FilterSection />

        <section className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {PROPERTYLISTINGSAMPLE.map((property, index) => (
            <PropertyCard key={index} {...property} />
          ))}
        </section>
      </main>
    </>
  );
}
