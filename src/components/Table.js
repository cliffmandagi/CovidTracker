const TableComp = ({ id, prov, posi, semb, meni }) => {
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{prov}</td>
        <td>{posi}</td>
        <td>{semb}</td>
        <td>{meni}</td>
      </tr>
    </tbody>
  );
};

export default TableComp;
