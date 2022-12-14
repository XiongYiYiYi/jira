import { List } from "./list";
import { SearchPanel } from "./search-panel";
import React, { useState, useEffect } from "react";
import { cleanObj, useDebounce, useMount } from "../../utils";
import * as qs from "qs";

const apiUrl = process.env.REACT_APP_API_URL;
console.log(apiUrl);
export const ProjectListScreen = () => {
  const [users, setUsers] = useState([]);
  const [param, setParam] = useState({
    name: "",
    id: "",
  });
  console.log(param);
  const [list, setList] = useState([]);
  const deounceParam = useDebounce(param, 2000);
  useEffect(() => {
    fetch(`${apiUrl}/projects/?${qs.stringify(cleanObj(deounceParam))}`).then(
      async (response) => {
        if (response.ok) {
          console.log(response);
          setList(await response.json());
        }
      }
    );
  }, [deounceParam]);
  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok) {
        console.log(response);
        setUsers(await response.json());
      }
    });
  });
  return (
    <div>
      <SearchPanel
        users={users}
        param={param}
        setParam={setParam}
      ></SearchPanel>
      <List users={users} list={list}></List>
    </div>
  );
};
