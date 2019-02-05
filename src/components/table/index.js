import React from "react";
import PropTypes from "prop-types";

const getRows = propTypes =>
  Object.keys(propTypes).map(prop => (
    <tr key={prop}>
      <td
        style={{
          fontSize: "16px",
          padding: "16px",
          border: "2px solid #999"
        }}
      >
        {prop}
      </td>
      <td
        style={{
          fontSize: "16px",
          padding: "16px",
          border: "2px solid #999"
        }}
      >
        {propTypes[prop].type}
      </td>
      <td
        style={{
          fontSize: "16px",
          padding: "16px",
          border: "2px solid #999"
        }}
      >
        {propTypes[prop].required.toString()}
      </td>
    </tr>
  ));

const Table = ({ propTypes }) => (
  <table style={{ color: "#999", borderCollapse: "collapse" }}>
    <thead>
      <tr>
        <th
          style={{
            fontWeight: 600,
            textAlign: "left",
            color: "#000",
            fontSize: "16px",
            padding: "16px",
            border: "2px solid #999"
          }}
        >
          Name
        </th>
        <th
          style={{
            fontWeight: 600,
            textAlign: "left",
            color: "#000",
            fontSize: "16px",
            padding: "16px",
            border: "2px solid #999"
          }}
        >
          Type
        </th>
        <th
          style={{
            fontWeight: 600,
            textAlign: "left",
            color: "#000",
            fontSize: "16px",
            padding: "16px",
            border: "2px solid #999"
          }}
        >
          Required?
        </th>
      </tr>
    </thead>
    <tbody>{getRows(propTypes)}</tbody>
  </table>
);

Table.propTypes = {
  propTypes: PropTypes.object.isRequired
};

export default Table;
