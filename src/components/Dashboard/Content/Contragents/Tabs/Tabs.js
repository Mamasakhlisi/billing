import React, {useState} from "react";
// packages
import { useDispatch } from "react-redux";
import { CloseOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

// imports
import { removeTab,removeActiveTab,setActive } from "@Redux/duck/dashboard/tabs";
import { StyledContainer, StyledTab } from "./style";
const Tabs = () => {

  const dispatch = useDispatch();
  const { items, activeItem } = useSelector((state) => state.tabs);
  return (
    <StyledContainer>
      <StyledTab active={!activeItem.key} onClick={() => dispatch(removeActiveTab())}>
        <span>მთავარი</span>
      </StyledTab>
      {items.map((item) => (
        <StyledTab
          active={activeItem.key === item.key ? true : false}
          key={item.key}
        >
          <span onClick={() => dispatch(setActive(item))}>{item.for_name}</span>{" "}
          <button onClick={() => dispatch(removeTab(item.key))}>
            <CloseOutlined />
          </button>
        </StyledTab>
      ))}
    </StyledContainer>
  );
};

export default Tabs;
