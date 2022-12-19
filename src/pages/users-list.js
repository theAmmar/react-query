import { Alert, Table, Spinner, Button } from "reactstrap";
import { useQuery } from "react-query";
import { Link, useNavigate } from 'react-router-dom'
import { ModalDelete } from "../components/Modal";

const getUsers = async () => {
  const response = await fetch("http://localhost:3004/users");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return response.json();
};

export const UsersList = () => {
  const navigate = useNavigate()
  const query = useQuery("getUsers", getUsers);
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
    <div>
      <Button onClick={()=>navigate('/user')}>Add new user</Button>
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
          {query.data?.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.username}</td>
              <td><Link to={`/user/${user.id}`}>View Detail</Link></td>
              <td><ModalDelete buttonLabel='delete' id={user.id} /></td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};
