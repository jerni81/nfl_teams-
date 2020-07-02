import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import View from "./View";
import useAxios from "axios-hooks";

const Main = () => {
  const [selected, setSelected] = useState({ name: "" });
  const [{ data, loading, error }, refetch] = useAxios(
    "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL"
  );

  // This is the function that sets the selected name to create an individual
  //view for the item
  const shwSelected = (event, d) => {
    event.preventDefault();
    if (selected.name === "") {
      setSelected({ name: d });
    }
    if (selected.name === d) {
      setSelected({ name: "" });
    }
    if (selected.name !== d && selected.name !== "") {
      setSelected({ name: d });
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="main">
      <SideBar teams={data} />
      <View selected={selected} shwSelected={shwSelected} />
    </div>
  );
};

export default Main;
