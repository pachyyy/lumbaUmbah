import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import { Routes, Route } from "react-router-dom";
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
    <main className='main-content'>
     <Routes>
      <Route path="/" element={<Home/>} />
     </Routes>
    </main>
  );
}

export default App;