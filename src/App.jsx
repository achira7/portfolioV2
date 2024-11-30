import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
//import Navbar from "./components/navbar/Navbar";
import CustomNavbar from "./components/navbar/Navbar";


function App() {
  return (
    
      <Router>
        <CustomNavbar  />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
  );
}

export default App;
