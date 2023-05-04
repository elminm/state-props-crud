import { Col, Container, Row } from "reactstrap";
import FormComponent from "./components/FormComponent";
import TableCompoent from "./components/TableCompoent";
import { useState } from "react";

const App = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const closeModal = () => {
    setModal(!modal);
  };
  const [editableUser, setEditableUser] = useState({
    id: "",
    lastname: "",
    name: "",
    username: "",
  });
  const [userDetails, setUserDetails] = useState({
    name: "",
    lastname: "",
    username: "",
  });
  const [users, setUsers] = useState([]);
  const getUserDetails = (type, value) => {
    setUserDetails((prev) => {
      return {
        ...prev,
        [type]: value,
      };
    });
  };
  const addUser = (e) => {
    e.preventDefault();
    const maxId = users.reduce(
      (max, user) => (user?.id > max ? user?.id : max),
      0
    );
    const newUser = { ...userDetails, id: maxId + 1 };
    setUsers((prev) => [...prev, newUser]);
    setUserDetails({ name: "", lastname: "", username: "" });
  };
  const getEditUser = (user) => {
    setModal(!modal);
    // const editableUser1 = users.find((user) => user.id === id);
    setEditableUser({
      id: user.id,
      name: user.name,
      lastname: user.lastname,
      username: user.username,
    });
  };
  const changeEditUser = (name, value) => {
    setEditableUser((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const editUser = (e) => {
    e.preventDefault();
    const editable = users.find((user) => user.id === editableUser.id);
    editable.name = editableUser.name;
    editable.lastname = editableUser.lastname;
    editable.username = editableUser.username;
    setUsers([...users]);
    setEditableUser({
      name: "",
      lastname: "",
      username: "",
    });
  };
  const removeUser = (e, id) => {
    e.stopPropagation();
    const filtered = users.filter((user) => user.id !== id);
    setUsers(filtered);
  };
  return (
    <>
      {/* <pre>{JSON.stringify(editableUser, null, 2)}</pre> */}
      <div>
        <Container>
          <Row>
            <Col xs="6">
              <FormComponent
                addUser={addUser}
                getUserDetails={getUserDetails}
                userDetails={userDetails}
              />
            </Col>
            <Col xs="6">
              <TableCompoent
                users={users}
                editUser={editUser}
                getEditUser={getEditUser}
                modal={modal}
                toggle={toggle}
                closeModal={closeModal}
                editableUser={editableUser}
                changeEditUser={changeEditUser}
                removeUser={removeUser}
              />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
