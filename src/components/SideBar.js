import React from "react";

const SideBar = (props) => {
  console.log("from side", props.teams.teams);

  return (
    <div className="sidebar">
      {props.teams.teams.map((d, i) => {
        return <div key={i}>{d.strTeam}</div>;
      })}
    </div>
  );
};

export default SideBar;
