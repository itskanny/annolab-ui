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

            </Form.Item>

            <p className={'tw-mb-3 tw-text-right tw-text-primary tw-font-semibold;'}>Forget password?</p>



            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'}>
                    Login
                </Button>
            </Form.Item>

        </Form>
    )
}

export default LoginForm