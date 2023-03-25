import axios from "axios";
import React, {  useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";

function Order() {
  const [ordernum, setordernum] = useState("");
  const [customer, setcustomer] = useState("");
  const [product, setproduct] = useState("");
  const [item, setitem] = useState("");
  const [date, setdate] = useState("");
  const [status, setstatus] = useState("");

  const submit = () => {
    if (!product) {
      alert("Please fill all columns");
    } else {
      axios
        .post("http://localhost:5000/order", {
          ordernum,
          customer,
          product,
          item,
          date,
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
  };
  return (
    <div>
      <div
        className="container"
        style={{ marginLeft: "10vw", marginTop: "30px", width: "70vw" }}
      >
        <Form>
          <Form.Label>Order number</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={(e) => setordernum(e.target.value)}
              placeholder="Order number"
              aria-label="name"
              aria-describedby="basic-addon2"
            />
          </InputGroup>

          <Form.Label>Customer Name</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={(e) => setcustomer(e.target.value)}
              placeholder="Customer Name"
              aria-label="name"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <Form.Label>Product</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={(e) => setproduct(e.target.value)}
              placeholder="Product"
              aria-label="name"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <Form.Label>No of item purchased</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={(e) => setitem(e.target.value)}
              type="number"
              placeholder="No of item purchased"
              aria-label="name"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <Form.Label>Purchased date</Form.Label>
          <InputGroup className="mb-3">
            <Form.Control
              onChange={(e) => setdate(e.target.value)}
              type="date"
              placeholder="Purchased date"
              aria-label="name"
              aria-describedby="basic-addon2"
            />
          </InputGroup>
          <Form.Label>Status</Form.Label>
          <InputGroup className="mb-3">
            <Form.Check
              onChange={(e) => setstatus(e.target.value)}
              inline
              type="radio"
              id="Completed"
              label="Completed"
              name="status"
            />
            <Form.Check
              onChange={(e) => setstatus(e.target.value)}
              inline
              type="radio"
              id="Not Completed"
              label="Not Completed"
              name="status"
            />
          </InputGroup>

          <Button variant="primary" type="submit" onClick={submit}>
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Order;
