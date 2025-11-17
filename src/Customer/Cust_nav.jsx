

import React from "react";
import { Link } from "react-router-dom";
import logo from "../static/image/logo1.jpg";
import { useSelector, useDispatch } from "react-redux";

function Cust_nav() {
  const cust_status = useSelector((state) => state.Cust_status);
  const vendor_status = useSelector((state) => state.Vendor_status);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch({ type: "RM_CUSTOMER" });
    dispatch({ type: "RM_VENDOR" });
  };

  return (
    <div>
      <h1 className="bg-dark text-white text-center">
        <b> T-SHOP</b>
      </h1>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            <img src={logo} width={100} height={60} alt="logo" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {cust_status && (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/Home">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/About">About</Link>
                  </li>
                   <li className="nav-item">
                    <Link className="nav-link" to="/Service">Service</Link>
                  </li>
                   <li className="nav-item">
                    <Link className="nav-link" to="/Contact">Contact</Link>
                  </li>

                </>
              )}


            </ul>

            <div>
             
              <button className="btn btn-outline-danger" onClick={logout}>
                 <Link className="nav-link" to="/">
                Logout
                </Link>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Cust_nav;

