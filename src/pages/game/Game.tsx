import React, { useState } from "react";
import "./Game.css";
import Hands from "./Hands"

// const Item = styled(Paper)(({ theme }) => ({

//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,

//   // backgroundColor: "#222831", 

//   // padding: theme.spacing(1),
//   textAlign: "center",
//   //   color: theme.palette.text.secondary,
// }));

function GamePage() {
  return (
    <>
    <Hands/>
    </>
  );
}

export default GamePage;
