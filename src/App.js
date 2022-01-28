import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Explore from "./Pages/Explore/Explore";
import Banner from "./Pages/Home/Banner/Banner";
import Home from "./Pages/Home/Home";
import Navigation from "./Pages/Shared/Navigation/Navigation";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import About from "./Pages/About/About";
import Footer from "./Pages/Shared/Footer/Footer";
import MyOrders from "./Pages/MyOrders/MyOrders";
import CarDetails from "./Pages/CarDetails/CarDetails";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./Pages/Shared/Header/Header";

function App() {
  return (
    <div className="bg-purple-50 app">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            {/* <Route path="/" element={<Navigation />} /> */}
            <Route path="/*" element={<Navigate to="/home" />} />
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/banner" element={<Banner />} /> */}
            <Route
              path="/orders"
              element={
                <PrivateRoute>
                  <MyOrders />
                </PrivateRoute>
              }
            />
            {/* <Route
              path="/manageorders"
              element={
                <PrivateRoute>
                  <ManageOrders />
                </PrivateRoute>
              }
            /> */}
            <Route
              path=":id"
              element={
                <PrivateRoute>
                  <CarDetails />
                </PrivateRoute>
              }
            />

            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            >
              <Route path="myorders" element={<MyOrders />} />
            </Route>
          </Routes>
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
