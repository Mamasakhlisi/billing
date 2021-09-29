import React from 'react'
import { Table, Menu, Dropdown } from "antd";
import {StyledActiveTabTableContainer} from './style'
const ActiveTabTable = () => {
    const data = [
        {
          key: "1",
          document_number: "საბუთის ნომერი",
          payment_order: "საგადახდო დავალება",
          payment_date: "გადახდის თარიღი",
          bank: "ბანკი",
          note: "შენიშვნა",
          recipient: "მიმღები",
          purchase: "შესყიდვა",
          realization: "რეალიზაცია",
          paid: "გადახდილი",
          balance: "ბალანსი"
        }
      ];
    const columns = [
        {
          title: "საბუთის ნომერი",
          dataIndex: "document_number",
          key: "1",
        },
        {
          title: "საგადახდო დავალება",
          dataIndex: "payment_order",
          key: "2",
        },
        {
          title: "გადახდის თარიღი",
          dataIndex: "payment_date",
          key: "3",
        },
        {
          title: "ბანკი",
          dataIndex: "bank",
          key: "4",
        },
        {
          title: "შენიშვნა",
          dataIndex: "note",
          key: "5",
        },
        {
            title: "მიმღები",
            dataIndex: "recipient",
            key: "6",
          },
          {
            title: "შესყიდვა",
            dataIndex: "purchase",
            key: "7",
          },
          {
            title: "რეალიზაცია",
            dataIndex: "realization",
            key: "8",
          },
          {
            title: "გადახდილი",
            dataIndex: "paid",
            key: "9",
          },
          {
            title: "ბალანსი",
            dataIndex: "balance",
            key: "10",
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
        <StyledActiveTabTableContainer>
                 <Table
        layout="inline"
        rowSelection={{
          type: "checkbox",
          ...rowSelection,
        }}
        columns={columns}
        dataSource={data}
      /> 
        </StyledActiveTabTableContainer>
    )
}

export default ActiveTabTable
