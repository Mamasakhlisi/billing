import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchData } from "@Redux/duck/dashboard/chart";
import { StyledContainer, StyledChartItem } from "./style";
const Chart = () => {
  const dispatch = useDispatch();
  const { data, active } = useSelector((state) => state.chart);
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <StyledContainer>
      {data.map((item) => (
        <StyledChartItem
          length={data.length <= 2}
          key={item.id}
          active={active === item.id}
        >
          <h4>{item.title}</h4>
          <span>{item.value}</span>
        </StyledChartItem>
      ))}
    </StyledContainer>
  );
};

export default Chart;
