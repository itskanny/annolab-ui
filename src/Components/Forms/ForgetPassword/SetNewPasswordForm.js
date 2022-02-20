import {Button, Form, Input} from "antd";


const SetNewPasswordForm = props => {

    return (
        <Form className={'an-banner-form'}>


            <Form.Item
                label=""
                name="password"
                rules={[{ required: true, message: 'Create a strong password' }]}
            >
                <Input.Password size={"large"} placeholder={'*Password'} type={"password"}/>

            </Form.Item>

            <Form.Item
                label=""
                name="retype_password"
                rules={[{ required: true, message: 'Create a strong password' }]}
            >
                <Input.Password size={"large"} placeholder={'*Retype Password'} type={"password"}/>

            </Form.Item>



            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'}>
                    Update
                </Button>
            </Form.Item>

        </Form>
    )
}

export default SetNewPasswordForm