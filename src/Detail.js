import { Alert, Table, Spinner } from "reactstrap";
import { useQuery } from "react-query";

const getUsers = async () => {
  const response = await fetch("http://localhost:3004/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const UsersList = () => {
  const query = useQuery("123", getUsers);
  console.log(query);
  if (query.isLoading) {
    return <Spinner color="primary" type="grow"></Spinner>;
  }
  if (query.isError) {
    return (
      <Alert color="danger">
        {query.error?.message || "Something went wrong"}
      </Alert>
    );
  }
  return (
    <Table>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
          {/* <tr key={user}>
            <th scope="row">{user.id}</th>
            <td>{user.firstName}</td>
            <td>{user.lastName}</td>
            <td>{user.username}</td>
          </tr> */}
      </tbody>
    </Table>
  );
};
