import { Alert, Table, Spinner } from "reactstrap";
import { useQuery } from "react-query";
import { useParams } from 'react-router-dom'

export const Detail = () => {
  let { id } = useParams();
  const query = useQuery("getUserById", ()=>getUserById(id));
  
  // hoisting in action
  async function getUserById () {
  const response = await fetch(`http://localhost:3004/users/${id}`);
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};
  debugger
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
          <tr key={query?.data.id}>
            <th scope="row">{query?.data.id}</th>
            <td>{query?.data.firstName}</td>
            <td>{query?.data.lastName}</td>
            <td>{query?.data.username}</td>
          </tr>
      </tbody>
    </Table>
  );
};
