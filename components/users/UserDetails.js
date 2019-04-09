import * as React from "react";

const UserDetails = ({ user }) => (
  <table
    css={{
      borderCollapse: "collapse",
      td: {
        padding: 4,
        border: "1px solid #ccc"
      }
    }}
  >
    <tbody>
      <tr>
        <td>ID</td>
        <td>{user.id}</td>
      </tr>
      <tr>
        <td>Name</td>
        <td>{user.name}</td>
      </tr>
      <tr>
        <td>Gender</td>
        <td>{user.gender}</td>
      </tr>
      <tr>
        <td>Address</td>
        <td>{user.address}</td>
      </tr>
    </tbody>
  </table>
);

export default UserDetails;
