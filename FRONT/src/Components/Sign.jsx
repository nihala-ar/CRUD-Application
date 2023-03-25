import React, { useEffect, useState } from "react";
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Sign() {
  const navigate = useNavigate();

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  useEffect(() => {
    const exist = JSON.parse(localStorage.getItem("user"));
    if (exist) {
      navigate("/");
    }
  });

  const submit = () => {
    if (!name || !email || !password) {
      alert("Please fill every column");
    } else {
      axios
        .post("http://localhost:5000/signup", { name, email, password })
        .then((res) => {
          console.log(res.data);

          let error = res.data.isError;
          if (error) {
            console.log("error");
          } else {
            localStorage.setItem("user", JSON.stringify(res.data));
            console.log(res.data);

            const user = localStorage.getItem("user");
            navigate(user ? "/" : "/signup");
          }
        });
    }
  };

  return (
    <div style={{ width: "500px", marginLeft: "30vw" }}>
      <h1>SIGN UP</h1>

      <div className="container">
        <div className="container">
          <form>
            <MDBRow className="mb-4">
              <MDBCol>
                <MDBInput
                  onChange={(e) => setname(e.target.value)}
                  id="form3Example1"
                  label="First name"
                />
              </MDBCol>
              <MDBCol>
                <MDBInput id="form3Example2" label="Last name" />
              </MDBCol>
            </MDBRow>
            <MDBInput
              onChange={(e) => setemail(e.target.value)}
              className="mb-4"
              type="email"
              id="form3Example3"
              label="Email address"
            />
            <MDBInput
              onChange={(e) => setpassword(e.target.value)}
              className="mb-4"
              type="password"
              id="form3Example4"
              label="Password"
            />

            <MDBCheckbox
              wrapperClass="d-flex justify-content-center mb-4"
              id="form3Example5"
              label="Subscribe to our newsletter"
              defaultChecked
            />

            <MDBBtn onClick={submit} type="submit" className="mb-4" block>
              Sign in
            </MDBBtn>

            <div className="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
              <p>or sign up with:</p>

              <MDBBtn floating color="secondary" className="mx-1">
                <MDBIcon fab icon="facebook-f" />
              </MDBBtn>

              <MDBBtn floating color="secondary" className="mx-1">
                <MDBIcon fab icon="google" />
              </MDBBtn>

              <MDBBtn floating color="secondary" className="mx-1">
                <MDBIcon fab icon="twitter" />
              </MDBBtn>

              <MDBBtn floating color="secondary" className="mx-1">
                <MDBIcon fab icon="github" />
              </MDBBtn>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Sign;
