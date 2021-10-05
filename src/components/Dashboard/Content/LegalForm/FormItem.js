import React from "react";
import { UnorderedListOutlined } from "@ant-design/icons";

import { Menu, Dropdown } from "antd";
import { StyledFormItem } from "./style";
const FormItem = ({ id, title }) => {
  return (
    <StyledFormItem>
      <span>დასახელება</span>
      <h5>{title}</h5>
      <div className="edit">
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1">რედაქტირება</Menu.Item>
              <Menu.Item key="2">წაშლა</Menu.Item>
            </Menu>
          }
          trigger={["click"]}
        >
          <a className="ant-dropdown-link">
            <UnorderedListOutlined style={{ cursor: "pointer" }} />
          </a>
        </Dropdown>
      </div>
    </StyledFormItem>
  );
};

export default FormItem;
