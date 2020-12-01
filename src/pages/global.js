import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatter } from "../utils/formatNum";
import { Card } from "react-bootstrap";
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
    <div>
        <Cards/>
      <h6>confirm: {formatter.format(world.confirmed)}</h6>
      <h6>recovered: {formatter.format(world.recovered)}</h6>
    </div>
  );
};

export default Global;
