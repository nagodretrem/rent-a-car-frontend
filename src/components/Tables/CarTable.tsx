import React, { useEffect, useState } from 'react'
import { Button, Modal } from "react-bootstrap";
import AddCarForm from '../Forms/Car/AddCarForm';
import UpdateCarForm from '../Forms/Car/UpdateCarForm';
import { GetAllCarResponse } from '../../models/cars/response/getAllCarResponse';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch } from '../../store/configureStore';
import { fetchCars } from '../../store/slices/carSlice';


type Props = {
 
}

const CarTable = (props: Props) => {
  const carsState= useSelector((state:any) => state.car);
  const dispatch= useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchCars());
    
  }, [dispatch]);


  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);

  const handleToggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  const handleToggleUpdateModal = () => {
    setShowUpdateModal(!showUpdateModal);
  };
  return (
    <>
    <table className="table table-hover table-borderless caption-top bg-white rounded mt-2">
        <caption>
          <span className="cars-p">Cars</span> {""}
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleToggleAddModal}
          >
            Add New Car
          </button> {""}
          <button type="button" className="btn btn-success" onClick={handleToggleUpdateModal}>
                Update
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
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {carsState.cars.map((car: GetAllCarResponse) => (
      <tr key={car.id}>
        <th scope="row">{car.id}</th>
        <td>{car.model_id.brandResponse.name}</td>
        <td>{car.model_id.name}</td>
        <td>{car.plate}</td>
        <td>{car.minFindeksRate}</td>
        <td>{car.color_id.name}</td>
        <td>{car.kilometer}</td>
        <td>{car.dailyPrice}</td>
        <td>{car.modelYear}</td>
        <td>
          <button type="button" className="btn btn-danger">
            Delete
          </button>
        </td>
      </tr>
    ))}
          
        </tbody>
      </table>
      <Modal show={showAddModal} onHide={handleToggleAddModal}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AddCarForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleToggleAddModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleToggleAddModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>

    <Modal show={showUpdateModal} onHide={handleToggleUpdateModal}>
      <Modal.Header closeButton>
        <Modal.Title>Update Car</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <UpdateCarForm />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleToggleUpdateModal}>
          Close
        </Button>
        <Button variant="primary" onClick={handleToggleUpdateModal}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
    </>
  )
}

export default CarTable