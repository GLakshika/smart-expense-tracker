import { useState } from "react";
import {loginUser} from "../api";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); 
    try {
      const res = await loginUser( {
        email,
        password,
      });
      console.log(res.data);
      alert("Login successful!");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Login failed!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
        <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
}
