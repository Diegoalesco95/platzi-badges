import React from "react";
import ReactDOM from "react-dom";

import "bootstrap/dist/css/bootstrap.css";
import "./global.css";

import Badge from "./components/Badge";

const container = document.getElementById("app");

ReactDOM.render(
  <Badge
    avatarUrl="https://s3.amazonaws.com/uifaces/faces/twitter/souuf/128.jpg"
    firstName="Keagan"
    lastName="Abernathy"
    jobTitle="International Functionality Planner"
    twitter="Bradford.Moore89"
  />,
  container
);
