function App() {
  return (
    <div className="App">
      <div className="MusicPlayer">
        <div className="Display">
          <div className="Cover">
            <img
              src={require("./images/Screenshot 2023-02-07 at 7.49.30 PM.jpg")}
              alt=""
            ></img>
          </div>

          <div className="Information">
            <h1>
              <strong>Testing this</strong>
            </h1>
            <h2>Rimbo</h2>
          </div>
        </div>

        <div className="Controls">
          <button>Play</button>
          <button>Pause</button>
          <button>Skip</button>
          <button>Rewind</button>
        </div>
      </div>
    </div>
  );
}

export default App;
