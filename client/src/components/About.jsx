import "./About.css";
import profile from "../assets/profile.jpeg";
export default function About() {
    return (
    <div className="about-container">
        <div className="about-left">
        <img className="about-photo" src={profile} alt="Profile" />
    </div>
    <div className="about-right">
        
        <p>
            I am a Computer Science student passionate about full-stack development, research, and leadership.I enjoy building scalable web applications and solving real-world problems through technology.I have experience in JavaScript, React, Node.js, and MongoDB.I am also a research enthusiast, exploring topics in AI and machine learning.I have held leadership roles in various student organizations, where I have honed my communication and teamwork skills.I am eager to contribute my skills and knowledge to impactful projects and continue learning in the ever-evolving tech landscape.
        </p>

      
        
    </div>
    </div>
    );
    }
    