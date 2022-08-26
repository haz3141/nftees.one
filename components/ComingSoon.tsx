import EmailForm from './EmailForm';
import Image from 'next/image';
import bus from '../public/bus.png';

const ComingSoon = () => {
  return (
    <div className="relative">
      <section>
        <h1 className="justify-center text-white text-6xl md:text-8xl font-bold flex flex-row items-center">
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
        </h1>
        <EmailForm />
      </section>
    </div>
  );
};

export default ComingSoon;
