import React from 'react';
import Navbar from './components/navbar/navbar';
import './App.css'
import { BrowserRouter as Router,Routes, Route, Navigate } from 'react-router-dom';
import Home from "./components/pages/Home/Home.js"
import About from "./components/pages/About/About.js"
import CV from "./components/pages/CV/Cv.js"
import Transcripts from "./components/pages/Transcript/Transcripts.js"
import WE from "./components/pages/WE/WorkingExperiences.js"
import Skills from "./components/pages/Skills/Skills.js"
import Footer from './components/Footer/Footer'
import Researches from './components/pages/Research/Research.js'
function App() {
  return (
    <div>
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element ={<Navigate replace to="/React-Website" />} />
        <Route path='/React-Website' element ={<Home />}/>
        <Route path='/about' element ={<About />}/>
        <Route path='/cv' element ={<CV />}/>
        <Route path='/transcripts' element ={<Transcripts />}/>
        <Route path='/workingexperiences' element ={<WE />}/>
        <Route path='/skills' element ={<Skills />}/>
        <Route path='/researches' element ={<Researches/>}/>
      </Routes>
      <Footer/>
    </Router>

    </div>
  );
}

export default App;
