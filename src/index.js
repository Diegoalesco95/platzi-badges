import React from "react"; // Análogo al create element
import ReactDOM from "react-dom"; //Análogo a appendChild

// const jsx = <h1>Hello, Platzi Badges!</h1>;
// const element = React.createElement(
//   "a",
//   { href: "https://platzi.com" },
//   "Ir a Platzi."
// );
// const name = "Barrett Rohan";
// const element = React.createElement("h1", {}, `Hola, soy ${name}`);
// const jsx = <h1>Hola, soy {name}</h1>;

const jsx = (
  <div>
    <h1>Hola, soy Diego</h1>
    <p>Soy Frontend Developer</p>
  </div>
);
const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(jsx, container);
