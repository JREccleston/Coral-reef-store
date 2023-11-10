import './App.css';
import { NavbarWithMegaMenu } from './componets/NavBarWithMegaMenu';
import { NewPage } from './componets/NewPage';
import { SimpleFooter } from './componets/Footer';
import { HomePageCard } from './componets/HomePageCard';
import { lpsDesc, spsDesc, sftDesc, acroPic, hammerPic, zoaPic } from './componets/strings';




function App() {
  return (
    <div className=" bg-b2  w-full h-full">
      <div className='flex flex-row items-center justify-center'>
        <NavbarWithMegaMenu />
      </div>
      <div className="h-screen mt-32">
        <NewPage />
        <div className='flex flex-row items-center justify-center mt-20 gap-10'>
          <HomePageCard species={lpsDesc} coralType={"LPS"} coralImg={hammerPic} />

          <HomePageCard species={spsDesc} coralType={"SPS"} coralImg={acroPic} />

          <HomePageCard species={sftDesc} coralType={"Softies"} coralImg={zoaPic} />
        </div>
      </div>

      <div className="">
        <SimpleFooter />
      </div>

    </div>
  );
}

export default App;
