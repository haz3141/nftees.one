import Image from 'next/image';
import logo from '../public/test-logo.png';

const NavBar = () => {
  return (
    <nav
      className="absolute top-0 w-full flex flex-wrap
        items-center justify-between py-4
        bg-gray-400
        text-gray-500
        hover:text-gray-700
        focus:text-gray-700
        shadow-lg"
    >
      <div
        className="container-fluid w-full flex flex-wrap
          items-center justify-between px-6"
      >
        <div className="container-fluid">
          <a
            href="#"
            className="flex items-center
              text-gray-900
              hover:text-gray-900
              focus:text-gray-900
              mt-2 lg:mt-0 mr-1"
          >
            <Image
              src={logo}
              height={'20px'}
              width={'53px'}
              alt=""
              loading="lazy"
            />
            <span className="font-medium ml-2">NFTees One</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
