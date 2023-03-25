import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    const exist = JSON.parse(localStorage.getItem("user"));
    if (exist) {
      navigate("/");
    }
  });

  const submit = () => {
    if (!password || !email) {
      alert("Please enter details");
    } else {
      console.log(email, password);

      axios
        .post("http://localhost:5000/login", { email, password })
        .then((res) => {
          console.log("axios");
          console.log(res.data);
          let error = res.data.isError;
          if (error) {
            console.log("error");
          } else {
            localStorage.setItem("user", JSON.stringify(res.data));
            console.log("set item");
            console.log(res.data);

            const user = localStorage.getItem("user");
            navigate(user ? "/home" : "/login");
          }
        });
    }
  };

  return (
    <div>
      <h1>LOGIN</h1>
      <div className="container">
        <Form>
          <Form.Group
            onChange={(e) => setemail(e.target.value)}
            className="mb-3"
            controlId="formBasicEmail"
          >
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group
            onChange={(e) => setpassword(e.target.value)}
            className="mb-3"
            controlId="formBasicPassword"
          >
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit" onClick={submit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
