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
Hi, I’m Pamel — a Computer Science student, full-stack developer, and research enthusiast driven by curiosity and impact.
</p>

<p>
I grew up in Balaganj, Sylhet, where I was actively involved in community and leadership activities that shaped my mindset and problem-solving approach.
</p>

<p>
I later moved to Sylhet and am currently pursuing my BSc. in CSE  at Metropolitan University, where I discovered my passion for building real-world solutions through technology.
</p>

<p>
I work with JavaScript, React, Node.js, and MongoDB to create scalable web applications that solve meaningful problems.
</p>

<p>
Alongside development, I explore AI and machine learning research and enjoy leading teams, organizing initiatives, and collaborating with others.
</p>

<p>
I’m passionate about continuous learning, collaboration, and creating impact through technology.
</p>
          
    </div>
    </div>
    );
    }
    