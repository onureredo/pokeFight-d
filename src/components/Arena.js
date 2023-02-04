import React from "react";
import Pokemon from "./Pokemon";
import VS from "../assets/images/vs.png";

function Arena() {
  return (
    <div className="wrapper">
      <Pokemon />
      <div className="poke-fight">
        <img id="vs" src={VS} alt="vs" />
        <button id="btn-fight">FIGHT</button>
      </div>
      <Pokemon />
    </div>
  );
}

export default Arena;
