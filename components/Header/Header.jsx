import logo from '@/public/film-camera-icon.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <header>
      <div className='flex items-baseline'>
        <Image
          className='mr-4'
          src={logo}
          width={30}
          height={30}
          alt='Logo'
        />
        <span className='font-bold text-white tracking-wider  text-3xl'>MOVIES</span>
      </div>
    </header>
  );
};

export default Header;
