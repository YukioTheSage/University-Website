
import './App.css';
import React from 'react';
import NavBar from "./components/Nav";
import Home from './components/Home';
import About from './components/About';
import Iuc from './components/Iuc';
import Course from './components/Course';
import New from './components/New';
import Footer from './components/Footer';

function App() {
  return( <>
  
  <NavBar />
    <Home />
    <About />
    
    <Iuc />
    <Course />  
    <New />
    <Footer />
    
   
    </>
  );
}

export default App;
