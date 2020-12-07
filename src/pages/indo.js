import React, { useEffect, useState } from "react";
import axios from "axios";
import { formatter } from "../utils/formatNum";
import Cards from "../components/Cards";

const Indo = () => {
  const [indo, setWorld] = useState({
    confirm: NaN,
    death: NaN,
    recovered: NaN,
  });

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api")
      .then((res) => {
        setWorld({
          confirmed: res.data.perawatan,
          death: res.data.meninggal,
          recovered: res.data.sembuh,
        });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="justify-content-center">
        <h2 className="text-center mt-2">Indonesia</h2>
      </div>
      <div className="row justify-content-center">
        <Cards
          variant="Success"
          header="Recovered"
          content={formatter.format(indo.recovered)}
        />
        <Cards
          variant="Danger"
          header="Death"
          content={formatter.format(indo.death)}
        />
        <Cards
          variant="Warning"
          header="Confirmed"
          content={formatter.format(indo.confirmed)}
        />
      </div>
    </>
  );
};

export default Indo;
