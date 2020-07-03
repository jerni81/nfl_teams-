import React, { useState, useEffect } from "react";
import SideBar from "./SideBar";
import View from "./View";
import useAxios from "axios-hooks";

const Main = () => {
  const [selected, setSelected] = useState({ id: null, logo: null });
  const [{ data, loading, error }, refetch] = useAxios(
    "https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=NFL"
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  console.log(selected);
  console.log(data);

  return (
    <div className="main">
      <SideBar teams={data} selected={setSelected} />
      <View teams={data} selected={selected} />
    </div>
  );
};

export default Main;
