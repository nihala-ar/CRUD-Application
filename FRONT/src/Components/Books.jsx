import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "./Pagination";
import { MDBInput, MDBCol } from "mdb-react-ui-kit";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

function Books() {
  const [first, setfirst] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(3);
  const [search, setsearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/books").then((res) => {
      setfirst(res.data);
    }, []);
  });

  const navigate = useNavigate();

  const edit = (_id) => {
    navigate("/edit");
  };

  const [_id, set_id] = useState("");

  const deleteBook = (_id) => {
    axios.delete(`http://localhost:5000/delete/${_id}`).then((res) => {
      alert("Book deleted");
    });
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  // const currentPosts = first.slice(indexOfFirstPost, indexOfLastPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filt = first.filter((srch) =>
    srch.name?.toLowerCase().includes(search.toLowerCase())
  );
  console.log(filt);

  const currentPosts = filt.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div >
      <h2 style={{ textAlign: "center" }}>Books List</h2>
      <MDBCol className="col-md-3">
        <MDBInput
          style={{ display: "inline" }}
          hint="Search"
          type="text"
          placeholder="🔍 Search by Book Name"
          onChange={(e) => setsearch(e.target.value)}
        />
      </MDBCol>
      <br />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Book Name</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {currentPosts.map((item, index) => {
            return (
              <>
                <tr>
                  <td>*</td>
                  <td>{item.name}</td>
                  <td>{item.author}</td>
                  <td>
                    <Link to={`/edit/${item._id}`}>
                      <button className="btn btn-info">Edit</button>
                    </Link>
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        deleteBook(item._id);
                      }}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
         
        </tbody>
      </Table>

      <div className="container text-center">
        <Row>
          <Col md={{ span: 3, offset: 3 }}>
          <Pagination
          className=""
          
            postsPerPage={postsPerPage}
            totalPosts={first.length}
            paginate={paginate}
          />
          </Col>
       
        </Row>
          
          </div>
    </div>
  );
}

export default Books;
