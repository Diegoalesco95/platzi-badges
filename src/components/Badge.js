import React from "react";
import "./styles/Badge.css";
import confLogo from "../images/badge-header.svg";

class Badge extends React.Component {
  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">
          <img src={confLogo} alt="Logo de la conferencia" />
        </div>
        <div className="Badge__section-name">
          <img
            className="Badge__avatar"
            src="https://secure.gravatar.com/avatar/42ed145fd1cf5b10119c902b256c0d2b"
            alt="Avatar"
          />
          <h1>
            Diego <br /> Osorio
          </h1>
        </div>
        <div className="Badge__section-info">
          <h3>Fronted Dev.</h3>
          <div>@Diegoalesco95</div>
        </div>
        <div className="Badge__footer">#PlatziConf</div>
      </div>
    );
  }
}

export default Badge;
