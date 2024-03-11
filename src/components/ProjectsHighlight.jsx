import React from 'react';
import Projects from './Projects';
import './Projects.css'


const ProjectsHighlight = ({projects}) => {
    return(
        <>
        <div className = "highlightwrapper">
            <h1>&#129302;Highlighted Projects</h1>
        </div>
        <div className = "highlightProjects">
            {projects.map((project,index) => (
                <Projects key = {index} project = {project} />
            ))}
        </div>
        <div className = "highlightwrapper">
            <a href = 'https://github.com/devonwallerson' target="_blank" rel="noopener noreferrer">
                <button>&#128194;All Projects</button>
            </a>
            <a href='resume.pdf' target="_blank" rel="noopener noreferrer">
                <button> &#128196;Resume </button>
            </a>
            <a href= 'https://www.linkedin.com/in/devon-wallerson-166391267/' target="_blank" rel="noopener noreferrer">
                <button> &#128241;LinkedIn </button>
            </a>
        </div>
        </>
    )
}

export default ProjectsHighlight;