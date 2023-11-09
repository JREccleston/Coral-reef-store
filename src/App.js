import './App.css';
import { NavbarWithMegaMenu } from './componets/NavBarWithMegaMenu';
import { NewPage } from './componets/NewPage';
import { SimpleFooter } from './componets/Footer';
import { HomePageCard } from './componets/HomePageCard';
import { lpsDesc, spsDesc, sftDesc } from './componets/strings';


function App() {
  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-300  w-full h-full">
      <div className='flex flex-row items-center justify-center'>
        <NavbarWithMegaMenu />
      </div>
      <div className="h-screen mt-32">
        <NewPage />
        <div className='flex flex-row items-center justify-center mt-20 gap-10'>
          <HomePageCard species={lpsDesc} />

          <HomePageCard species={spsDesc} />

          <HomePageCard species={sftDesc} />
        </div>
      </div>

      <div className="">
        <SimpleFooter />
      </div>

    </div>
  );
}

export default App;
