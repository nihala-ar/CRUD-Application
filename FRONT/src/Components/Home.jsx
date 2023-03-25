import React from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1>Home Page</h1>
      <div className="container">
        <div className="row">
          <h2 className="col-6">Welcome {user ? user.email : "To Home"}</h2>
          <div className="col-6">
            <button onClick={logout}>LOGOUT</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
