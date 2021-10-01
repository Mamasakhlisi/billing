import styled from "styled-components";

export const StyledHeader = styled.header`
  box-shadow: 0 0 5px -2px #ccc;
  height: 65px;
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-right: 15px;
    color:#282828;
  }
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-left: 15px;
  margin-top: 10px;
  li {
      cursor: pointer;
    svg {
      font-size: 20px;
    }
  }
`;

export const StyledPerson = styled.button`
    padding:8px;
    margin-right: 15px;
    background: #7279ff;
    color:#fff;
    font-family: "BOG 2017 Headline";
    border:0;
    border-radius: 3px;
    cursor: pointer;
    font-size: 11px;
    `
