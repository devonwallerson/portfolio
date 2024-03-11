import React from 'react';

const Projects = ({project}) => {
    return(
        <div className = 'project'>
            <img src = {project.photo} />
            <div className = "cardBody">
                <h2 className = "title">{project.name}</h2>
                <h3 className = "description">{project.description}</h3>
                <h4 className = "description">Stack: {project.stack}</h4>
                <a href = {project.link}>
                    <button>Github</button>
                </a>
            </div>
        </div>
    )
}

export default Projects;