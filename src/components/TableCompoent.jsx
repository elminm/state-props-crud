/* eslint-disable react/prop-types */
import { Modal, ModalHeader, ModalBody, Table, Button } from "reactstrap";
import EditForm from "./EditForm";

const TableCompoent = ({
  users,
  editUser,
  getEditUser,
  modal,
  toggle,
  closeModal,
  editableUser,
  changeEditUser,
  removeUser,
}) => {
  return (
    <Table hover>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <EditForm
            editUser={editUser}
            closeModal={closeModal}
            editableUser={editableUser}
            changeEditUser={changeEditUser}
          />
        </ModalBody>
      </Modal>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
          <th>Remove</th>
        </tr>
      </thead>
      <tbody>
        {users?.map((user) => {
          return (
            <tr key={user.id} onClick={() => getEditUser(user)}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.lastname}</td>
              <td>{user.username}</td>
              <td>
                <Button color="danger" onClick={(e) => removeUser(e, user.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default TableCompoent;
