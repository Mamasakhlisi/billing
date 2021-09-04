import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 900px;
  max-width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap:wrap;
  @media (max-width:916px) {
    width:700px;
    justify-content: space-around;
  }
  @media (max-width:637px) {
    justify-content: center;
  }
`;

export const StyledSectionTitle = styled.h3`
  text-align: center;
  font-size: 40px;
  font-family: "BOG 2017 Headline";
  margin-bottom: 30px;
  color: #7279ff;
  @media (max-width:637px) {
    font-size: 30px;
  }
`;

export const StyledPacket = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  width: 280px;
  background: #f2f8fd;
  padding: 25px;
  border-radius: 16px;
  transition: 300ms;
  @media (max-width:916px) {
    margin-top: 20px;
  }
  @media (max-width:637px) {
    margin-top: 20px;
  }
  .check {
    color:#fff;
  }
  &:nth-child(2) {
    background: #7279ff;
    .logo {
      background: #fff;
      color: #7279ff;
    }
    .level {
      color: #fff;
    }
    li {
      color: #fff;
    }
    .price h4 {
      color: #fff;
    }
    button {
      background: #fff;
      color: #7279ff;
    }
    .check {
      background: #fff;
      color: #202631;
    }
  }
  &:hover {
    background: #7279ff;
    .logo {
      background: #fff;
      color: #7279ff;
    }
    .level {
      color: #fff;
    }
    li {
      color: #fff;
    }
    .price h4 {
      color: #fff;
    }
    button {
      background: #fff;
      color: #7279ff;
    }
    .check {
      background: #fff;
      color: #202631;
    }
  }
  .logo {
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
    margin-right: 10px;
  }
  .level {
    display: flex;
    align-items: center;
    font-family: "BOG 2017 Headline";
    color: #202631;
  }
  .price {
    margin-top: 20px;
    h4 {
      font-size: 30px;
      font-family: "BOG 2017 Headline";
      color: #c1cdd7;
      span {
        font-size: 14px;
        font-family: "BOG 2018";
        color: #202631;
      }
    }
  }
  ul {
    height: 150px;
    li {
      color: #c1cdd7;
      list-style: none;
      font-size: 14px;
      font-family: "BOG 2018";
      margin-top: 15px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      .check {
        width: 20px;
        height: 20px;
        border-radius: 6px;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #202631;
        margin-right: 10px;
      }
    }
  }
  button {
    padding: 10px;
    background-color: #7279ff;
    color: #fff;
    border: 2px solid #7279ff;
    border-radius: 6px;
    cursor: pointer;
    font-family: "BOG 2017 Headline";
    transition: 300ms;
    display: flex;
    justify-content: center;
    align-items: center;
    svg {
      font-size: 20px;
      margin-right: 5px;
    }
    &:hover {
      background-color: #fff;
      color: #7279ff;
    }
  }
  .submit {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
