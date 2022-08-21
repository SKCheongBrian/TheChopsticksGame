import React, { useState } from "react";
import Game from "./model/Game";
import "./Game.css";
import Hands from "./Hands";
import CreateOrJoin from "../createOrJoin/CreateOrJoin";

// const Item = styled(Paper)(({ theme }) => ({

//     backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//     ...theme.typography.body2,

//   // backgroundColor: "#222831",

//   // padding: theme.spacing(1),
//   textAlign: "center",
//   //   color: theme.palette.text.secondary,
// }));

// game exist? no -> show modal to create / join
// yes -> check whether has 2 players inside? No -> continue showing modal but with game Id to give friend (maybe copy to clipboard button)
//   yes -> show game

// whether there is a current game ? show game : show a modal to allow user to create / join

// useState game {}

function GamePage() {
  const [game, setGame] = useState({} as Game);
  const [userId, setUserId] = useState("" as string);
  const [gameId, setGameId] = useState("" as string);
  const [ws, setWs] = useState(new WebSocket("ws://localhost:4000") as WebSocket);
  ws.onmessage = (message) => {
    const response = JSON.parse(message.data);
    switch(response.method) {
      case "connect":
        setUserId(response.userId);
        break;
      case "create":
        setGameId(response.gameId);
        break;
    }
  };
  return (
    <>
    <CreateOrJoin ws={ws} userId={userId} gameId={gameId} game={game} setGame={setGame} />
      {/* <Hands game={game} ws={ws}/> */}
    </>
  );
}

export default GamePage;
