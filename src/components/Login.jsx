import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("username");
    const savedPass = localStorage.getItem("password");

    if (username === savedUser && password === savedPass) {
      navigate("/dashboard");
    } else {
      alert("Invalid Login");
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <input placeholder="Username" onChange={(e) => setUsername(e.target.value)} /><br /><br />
        <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} /><br /><br />
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
