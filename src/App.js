import React,{useState} from "react";
import './App.css';
import BgBanner from './Components/BgBanner';
import Body1 from './Components/Body1';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import About from './Components/About';
import {
  HashRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Services from "./Components/Services";
import CounterUp from "./Components/CounterUp";
import h1 from './Images/home1.jpg'
import h2 from './Images/home2.jpg'
import h3 from './Images/home3.jpg'
import a1 from './Images/about1.jpg'
import a2 from './Images/about2.jpg'
import a3 from './Images/about3.jpg'
import c1 from './Images/contact1.jpg'
import c2 from './Images/contact2.jpg'
import c3 from './Images/contact3.jpg'

function App() {

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      message:message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  return (
    <Router>
      <Navbar scrollToTop={scrollToTop} alert={alert} />
      <Routes >

        <Route exact path='/' element={<><BgBanner key={1} img={[h1,h2,h3]} txt={["The TimberCraft","Design Your Dreams"]}/><Body1 /><CounterUp/></>} />
        <Route exact path='/home' element={<><BgBanner key={1} img={[h1,h2,h3]} txt={["The TimberCraft","Design Your Dreams"]}/><Body1 /><CounterUp/></>} />
        <Route exact path='/about' element={<><BgBanner key={2} img={[a1,a2,a3]} txt={["We Build Trust","Live In Future"]}/><About /></>} />
        <Route exact path='/services' element={<><BgBanner key={3} img={[a1,a2,a3]} txt={["Ultimate Designs","Affordable Prices"]}/><Services /></>} />
        <Route exact path='/contact' element={<><BgBanner key={4} img={[c1,c2,c3]} txt={["Raise Your Queries","Feel Free To Ask"]}/><Contact showAlert={showAlert} /></>} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
