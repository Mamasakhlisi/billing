import React, {useState} from "react";
import { Form, Input, Select, Steps } from "antd";

import { StyledContainer, StyledStepsButton, StyledLogo } from "./style";

const { Option } = Select;
const { Step } = Steps;

const SignUp = () => {
  const [current, setCurrent] = useState(0);
  const [errors, setErrors] = useState([]);
  const onFinish = (values) => {
    console.log(errors)
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
    setErrors(errorInfo.errorFields)
  };
  function onChange(value) {
    console.log(`selected ${value}`);
  }


  function onSearch(val) {
    console.log("search:", val);
  }

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  const steps = [
    {
      title: "",
      content: (
        <>
          <Form.Item
            label="საიდენტიფიკაციო კოდი"
            name="id"
            rules={[
              { required: true, message: "გთხოვთ შეავსოთ სავალდებულო ველი!" },
            ]}
          >
            <Input className="input" placeholder="შეავსეთ ველი" />
          </Form.Item>

          <Form.Item
            label="სამართლებრივი ფორმა"
            name="legal_form"
            rules={[
              { required: true, message: "გთხოვთ შეავსოთ სავალდებულო ველი!" },
            ]}
          >
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder="შეავსეთ ველი"
              optionFilterProp="children"
              onChange={onChange}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value="jack">Jack</Option>
              <Option value="lucy">Lucy</Option>
              <Option value="tom">Tom</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="დასახელება"
            name="i_name"
            rules={[
              { required: true, message: "გთხოვთ შეავსოთ სავალდებულო ველი!" },
            ]}
          >
            <Input className="input" placeholder="შეავსეთ ველი" />
          </Form.Item>
        </>
      ),
    },
    {
      title: "",
      content: (
        <>
          <Form.Item
            label="პასუხისმგებელი პირი"
            name="responsible_person"
            rules={[
              { required: true, message: "გთხოვთ შეავსოთ სავალდებულო ველი!" },
            ]}
          >
            <Input className="input" placeholder="შეავსეთ ველი" />
          </Form.Item>
          <Form.Item
            label="მომხმარებელი"
            name="person"
            rules={[
              { required: true, message: "გთხოვთ შეავსოთ სავალდებულო ველი!" },
            ]}
          >
            <Input className="input" placeholder="შეავსეთ ველი" />
          </Form.Item>
          <Form.Item
            label="პაროლი"
            name="password"
            rules={[
              { required: true, message: "გთხოვთ შეავსოთ სავალდებულო ველი!" },
            ]}
          >
            <Input.Password
              className="input_password"
              placeholder="შეავსეთ ველი"
            />
          </Form.Item>
        </>
      ),
    },
    {
      title: "",
      content: (
        <>
          <Form.Item
            label="მობილური"
            name="phone"
            rules={[
              { required: true, message: "გთხოვთ შეავსოთ სავალდებულო ველი!" },
            ]}
          >
            <Input className="input" placeholder="შეავსეთ ველი" />
          </Form.Item>
          <Form.Item
            label="ელ.ფოსტა"
            name="email"
            rules={[
              { required: true, message: "გთხოვთ შეავსოთ სავალდებულო ველი!" },
            ]}
          >
            <Input className="input" placeholder="შეავსეთ ველი" />
          </Form.Item>
        </>
      ),
    },
    {
      title: "",
      content: (
        <>
          <h4>Notification</h4>
        </>
      ),
    },
  ];

  return (
    <div>
      <StyledContainer>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <StyledLogo>B</StyledLogo>
        </div>
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
        <div className="steps-content">{steps[current].content}</div>

        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
        <div className="steps-action">
          {current < steps.length - 1 && (
            <StyledStepsButton  onClick={() => next()}>
              შემდეგი
            </StyledStepsButton>
          )}
          {current === steps.length - 1 && (
            <StyledStepsButton
              type="primary"
              onClick={() => alert("Processing complete!")}
            >
              რეგისტრაცია
            </StyledStepsButton>
          )}
          {current > 0 && (
            <StyledStepsButton
              style={{ margin: "0 8px" }}
              onClick={() => prev()}
            >
              უკან დაბრუნება
            </StyledStepsButton>
          )}
        </div>
        </Form>
      </StyledContainer>
    </div>
  );
};

export default SignUp;
