import { useLoaderData } from "react-router-dom";
import { getUsers } from "../api/users";

function UserList() {
  const users = useLoaderData();
  return <h1>UserList - {users.length}</h1>;
}

function loader({ request: { signal } }) {
  return getUsers({ signal });
}

export const userListRoute = {
  loader,
  element: <UserList />,
};
