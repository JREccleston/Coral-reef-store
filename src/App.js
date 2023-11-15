import './App.css';
import { NavbarWithMegaMenu } from './componets/NavBarWithMegaMenu';
import { HomePage } from './componets/HomePage';
import { SimpleFooter } from './componets/Footer';
import { HomePageCard } from './componets/HomePageCard';
import { lpsDesc, spsDesc, sftDesc, acroPic, hammerPic, zoaPic, lpsCategory, spsCategory, sftCategory } from './componets/strings';





function App() {
  return (
    <div className=" bg-b2  w-full h-full">
      <div className='pb-40'>
        <NavbarWithMegaMenu />
      </div>
      <div>
        <HomePage />
        <div className='flex flex-row items-center justify-center mt-20 gap-10'>
          <HomePageCard species={lpsDesc} coralType={"LPS"} coralImg={hammerPic} coralCategory={lpsCategory} />

          <HomePageCard species={spsDesc} coralType={"SPS"} coralImg={acroPic} coralCategory={spsCategory} />

          <HomePageCard species={sftDesc} coralType={"Softies"} coralImg={zoaPic} coralCategory={sftCategory} />
        </div>
      </div>

      <div className="mt-20 pb-0 sticky top-[100vh]">
        <SimpleFooter />
      </div>

    </div>
  );
}

export default App;
