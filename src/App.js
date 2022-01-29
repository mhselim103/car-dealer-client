import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import Explore from "./Pages/Explore/Explore";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import ManageOrders from "./Pages/ManageOrders/ManageOrders";
import About from "./Pages/About/About";
import MyOrders from "./Pages/MyOrders/MyOrders";
import CarDetails from "./Pages/CarDetails/CarDetails";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Header from "./Pages/Shared/Header/Header";
import MakeAdmin from "./Pages/MakeAdmin/MakeAdmin";
import Payment from "./Pages/Payment/Payment";
import AddReview from "./Pages/Reviews/AddReview/AddReview";
import AddProduct from "./Pages/AddProduct/AddProduct";

function App() {
  return (
    <div className="bg-purple-50 app">
      <AuthProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/*" element={<Navigate to="home" />} />
            <Route path="home" element={<Home />} />
            <Route path="explore" element={<Explore />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="about" element={<About />} />
            <Route
              path="/cardetails/:id"
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
            >
              <Route path="myorders" element={<MyOrders />} />
              <Route path="pay" element={<Payment />} />
              <Route path="orders" element={<ManageOrders />} />
              <Route path="admin" element={<MakeAdmin />} />
              <Route path="newcar" element={<AddProduct />} />
              <Route path="review" element={<AddReview />} />
            </Route>
          </Routes>
          {/* <Footer></Footer> */}
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
