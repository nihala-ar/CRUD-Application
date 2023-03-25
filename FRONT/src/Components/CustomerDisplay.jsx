import axios from "axios";
import { MDBCol, MDBInput } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";

function CustomerDisplay() {
  const [customer, setcustomer] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const [search, setsearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/customerdetails").then((res) => {
      setcustomer(res.data);
    });
  }, []);

  console.log(customer);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(customer.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const filt = customer.filter((serch) =>
    serch.name?.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filt);

  const currentPosts = filt.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Customer List</h2>
      <MDBCol md="6">
        <MDBInput
          hint="Search"
          type="text"
          containerClass="mt-0"
          placeholder="🔍 Search by Customer Name"
          onChange={(e) => setsearch(e.target.value)}
        />
      </MDBCol>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Product</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts &&
            currentPosts.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.address}</td>
                    <td>{item.product}</td>
                  </tr>
                </>
              );
            })}
        </tbody>
      </Table>
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
  );
}

export default CustomerDisplay;
