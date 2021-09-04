import styled from "styled-components";

export const StyledContainer = styled.div`
  width: ${(p) => (p.active ? "650px" : "300px")};
  transition: 300ms;
  max-width: 100%;
  margin: 0 auto;
  height: 300px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 5px 0px;
  border-radius: 10000px;
  margin-bottom: 100px;
  position: relative;
  background-color: #fff;
  border: 30px solid #7279ff;
`;

export const StyledTitle = styled.h3`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  top: 50%;
  left: 8%;
  right: 0;
  font-family: "BOG 2017 Headline";
  font-size: 15px;
  color: #fff;
`;
export const StyledWrapper = styled.div`
  position: relative;
`;
export const StyledStepId = styled.div`
  position: absolute;
  right: 0;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 5px 0px;
  background-color: #fff;
  color: ${(p) => (p.active ? "#fff" : "#282828")};
  font-family: "Dosis", sans-serif;
  font-size: 30px;
  transition: 300ms;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  h4 {
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: ${(p) => (p.active ? "#7279ff" : "#fff")};
    border-radius: 50%;
    color: ${(p) => (p.active ? "#fff" : "#282828")};
    padding: 5px;
    margin: 0;
  }
  &:hover {
    color: ${(p) => (p.active ? "#fff" : "#282828")};
    background: #7279ff;
  }
  &:nth-child(1) {
    top: 0px;
    right: -15px;
  }
  &:nth-child(2) {
    top: 100px;
    right: -50px;
    color: #282828;
    background: #7279ff;
    background-color: ${(p) => p.active && "#fff"};
    color: ${(p) => p.active && "#fff"};
  }
  &:nth-child(3) {
    top: 190px;
    right: -10px;
  }
`;
export const StyledSectionTitle = styled.h3`
  text-align: center;
  font-size: 40px;
  font-family: "BOG 2017 Headline";
  margin-bottom: 30px;
  color: #7279ff;
  @media (max-width: 637px) {
    font-size: 30px;
  }
`;
