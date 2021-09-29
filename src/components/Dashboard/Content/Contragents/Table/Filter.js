import React, {useState} from "react";
import {UserAddOutlined} from '@ant-design/icons'
import Create from "./Create";
import {
  StyledFilterContainer,
  StyledSearch,
  StyledCreateButton,
} from "./style";
const Filter = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <StyledFilterContainer>
      <Create visible={visible} onClose={onClose} />
      <StyledSearch>
        <input type="text" placeholder="შეიყვანეთ ტექსტი" />
        <button>ძებნა</button>
      </StyledSearch>
      <StyledCreateButton onClick={showDrawer}><UserAddOutlined /> დამატება</StyledCreateButton>
    </StyledFilterContainer>
  );
};

export default Filter;
