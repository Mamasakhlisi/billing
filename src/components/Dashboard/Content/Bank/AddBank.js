import React from "react";
import { Input } from "antd";
import { StyledAddFormContainer } from "./style";
const AddBank = () => {
  return (
    <StyledAddFormContainer>
      <div style={{ display: "flex" }}>
        <div >
          <Input
            style={{ width: "200px" }}
            placeholder="შეიყვანეთ დასახელება"
          />
        </div>
        <div style={{marginLeft:"10px"}}>
          <Input style={{ width: "200px" }} placeholder="შეიყვანეთ IBAN კოდი" />
        </div>
        <div style={{marginLeft:"10px"}}>
          <Input
            style={{ width: "200px" }}
            placeholder="შეიყვანეთ ბანკის კოდი"
          />
        </div>
      </div>
      <div>
        <button>დამატება</button>
      </div>
    </StyledAddFormContainer>
  );
};

export default AddBank;
