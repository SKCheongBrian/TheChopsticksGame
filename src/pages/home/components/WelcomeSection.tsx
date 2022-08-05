import React from "react";
import "./WelcomeSection.css";

export default function WelcomeSection() {
  return (
    <div className="box">
      <ul className="list">
        <li>Welcome to the Chopsticks Game!</li>
        <li>Create an account or play as a guest.</li>
        <li>If you already have an account, sign in to use your account.</li>
        <li>
          If you are not familiar with the rules of chopsticks, visit the how to
          play section below.
        </li>
      </ul>
    </div>
  );
}
