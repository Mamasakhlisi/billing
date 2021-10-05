import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 20px;
  .ant-table-wrapper {
    width: 100% !important;
    max-width: 100% !important;
  }
  .ant-table {
    box-shadow: 0 0 3px #e3e3e3 !important;
    border-radius: 3px !important;
  }
  .ant-table-cell {
    font-size: 11px;
    font-family: "BOG 2017 Headline";
    text-align: center;
    color: #6e6e6e !important;
  }
`;

export const StyledAddFormContainer = styled.div`
  width: 100%;
  padding: 10px;
  border-radius: 3px;
  margin-bottom: 20px;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .ant-input {
    font-family: "BOG 2018";
    font-size:12px;
  }
  button{
    width:170px;
    padding:8px;
    color:#fff;
    background: #7279ff;
    font-size: 11px;
    font-family: "BOG 2017 Headline";
    border:0;
    border-radius: 3px;
    cursor: pointer;
  }
`;

export const StyledFormItem = styled.div`
  width: 235px;
  height: 135px;
  box-shadow: 0 0 3px #e3e3e3 !important;
  text-align: center;
  margin-left: 15px;
  background: #fff;
  font-family: "BOG 2018";
  padding: 5px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  border-radius: 3px;
  position: relative;
  transition: 300ms;
  &:hover {
    background: #fafafa;
  }
  span {
    font-family: "BOG 2017 Headline";
    font-size: 12px;
  }
  .edit {
    top: -5px;
    right: -5px;
    box-shadow: 0 0 3px #e3e3e3 !important;
    background: #fff;
    width: 30px;
    height: 30px;
    border-radius: 3px;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 300ms;
    cursor: pointer;
    &:hover {
      background: #7279ff;
      svg {
        color: #fff;
      }
    }
  }
  &:first-child {
    margin-left: 0;
  }
`;

export const StyledFormItemContainer = styled.div`
  display: flex;
`;
