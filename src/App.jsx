import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Price from "./pages/Price";
import DataUsers from "./components/dashboard/admin/DataUsers";
import BookService from "./components/dashboard/user/BookService";
import ViewOrder from "./components/dashboard/user/ViewOrder";
import { Routes, Route } from "react-router-dom";
import SignUp from "./pages/SignUp.jsx";
import SignIn from "./pages/SignIn.jsx";
import DashboardLayout from "./components/layouts/DashboardLayout";
import DashboardHome from "./components/dashboard/DashboardHome";

import "./index.css";
import DataLaundry from "./components/dashboard/admin/DataLaundry";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthProvider from "./hooks/AuthProvider";

const App = () => {
  return (
    <AuthProvider>
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/price" element={<Price />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />

          <Route
            path="/dashboard/:role"
            element={
              <ProtectedRoute>
                <DashboardLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<DashboardHome />} />

            {/* admin */}
            <Route path="data-user" element={<DataUsers />} />
            <Route path="data-laundry" element={<DataLaundry />} />

            {/* user */}
            <Route path="book-service" element={<BookService />} />
            <Route path="view-orders" element={<ViewOrder />} />
          </Route>
        </Routes>
      </main>
    </AuthProvider>
  );
};

export default App;
