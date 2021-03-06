import React from "react";
import AddForm from "./AddForm";
import FormItem from "./FormItem";
import { StyledContainer, StyledFormItemContainer } from "./style";

const Form = () => {
  const data = [
    {
      id: 1,
      title: "არარეზიდენტი",
    },
    {
      id: 2,
      title: "საჯარო სამართლის იურიდიული პირი (სსიპ)",
    },
    {
      id: 3,
      title: "სააქციო საზოგადოება (სს)",
    },
  ];

  return (
    <StyledContainer>
      <AddForm />
      <StyledFormItemContainer>
        {data.map((item) => (
          <FormItem key={item.id} id={item.id} title={item.title}></FormItem>
        ))}
      </StyledFormItemContainer>
    </StyledContainer>
  );
};

export default Form;
