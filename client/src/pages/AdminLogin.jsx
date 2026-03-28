import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./Admin.css";

export default function AdminLogin({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);
    try {
      const res = await fetch("http://localhost:5000/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("adminToken", data.token);
        onLogin();
      } else {
        setError("Invalid username or password!");
      }
    } catch (err) {
      setError("Something went wrong!");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="admin-page admin-login-page">
      <section className="admin-login-shell">
        <div className="admin-login-aside">
          <p className="admin-kicker">Mahinnur Rahman Pamel</p>
          <h1>Admin Portal</h1>
          <p>Manage projects and review incoming contact messages from one place.</p>
        </div>

        <form className="admin-login-form" onSubmit={handleSubmit}>
          <h2>Sign In</h2>
          <label htmlFor="admin-username">Username</label>
          <input
            id="admin-username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label htmlFor="admin-password">Password</label>
          <div className="admin-password-wrap">
            <input
              id="admin-password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="admin-password-toggle"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              aria-pressed={showPassword}
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <button
            className="admin-btn admin-btn-primary"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Signing in..." : "Login"}
          </button>
          {error && <p className="admin-error">{error}</p>}
        </form>
      </section>
    </div>
  );
}