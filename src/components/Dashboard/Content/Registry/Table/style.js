import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 100%;
  padding: 20px;
  padding-top: 20px;

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


