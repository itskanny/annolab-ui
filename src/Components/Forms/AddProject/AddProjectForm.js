import React from "react";
import { Button, Form, Input } from "antd";
import Selector from "../../Ui/Selector/Selector";

const AddProjectForm = () => {
  return (
    <>
      <Form className={"an-banner-form"}>
        <label>
          <b>Workspace</b>
        </label>
        <Form.Item
          label=""
          name="Workspace"
          rules={[{ required: true, message: "Enter WorkSpace" }]}
        >
         <Selector/>
        </Form.Item>

        <label>
          <b>Project Name</b>
        </label>
        <Form.Item
          label=""
          name="Project Name"
          rules={[{ required: true, message: "Enter Project Name" }]}
        >
          <Input
            className={"tw-mb-4"}
            size={"large"}
            placeholder={"*Project Name"}
            type={"text"}
          />
        </Form.Item>
        <label>
          <b>Description</b>
        </label>
        <Form.Item name="Description" label="">
          <Input.TextArea />
        </Form.Item>

        <div className=" flex justify-end ...">
          <Button className="h-12 px-6 m-2" type="primary" htmlType="submit">
            Save
          </Button>

          <Button className="h-12 px-6 m-2" type="primary" htmlType="reset">
            Cancel
          </Button>
        </div>
      </Form>

      <Form>
        <label>
          <b>Invite Users</b>
        </label>
        <Form.Item
          label=""
          name="Invite Users"
          rules={[{ required: true, message: "Enter Email" }]}
        >
          <Input
            size={"large"}
            placeholder={"Invite Users"}
            type={"email"}
            className={"tw-mb-4"}
          />
        </Form.Item>

        <Button type="primary" htmlType="submit">
          Invite
        </Button>
      </Form>
    </>
  );
};

export default AddProjectForm;
