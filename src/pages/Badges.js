import React from "react";
import { Link } from "react-router-dom";

import "./styles/Badges.css";
import confLogo from "../images/badge-header.svg";
import BadgesList from "../components/BadgesList";
import api from "../api";

class Badges extends React.Component {
  constructor(props) {
    super(props);
    // console.log("1. Constructor");

    this.state = {
      loading: true,
      error: null,
      data: []
    };
  }

  componentDidMount() {
    // console.log("3. componentDidMount");
    this.fetchData();
  }

  fetchData = async () => {
    this.setState({ loading: true, error: null });

    try {
      const data = await api.badges.list();
      this.setState({ loading: false, data: data });
    } catch (error) {
      this.setState({ loading: false, error: error });
    }
  };

  // componentDidUpdate(prevProps, prevState) {
  //   // console.log("5. componentUpdate()");
  //   console.log({
  //     prevProps: prevProps,
  //     prevState: prevState
  //   });
  //   console.log({
  //     props: this.props,
  //     state: this.state
  //   });
  // }

  componentWillUnmount() {
    // console.log("6.componentWillUnmount()");
    clearTimeout(this.timeoutId);
  }

  render() {
    // console.log("2/4. render");
    if (this.state.loading === true) {
      return "Loading ...";
    }
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }

    return (
      <React.Fragment>
        <div className="Badges">
          <div className="Badges__hero">
            <div className="Badges__container">
              <img src={confLogo} alt="Conf Logo" className="Badges_conf-log" />
            </div>
          </div>
        </div>
        <div className="Badges__container">
          <div className="Badges__buttons">
            <Link to="/badges/new" className="btn btn-primary">
              New Badge
            </Link>
          </div>
          <div className="BadgesList">
            <div className="Badges__container">
              <BadgesList badges={this.state.data} />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Badges;
