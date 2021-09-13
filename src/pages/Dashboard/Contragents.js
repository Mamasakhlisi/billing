import React, { useState } from "react";
import styled from "styled-components";

import Menu from "@CDashboard/Menu/Menu";
import Header from "@CDashboard/Header/Header";
import ContragentsC from "@CDashboard/Content/Contragents/ContragentsC";

const StyledContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%auto;
  .content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
  }
`;
const Contragents = () => {
  const [activeBar, setActiveBar] = useState(true);

  const setActiveBarHandle = () => {
    setActiveBar(!activeBar);
  };
  return (
    <StyledContainer>
      <Menu activeBar={activeBar} />
      <div className="content">
        <Header setActiveBarHandle={setActiveBarHandle} />
        <ContragentsC />
      </div>
    </StyledContainer>
  );
};

export default Contragents;
