import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Result from "./components/Result";
import Admin from "./components/Admin";
import "./App.css";
import Home from "./components/Home";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
      <Navbar />
        <Routes>

        <Route path="/"element={<Home/>}/>
        <Route path="/register"element={<Register/>}/>
        <Route path="/admin"element={<Admin/>}/>
        <Route path="/result"element={<Result/>}/>
      
        </Routes>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;
