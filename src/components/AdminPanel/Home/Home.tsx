import React, { useState } from "react";
import Nav from "../AdminNav/Nav";
import "../Home/home.css";
import { Button, Modal } from "react-bootstrap";
import AddCarForm from "../../Forms/Car/AddCarForm";

type Props = {
  Toggle: () => void;
};

const Home = (props: Props) => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddNewCarClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };
  return (
    <div className="px-3">
      {" "}
      <Nav Toggle={props.Toggle} />{" "}
      <div className="container-fluid">
        {" "}
        <div className="row g-3 my-2">
          {" "}
          <div className="col-md-3 p-1">
            {" "}
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              {" "}
              <div>
                {" "}
                <h3 className="fs-2">10</h3> <p className="fs-5">Cars</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-md-3 p-1">
            {" "}
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              {" "}
              <div>
                {" "}
                <h3 className="fs-2">1</h3> <p className="fs-5">Users</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-md-3 p-1">
            {" "}
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              {" "}
              <div>
                {" "}
                <h3 className="fs-2">4</h3> <p className="fs-5">Brands</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
          <div className="col-md-3 p-1">
            {" "}
            <div className="p-3 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
              {" "}
              <div>
                {" "}
                <h3 className="fs-2">5</h3> <p className="fs-5">Models</p>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>
      <table className="table table-hover table-borderless caption-top bg-white rounded mt-2">
        <caption>
          <span className="cars-p">Cars</span> {""}
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddNewCarClick}
          >
            Add New Car
          </button>
        </caption>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Brand</th>
            <th scope="col">Model</th>
            <th scope="col">Plate</th>
            <th scope="col">Min. Findeks Rate</th>
            <th scope="col">Color</th>
            <th scope="col">Kilometer</th>
            <th scope="col">Daily Price</th>
            <th scope="col">Model Year</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>BMW</td>
            <td>5.20i</td>
            <td>34 AAA 344</td>
            <td>555</td>
            <td>Gri</td>
            <td>17.000</td>
            <td>4.650 TL</td>
            <td>2023</td>
            <td>
              <button type="button" className="btn btn-success">
                Update
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Mercedes-Benz</td>
            <td>E</td>
            <td>34 BBB 344</td>
            <td>544</td>
            <td>Siyah</td>
            <td>12.000</td>
            <td>6.500 TL</td>
            <td>2023</td>
            <td>
              <button type="button" className="btn btn-success">
                Update
              </button>
            </td>
            <td>
              <button type="button" className="btn btn-danger">
                Delete
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <Modal show={isFormOpen} onHide={handleCloseForm}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Car</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <AddCarForm/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseForm}>
            Close
          </Button>
          <Button variant="primary">Add Car</Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;
