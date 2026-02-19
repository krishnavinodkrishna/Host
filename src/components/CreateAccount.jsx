import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateAccount() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !username || !password) {
      alert("Please fill in all fields.");
      return;
    }

    setLoading(true);
    // Simulate a brief delay for "premium" feel
    setTimeout(() => {
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
      setLoading(false);
      alert("Account Created Successfully! Welcome to HospitalPlus.");
      navigate("/login");
    }, 1000);
  };

  return (
    <div style={styles.container}>
      <div className="glass-card" style={styles.card}>
        <div style={styles.header}>
          <h2 style={styles.title}>Join HospitalPlus</h2>
          <p style={styles.subtitle}>Create your professional provider account</p>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.inputGroup}>
            <label style={styles.label}>Full Name</label>
            <input
              placeholder="Dr. John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Username</label>
            <input
              placeholder="johndoe_md"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={styles.input}
            />
          </div>

          <div style={styles.inputGroup}>
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
            />
          </div>

          <button
            type="submit"
            style={{
              ...styles.button,
              backgroundColor: loading ? "#a5b4fc" : "#5b6cff",
              cursor: loading ? "not-allowed" : "pointer"
            }}
            disabled={loading}
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>
        </form>

        <p style={styles.footer}>
          Already have an account? <span style={styles.link} onClick={() => navigate("/login")}>Login</span>
        </p>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "450px",
    padding: "40px",
    textAlign: "center",
    animation: "fadeIn 0.6s ease-out",
  },
  header: {
    marginBottom: "30px",
  },
  title: {
    fontSize: "2rem",
    color: "#1e293b",
    marginBottom: "8px",
  },
  subtitle: {
    color: "#64748b",
    fontSize: "0.95rem",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    textAlign: "left",
  },
  inputGroup: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
  },
  label: {
    fontSize: "0.85rem",
    fontWeight: "600",
    color: "#475569",
    marginLeft: "4px",
  },
  button: {
    color: "#fff",
    padding: "14px",
    fontSize: "1rem",
    fontWeight: "600",
    marginTop: "10px",
    boxShadow: "0 4px 15px rgba(91, 108, 255, 0.2)",
  },
  footer: {
    marginTop: "25px",
    fontSize: "0.9rem",
    color: "#64748b",
  },
  link: {
    color: "#5b6cff",
    fontWeight: "600",
    cursor: "pointer",
    marginLeft: "5px",
  },
};

export default CreateAccount;
