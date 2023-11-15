import './App.css';
import { NavbarWithMegaMenu } from './componets/NavBarWithMegaMenu';
import { HomePageText } from './componets/HomePageText';
import { SimpleFooter } from './componets/Footer';
import { HomePageCard } from './componets/HomePageCard';
import { lpsDesc, spsDesc, sftDesc, acroPic, hammerPic, zoaPic, lpsCategory, spsCategory, sftCategory } from './componets/strings';





function HomePage() {
  return (
    <div className=" bg-b2  w-full h-full">
      <div className='pb-40'>
        <NavbarWithMegaMenu />
      </div>
      <div>
        <HomePageText />
        <div className='flex flex-row items-center justify-center mt-20 gap-10'>
          <HomePageCard species={lpsDesc} coralType={"LPS"} coralImg={hammerPic} coralCategory={lpsCategory} productPage={"/LpsPage"} />

          <HomePageCard species={spsDesc} coralType={"SPS"} coralImg={acroPic} coralCategory={spsCategory} productPage={"/SpsPage"} />

          <HomePageCard species={sftDesc} coralType={"Softies"} coralImg={zoaPic} coralCategory={sftCategory} productPage={"/SftPage"} />
        </div>
      </div>

      <div className="mt-20 pb-0 sticky top-[100vh]">
        <SimpleFooter />
      </div>

    </div>
  );
}

export default HomePage;
