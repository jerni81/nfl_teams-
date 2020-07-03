import React from "react";

const SideBar = (props) => {
  console.log("from side", props.handleSelected);

  return (
    <div className="sidebar">
      {props.teams.teams.map((d, i) => {
        return (
          <div key={i}>
            <button
              onClick={() =>
                props.selected({ id: d.idTeam, logo: d.strTeamBadge })
              }
            >
              {d.strTeam}
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default SideBar;
