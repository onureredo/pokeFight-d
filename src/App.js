import Pokemon from "./components/Pokemon";
import VS from "./assets/images/vs.png";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Pokemon />
        <img id="vs" src={VS} alt="vs" />
        <button>FIGHT</button>
        <Pokemon />
      </div>
    </div>
  );
}

export default App;
