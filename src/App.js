import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Banner from "./Pages/Home/Banner/Banner";
import Home from "./Pages/Home/Home";
import Header from "./Pages/Shared/Navigation/Header";
import Navigation from "./Pages/Shared/Navigation/Navigation";

function App() {
  return (
    <div className="bg-purple-50 app">
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Navigation />} /> */}
          <Route path="/" element={<Home />} />
          {/* <Route path="/banner" element={<Banner />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
