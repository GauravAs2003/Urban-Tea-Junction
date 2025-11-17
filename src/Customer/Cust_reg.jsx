

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Cust_reg = () => {
  const [record, setRecord] = useState({
    Name: "",
    Email: "",
    Password: "",
    Address: "",
  });

  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "https://shop-e8a45-default-rtdb.firebaseio.com/customer.json",
        record
      )
      .then(() => {
        alert("Registration successful!");
        navigate("/"); // redirect to login
      })
      .catch((error) => {
        console.error("Error registering user:", error);
        alert("Something went wrong, please try again.");
      });
  };

  return (
    <div className="container mt-5">
      <center>
        <h1>
          <b>Customer Registration</b>
        </h1>
      </center>

      <div className="col-6 offset-3">
        <div className="border border-2 p-5 rounded rounded-5">
          <form onSubmit={formSubmit}>
            <div className="mb-3">
              <label className="form-label">Name</label>
              <input
                name="Name"
                type="text"
                className="form-control"
                placeholder="Enter your Name"
                value={record.Name}
                onChange={(e) =>
                  setRecord({ ...record, [e.target.name]: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                name="Email"
                type="email"
                className="form-control"
                placeholder="Enter your Email"
                value={record.Email}
                onChange={(e) =>
                  setRecord({ ...record, [e.target.name]: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                name="Password"
                type="password"
                className="form-control"
                placeholder="Enter your Password"
                value={record.Password}
                onChange={(e) =>
                  setRecord({ ...record, [e.target.name]: e.target.value })
                }
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Address</label>
              <textarea
                name="Address"
                className="form-control"
                rows="3"
                value={record.Address}
                onChange={(e) =>
                  setRecord({ ...record, [e.target.name]: e.target.value })
                }
                required
              ></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-success w-100">
                Register
              </button>

              <p className="mt-3">
                Already have an account?{" "}
                <Link to="/" className="text-decoration-none">
                  Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>

      <div className="text-center mt-3">
        <small>
          {record.Name}, {record.Email}, {record.Address}
        </small>
      </div>
    </div>
  );
};

export default Cust_reg;
