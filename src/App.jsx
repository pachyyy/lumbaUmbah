import NavBar from './components/NavBar.jsx';
import Footer from './components/Footer.jsx';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import "./index.css";

function App() {

  return (
    <>
     <div className='flex'>
      <NavBar />

      <main className='mx-auto w-full'>
        <div className='grid grid-cols-2 font-rubik mx-auto'>

          {/* Left */}
          <div className='flex items-center justify-between mx-auto h-full'>
            <p>
              "BIAR KAMI YANG <span className='font-bold italic'>UMBAH</span>"
            </p>

          </div>


          {/* Right */}
          <div className='mx-auto'>
            <p>Babi</p>
          </div>
        </div>
      </main>
        
      <Footer/>
     </div>
    </>

  );
}

export default App;