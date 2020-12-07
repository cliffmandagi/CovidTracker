import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatter } from "../utils/formatNum";
import Cards from "../components/Cards";

const Global = () => {
  const [world, setWorld] = useState({
    confirm: NaN,
    death: NaN,
    recovered: NaN,
  });

  useEffect(() => {
    axios
      .get("https://covid19.mathdro.id/api")
      .then((res) => {
        setWorld({
          confirmed: res.data.confirmed.value,
          death: res.data.deaths.value,
          recovered: res.data.recovered.value,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
    <div className="justify-content-center"><h2 className="text-center mt-2">Global</h2></div>
    <div className="row justify-content-center">
      <Cards
        variant="Success"
        header="Recovered"
        content={formatter.format(world.recovered)}
      />
      <Cards
        variant="Danger"
        header="Death"
        content={formatter.format(world.death)}
      />
      <Cards
        variant="Warning"
        header="Confirmed"
        content={formatter.format(world.confirmed)}
      />
    </div>
    </>
  );
};

export default Global;
