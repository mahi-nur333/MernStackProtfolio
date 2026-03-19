import { useState } from "react";
import "./Navbar.css";
 export default function Navbar() {
    const[open, setOpen] = useState(false);
    return (    
        <nav className="nav">
            <div className="nav-logo">Mahinur Rahman Pamel</div>

            <div className="nav-links desktop">
                <a href="#home">Home</a>
                <a href="#education">Education</a>
                <a href="#experience">Experience</a>
                <a href="#publications">Publications</a>
                <a href="#projects">Projects</a>
                <a href="#leadership">Leadership</a>
                <a href="#awards">Awards</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
            </div>

            <button
                type="button"
                className="nav-toggle"
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="nav-mobile-menu"
            >
                ☰
            </button>
            {open &&(
                <div id="nav-mobile-menu" className="nav-mobile">
                    <a href="#home" onClick={() => setOpen(false)}>Home</a>
                    <a href="#education" onClick={() => setOpen(false)}>Education</a>
                    <a href="#experience" onClick={() => setOpen(false)}>Experience</a>
                    <a href="#publications" onClick={() => setOpen(false)}>Publications</a> 
                    <a href="#projects" onClick={() => setOpen(false)}>Projects</a>
                    <a href="#leadership" onClick={() => setOpen(false)}>Leadership</a>
                    <a href="#awards" onClick={() => setOpen(false)}>Awards</a>
                    <a href="#about" onClick={() => setOpen(false)}>About</a>
                    <a href="#contact" onClick={() => setOpen(false)}>Contact</a>

                </div>
            )}
        </nav>
    );

}

