import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BarsOutlined,
  DollarCircleOutlined,
  EuroCircleOutlined,
} from "@ant-design/icons";
import { fetchData } from "@Redux/duck/dashboard/exchangeRate";
import { StyledHeader, StyledUl, StyledPerson } from "./style";
const Header = ({ setActiveBarHandle }) => {
  const { usd, eur } = useSelector((state) => state.exchangeRate);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <StyledHeader>
      <StyledUl>
        <li onClick={setActiveBarHandle}>
          <BarsOutlined />
        </li>
      </StyledUl>
      <div>
        <span>
          <DollarCircleOutlined />
          {usd.rate}
        </span>
        <span>
          <EuroCircleOutlined /> {eur.rate}
        </span>
        <StyledPerson>სისტემიდან გასვლა</StyledPerson>
      </div>
    </StyledHeader>
  );
};

export default Header;
