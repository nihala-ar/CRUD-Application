import React, { useEffect, useState } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import axios from "axios";
import Button from "react-bootstrap/Button";

function Customer() {
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [product, setproduct] = useState("");
  const [village, setvillage] = useState("");
  const [district, setdistrict] = useState("");
  const [state, setstate] = useState("");
  const [nationality, setnationality] = useState("");

  const [first, setfirst] = useState([]);
  const [flag, setflag] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((res) => {
      setfirst(res.data);
    });
    axios.get("https://restcountries.com/v2/all").then((flg) => {
      setflag(flg.data);
    });
  }, []);

  console.log(flag);

  const submit = () => {
    if (!name) {
      alert("Please fill all columns");
    } else {
      axios
        .post("http://localhost:5000/customer", {
          name,
          address,
          product,
          village,
          district,
          state,
          nationality,
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
    <div className="container" style={{ marginLeft: "10vw", width: "70vw" }}>
      <Form>
        <Form.Label>Name</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setname(e.target.value)}
            placeholder="Name"
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

        <Form.Label>Product</Form.Label>
        <InputGroup className="mb-3">
          <select
            name=""
            id="roles"
            className="btn form-select"
            onChange={(e) => setproduct(e.target.value)}
          >
            <option selected>Select Product</option>
            {first.map((prod) => {
              return (
                <>
                  <option value={prod.name}>{prod.name}</option>
                </>
              );
            })}
          </select>
        </InputGroup>

        <Form.Label>Village</Form.Label>
        <InputGroup className="mb-3">
          <Form.Control
            onChange={(e) => setvillage(e.target.value)}
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Form.Label>District</Form.Label>
        <InputGroup>
          <Form.Control onChange={(e) => setdistrict(e.target.value)} />
        </InputGroup>

        <Form.Label>State</Form.Label>
        <InputGroup>
          <Form.Control
            onChange={(e) => setstate(e.target.value)}
            aria-describedby="basic-addon2"
          />
        </InputGroup>

        <Form.Label>Nationality</Form.Label>
        <InputGroup>
          <select
            name=""
            id="roles"
            className="btn form-select"
            onChange={(e) => setnationality(e.target.value)}
          >
            <option selected>Select Nationality</option>
            {flag.map((count) => {
              return (
                <>
                  <option value={count.name}>{count.name}</option>
                </>
              );
            })}
          </select>
        </InputGroup>

        <Button variant="primary" type="submit" onClick={submit}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default Customer;
