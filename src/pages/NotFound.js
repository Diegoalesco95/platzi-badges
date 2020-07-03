import React from "react";
import { Link } from "react-router-dom";

import "./styles/NotFound.css";
import AstronautNotFound from "../images/astronaut_notFound.png";

function NotFound() {
  return (
    <div className="NotFound">
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
                <span className="Title404">404</span>
              </div>
              <div className="row">
                <h3>Eeeeh Houston, tenemos un problema...</h3>
                <p>
                  No se ha encontrado resultados. Descuida, ¡te ayudaremos a
                  encontrar lo que buscas!
                </p>
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

export default NotFound;
