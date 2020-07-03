import React from "react";
import { Link } from "react-router-dom";

import "./styles/PageError.css";
import AstronautNotFound from "../images/astronaut_notFound.png";

function PageError(props) {
  return (
    <div className="PageError">
      <div className="container">
        <div className="row">
          <div className="col-6">
            <img
              className="img-fluid"
              src={AstronautNotFound}
              alt="Astronaut Not Found"
            />
          </div>
          <div className="col-6">
            <div className="container">
              <div className="row justify-content-center">
                <span className="Title505">{props.error.message}</span>
              </div>
              <div className="row">
                <h3>Eeeeh Houston, tenemos un problema...</h3>
                <p>Descuida, ¡te ayudaremos a resolverlo!</p>
              </div>
              <div className="row justify-content-center">
                <Link className="btn btn-primary" rel="stylesheet" to="/">
                  Ir a Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageError;
