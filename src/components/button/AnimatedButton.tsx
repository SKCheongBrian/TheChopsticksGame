import React, { useState } from "react";
import Button from "./Button";

const AnimatedButton = () => {
  const [shake, setShake] = useState(false);

  const animate = () => {
    // Button begins to shake
    setShake(true);

    // Buttons stops to shake after 2 seconds
    setTimeout(() => setShake(false), 2000);
  };

  return (
    <Button onClick={animate} className={shake ? `shake` : undefined}></Button>
  );
};

export default AnimatedButton;
