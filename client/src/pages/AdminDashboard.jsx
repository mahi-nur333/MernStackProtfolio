import { useState, useEffect } from "react";
import "./Admin.css";

export default function AdminDashboard({ onLogout }) {
  const [projects, setProjects] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [isRefreshingContacts, setIsRefreshingContacts] = useState(false);
  const [deletingContactId, setDeletingContactId] = useState("");
  const [newProject, setNewProject] = useState({ name: "", icon: "", tech: "", description: "", githubUrl: "", liveUrl: "" });

  const token = localStorage.getItem("adminToken");

  const fetchContacts = async () => {
    setIsRefreshingContacts(true);
    try {
      const response = await fetch("https://m-r-pamel.onrender.com/api/contacts", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const data = await response.json();
      setContacts(Array.isArray(data) ? data : []);
    } finally {
      setIsRefreshingContacts(false);
    }
  };

  useEffect(() => {
    fetch("https://m-r-pamel.onrender.com/api/projects")
      .then((res) => res.json())
      .then((data) => setProjects(data));

    fetchContacts();
    const intervalId = setInterval(fetchContacts, 15000);

    return () => clearInterval(intervalId);
  }, [token]);

  const handleAddProject = async (e) => {
    e.preventDefault();
    await fetch("https://m-r-pamel.onrender.com/api/projects", {
      method: "POST",
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
      body: JSON.stringify(newProject),
    });
    setNewProject({ name: "", icon: "", tech: "", description: "", githubUrl: "", liveUrl: "" });
    const updated = await fetch("https://m-r-pamel.onrender.com/api/projects").then((r) => r.json());
    setProjects(updated);
  };

  const handleDeleteProject = async (id) => {
    await fetch(`https://m-r-pamel.onrender.com/api/projects/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
    setProjects(projects.filter((p) => p._id !== id));
  };

  const handleDeleteContact = async (id) => {
    setDeletingContactId(id);
    try {
      await fetch(`https://m-r-pamel.onrender.com/api/contacts/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });
      setContacts((prevContacts) => prevContacts.filter((c) => c._id !== id));
    } finally {
      setDeletingContactId("");
    }
  };

  return (
    <div className="admin-page admin-dashboard-page">
      <div className="admin-dashboard-container">
        <header className="admin-dashboard-header">
          <div>
            <p className="admin-kicker">Control Center</p>
            <h2>Admin Dashboard</h2>
          </div>
          <button className="admin-btn admin-btn-secondary" onClick={onLogout}>Logout</button>
        </header>

        <section className="admin-stats-grid">
          <article className="admin-stat-card">
            <h4>Total Projects</h4>
            <p>{projects.length}</p>
          </article>
          <article className="admin-stat-card">
            <h4>Contact Messages</h4>
            <p>{contacts.length}</p>
          </article>
        </section>

        <section className="admin-panel-card">
          <h3>Add New Project</h3>
          <form className="admin-form-grid" onSubmit={handleAddProject}>
            <input placeholder="Name" value={newProject.name} onChange={(e) => setNewProject({ ...newProject, name: e.target.value })} required />
            <input placeholder="Icon (emoji)" value={newProject.icon} onChange={(e) => setNewProject({ ...newProject, icon: e.target.value })} />
            <input placeholder="Tech (comma separated)" value={newProject.tech} onChange={(e) => setNewProject({ ...newProject, tech: e.target.value })} required />
            <textarea placeholder="Description" value={newProject.description} onChange={(e) => setNewProject({ ...newProject, description: e.target.value })} required />
            <input placeholder="GitHub URL" value={newProject.githubUrl} onChange={(e) => setNewProject({ ...newProject, githubUrl: e.target.value })} />
            <input placeholder="Live URL" value={newProject.liveUrl} onChange={(e) => setNewProject({ ...newProject, liveUrl: e.target.value })} />
            <button className="admin-btn admin-btn-primary" type="submit">Add Project</button>
          </form>
        </section>

        <section className="admin-panel-card">
          <h3>Projects</h3>
          {projects.length === 0 ? (
            <p className="admin-muted">No projects yet.</p>
          ) : (
            <div className="admin-list">
              {projects.map((p) => (
                <div key={p._id} className="admin-list-row">
                  <span className="admin-project-title">{p.icon} {p.name}</span>
                  <button className="admin-btn admin-btn-danger" onClick={() => handleDeleteProject(p._id)}>Delete</button>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="admin-panel-card">
          <div className="admin-section-head">
            <h3>Contact Messages</h3>
            <button
              className="admin-btn admin-btn-secondary"
              type="button"
              onClick={fetchContacts}
              disabled={isRefreshingContacts}
            >
              {isRefreshingContacts ? "Refreshing..." : "Refresh"}
            </button>
          </div>
          {contacts.length === 0 ? (
            <p className="admin-muted">No contact messages yet.</p>
          ) : (
            <div className="admin-messages">
              {contacts.map((c) => (
                <article key={c._id} className="admin-message-card">
                  <div className="admin-message-top">
                    <p className="admin-message-header"><strong>{c.name}</strong> <span>{c.email}</span></p>
                    <button
                      className="admin-btn admin-btn-danger"
                      type="button"
                      onClick={() => handleDeleteContact(c._id)}
                      disabled={deletingContactId === c._id}
                    >
                      {deletingContactId === c._id ? "Deleting..." : "Delete"}
                    </button>
                  </div>
                  <p className="admin-message-subject">{c.subject}</p>
                  <p>{c.message}</p>
                </article>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
}