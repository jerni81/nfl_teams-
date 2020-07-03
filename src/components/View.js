import React from "react";

const View = (props) => {
  console.log("from view", props);

  if (props.selected.id !== null) {
    return (
      <div className="view">
        <img src={props.selected.logo} alt="Team Logo" />
      </div>
    );
  }

  return (
    <div id="nflLogo">
      <img src={"https://eskipaper.com/images/nfl-logo-1.jpg"} alt="NFL Logo" />
    </div>
  );
};

export default View;
