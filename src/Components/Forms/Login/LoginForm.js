import {Button, Form, Input} from "antd";


const LoginForm = props => {

    return (
        <Form className={'an-banner-form'}>
            <Form.Item
                label=""
                name="email"
                rules={[{ required: true, message: 'Incorrect email or username entered' }]}
            >
                <Input size={"large"} placeholder={'*Email Address or Username'} type={"email"} className={'tw-mb-4'}/>
            </Form.Item>

            <Form.Item
                label=""
                name="password"
                rules={[{ required: true, message: 'Incorrect password entered' }]}
            >
                <Input.Password size={"large"} placeholder={'*Password'} type={"password"}/>
                <p className={'tw-mb-0 tw-text-right '}>Forget password?</p>

            </Form.Item>



            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'}>
                    Login
                </Button>
            </Form.Item>

        </Form>
    )
}

export default LoginForm