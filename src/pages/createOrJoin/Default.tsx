import "./Default.css";

function Default({setMode}: {setMode: (mode: string) => void}) {
  return (
    <>
    <div className="wrapper">
          <h2>Create or Join</h2>
          <div className="button-area">
            <button className="gameButton" onClick={() => setMode("create")}>Create a new Game</button>
            <button className="gameButton" onClick={() => setMode("join")}>
              Join an existing Game
            </button>
          </div>
          </div>
    </>
  );
}

export default Default;
