

import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";

const Cust_log = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [record, setRecord] = useState({});

  // ✅ Fetch customer data from Firebase
  useEffect(() => {
    axios
      .get("https://shop-e8a45-default-rtdb.firebaseio.com/customer.json")
      .then((r1) => setRecord(r1.data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  // ✅ Handle login
  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "" || password === "") {
      alert("Please enter both email and password!");
      return;
    }

    // Convert Firebase data to array
    const keys = Object.keys(record || {});
    const final_records = keys.map((x) => ({
      Name: record[x].Name,
      Email: record[x].Email,
      Password: record[x].Password,
      Address: record[x].Address,
    }));

    // ✅ Check if email and password match
    const userFound = final_records.find(
      (x) => x.Email === email && x.Password === password
    );

    if (userFound) {
      alert("Login successful!");
      dispatch({ type: "CUSTOMER" }); // set customer login
     
      nav("/Home");
    } else {
      alert("Invalid email or password!");
    }
  };

  return (
    <div className="container mt-5">
      <div className="col-6 offset-3">
          <div className="border border-2 p-5 rounded rounded-5">
      <h2>Customer Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          className="form-control mb-3"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          className="form-control mb-3"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
       
        <button type="submit" className="btn btn-success w-100">
           Login
        </button>


         
        <p className="mt-3 text-center">
          Don’t have an account?{" "}
          <Link to="/reg" className="text-decoration-none">
            Register here
          </Link>
        </p>
      </form>
    </div>
    </div>
    </div>
  );
};

export default Cust_log;
