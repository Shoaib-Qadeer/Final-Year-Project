import React from "react";
import DataTable from "../../components/datatable/Datatable";
import Nabvar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import "./List.scss";
const List = () => {
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Nabvar />
        User's Asked Questions
        <DataTable />
      </div>
    </div>
  );
};

export default List;
