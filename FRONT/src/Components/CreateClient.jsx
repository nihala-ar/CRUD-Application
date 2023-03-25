import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";

function CreateClient() {
  const [username, setusername] = useState("");
  const [email, setemail] = useState("");
  const [info, setinfo] = useState("");
  const [role, setrole] = useState("");
  const [status, setstatus] = useState("");

  const submit = () => {
    if (!username || !email) {
      alert("Please fill all columns");
    } else {
      axios
        .post("http://localhost:5000/client", {
          username,
          email,
          info,
          role,
          status,
        })
        .then((res) => {
          let error = res.data.ifError;
          if (error) {
            alert("Username already exists");
          } else {
            alert("Details Submitted");
          }
        });
    }
    alert("Details Submitted");
  };

  return (
    <div className="container" style={{ marginLeft: "100px" }}>
      <Form>
        <Form.Label>Username</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setusername(e.target.value)}
            placeholder="username"
            aria-label="username"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Form.Label>Role</Form.Label>

        <InputGroup className="mb-3">
          <select
            name=""
            id="roles"
            className="btn form-select"
            onChange={(e) => setrole(e.target.value)}
          >
            <option selected>Select Role</option>
            <option value="super-admin" id="1">
              Super admin
            </option>
            <option value="role-only-admin" id="2">
              Role only admin
            </option>
          </select>
        </InputGroup>

        <Form.Label>Email</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            required
            onChange={(e) => setemail(e.target.value)}
            type="email"
            placeholder="email"
            aria-label="email"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Form.Label>Sign in Status</Form.Label>
        <InputGroup className="mb-3">
          <Form.Check
            onChange={(e) => setstatus(e.target.id)}
            inline
            type="radio"
            id="true"
            label="true"
            name="status"
          />
          <Form.Check
            onChange={(e) => setstatus(e.target.id)}
            inline
            type="radio"
            id="false"
            label="false"
            name="status"
          />
        </InputGroup>

        <Form.Label>Contact Information</Form.Label>
        <InputGroup>
          <Form.Control
            onChange={(e) => setinfo(e.target.value)}
            as="textarea"
            aria-label="With textarea"
          />
        </InputGroup>
        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default CreateClient;
