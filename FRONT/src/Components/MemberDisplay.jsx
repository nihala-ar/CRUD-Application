import axios from "axios";
import { MDBCol, MDBInput } from "mdb-react-ui-kit";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/esm/Table";

function MemberDisplay() {
  const [member, setmember] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5;
  const [search, setsearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/memberdetails").then((res) => {
      setmember(res.data);
    });
  }, []);

  console.log(member);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(member.length / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const filt = member.filter((serch) =>
    serch.name?.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filt);

  const currentPosts = filt.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Team Members</h2>
      <MDBCol md="6">
        <MDBInput
          hint="Search"
          type="text"
          containerClass="mt-0"
          placeholder="🔍 Search by Member Name"
          onChange={(e) => setsearch(e.target.value)}
        />
      </MDBCol>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Phone Number</th>
            <th>Address</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts &&
            currentPosts.map((item, index) => {
              return (
                <>
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.number}</td>
                    <td>{item.address}</td>
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

export default MemberDisplay;
