/* const element = document.createElement("h1");
element.innerText = "Hello, Platzi Badges!";

const container = document.getElementById("app");

container.appendChild(element); */

import React from "react"; // Análogo al create element
import ReactDOM from "react-dom"; //Análogo a appendChild

const element = <h1>Hello, Platzi Badges!</h1>;

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
