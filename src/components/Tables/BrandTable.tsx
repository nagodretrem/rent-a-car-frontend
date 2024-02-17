import React, { useEffect, useState } from "react";
import UpdateBrandForm from "../Forms/Brand/UpdateBrandForm";
import { Button, Modal } from "react-bootstrap";
import AddBrandForm from "../Forms/Brand/AddBrandForm";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/configureStore";
import { deleteBrand, fetchBrands } from "../../store/slices/brandSlice";
import { GetAllBrandResponse } from "../../models/brands/response/getAllBrandResponse";

type Props = {};

const BrandTable = (props: Props) => {
  const brandsState = useSelector((state: any) => state.brand);
  const dispatch = useDispatch<AppDispatch>();
 

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const [showAddModal, setShowAddModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
 

  const handleToggleAddModal = () => {
    setShowAddModal(!showAddModal);
  };

  const handleToggleUpdateModal = () => {
    setShowUpdateModal(!showUpdateModal);
  };

  const handleDeleteBrand = async (id: number) => {
    try {
      await dispatch(deleteBrand(id)).unwrap();
      
      console.log("Marka silindi");
    } catch (error) {
       
      console.error("Marka silinemedi", error);
    }
  };
 
 
 
  return (
    <>
      <table className="table table-hover table-borderless caption-top bg-white rounded mt-2">
        <caption>
          <span className="cars-p">Brands</span> {""}
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleToggleAddModal}
          >
            Add New Brand
          </button>{" "}
          {""}
          <button
            type="button"
            className="btn btn-success"
            onClick={handleToggleUpdateModal}
          >
            Update
          </button>
        </caption>
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">LogoPath</th>
          </tr>
        </thead>
        <tbody>
          {brandsState.brands.map((brand: GetAllBrandResponse) => (
            <tr key={brand.id}>
              <th scope="row">{brand.id}</th>
              <td>{brand.name}</td>
              <td>{brand.logoPath}</td>

              <td>
                <button type="button" className="btn btn-danger" onClick={() => handleDeleteBrand(brand.id)}>
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
          <AddBrandForm />
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
          <Modal.Title>Update Brand</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateBrandForm />
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
  );
};

export default BrandTable;
