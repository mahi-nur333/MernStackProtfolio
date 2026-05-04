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
Hi, I am Pamel, a Computer Science and Engineering student, full-stack developer, and research enthusiast focused on building practical, high-impact solutions.
    </p>
    
    <p>
I grew up in Balaganj, Sylhet, and my early involvement in community and leadership work shaped how I approach problems and teamwork.Now based in Sylhet, I am pursuing a BSc in CSE at Metropolitan University, where I focus on turning ideas into reliable software.
    </p>

    <p>
I build with JavaScript, React, Node.js, Express.js, and MongoDB, and I prioritize clean architecture, performance, and user experience.
    </p>

    <p>
Alongside development, I explore AI and machine learning research and enjoy leading initiatives, organizing teams, and collaborating across disciplines.
    </p>

    <p>
I am committed to continuous learning and creating real-world impact through technology.
    </p>

    </div>
    </div>
    );
    }
    