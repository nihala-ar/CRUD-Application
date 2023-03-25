import axios from "axios";
import { MDBCol, MDBInput } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";

function ClientDisplay() {
  const [clientdeet, setclientdeet] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const [search, setsearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/clientdetails").then((res) => {
      setclientdeet(res.data);
    });
  }, []);

  console.log(clientdeet);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(clientdeet.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const filt = clientdeet.filter((serch) =>
    serch.username?.toLowerCase().includes(search.toLowerCase())
  );

  const currentPosts = filt.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Client List</h2>
      <MDBCol md="6">
        <MDBInput
          hint="Search"
          type="text"
          containerClass="mt-0"
          placeholder="🔍 Search by Client Username"
          onChange={(e) => setsearch(e.target.value)}
        />
      </MDBCol>
      <Table style={{ width: "80vh" }} striped bordered hover>
        <thead>
          <tr>
            <th>Username</th>
            <th>Role</th>
            <th>Sign in Status</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts &&
            currentPosts.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.username}</td>
                    <td>{item.role}</td>
                    <td>{item.status}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
      <div className="pagination_btn ">
        <nav>
          <ul className="pagination">
            {pageNumbers.map((number) => (
              <li key={number} className="page-item">
                <button
                  onClick={() => paginate(number)}
                  className="page-link btn btn-danger "
                  style={{ borderRadius: "50%" }}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default ClientDisplay;
