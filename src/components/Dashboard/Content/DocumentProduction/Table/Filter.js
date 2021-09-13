import React from "react";
import { Select } from "antd";
import { StyledFilterContainer, StyledSearch } from "./style";
const { Option } = Select;

const Filter = () => {
  function onChange(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  return (
    <StyledFilterContainer>
      <Select
        showSearch
        style={{ width: 200 }}
        placeholder="გაფილტრეთ სახეობით"
        optionFilterProp="children"
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        onSearch={onSearch}
        filterOption={(input, option) =>
          option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
        }
      >
        <Option value="1">ყველა</Option>
        <Option value="2">წერილი</Option>
        <Option value="3">ხელშეკრულება</Option>
        <Option value="4">აქტები</Option>
        <Option value="5">შეტყობინება</Option>
        <Option value="6">ჯარიმა</Option>
        <Option value="7">დადგენილება</Option>
        <Option value="8">საჯარო ხელშეკრულება</Option>
        <Option value="9">ნებართვა</Option>
        <Option value="10">ნასყიდობის ხელშეკრულება</Option>
        <Option value="11">ტენდერი</Option>
        <Option value="12">განცხადება</Option>
        <Option value="13">რეკომენდაცია</Option>
      </Select>

      <StyledSearch>
        <input type="text" placeholder="შეიყვანეთ ტექსტი" />
        <button>ძებნა</button>
      </StyledSearch>
    </StyledFilterContainer>
  );
};

export default Filter;
