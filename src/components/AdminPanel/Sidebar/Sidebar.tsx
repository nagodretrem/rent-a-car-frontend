import React from "react";
import { Link } from "react-router-dom";
import "../Sidebar/sidebar.css";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div>
      <div className="bg-white sidebar p-2">
        {" "}
        <div className="m-2">
          {" "}
          <span className="brand-name fs-4">Admin</span>{" "}
        </div>{" "}
        <hr className="text-dark" />{" "}
        <div className="list-group list-group-flush">
          {" "}
          <Link to={""} className="list-group-item py-2">
            {" "}
            <i className="bi bi-speedometer2 fs-5 me-3"></i>{" "}
            <span>Dashboard</span>{" "}
          </Link>{" "}
          <Link to={""} className="list-group-item py-2 ">
            {" "}
            <i className="bi bi-house fs-5 me-3"></i> <span>Home</span>{" "}
          </Link>{" "}
          <Link to={""} className="list-group-item py-2">
            {" "}
            <i className="bi bi-table fs-5 me-3"></i> <span>Cars</span>{" "}
          </Link>{" "}
          <Link to={""} className="list-group-item py-2">
            {" "}
            <i className="bi bi-clipboard-data fs-5 me-3"></i>{" "}
            <span>Report</span>{" "}
          </Link>{" "}
          <Link to={""} className="list-group-item py-2">
            {" "}
            <i className="bi bi-people fs-5 me-3"></i> <span>Customers</span>{" "}
          </Link>{" "}
          <Link to={""} className="list-group-item py-2">
            {" "}
            <i className="bi bi-power fs-5 me-3"></i> <span>Logout</span>{" "}
          </Link>{" "}
        </div>{" "}
      </div>
    </div>
  );
};

export default Sidebar;
