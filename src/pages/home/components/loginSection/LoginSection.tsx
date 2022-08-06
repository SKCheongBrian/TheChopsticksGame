import React from "react";
import { Button } from "../../../../components/button/Button";
import "./LoginSection.css";

export function LoginSection() {
  return (
    <div className="login-section">
      <Button title="Create Account"></Button>
      <Button title="Sign In"></Button>
      <Button title="Play as Guest"></Button>
    </div>
  );
}
