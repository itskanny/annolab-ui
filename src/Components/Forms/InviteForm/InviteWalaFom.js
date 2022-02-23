import React from 'react';
import { Button, Form, Input } from "antd";

const InviteWalaForm=()=>{



    return (<>

        <Form className={"an-banner-form"}>
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

    </>);
}
export default InviteWalaForm;