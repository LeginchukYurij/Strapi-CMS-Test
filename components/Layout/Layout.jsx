import { useEffect } from 'react';
import MainSidebar from '../MainSidebar/MainSidebar';
import SecondarySidebar from '../SecondarySidebar/SecondarySidebar';
import { debaunce } from '@/utils/debaunce';

const Layout = ({ children }) => {
  useEffect(() => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    const recalculateVh = () => {
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    };

    const processChange = debaunce(recalculateVh, 500);

    window.addEventListener('resize', processChange);

    return () => {
      window.removeEventListener('resize', processChange);
    };
  }, []);

  return (
    <div
      className='w-full h-screen h-[calc(100*var(--vh,1vh))] bg-[var(--bg-dark)] grid 
    xl:grid-cols-[[mainSidebar]300px_[content]1fr_[secondarySidebar]320px] 
    md:grid-cols-[[mainSidebar]250px_[content]1fr_[secondarySidebar]80px] 
    grid-cols-[[content]1fr]'
    >
      <MainSidebar />
      <div className='h-full px-6 py-10'>
        Content
        {children}
      </div>
      <SecondarySidebar />
    </div>
  );
};

export default Layout;
