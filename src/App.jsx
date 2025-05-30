import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Price from "./pages/Price";
import Dashboard from "./components/layouts/Dashboard";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DataUsers from "./pages/dashboard/DataUsers";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
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
import DataLaundry from "./pages/dashboard/DataLaundry";

function App() {
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="data-user" element={<DataUsers />} />
          <Route path="data-laundry" element={<DataLaundry />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App;