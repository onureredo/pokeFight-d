import Pokemon from "./components/Pokemon";
import VS from "./assets/images/vs.png"

function App() {
  return (
    <div className="App">
      {/* <Pokemon pokemonId={25} /> */}
      <Pokemon pokemonId={Math.floor(Math.random() * 1000)} />
      <img style={{ height: "200px" }} src={VS} alt="vs" />
      <Pokemon pokemonId={Math.floor(Math.random() * 1000)} />
    </div>
  );
}

export default App;
