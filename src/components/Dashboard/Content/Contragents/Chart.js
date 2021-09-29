import React from "react";
import { StyledContainer, StyledChartItem } from "./style";
const Chart = () => {
  const data = [
    { id: 1, title: "სასტარტო ბალანსი", value: "0.00" },
    { id: 2, title: "შესყიდვა", value: "0.00" },
    { id: 3, title: "რეალიზაცია", value: "0.00" },
    { id: 3, title: "გადახდილი", value: "0.00" },
    { id: 3, title: "საბოლოო ბალანსი", value: "0.00" },
  
  ];
  return (
    <StyledContainer>
      {data.map((item) => (
        <StyledChartItem length={data.length <= 2} key={item.id}>
          <h4>{item.title}</h4>
          <span>{item.value}</span>
        </StyledChartItem>
      ))}
    </StyledContainer>
  );
};

export default Chart;
