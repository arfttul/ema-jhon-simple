import React from "react";
import { Outlet } from "react-router-dom";

const ManageInventory = () => {
  return (
    <div>
      <h1>Manage Inventory</h1>
      <Outlet/>
    </div>
  );
};

export default ManageInventory;
