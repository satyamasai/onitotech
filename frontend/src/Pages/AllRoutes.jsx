import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import UserTable from "./UserTable";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/datatable" element={<UserTable />} />
    </Routes>
  );
};

export default AllRoutes;
