import React from 'react';
import './Navbar.css';


const Navbar = () => {

    const handleScroll = (e, id) => {
        e.preventDefault();
        console.log('Scrolling to:', id); // Debug log
        const destination = document.getElementById(id);
        if (destination) {
            destination.scrollIntoView({ behavior: 'smooth' });
        } else {
            console.log('Element not found:', id); // Debug log
        }
    };
    
    
    
    return (
        <div className = 'navbar'>
            <div className = 'normalLinks'>
                <ul>
                <li><a href="#navbar" onClick={(e) => handleScroll(e, 'intro-section')}>Home</a></li>
                <li><a href='resume.pdf' target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><a href="#exp" onClick={(e) => handleScroll(e, 'expplace')}>Work Experience</a></li>
                <li><a href="#exp" onClick={(e) => handleScroll(e, 'projectHigh')}>Projects</a></li>
                    <li><a href="#contactMe" onClick={(e) => handleScroll(e, 'contactMe')}>Contact</a></li>
                </ul>
            </div>
            <div className = 'logos'>
                <a href = "https://linkedin.com/in/devon-wallerson-166391267/" target="_blank" rel="noopener noreferrer"><img src = 'linkedin.ico' ></img></a>
                <a href = "https://github.com/devonwallerson" target="_blank" rel="noopener noreferrer"><img src = 'github.ico' ></img></a>
                <a href = "mailto:devonwallerson@gmail.com" target="_blank" rel="noopener noreferrer"><img src = 'gmail.ico' ></img></a>
            </div>
        </div>
    )
}

export default Navbar;