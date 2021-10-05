import React from "react";
import { UnorderedListOutlined } from "@ant-design/icons";

import { Menu, Dropdown } from "antd";
import { StyledFormItem } from "./style";
const FormItem = ({ id, title,iban,code }) => {
  return (
    <StyledFormItem>
      <div>
        <span>დასახელება</span>
        <h5>{title}</h5>
      </div>
      <div>
        <span>IBAN კოდი</span>
        <h5>{iban}</h5>
      </div>

      <div>
        <span>ბანკის კოდი</span>
        <h5>{code}</h5>
      </div>

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
