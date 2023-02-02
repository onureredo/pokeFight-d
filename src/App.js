import Pokemon from "./components/Pokemon";
import VS from "./assets/images/vs.png";

function App() {
  return (
    <div className="App">
      {/* <Pokemon pokemonId={25} /> */}
      <Pokemon />
      <img style={{ height: "200px" }} src={VS} alt="vs" />
      <Pokemon />
    </div>
  );
}

export default App;
