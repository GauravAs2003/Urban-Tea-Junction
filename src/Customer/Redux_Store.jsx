

// Store.js
import { createStore } from "redux";

const initialState = {
  Cust_status: false,
 
};

export const Redux_store = (state = initialState, action) => {
  switch (action.type) {
    case "CUSTOMER":
      return { ...state, Cust_status: true, Vendor_status: false };

    case "RM_CUSTOMER":
      return { ...state, Cust_status: false };


    default:
      return state;
  }
};

const Store = createStore(Redux_store);
export default Store;
