import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();

  const { id } = useParams();

  const [name, setname] = useState("");
  const [author, setauthor] = useState("");
  const [display, setdisplay] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/display/${id}`).then((res) => {
      setdisplay(res.data);
    });
  }, [id, display]);

  console.log(display);

  const submit = () => {
    axios
      .put(`http://localhost:5000/update/${id}`, { name, author })
      .then((res) => {
        alert("Edited");
        navigate("/book");
      });
  };

  return (
    <div>
      <Form style={{ width: "500px", marginLeft: "30vw" }}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Book Name</Form.Label>
          <Form.Control
            onChange={(e) => setname(e.target.value)}
            type="text"
            placeholder={display.name}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Author Name</Form.Label>
          <Form.Control
            onChange={(e) => setauthor(e.target.value)}
            type="text"
            placeholder={display.author}
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

export default Edit;
