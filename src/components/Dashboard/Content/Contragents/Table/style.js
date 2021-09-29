import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 20px;
  padding-top: 0;

  .ant-table-wrapper {
    width: 100% !important;
    max-width: 100% !important;
  }
  .ant-table {
    box-shadow: 0 0 3px #e3e3e3 !important;
    border-radius: 3px !important;
  }

  .ant-pagination {
    padding: 20px !important;
  }
  .ant-table-cell {
    font-size: 11px;
    font-family: "BOG 2017 Headline";
    text-align: center;
    color: #6e6e6e !important;
  }
  ${(p) =>
    p.activeBar
      ? `  .whitespace_container {
    width: 430px;
  }`
      : `  .whitespace_container {
    width: 100%;
  }`};
  .whitespace {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 1; /* number of lines to show */
    -webkit-box-orient: vertical;
  }
`;

export const StyledFilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  width:100%;
  margin-top:25px;
  padding:10px;
  border-radius: 3px;
  .ant-select {
    width: 200px !important;
    .ant-select-selector {
      border-radius: 4px;
      border: none !important;
      box-shadow: 0 0 3px #e3e3e3 !important;
      font-family: "BOG 2018";
      font-size: 12px !important;
    }
  }
`;
export const StyledSearch = styled.div`
  display: flex;
  align-items: center;
  input {
    width: 150px;
    padding: 7px;
    border-radius: 4px;
    border: none !important;
    box-shadow: 0 0 3px #e3e3e3 !important;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    font-family: "BOG 2018";
    font-size: 12px !important;
    &::placeholder {
      font-size: 11px;
      color: #bfbfbf;
    }
  }
  button {
    width: 50px;
    background-color: #fff;
    color: #6e6e6e !important;
    padding: 7px;
    border: none !important;
    box-shadow: 0 0 3px #e3e3e3 !important;
    border-radius: 4px;
    border-top-left-radius: 0;
    border-bottom-left-radius: 0;
    font-family: "BOG 2018";
    cursor: pointer;
    font-size: 12px;
  }
`;

export const StyledCreateButton = styled.button`
  background: #7279FF;
  color:#fff;
  padding:7px;
  width:120px;
  border:0;
  border-radius: 3px;
  font-family: "BOG 2018";
  cursor: pointer;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    margin-right: 5px;
  }
`

export const StyledRadioContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
  .ant-radio-button-wrapper {
    width:180px !important;
    text-align:center !important;
    margin:5px !important;
    font-family: "BOG 2018" !important;
    font-size:12px !important;
  }
`