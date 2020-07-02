import React, { useState, useEffect } from "react";
import SideBar from "./sidebar";
import View from "./view";
import axios from "axios";

const Main = () => {
  const [teams, setTeams] = useState({});
  const [selected, setSelected] = useState({ name: "" });

  return (
    <div className="main">
      <h1>Yoooooo</h1>
      <SideBar />
      <View />
    </div>
  );
};

export default Main;
