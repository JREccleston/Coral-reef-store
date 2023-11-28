import './App.css';
import { NavbarWithMegaMenu } from './componets/NavBarWithMegaMenu';
import { HomePageText } from './componets/HomePageText';
import { SimpleFooter } from './componets/Footer';
import { HomePageCard } from './componets/HomePageCard';
import { lpsDesc, spsDesc, sftDesc, acroPic, hammerPic, zoaPic, lpsCategory, spsCategory, sftCategory } from './componets/strings';





function HomePage() {
  return (
    <div className=" bg-b2  w-full h-full">
      <div className='lg:pb-40 xs:pb-28 ms:pb-40 bs:pb-40'>
        <NavbarWithMegaMenu />
      </div>
      <div>
        <div className='ms:mt-20 bs:mt-20 xs:mt-20'>
          <HomePageText />
        </div>
        <div className='lg:flex lg:flex-row lg:items-center lg:justify-center lg:mt-20 lg:gap-10  flex flex-col items-center justify-center ms:gap-10 bs:gap-10 xs:items-center xs:justify-center xs:flex xs:flex-col xs:gap-10'>
          <HomePageCard species={lpsDesc} coralType={"LPS"} coralImg={hammerPic} coralCategory={lpsCategory} productPage={"/LpsPage"} />

          < HomePageCard species={spsDesc} coralType={"SPS"} coralImg={acroPic} coralCategory={spsCategory} productPage={"/SpsPage"} />

          <HomePageCard species={sftDesc} coralType={"Softies"} coralImg={zoaPic} coralCategory={sftCategory} productPage={"/SftPage"} />
        </div >
      </div >

      <div className="lg:mt-20 lg:pb-0 sticky top-[100vh] xs:mt-10 ms:mt-10 bs:mt-10">
        <SimpleFooter />
      </div>

    </div >
  );
}

export default HomePage;
