import React from "react";
import { Form, Input, Checkbox } from "antd";
import { StyledContainer,StyledSignUpButton ,StyledLogo} from "./style";

const SignIn = () => {
  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <StyledContainer>
                <div style={{display:"flex",justifyContent:"center",paddingTop:"20px",paddingBottom:"20px"}}><StyledLogo>B</StyledLogo></div>

      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="მომხმარებელი"
          name="username"
          
          rules={[{ required: true, message: "გთხოვთ შეავსოთ სავალდებულო ველი!" }]}
        >
          <Input className="input" placeholder="შეავსეთ ველი" />
        </Form.Item>

        <Form.Item
          label="პაროლი"
          name="password"
          rules={[{ required: true, message: "გთხოვთ შეავსოთ სავალდებულო ველი!" }]}
        >
          <Input.Password  className="input_password" placeholder="შეავსეთ ველი"/>
        </Form.Item>
        <div className="submit">
        <Checkbox>დამახსოვრება</Checkbox>
          <StyledSignUpButton type="submit">
            შესვლა
          </StyledSignUpButton>

        </div>
      </Form>
    </StyledContainer>
  );
};

export default SignIn;
