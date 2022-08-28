import Head from 'next/head';
import {useEffect} from 'react';
import NavBar from './NavBar';
import ComingSoon from './ComingSoon';
import EmailForm from './EmailForm';
import BusImage from './BusImage';
import Footer from './Footer';

const Base = () => {
  useEffect(() => {
    // Loop over grid items and create random duration and delay
    document
      .querySelectorAll<HTMLElement>('.grid-background > div')
      .forEach(elem => {
        // Calculate random number for delay
        const delay = getRandomInt(0, 5);
        // Calculate random number for duration
        const duration = getRandomInt(3, 6);

        // Set both
        elem.style.animationDelay = `${delay}s`;
        elem.style.animationDuration = `${duration}s`;
      });

    function getRandomInt(min: number, max: number) {
      min = Math.ceil(min);
      max = Math.floor(max);

      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });

  return (
    <div className="relative min-h-screen flex flex-wrap items-center justify-center bg-gray-900 overflow-hidden">
      {/* Metadata */}
      <Head>
        <title>NFTees One - NFT Apparel Marketplace</title>
        <meta
          name="description"
          content="The World's First NFTee Marketplace"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Grid background */}
      <div className="grid-background absolute inset-0 p-2 grid grid-cols-12 gap-2 transform -skew-y-12 scale-150">
        {/* Row 1 */}
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>

        {/* Row 2 */}
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-3 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>

        {/* Row 3 */}
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        {/* Row 4 */}
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>

        {/* Row 5 */}
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>

        {/* Row 6 */}
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-7 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>

        {/* Row 7 */}
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-3 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-3 bg-gray-800 rounded animate-pulse"></div>

        {/* Row 8 */}
        <div className="col-span-2 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-5 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-1 bg-gray-800 rounded animate-pulse"></div>
        <div className="col-span-4 bg-gray-800 rounded animate-pulse"></div>
      </div>

      {/* Header */}
      <NavBar />

      {/* Content */}
      <section>
        <ComingSoon />
        <BusImage />
        <EmailForm />
      </section>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Base;
