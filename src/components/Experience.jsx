import React, { useState } from 'react'
import './Experience.css';
import workExp from '../data/personal.json';

const Experience = () => {

  const [category,setCategory] = useState('workExperiences')

  const categories = {
    workExperiences : workExp[2]["workExperiences"],
    professionalDevelopment : workExp[3]["professionalDevelopment"],
    volunteerWork: workExp[4]["volunteerWork"]
  };

  return (
    <div className = "experienceWrapper"> 
              <h1>&#128188;Experiences</h1>
      <div className = "buttonsExp" id = "expbuttons">
        {Object.keys(categories).map((key) => (
          <button key={key} onClick={() => setCategory(key)}>
            {key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())} {/* Beautify the category keys */}
          </button>
        ))}
      </div>
      <div className = "companies">
        {categories[category].map((item, index) => (
          <div key={index} className="experience">
          <img src={`${item.logo}`} alt={`${item.company} logo`} />
            <div>
              <h2>{item.company}</h2>
              <h3>{item.role}</h3>
              <h3>{item.stack}</h3>
              <h4>{item.dates}</h4>
            </div>
          </div>
        ))}
      </div>
      <p id = 'projectHigh'></p>
    </div>
  );
};

export default Experience;
