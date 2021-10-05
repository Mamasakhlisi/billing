import React from "react";
import AddBank from "./AddBank";
import FormItem from "./FormItem";
import { StyledContainer, StyledFormItemContainer } from "./style";

const Bank = () => {
  const data = [
    {
      id: 1,
      title: "შემოსავლების სამსახური	",
      iban:31551321,
      code: 4132551
    },
    {
      id: 2,
      title: "საბიუჯეტო გადარიცხვა	",
      iban:55132141,
      code: 5010333
    },
    {
      id: 3,
      title: "ფინკა ბანკი საქართველო	",
      iban:98881341,
      code: 12121212
    },
  ];

  return (
    <StyledContainer>
      <AddBank />
      <StyledFormItemContainer>
        {data.map((item) => (
          <FormItem key={item.id} id={item.id} iban={item.iban} code={item.code} title={item.title}></FormItem>
        ))}
      </StyledFormItemContainer>
    </StyledContainer>
  );
};

export default Bank;
