

import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Cust_index from './Customer/Cust_index';

// No need to import Redux here — it's already handled inside Cust_index
function App() {
  return (
    <>
      <Cust_index />
    </>
  );
}

export default App;

