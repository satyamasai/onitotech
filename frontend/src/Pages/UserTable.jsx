import React, { useState, useEffect } from "react";
import $ from "jquery";
// import DataTable from "datatables.net";

import DataTable from "react-data-table-component";
import axios from "axios";

const UserTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const getUsers = async () => {
      axios("http://localhost:8008/getusers")
        .then((res) => {
          console.log(res);
          setUsers(res.data);
        })
        .catch((err) => console.log(err));
    };
    getUsers();
  }, []);

  const columns = [
    {
      name: "Name",
      selector: "name",
      sortable: true,
    },
    {
      name: "Age/Sex",
      selector: "age",
      sortable: true,
      cell: (row) => `${row.age} / ${row.sex}`,
    },
    {
      name: "Mobile",
      selector: "mobile",
      sortable: true,
    },
    {
      name: "Address",
      selector: "address",
      sortable: true,
    },
    {
      name: "Govt ID",
      selector: "govtId",
      sortable: true,
    },
    {
      name: "Guardian Details",
      selector: "guardianDetails",
      sortable: true,
    },
    {
      name: "Nationality",
      selector: "nationality",
      sortable: true,
    },
  ];

  return (
    <DataTable columns={columns} data={users} pagination responsive searching />
  );
};

export default UserTable;
