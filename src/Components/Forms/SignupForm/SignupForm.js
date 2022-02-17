import {Button, Form, Input} from "antd";


const SignupForm = props => {

    return (
        <Form className={'an-banner-form'}>
            <Form.Item
                label=""
                name="email"
                rules={[{ required: true, message: 'Input your email' }]}
            >
                <Input size={"large"} placeholder={'*Email Address'} type={"email"} className={'tw-mb-4'}/>
            </Form.Item>

            <Form.Item
                label=""
                name="username"
                rules={[{ required: true, message: 'Choose a username' }]}
            >
                <Input size={"large"} placeholder={'*Username'} type={"text"}/>
            </Form.Item>

            <Form.Item
                label=""
                name="password"
                rules={[{ required: true, message: 'Create a strong password' }]}
            >
                <Input.Password size={"large"} placeholder={'*Password'} type={"password"}/>
            </Form.Item>

            <Form.Item
                label=""
                name="confirm"
                rules={[{ required: true, message: 'Confirm password' }]}
            >
                <Input.Password size={"large"} placeholder={'*Confirm Password'} type={"password"}/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'}>
                    Register
                </Button>
                <p className={'tw-mb-0 tw-text-center tw-mt-5'}>If you already have an account</p>
                <p className={'tw-m-0 tw-text-center '}>You can <span className={'tw-text-primary tw-font-semibold'}>Login Here!</span></p>
            </Form.Item>

        </Form>
    )
}

export default SignupForm