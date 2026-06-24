import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Home from "./Components/Home";

export default function App(){
  return(
    <div>
      <h1>Kodnset Technologies</h1>
      <Navbar/>
      <Routes>
        <Route path="/home" element = {<Home/>}></Route>
        <Route path="/about" element = {<About/>}></Route>
        <Route path="/contact" element = {<Contact/>}></Route>
      </Routes>
    </div>
  )
}