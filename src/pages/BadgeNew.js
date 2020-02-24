import React from "react";

import "./styles/BadgeNew.css";
import header from "../images/badge-header.svg";
import Navbar from "../components/NavBar";
import Badge from "../components/Badge";

class BadgeNew extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="BadgeNew__hero">
          <img className="img-fluid" src={header} alt="logo" />
        </div>

        <div>
          <div className="container">
            <div className="row">
              <div className="col">
                <Badge
                  firstName="Raymond"
                  lastName="Berge"
                  twitter="Travis_McKenzie"
                  jobTitle="Dynamic Branding Designer"
                  avatarUrl="https://s3.amazonaws.com/uifaces/faces/twitter/justinrhee/128.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BadgeNew;
