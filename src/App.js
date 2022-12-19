import "./App.css";

import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { UsersList } from "./pages/users-list";
import { Detail } from "./components/Detail";
import { User } from "./components/User";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <UsersList />,
  },
  {
    path: "/user/:id",
    element: <Detail />
  },
  {
    path: "/user",
    element: <User />
  }
]);

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
