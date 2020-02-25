import React from "react";

import "./styles/BadgesList.css";

class BadgesList extends React.Component {
  render() {
    return (
      <ul className="list-unstyled BadgesList">
        {this.props.badges.map(badge => {
          return (
            <li key={badge.id} className="BadgesListItem">
              <img
                className="BadgesListItem__avatar"
                src={badge.avatarUrl}
                alt="Avatar"
              />
              <div className="BadgesListItem__section">
                <div className="BadgesListItem__section-name">
                  {badge.firstName} {badge.lastName}
                </div>
                <div className="BadgesListItem__section-twitter">
                  <span className="Twitter__logo"></span>@{badge.twitter}
                </div>
                <div className="BadgesListItem__section-jobTitle">
                  {badge.jobTitle}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default BadgesList;
