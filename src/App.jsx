import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Price from "./pages/Price";
import AdminDashboard from "./components/layouts/AdminDashboard";
import AdminDashboardHome from "./pages/adminDashboard/AdminDashboardHome";
import DataUsers from "./pages/adminDashboard/DataUsers";
import UserDashboardHome from "./pages/userDashboard/UserDashboardHome";
import UserDashboard from "./components/layouts/UserDashboard";
import BookService from "./pages/userDashboard/BookService";
import ViewOrder from "./pages/userDashboard/ViewOrder";
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
import DataLaundry from "./pages/adminDashboard/DataLaundry";

const App = () =>{
  return (
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/price" element={<Price />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/admin-dashboard" element={<AdminDashboard />}>
          <Route index element={<AdminDashboardHome />} />
          <Route path="data-user" element={<DataUsers />} />
          <Route path="data-laundry" element={<DataLaundry />} />
        </Route>
        <Route path="/user-dashboard" element={<UserDashboard />}>
          <Route index element={<UserDashboardHome />} />
          <Route path="book-service" element={<BookService />} />
          <Route path="view-orders" element={<ViewOrder />} />
        </Route>

      </Routes>
    </main>
  )
}

export default App;