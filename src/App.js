import './App.css';
import { NavbarWithMegaMenu } from './componets/NavBarWithMegaMenu';
import { NewPage } from './componets/NewPage';
import { SimpleFooter } from './componets/Footer';
import { HomePageCard } from './componets/HomePageCard';

function App() {
  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-300  w-full h-screen">
      <div>
        <NavbarWithMegaMenu />
      </div>
      <div className="h-screen">
        <NewPage />
        <div className='flex flex-row items-center justify-center'>
          <HomePageCard />
          <HomePageCard />
          <HomePageCard />
        </div>
      </div>

      <div className="">
        <SimpleFooter />
      </div>

    </div>
  );
}

export default App;
