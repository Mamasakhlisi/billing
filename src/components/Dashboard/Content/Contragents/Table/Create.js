import React, {useState} from "react";
import { Drawer, Radio } from "antd";
import LegalForm from './CreateRadio/LegalForm'
import Phy from './CreateRadio/Phy'
import DynamicFields from './CreateRadio/DynamicFields'
import { StyledRadioContainer } from "./style";

const Create = ({ onClose, visible }) => {
  const [radio,setRadio]  = useState("a");

  function onChange(e) {
    setRadio(e.target.value)
  }
  return (
    <Drawer
      width={500}
      title="დამატება"
      placement="right"
      onClose={onClose}
      visible={visible}
    >
      <StyledRadioContainer>
        <Radio.Group onChange={onChange} defaultValue="a">
          <Radio.Button value="a">ფიზიკური პირი</Radio.Button>
          <Radio.Button value="b">იურიდიული პირი</Radio.Button>
        </Radio.Group>
      </StyledRadioContainer>
      {radio === "a" ? <LegalForm /> : <Phy />}
      <DynamicFields />
    </Drawer>
  );
};

export default Create;
