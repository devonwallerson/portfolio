import React, { useState } from 'react'
import './Introduction.css';
import introductionData from '../data/personal.json';


const Introduction = () => {

    const me = introductionData[0];

  return (
    <div className = 'container'>
      <div className = 'photo'>
        <img src = 'devon.jpg'></img>
      </div>
      <div className = 'introduction'>
        <h1>{me.h1}</h1>
        <h3>{me.h3}&#128021;</h3>
      </div>
    </div>
  )
}

export default Introduction;
