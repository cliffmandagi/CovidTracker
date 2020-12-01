import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatter } from "../utils/formatNum";

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
    <div>
      confirm: {formatter.format(world.confirmed)}
      death: {formatter.format(world.death)}
      recovered: {formatter.format(world.recovered)}
    </div>
  );
};

export default Global;
