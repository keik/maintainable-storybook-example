import * as React from "react";

const UserList = ({ users }) => (
  <ul>
    {users.map(user => (
      <li key={user.id}>
        <a href={`/users/${user.id}`}>{user.name}</a>
      </li>
    ))}
  </ul>
);

export default UserList;
