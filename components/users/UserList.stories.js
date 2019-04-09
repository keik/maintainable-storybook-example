// @flow

import { storiesOf } from "@storybook/react";
import { base, filename } from "paths.macro";
import * as React from "react";

import UserList from "./UserList";

const users = [
  {
    address: "Tokyo, Japan",
    birthDay: "2000-01-01",
    gender: "female",
    id: 1,
    name: "Alice"
  },
  {
    address: "Osaka, Japan",
    birthDay: "2001-04-01",
    gender: "male",
    id: 2,
    name: "Bob"
  },
  {
    address: "Fukuoka, Japan",
    birthDay: "2002-08-01",
    gender: "female",
    id: 3,
    name: "Carol"
  }
];

storiesOf(`${base}/${filename.replace("stories", "")}`, module).add(
  "default",
  () => <UserList users={users} />
);
