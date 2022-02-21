import React from "react";
import { Button, Form, Input } from "antd";

const AddProjectForm = () => {
  return (
    <>
    
      <Form className={"an-banner-form"}>
        <Form.Item
          label="Workspace"
          name="Workspace"
          rules={[{ required: true, message: "Enter WorkSpace" }]}
        >
          <Input
            size={"large"}
            placeholder={"*Add Workspace here"}
            type={"text"}
            className={"tw-mb-4"}
          />
        </Form.Item>

        <Form.Item
          label="Project Name"
          name="Project Name"
          rules={[{ required: true, message: "Enter Project Name" }]}
        >
          <Input className={"tw-mb-4"} size={"large"} placeholder={"*Project Name"} type={"text"} />
        </Form.Item>

        

        <Form.Item name="Description" label="Description">
            <Input.TextArea />
          </Form.Item>

        <Form.Item
          label="Invite Users"
          name="Invite Users"
          //rules={[{ required: true, message: "Enter WorkSpace" }]}
        >
          <Input
            size={"large"}
            placeholder={"Invite Users"}
            type={"text"}
            className={"tw-mb-4"}
          />

          <Button type="primary" htmlType="submit">
            Invite
          </Button>
         
        </Form.Item>
      </Form>
    </>
  );
};

export default AddProjectForm;
