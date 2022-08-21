import Head from 'next/head';
import {useEffect} from 'react';
import EmailForm from './EmailForm';

const ComingSoon = () => {
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
    <div className="relative min-h-screen flex items-center justify-center bg-gray-900 overflow-hidden">
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

      {/* Content */}
      <div className="relative">
        <section>
          <h2 className="justify-center text-white text-6xl md:text-8xl font-bold flex flex-row items-center">
            Coming
            <div className="relative text-sm mx-2">
              <svg
                className="
                                    bi bi-caret-up-fill text-blue-500
                                    fill-current
                                "
                xmlns="http://www.w3.org/2000/svg"
                width={16}
                height={16}
                viewBox="0 0 16 16"
              >
                <path d="m7.247 4.86-4.796 5.481c-.566.647-.106 1.659.753 1.659h9.592a1 1 0 0 0 .753-1.659l-4.796-5.48a1 1 0 0 0-1.506 0z" />
              </svg>
              <div className="absolute -top-12 transform -rotate-45 text-blue-500">
                <p className="font-light text-base text-white bg-blue-500 rounded-md px-2 py-0">
                  super
                </p>
              </div>
            </div>
            Soon
          </h2>
          <EmailForm />
        </section>
      </div>
    </div>
  );
};

export default ComingSoon;
