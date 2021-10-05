import React from 'react'
import { Table, Menu, Dropdown } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import {StyledContainer} from './style'
const TableForm = () => {
    const data = [
        {
            key:"1",
            name: "დავით",
            surname: "მამასახლისი",
            user: "davitmamasakhlisi",
            email: "datomamasakhlisi@gmail.com",
            phone: "595607900",
            group: "ვებ-დეველოპერი"
        }
    ]
    const columns = [
        {
          title: "სურათი",
          dataIndex: "image",
          key: "1",
          render: (text) => (
            <img
              style={{ width: "25px" }}
              src="https://cdn.iconscout.com/icon/free/png-256/gallery-187-902099.png"
            />
          ),
        },
        {
          title: "სახელი",
          dataIndex: "name",
          key: "2",
        },
        {
          title: "გვარი",
          dataIndex: "surname",
          key: "3",
        },
        {
          title: "მომხმარებელი",
          dataIndex: "user",
          key: "4",
        },
        {
          title: "ელ.ფოსტა",
          dataIndex: "email",
          key: "5",
        },
        {
            title: "ტელეფონი",
            dataIndex: "phone",
            key: "6",
          },
          {
            title: "ჯგუფი",
            dataIndex: "group",
            key: "7",
          },
        {
          title: "მოქმედებები",
          dataIndex: "actions",
          key: "7",
          render: (item, x) => (
            <Dropdown
              overlay={
                <Menu>
                  <Menu.Item key="0">
                    უფლებები
                  </Menu.Item>
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
          ),
        },
      ];

      
  const rowSelection = {
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(
        `selectedRowKeys: ${selectedRowKeys}`,
        "selectedRows: ",
        selectedRows
      );
    },
    getCheckboxProps: (record) => ({
      disabled: record.name === "Disabled User",
      name: record.name,
    }),
  };

    return (
        <StyledContainer>
                  <Table
        layout="inline"
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      />
        </StyledContainer>
    )
}

export default TableForm
