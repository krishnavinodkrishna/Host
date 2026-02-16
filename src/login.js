import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Welcome to our App</h1>

      <Link to="/create-account">
        <button>Create an Account</button>
      </Link>

      <p>
        Don't have an account?{" "}
        <Link to="/create-account">Create Account</Link>
      </p>

      <Link to="/token">
        <button>Go to Token System</button>
      </Link>
    </div>
  );
}

export default Home;
