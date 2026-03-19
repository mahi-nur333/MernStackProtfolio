// src/components/Project.jsx
import "./Project.css";

const projects = [
  {
    title: "Credit Card Fraud Detection",
    icon: "💳",
    description:
      "ML-based fraud detection using classification models with focus on imbalanced data handling and evaluation.",
    tech: ["Python", "Pandas", "Scikit-learn", "ML"],
    github:
      "https://github.com/mahi-nur333/Credit-Card-Fraud-Detection-Using-a-Machine-Learning-Approach.git",
    live: "",
  },
  {
    title: "House Price Prediction",
    icon: "🏠",
    description:
      "Regression analysis on housing dataset with preprocessing, feature engineering and model comparison.",
    tech: ["Python", "Regression", "EDA", "ML"],
    github:
      "https://github.com/mahi-nur333/MU_PDS01_Pamel_PDS-ID13_Regression-Analysis-with-Python-using-the-Ames-Housing-Dataset.git",
    live: "",
  },
  {
    title: "Portfolio Website",
    icon: "🌐",
    description:
      "It was my first portfolio which was beginer level, built with modern UI, glassmorphism cards, and responsive sections.",
    tech: ["React", "CSS", "Netlify"],
    github:
      "https://github.com/mahi-nur333/Web-Programming-Project_Personal-Portfolio-Website.git",
    live: "https://mrpamelportfolio.netlify.app/",
  },
];

export default function Projects() {
  return (
    <div>
      <p className="projectsIntro">
        A few things I've built — ML projects + web work.
      </p>

      <div className="projectsGrid">
        {projects.map((p) => (
          <article key={p.title} className="glassCard">
            <div className="cardTop">
              <span className="cardIcon" aria-hidden="true">
                {p.icon}
              </span>
              <h3 className="cardTitle">{p.title}</h3>
            </div>

            <p className="cardDesc">{p.description}</p>

            <div className="tags">
              {p.tech.map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="cardActions">
              <a
                className="btnGhost"
                href={p.github}
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>
              {p.live ? (
                <a
                  className="btnPrimary"
                  href={p.live}
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                </a>
              ) : (
                <button className="btnDisabled" disabled>
                  Live N/A
                </button>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}