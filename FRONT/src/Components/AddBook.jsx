import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function AddBook() {
  const [name, setname] = useState("");
  const [author, setauthor] = useState("");
  const submit = () => {
    if (!name || !author) {
      alert("Please fill all columns");
    } else {
      axios
        .post("http://localhost:5000/addBook", { name, author })
        .then((res) => {
          let error = res.data.ifError;
          if (error) {
            alert("Book already added to library");
          } else {
            alert("Book details added to library");
          }
        });
    }
  };

  return (
    <div>
      <Form style={{ width: "500px", marginLeft: "30vw" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder="Enter Book Name"
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            onChange={(e) => setauthor(e.target.value)}
            type="text"
            placeholder="Author Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default AddBook;
