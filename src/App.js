import './App.css';
import { NavbarWithMegaMenu } from './componets/NavBarWithMegaMenu';
import { NewPage } from './componets/NewPage';
import { SimpleFooter } from './componets/Footer';

function App() {
  return (
    <div className=" bg-gradient-to-r from-cyan-500 to-blue-300  w-full h-screen">
      <div>
        <NavbarWithMegaMenu />
      </div>
      <div className="h-screen">
        <NewPage />
      </div>
      <div className="">
        <SimpleFooter />
      </div>

    </div>
  );
}

export default App;
