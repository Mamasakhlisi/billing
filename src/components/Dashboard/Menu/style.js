import styled from "styled-components";

export const StyledContainer = styled.div`
  width: ${(p) => (p.activeBar ? "320px" : "0px")};
  transition: 300ms;
  height: 100vh;
  overflow: hidden;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  clip-path: inset(0px -5px 0px 0px);
  @media (max-width: 500px) {
    width: ${(p) => (p.activeBar ? "500px" : "0px")};
  }
`;
export const StyledLogoContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  box-shadow: 0 0 5px -2px #ccc;
  h4 {
    margin-left: 10px;
    margin-top: 10px;
    font-family: "BOG 2017 Headline";
  }
  button {
    background-color: #fff;
    border: 0;
    cursor: pointer;
    font-family: "BOG 2017 Headline";
    font-size: 10px;
    display: flex;
    align-items: center;
    svg {
      margin-left: 5px;
      font-size: 14px;
    }
  }
`;
export const StyledPerson = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 10px;
  span {
    font-family: "BOG 2017 Headline";
    font-size: 12px;
  }
  .type {
    font-family: "BOG 2017 Headline";
    font-size: 10px;
    color: #ccc;
  }
`;
export const StyledLogo = styled.div`
  width: 45px;
  height: 45px;
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
  @media (max-width: 500px) {
    margin-left: 0;
    width: 35px;
    height: 35px;
  }
`;

export const StyledNavUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width:100%;
`;

export const StyledLink = styled.li`
  width: 100%;
  color: ${(p) => (p.active ? "#6e6e6e" : "#6e6e6e")};
  background-color: ${(p) => (p.active ? "#FAFAFA" : "#fff")};
  height: 40px;
  line-height: 40px;
  margin-top: 10px;
  cursor: pointer;
  transition: 300ms;
  position: relative;
  a {
    color:#6e6e6e;
    &:hover {
   
      color:#fff;
  }
  }
  ${p => p.active && !p.activeDropdown && `  &::before {
        content:"";
        position: absolute;
        left:0;
        top:0;
        width:4px;
        height:100%;
        background:#7279ff ;
        }`};
  &:hover {
      background: #7279ff;
      color:#fff;
  }
  span {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: "BOG 2017 Headline";
    font-size: 11px;
    cursor: pointer;
    padding-left: 10px;
    padding-right: 10px;
  }
  label {
    display: flex;
    align-items: center;
    cursor: pointer;

    .icon {
      margin-right: 10px;
    }
  }
`;

export const StyledDropdownUl = styled.ul`
  display: ${(p) => (p.active ? "block" : "none")};
  transition: 300ms;
  width: 100%;

  label {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-left:30px;
    .icon {
      margin-right: 10px;
    }
  }
  
`;

export const StyledDropdownLi = styled.li`
      width: 100%;
    cursor: pointer;
    color: #6e6e6e;
    font-family: "BOG 2017 Headline";
    font-size: 11px;
    background: #fafafa;
    line-height: 40px;
    padding-left: ${p => p.subDrop ? "40px" : "20px"};
    padding-right: 20px;
    position: relative;
    &:hover {
      background: #7279ff;
      color:#fff;
      span {
        color:#fff;
      }
      label {
        color:#fff;
      }

  };
  span {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  label {
    transition: 300ms;
    color:#6e6e6e;
    &:hover {
      color:#fff;
    }
  }
  ${p => p.activedropdown && `  &::before {
        content:"";
        position: absolute;
        left:0;
        top:0;
        width:4px;
        height:100%;
        background:#7279ff ;
        }` };
`

