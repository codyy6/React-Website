import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.css'
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/pages/Home/Home.js"
import About from "./components/pages/About/About.js"
import CV from "./components/pages/CV/Cv.js"
import Transcripts from "./components/pages/Transcript/Transcripts.js"
import WE from "./components/pages/WE/WorkingExperiences.js"
import Footer from './components/Footer/Footer'
function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/web/' element ={<Navigate replace to="/home" />} />
        <Route path='/web/home' element ={<Home />}/>
        <Route path='/web/about' element ={<About />}/>
        <Route path='/web/cv' element ={<CV />}/>
        <Route path='/web/transcripts' element ={<Transcripts />}/>
        <Route path='/web/workingexperiences' element ={<WE />}/>
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
