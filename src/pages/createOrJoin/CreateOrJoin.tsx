import React, { useState } from "react";
import { isJSDocDeprecatedTag } from "typescript";
import Game from "../game/model/Game";
import "./CreateOrJoin.css";
import Default from "./Default";
import Join from "./Join";
import Create from "./Create";

// props must have websocket and setGameFunction and gameFunction and the game itself

function CreateOrJoin({
  ws,
  userId,
  gameId,
  game,
  setGame,
}: {
  ws: WebSocket;
  userId: string;
  gameId: string;
  game: Game;
  setGame: (game: Game) => void;
}) {
  const [mode, setMode] = useState("" as string);
  return (
    <>
      <div className="modal">
          {(() => {
            switch (mode) {
              case "create":
                return <Create ws={ws} userId={userId} gameId={gameId}/>;
                break;
              case "join":
                return <Join ws={ws}/>;
                break;
              default:
                return <Default setMode={setMode}/>;
            }
          })()}
      </div>
    </>
  );
}

export default CreateOrJoin;
