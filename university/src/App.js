
import './App.css';
import React from 'react';
import NavBar from "./components/Nav";
import Home from './components/Home';
import About from './components/About';
import Iuc from './components/Iuc';
import Course from './components/Course';
import New from './components/New';
import NewDetail from './components/NewDetail';
import Footer from './components/Footer';
import {Routes,Route} from "react-router-dom";

function App() {
  return( <>
  <Routes>
  
    
    <Route path="/" element={<>
    <NavBar />
    <Home />
    <About />
    
    <Iuc />
    <Course />  
    <New />
    <Footer />
    </>} />
    <Route path="/newdetail/:id" element={<NewDetail/>} />
    </Routes>
   
    </>
  );
}

export default App;
