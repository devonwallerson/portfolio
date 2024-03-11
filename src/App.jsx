import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Education from './components/Education';
import Experience from './components/Experience';
import ProjectsHighlight from "./components/ProjectsHighlight";
import projectData from './data/projects.json';
import Contact from './components/Contact';



function App() {

  const allProjects = projectData;
  const[projects, setProject] = useState(allProjects.slice(0,3)); // Top three projects.
  const[currentPage, setCurrentPage] = useState('home');



  return (
    <div className = 'webpage'>
      <div className = 'navbar' id = "navbar">  
        <Navbar></Navbar>
      </div>

      <div className = 'intro-section' id = 'intro-section'>
        <Introduction></Introduction>
      </div>

      <div className = "education" id = "exp"> 
        <Education></Education>
      </div>

      <div className = "exp" > 
        <Experience></Experience>
      </div>

      <div className = "highproj">
        <ProjectsHighlight projects = {projects}/>
      </div>

      <div className = "contactMe" id = "contactMe">
        <Contact></Contact>
      </div>
    </div>
  )
}

export default App
