/* eslint-disable react/prop-types */
import { Button, Form, FormGroup, Label, Input } from "reactstrap";

function EditForm({ editUser, closeModal, editableUser, changeEditUser }) {
  return (
    <Form onSubmit={editUser}>
      <FormGroup>
        <Label for="exampleEmail" hidden>
          Name
        </Label>
        <Input
          id="editName"
          name="editName"
          placeholder="...edit Name"
          type="text"
          value={editableUser.name}
          onChange={(e) => changeEditUser("name", e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="editLastName" hidden>
          Last Name
        </Label>
        <Input
          id="editLastName"
          name="editLastName"
          placeholder="...edit Lastname"
          type="text"
          value={editableUser.lastname}
          onChange={(e) => changeEditUser("lastname", e.target.value)}
        />
      </FormGroup>
      <FormGroup>
        <Label for="editUserName" hidden>
          Last Name
        </Label>
        <Input
          id="editUserName"
          name="editUserName"
          placeholder="...edit username"
          type="text"
          value={editableUser.username}
          onChange={(e) => changeEditUser("username", e.target.value)}
        />
      </FormGroup>
      <Button type="submit" onClick={closeModal}>
        Submit
      </Button>
    </Form>
  );
}

export default EditForm;
