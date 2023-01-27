import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import SideMenu from '../Navigation/SideManu';

const Sidebar = () => {
  return (
    <div
      className='bg-[var(--bg-lighten)] h-full grid grid-rows-[[header]auto_[content]1fr_[footer]auto] 
        px-6 py-10 border-r-2 border-r-[var(--border)] border-solid fixed top-0 left-[-110%] 
        md:static'
    >
      <Header />
      <aside className='pt-20 pb-10'>
        <SideMenu />
      </aside>
      <Footer />
    </div>
  );
};

export default Sidebar;
