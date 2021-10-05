import React from "react";
import { Select, Input,Upload, message, Button } from "antd";
import { UploadOutlined } from '@ant-design/icons';

import { StyledContainer } from "./style";
const { Option } = Select;

const LegalForm = () => {
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
  const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };
  return (
    <StyledContainer>
      <div className="form_group">
      <label>ქალაქი / რაიონი</label>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="ქალაქი / რაიონი"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </div>

      <div className="form_group">
      <label>პირადი ნომერი</label>
        <Input placeholder="პირადი ნომერი" />
      </div>
      <div className="form_group">
      <label>სახელი გვარი</label>
        <Input placeholder="სახელი გვარი" />
      </div>
      <div className="form_group">
      <label>დაბადების თარიღი</label>
        <Input placeholder="დაბადების თარიღი" />
      </div>
      <div className="form_group">
      <label>იურიდიული მისამართი</label>
        <Input placeholder="იურიდიული მისამართი" />
      </div>
      <div className="form_group">
      <label>ფაქტობრივი მისამართი</label>
        <Input placeholder="ფაქტობრივი მისამართი" />
      </div>
      <div className="form_group">
      <label>ტელეფონი</label>
        <Input placeholder="ტელეფონი" />
      </div>
      <div className="form_group">
      <label>მობილური</label>
        <Input placeholder="მობილური" />
      </div>
      <div className="form_group">
      <label>ელ.ფოსტა</label>
        <Input placeholder="ელ.ფოსტა" />
      </div>
      <div className="form_group">
      <label>მომსახურე ბანკი</label>
        <Select
          showSearch
          style={{ width: 200 }}
          placeholder="მომსახურე ბანკი"
          optionFilterProp="children"
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          onSearch={onSearch}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
        >
          <Option value="jack">Jack</Option>
          <Option value="lucy">Lucy</Option>
          <Option value="tom">Tom</Option>
        </Select>
      </div>
      <div className="form_group">
        <label>IBAN</label>
          <Input placeholder="IBAN" disabled />
        </div>
        <div className="form_group">
        <label>ბანკის კოდი</label>
          <Input placeholder="ბანკის კოდი" disabled />
        </div>
        
      <div className="form_group">
      <label>ანგარიშის ნომერი</label>
        <Input placeholder="ანგარიშის ნომერი" />
      </div>
      <div className="form_group">
          <label>სურათი</label>
          <Upload {...props}>
    <Button icon={<UploadOutlined />}><span>სურათის ატვირთვა</span></Button>
  </Upload>
      </div>
    </StyledContainer>
  );
};

export default LegalForm;
