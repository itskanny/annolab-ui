import {Button, Form, Input} from "antd";


const RecoverPasswordForm = props => {

    return (
        <Form className={'an-banner-form'}>
            <Form.Item
                label=""
                name="email"
                rules={[{ required: true, message: 'Incorrect email entered' }]}
            >
                <Input size={"large"} placeholder={'*Email Address'} type={"email"} className={'tw-mb-4'}/>
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'}>
                    Recover
                </Button>

            </Form.Item>
            <p className={'tw-m-0 tw-text-center '}>or <span className={'tw-text-primary tw-font-semibold'}>Login</span></p>


        </Form>
    )
}

export default RecoverPasswordForm