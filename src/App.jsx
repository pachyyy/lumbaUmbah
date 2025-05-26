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

      <p className='font-rubik italic'>
        Jancok
      </p>
        
      <Footer/>
     </div>
    </>

  );
}

export default App;