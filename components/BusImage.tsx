import Image from 'next/image';
import bus from '../public/bus.png';

const BusImage = () => {
  return (
    <div className="block max-w-[228px] md:max-w-[407px] pt-5 m-auto">
      <Image src={bus} layout="responsive" alt="Bus" priority={true} />
    </div>
  );
};

export default BusImage;
