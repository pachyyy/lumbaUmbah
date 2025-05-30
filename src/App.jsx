import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Price from "./pages/Price";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp";
// import {
//   NavigationMenu,
//   NavigationMenuContent,
//   NavigationMenuIndicator,
//   NavigationMenuItem,
//   NavigationMenuLink,
//   NavigationMenuList,
//   NavigationMenuTrigger,
//   NavigationMenuViewport,
// } from "@/components/ui/navigation-menu"

import "./index.css";

function App() {

  return (
    <main className='main-content'>
     <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/price" element={<Price/>} />
      <Route path="/about-us" element={<AboutUs/>} />
      <Route path="/signup" element={<SignUp/>} />
     </Routes>
    </main>
  );
}

export default App;