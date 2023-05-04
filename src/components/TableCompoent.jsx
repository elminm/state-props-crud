/* eslint-disable react/prop-types */
import { Table } from "reactstrap";

const TableCompoent = (props) => {
  const { users } = props;
  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          return (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.username}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableCompoent;
