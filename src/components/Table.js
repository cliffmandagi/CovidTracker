import react from "react";
import { Table } from "react-bootstrap";

const TableComp = ({ prov }) => {
  return (
    <div>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Provinsi</th>
            <th>Recovered</th>
            <th>Death</th>
            <th>Confirmed</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td></td>
            <td>Test123</td>
            <td>Test132</td>
            <td>Test321</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default TableComp;
