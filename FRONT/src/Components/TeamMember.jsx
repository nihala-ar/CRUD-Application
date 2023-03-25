import React, { useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";
function TeamMember() {
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");

  const [number, setnumber] = useState("");
  const [descptn, setdescptn] = useState("");
  const [number2, setnumber2] = useState("");
  const [position, setposition] = useState("");

  const submit = () => {
    if (!name) {
      alert("Please fill all columns");
    } else {
      axios
        .post("http://localhost:5000/member", {
          name,
          address,
          number,
          descptn,
          number2,
          position,
        })
        .then((res) => {
          let error = res.data.ifError;
          if (error) {
            alert("Name already exists");
          } else {
            alert("Team MemberDetails Submitted");
          }
        });
    }
    alert("Details Submitted");
  };

  return (
    <div className="container" style={{ marginLeft: "100px" }}>
      <Form>
        <Form.Label>Name</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setname(e.target.value)}
            placeholder="name"
            aria-label="name"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Form.Label>Address</Form.Label>
        <InputGroup>
          <Form.Control
            onChange={(e) => setaddress(e.target.value)}
            as="textarea"
            aria-label="With textarea"
          />
        </InputGroup>

        <Form.Label>Phone Number</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setnumber(e.target.value)}
            placeholder="phone number"
            aria-label="phone number"
            aria-describedby="basic-addon2"
            type="tel"
          />
        </InputGroup>

        <Form.Label>Alternate phone number</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setnumber2(e.target.value)}
            placeholder="alternate phone number"
            aria-label="phone number"
            aria-describedby="basic-addon2"
            type="tel"
          />
        </InputGroup>

        <Form.Label>Description</Form.Label>
        <InputGroup>
          <Form.Control
            onChange={(e) => setdescptn(e.target.value)}
            as="textarea"
            aria-label="With textarea"
          />
        </InputGroup>

        <Form.Label>Position</Form.Label>
        <InputGroup>
          <Form.Control
            onChange={(e) => setposition(e.target.value)}
            placeholder="Position"
            aria-label="Position"
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default TeamMember;
