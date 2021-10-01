import React from "react";
import {UnorderedListOutlined} from "@ant-design/icons"
import { Table,Menu, Dropdown  } from "antd";
import AddForm from "./AddForm";
import { StyledContainer } from "./style";
const dataSource = [
  {
    key: "1",
    name: "არარეზიდენტი",
  },
];

const Form = () => {
  const columns = [
    {
      title: "დასახელება",
      dataIndex: "name",
      key: "name",
    },
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {
      title: "მოქმედებები",
      dataIndex: "actions",
      key: "actions",
      render: () =>       <Dropdown
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
    },
  ];

  return (
    <StyledContainer>
      <AddForm />
      <Table dataSource={dataSource} columns={columns} />;
    </StyledContainer>
  );
};

export default Form;
