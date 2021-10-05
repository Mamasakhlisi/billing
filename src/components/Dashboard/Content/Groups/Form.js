import React from "react";
import AddForm from "./AddForm";
import FormItem from "./FormItem";
import { StyledContainer, StyledFormItemContainer } from "./style";

const Form = () => {
  const data = [
    {
      id: 1,
      title: "საწყობი",
    },
    {
      id: 2,
      title: "ტექნიკური - უკაბელო",
    },
    {
      id: 3,
      title: "ავტოპარკი",
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
