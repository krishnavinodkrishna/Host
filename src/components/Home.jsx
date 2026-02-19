import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <header style={styles.hero}>
        <div className="glass-card" style={styles.heroCard}>
          <h1 style={styles.title}>Welcome to HospitalPlus</h1>
          <p style={styles.subtitle}>
            A modern, efficient token management system for healthcare providers.
            Streamlining patient care, one token at a time.
          </p>
          <div style={styles.ctaGroup}>
            <button
              onClick={() => navigate("/create-account")}
              style={styles.primaryBtn}
            >
              Get Started
            </button>
            <button
              onClick={() => navigate("/login")}
              style={styles.secondaryBtn}
            >
              Partner Login
            </button>
          </div>
        </div>
      </header>

      <section style={styles.features}>
        <div style={styles.feature}>
          <span style={styles.icon}>⚡</span>
          <h3>Fast Queueing</h3>
          <p>Reduce wait times with our automated dispatch system.</p>
        </div>
        <div style={styles.feature}>
          <span style={styles.icon}>📊</span>
          <h3>Analytics</h3>
          <p>Track patient flow and provider efficiency in real-time.</p>
        </div>
        <div style={styles.feature}>
          <span style={styles.icon}>🔒</span>
          <h3>Secure Data</h3>
          <p>Enterprise-grade security for patient confidentiality.</p>
        </div>
      </section>
    </div>
  );
}

const styles = {
  container: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "40px 20px",
  },
  hero: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "80px",
  },
  heroCard: {
    padding: "60px",
    maxWidth: "800px",
    textAlign: "center",
  },
  title: {
    fontSize: "3rem",
    color: "#1e293b",
    marginBottom: "20px",
    lineHeight: "1.1",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#475569",
    marginBottom: "40px",
    lineHeight: "1.6",
  },
  ctaGroup: {
    display: "flex",
    gap: "20px",
    justifyContent: "center",
  },
  primaryBtn: {
    background: "#5b6cff",
    color: "#fff",
    padding: "16px 32px",
    fontSize: "1.1rem",
    boxShadow: "0 4px 15px rgba(91, 108, 255, 0.3)",
  },
  secondaryBtn: {
    background: "transparent",
    color: "#5b6cff",
    border: "2px solid #5b6cff",
    padding: "14px 30px",
    fontSize: "1.1rem",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
  },
  feature: {
    textAlign: "center",
    padding: "20px",
  },
  icon: {
    fontSize: "2.5rem",
    display: "block",
    marginBottom: "15px",
  },
};

export default Home;
