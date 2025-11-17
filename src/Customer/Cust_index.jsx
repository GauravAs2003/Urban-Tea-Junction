

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cust_home from "./Cust_home";
import Cust_nav from "./Cust_nav"; // Use only one import
import Cust_log from "./Cust_log";
import Cust_reg from "./Cust_reg";
import { Provider, useSelector } from "react-redux";
import Store from "../Redux/Store";
import { Cust_about } from "./Cust_about";
import Cust_contact from "./Cust_contact";
import { Cust_service } from "./Cust_service";

function AppRoutes() {
  // Access login status from Redux
  const cust_status = useSelector((state) => state.Cust_status);
  const vendor_status = useSelector((state) => state.Vendor_status);

  return (
    <>
      {/* Show Navbar only if logged in */}
      {(cust_status || vendor_status) && <Cust_nav />}

      <Routes>
        {/* Show login & registration only if not logged in */}
        {!cust_status && !vendor_status && (
          <>
            <Route path="/" element={<Cust_log />} />
            <Route path="/reg" element={<Cust_reg />} />
          </>
        )}

        {/* Customer routes after login */}
        {cust_status && (
          <>
            <Route path="/Home" element={<Cust_home />} />
            {/* <Route path="/like_properties" element={<Linked_properties />} /> */}
            {/* <Route path="/property_details/:property_id" element={<Property_details />} /> */}
            <Route path="/About" element={<Cust_about />} />
            <Route path="/Contact" element={<Cust_contact />} />
            <Route path="/Service" element={<Cust_service />} />
          </>
        )}

        {/* Vendor routes can be added here */}
      </Routes>
    </>
  );
}

function Cust_index() {
  return (
    <Provider store={Store}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default Cust_index;
