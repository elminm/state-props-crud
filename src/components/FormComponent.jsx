/* eslint-disable react/prop-types */
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

const FormComponent = ({ getUserDetails, userDetails, addUser }) => {
  return (
    <Form onSubmit={addUser}>
      <FormGroup>
        <Label for="exampleName" hidden>
          Name
        </Label>
        <Input
          id="exampleName"
          name="name"
          placeholder="name"
          type="text"
          onChange={(e) => getUserDetails("name", e.target.value)}
          value={userDetails.name}
          ref
        />
      </FormGroup>
      <FormGroup>
        <Label for="examplelastName" hidden>
          Last Name
        </Label>
        <Input
          id="examplelastName"
          name="lastname"
          placeholder="lastname"
          type="text"
          onChange={(e) => getUserDetails("lastname", e.target.value)}
          value={userDetails.lastname}
        />
      </FormGroup>
      <FormGroup>
        <Label for="exampleuserName" hidden>
          Username
        </Label>
        <Input
          id="exampleuserName"
          name="username"
          placeholder="username"
          type="text"
          onChange={(e) => getUserDetails("username", e.target.value)}
          value={userDetails.username}
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default FormComponent;
