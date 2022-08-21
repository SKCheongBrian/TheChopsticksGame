import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Button from "../../../../components/button/Button";
import "./LoginSection.css";

export function LoginSection() {
  const navigate = useNavigate();

  return (
    <div className="login-section">
      <Button children="Create Account" onClick={() => navigate("/signup")} />
      <Button children="Sign In" onClick={() => navigate("/login")} />
      <Button children="Play as Guest" onClick={() => navigate("/createOrJoin")} />
    </div>
  );
}
