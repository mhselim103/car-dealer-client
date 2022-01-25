import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Explore from "./Pages/Explore/Explore";
import Banner from "./Pages/Home/Banner/Banner";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Navigation/Header";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import About from "./Pages/About/About";
import Footer from "./Pages/Shared/Footer/Footer";
import AddNewDestination from "./Pages/AddNewDestination/AddNewDestination";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Booking from "./Pages/Booking/Booking";

function App() {
  return (
    <div className="bg-purple-50 app">
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/" element={<Navigation />} /> */}
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            {/* <Route path="/banner" element={<Banner />} /> */}
            <Route
              path="/orders"
              element={
                <PrivateRoute>
                  <MyOrders />
                </PrivateRoute>
              }
            />
            <Route
              path="/manageorders"
              element={
                <PrivateRoute>
                  <ManageOrders />
                </PrivateRoute>
              }
            />
            <Route
              path="/booking"
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            />
            <Route path="/about" element={<About />} />
            <Route
              path=":id"
              element={
                <PrivateRoute>
                  <Booking />
                </PrivateRoute>
              }
            />
            <Route
              path="/addNewDestination"
              element={
                <PrivateRoute>
                  <AddNewDestination />
                </PrivateRoute>
              }
            />
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
