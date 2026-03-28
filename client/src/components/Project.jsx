// src/components/Project.jsx
import "./Project.css";
import { useEffect, useState } from "react";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setHasError(false);
        const response = await fetch("http://localhost:5000/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }

        const data = await response.json();
        setProjects(Array.isArray(data) ? data : []);
      } catch (_error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <p className="projectsIntro">
        A few things I've built — ML projects + web work.
      </p>

      {isLoading && <p className="projectsIntro">Loading projects...</p>}
      {hasError && <p className="projectsIntro">Could not load projects right now.</p>}
      {!isLoading && !hasError && projects.length === 0 && (
        <p className="projectsIntro">No projects available yet. Add one from your admin dashboard.</p>
      )}

      <div className="projectsGrid">
        {projects.map((p) => (
          <article key={p._id || p.name} className="glassCard">
            <div className="cardTop">
              <span className="cardIcon" aria-hidden="true">
                {p.icon || "📌"}
              </span>
              <h3 className="cardTitle">{p.name}</h3>
            </div>

            <p className="cardDesc">{p.description}</p>

            <div className="tags">
              {(typeof p.tech === "string" ? p.tech.split(",") : p.tech || [])
                .map((t) => String(t).trim())
                .filter(Boolean)
                .map((t) => (
                <span key={t} className="tag">
                  {t}
                </span>
              ))}
            </div>

            <div className="cardActions">
              {p.githubUrl ? (
                <a
                  className="btnGhost"
                  href={p.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              ) : (
                <button className="btnDisabled" disabled>
                  GitHub N/A
                </button>
              )}
              {p.liveUrl ? (
                <a
                  className="btnPrimary"
                  href={p.liveUrl}
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