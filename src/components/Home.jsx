import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🏥 Welcome to Hospital Token System</h1>

      <Link to="/create-account">
        <button>Create an Account</button>
      </Link>

      <br /><br />

      <Link to="/login">
        <button>Login</button>
      </Link>
    </div>
  );
}

export default Home;
