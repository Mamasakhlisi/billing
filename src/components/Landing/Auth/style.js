import styled from "styled-components";

export const StyledContainer = styled.div`
  .ant-form-item {
    display: flex !important;
    flex-direction: column !important;
    justify-content: flex-start !important;
  }
  .ant-form-item-label {
    text-align: left !important;
  }
  .ant-select {
    width: 100% !important;
    .ant-select-selector {
      border-radius: 4px;
      border: 2px solid #7279ff;
      font-family: "BOG 2018";
      font-size: 12px !important;
    }
  }
  .submit {
    display: flex !important;
    justify-content: space-between !important;
    align-items: center !important;
    width: 100% !important;
  }
  .steps-content {
    height: 270px !important;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
  .ant-steps-item-process > .ant-steps-item-container > .ant-steps-item-icon {
    background: #7279ff;
  }
  .ant-steps-item-process .ant-steps-item-icon {
    background-color: #fff;
    border-color: #7279ff;
  }
`;

export const StyledLogo = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 6px;
  background-color: #7279ff;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-family: "BOG 2017 Headline";
  font-size: 11px;
  @media (max-width: 1020px) {
    margin-left: 20px;
  }
`;
export const StyledSignUpButton = styled.button`
  width: 120px;
  height: 35px;
  border-radius: 4px;
  background-color: #fff;
  border: 2px solid #7279ff;
  color: #7279ff;
  cursor: pointer;
  font-family: "BOG 2017 Headline";
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  &:hover {
    background-color: #7279ff;
    color: #fff;
  }
`;
export const StyledStepsButton = styled.button`
  width: 120px;
  height: 35px;
  border-radius: 4px;
  background-color: #fff;
  border: 2px solid #7279ff;
  color: #7279ff;
  cursor: pointer;
  font-family: "BOG 2017 Headline";
  font-size: 11px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 300ms;
  &:hover {
    background-color: #7279ff;
    color: #fff;
  }
`;
