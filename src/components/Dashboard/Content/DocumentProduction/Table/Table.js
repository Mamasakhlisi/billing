import React from "react";
import { Table } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import Filter from "./Filter";
import { StyledContainer } from "./style";
const columns = [
  {
    title: "თარიღი",
    dataIndex: "date",
    render: (text) => <span>{text}</span>,
  },
  {
    title: "დოკუმენტის ნომერი",
    dataIndex: "document_number",
  },
  {
    title: "ვისგან",
    dataIndex: "who",
    render: (who) => (
      <div className="whitespace_container">
        <span className="whitespace">{who}</span>
      </div>
    ),
  },
  {
    title: "სახეობა",
    dataIndex: "type",
  },
  {
    title: "კომენტარი",
    dataIndex: "comment",
    render: (comment) => (
      <div className="whitespace_container">
        <span className="whitespace">{comment}</span>
      </div>
    ),
  },
  {
    title: "კურიერი",
    dataIndex: "courier",
  },
  {
    title: "დანიშნულება",
    dataIndex: "destination",
  },
  {
    title: "მომხმარებელი",
    dataIndex: "user",
    render: (user) => (
      <div className="whitespace_container">
        <span className="whitespace">{user}</span>
      </div>
    ),
  },
  {
    title: "გადამისამართება",
    dataIndex: "forwarding",
  },
  {
    title: "მოქმედებები",
    dataIndex: "actions",
    render: () => <UnorderedListOutlined style={{ cursor: "pointer" }} />,
  },
];

const data = [
  {
    key: "1",
    date: "2020-10-22",
    document_number: 32,
    who: "(GNCC) საქართველოს კომუნიკაციების ეროვნული კომისია",
    type: "აქტები",
    comment: "სატელეფონო მომსახურება 2020",
    courier: "ელ.ფოსტა",
    destination: "",
    user: "ავთანდილ ლომინაძე",
    forwarding: "",
  },
  {
    key: "2",
    date: "2019-10-22",
    document_number: 32,
    who: "საქართველოს აეროპორტების გაერთიანება",
    type: "ხელშეკრულება",
    comment: "სატელეფონო მომსახურება 2020",
    courier: "ელ.ფოსტა",
    destination: "",
    user: "დათო მამასახლისი",
    forwarding: "",
  },
];

const DataOfTable = () => {
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
      <Filter />
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
