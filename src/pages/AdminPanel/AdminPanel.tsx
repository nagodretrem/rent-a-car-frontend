import React, { useState } from "react";
import Sidebar from "../../components/AdminPanel/Sidebar/Sidebar";
import Home from "../../components/AdminPanel/Home/Home";
import "../AdminPanel/adminpanel.css";

type Props = {};

const AdminPanel: React.FC<Props> = (props) => {
  const [toggle, setToggle] = useState<boolean>(false);

  const Toggle = () => {
    setToggle(!toggle);
  };

  return (
    <div className="container-fluid bg-dark min-vh-100">
      <div className="row">
        {toggle && (
          <div className="col-4 col-md-2  bg-white vh-100 position-fixed sidebar-menu">
            <div className="sidebar-wrapper">
              <Sidebar />
            </div>
          </div>
        )}
        {toggle && <div className="col-4 col-md-2"></div>}
        <div className="col">
          <Home Toggle={Toggle} />
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
