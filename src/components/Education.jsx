import React, { useState } from 'react'
import './Education.css';
import educationData from '../data/personal.json';


const Education = () => {

    const education = educationData[1];

  return (
    <>
    <div className = 'eduContainer'>
      <h1> &#127891;Education</h1>
      <h2><em>School: </em>{education["school"]}</h2>
      <h2><em>GPA: </em> {education["gpa"]}</h2>
      <h3><em>Relevant Coursework: </em> {education["coursework"]}</h3>
      <h3><em>{education['other']}</em></h3>
      <img src = 'njit.png'></img>
    </div>
    <p id = "expplace"></p>
    </>
  )
}

export default Education;
