import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData, fetchDataPast } from "@Redux/duck/dashboard/chart";
import Table from "./Table/Table";
import Chart from "../helpers/Chart";
import { StyledContainer, StyledCategoryButton } from "./style";
const DocumentProductionC = () => {
  const dispatch = useDispatch();
  const { type } = useSelector((state) => state.chart);
  return (
    <StyledContainer>
      <div>
        <StyledCategoryButton
          active={type === "RECEIVED"}
          onClick={() => dispatch(fetchData())}
        >
          მიღებული დოკუმენტები
        </StyledCategoryButton>
        <StyledCategoryButton
          active={type === "PAST"}
          onClick={() => dispatch(fetchDataPast())}
        >
          გასული დოკუმენტები
        </StyledCategoryButton>
        <StyledCategoryButton>ბრძანებები</StyledCategoryButton>
      </div>
      <Chart />
      <Table />
    </StyledContainer>
  );
};

export default DocumentProductionC;
