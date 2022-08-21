import { useState, useEffect } from 'react';
import './Create.css'

function Create({ws, userId, gameId}: {ws: WebSocket, userId:string,  gameId: string}) {
  useEffect(() => {
    const payLoad = {
      method: "create",
      userId: userId,
    }
    ws.send(JSON.stringify(payLoad));
  }, [])
  return (
    <>
      <div className="wrapper">
        <div className="form-wrapper">
          <h2>Created Game!</h2>
          <p>Your game ID</p>
          <p>{gameId}</p>
        </div>
      </div>
    </>
  );
}

export default Create;

