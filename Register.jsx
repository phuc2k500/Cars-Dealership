import React, { useState } from "react";

const Register = () => {
  const [userName, setUserName] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    console.log("Đăng ký thành công với:", { userName, firstName, lastName, email });
  };

  return (
    <div className="register-container" style={{ padding: "20px", maxWidth: "400px", margin: "0 auto" }}>
      <h2>Sign-up</h2>
      <form onSubmit={handleRegister}>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block" }}>Username:</label>
          <input type="text" value={userName} onChange={(e) => setUserName(e.target.value)} required style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block" }}>First Name:</label>
          <input type="text" value={firstName} onChange={(e) => setUserName(e.target.value)} required style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block" }}>Last Name:</label>
          <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block" }}>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required style={{ width: "100%", padding: "8px" }} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label style={{ display: "block" }}>Password:</label>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required style={{ width: "100%", padding: "8px" }} />
        </div>
        <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#007bff", color: "#fff", border: "none", cursor: "pointer" }}>Register</button>
      </form>
    </div>
  );
};

export default Register;
