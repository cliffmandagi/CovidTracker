import React, { useEffect, useState } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";
import TableComp from "../components/Table";

const Prov = () => {
  const [prov, setProv] = useState([]);

  useEffect(() => {
    axios
      .get("https://indonesia-covid-19.mathdro.id/api/provinsi")
      .then((res) => {
        setProv(res.data.data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center mt-2">Provinsi</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>FID</th>
            <th>Provinsi</th>
            <th>Recovered</th>
            <th>Death</th>
            <th>Confirmed</th>
          </tr>
        </thead>
        {prov.map((items) => {
          return (
              <TableComp
                id={items.fid}
                prov={items.provinsi}
                posi={items.kasusPosi}
                semb={items.kasusSemb}
                meni={items.kasusMeni}
              />
          );
        })}
      </Table>
    </div>
  );
};

export default Prov;
