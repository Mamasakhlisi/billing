import { Form, Input, Button, Space } from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import { StyledField } from "./style";
const { TextArea } = Input;

const DynamicFields = () => {
  const onFinish = (values) => {
    console.log("Received values of form:", values);
  };
  return (
    <StyledField>
      <label>დამატებითი ინფორმაცია</label>
      <Form
        name="dynamic_form_nest_item"
        onFinish={onFinish}
        autoComplete="off"
      >
        <Form.List name="users">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, fieldKey, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 2 ,flexWrap:"wrap",justifyContent:"space-between"}}
                  align="baseline"
                >
                  <Form.Item
                    {...restField}
                    name={[name, "first"]}
                    fieldKey={[fieldKey, "first"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="სახელი" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "last"]}
                    fieldKey={[fieldKey, "last"]}
                    rules={[{ required: true, message: "Missing last name" }]}
                  >
                    <Input placeholder="გვარი" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "first"]}
                    fieldKey={[fieldKey, "first"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="თანამდებობა" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "last"]}
                    fieldKey={[fieldKey, "last"]}
                    rules={[{ required: true, message: "Missing last name" }]}
                  >
                    <Input placeholder="ტელეფონი" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "first"]}
                    fieldKey={[fieldKey, "first"]}
                    rules={[{ required: true, message: "Missing first name" }]}
                  >
                    <Input placeholder="მობილური" />
                  </Form.Item>
                  <Form.Item
                    {...restField}
                    name={[name, "last"]}
                    fieldKey={[fieldKey, "last"]}
                    rules={[{ required: true, message: "Missing last name" }]}
                  >
                    <Input placeholder="ელ.ფოსტა" />
                  </Form.Item>
                  <Form.Item  {...restField}
                    name={[name, "last"]}
                    fieldKey={[fieldKey, "last"]}
                    rules={[{ required: true, message: "Missing last name" }]}>
                  <TextArea rows={4} placeholder="კომენტარი"/>
                  </Form.Item>
                  <MinusCircleOutlined onClick={() => remove(name)} />
                </Space>
              ))}
              <Form.Item>
                <Button
                  type="dashed"
                  onClick={() => add()}
                  block
                  icon={<PlusOutlined />}
                >
                  ველის დამატება
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </StyledField>
  );
};

export default DynamicFields;
