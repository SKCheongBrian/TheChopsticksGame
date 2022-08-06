import React from "react";
import { LoginSection } from "./components/loginSection/LoginSection";
import WelcomeSection from "./components/welcomeSection/WelcomeSection";
import "./HomePage.css";
import Accordion from "../../components/accordion/Accordion"

function HomePage() {
  return (
    <>
      <div className="title-container">
        <h1 className="text-center font-['Press_Start_2P'] font-bold text-2xl">
          The Chopsticks Game
        </h1>
      </div>
      <WelcomeSection></WelcomeSection>
      <LoginSection></LoginSection>
      <Accordion></Accordion>
    </>
  );
}

export default HomePage;
