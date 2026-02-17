import { Link } from "react-router-dom";
import Login from "./CreateAccount";

function Home() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🏥 Welcome to Hospital Token System</h1>

      <Link to="/Login">
        <button>Login</button>
      </Link>

      <br /><br />

      <Link to="/create-account">
        <button>Create Account</button>
      </Link>
      <Login />
    </div>
  );
}

export default Home;
