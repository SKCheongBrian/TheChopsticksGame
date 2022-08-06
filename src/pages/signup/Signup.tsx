import React, { useState } from "react";
import "./Signup.css";

function SignupPage() {
  const handleChange = (event: any) => {};

  const handleSubmit = (event: any) => {};

  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h2>Create Account</h2>
        <form onSubmit={handleSubmit} noValidate>
          <div className="username">
            <label>Full Name</label>
            <input type="text" name="fullName" onChange={handleChange} />
          </div>
          <div className="email">
            <label>Email</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div className="password">
            <label>Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div className="password">
            <label>Confirm Password</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <div className="submit">
            <button>Register</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage;
