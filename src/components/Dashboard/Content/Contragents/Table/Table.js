import React, { useEffect } from "react";
//packages
import axios from "axios";
import {useDispatch} from 'react-redux'
import { Table, Menu, Dropdown } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
// imports
import {setTab} from '@Redux/duck/dashboard/tabs'
import { StyledContainer } from "./style";

const data = [
  {
    key: "1",
    for_name: "საქართველოს აეროპორტების გაერთიანება",
    identification_code: 404389693,
    status: "იურიდიული პირი",
    legal_form: "ინდივიდუალური საწარფმო",
    balance: "0.00",
  },
  {
    key: "2",
    for_name:
      "საქართველო შუნსიანგის ხე-ტყის გადამამუშავებელი კომპანია ქუთაისი თიზ",
    legal_form: "კოოპერატივი",
    identification_code: 412712079,
    status: "იურიდიული პირი",
    balance: "0.00",
  },
];

const DataOfTable = ({ activeBar }) => {
  const dispatch = useDispatch();

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
    title: "სტატუსი",
    dataIndex: "status",
    key: "2",
  },
  {
    title: "სამართლებრივი ფორმა",
    dataIndex: "legal_form",
    key: "3",
  },
  {
    title: "დასახელება",
    dataIndex: "for_name",
    key: "4",
    render: (text) => (
      <div className="whitespace_container">
        <span className="whitespace">{text}</span>
      </div>
    ),
  },
  {
    title: "ს/კ",
    dataIndex: "identification_code",
    key: "5",
  },
  {
    title: "ბალანსი",
    dataIndex: "balance",
    key: "6",
  },
  {
    title: "მოქმედებები",
    dataIndex: "actions",
    key: "7",
    render: (item, x) => (
      <Dropdown
        overlay={
          <Menu>
            <Menu.Item key="0" name="barati" onClick={(e) => dispatch(setTab(x)) }>
              ბარათი
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

  useEffect(() => {
    axios
      .get("https://nbg.gov.ge/gw/api/ct/monetarypolicy/currencies/ka/json")
      .then((res) => console.log(res.data));
  }, []);
  return (
    <StyledContainer activeBar={activeBar}>
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
  );
};

export default DataOfTable;
