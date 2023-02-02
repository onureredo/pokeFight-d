import Pokemon from "./components/Pokemon";

function App() {
  return (
    <div className="App">
      <Pokemon pokemonId={Math.floor(Math.random() * 1000)} />

    </div>
  );
}

export default App;
