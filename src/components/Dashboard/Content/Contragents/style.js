import styled from 'styled-components'

export const StyledContainer = styled.div`
    width:100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap:wrap;
    padding:10px;
    padding-bottom: 0;
`

export const StyledActiveTabTableContainer = styled.div`
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

export const StyledChartItem = styled.div`
    width: ${p => p.length ? "250px" : "200px"};
    height:70px;
    box-shadow: 0 0 3px #e3e3e3;
    background-color:${p => p.active ? "#7279ff" : " #fff"};
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    flex-direction: column-reverse;
    font-family: "BOG 2017 Headline";
    color:${p => !p.active ? "#7279ff" : " #fff"};
    border-radius: 3px;
    margin:10px;
    margin-bottom: 0;
    font-size:10px;
    margin-left:${p => p.length ? "15px" : "15px"};;

    cursor:pointer;
    transition: 300ms;
    &:first-child {
        margin-left: 10px;
    }
    &:hover {
        background-color: #7279ff;
        color:#fff;
        h4 {
            color:#fff;
        }
    }
    h4 {
        color:${p => p.active ? "#fff" : " #6e6e6e"};
        
    }
    span {
        font-size:20px;
    }
`