import { Navigate, createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layouts/RootLayout";
import { PostList } from "./pages/PostList";
import { UserList } from "./pages/UserList";
import { TodoList } from "./pages/TodoList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Navigate to="/posts" /> },
      { path: "posts", element: <PostList /> },
      { path: "users", element: <UserList /> },
      { path: "todos", element: <TodoList /> },
    ],
  },
]);
