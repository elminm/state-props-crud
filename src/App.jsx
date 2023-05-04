import { Col, Container, Row } from "reactstrap";
import FormComponent from "./components/FormComponent";
import TableCompoent from "./components/TableCompoent";
import { useState } from "react";

const App = () => {
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

  return (
    <>
      {/* <pre>{JSON.stringify(userDetails, null, 2)}</pre> */}
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
              <TableCompoent users={users} />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default App;
