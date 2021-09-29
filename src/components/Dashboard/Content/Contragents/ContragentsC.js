import React from "react";
//packages
import { useSelector } from "react-redux";
// imports
import Table from "./Table/Table";
import Chart from "./Chart";
import TableHead from './TableHead'
import ActiveTabTable from "./ActiveTabTable";
const ContragentsC = ({activeBar}) => {
  const {activeItem} = useSelector((state) => state.tabs)
  return (
    <div style={{width:"100%"}}>
      <Chart />
      <TableHead />
      {activeItem.key ? <ActiveTabTable /> : <Table activeBar={activeBar}  />}

    </div>
  );
};

export default ContragentsC;
