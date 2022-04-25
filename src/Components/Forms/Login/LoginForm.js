import {Alert, Button, Form, Input} from "antd";
import {Link, useHistory} from "react-router-dom";
import {UserProvider} from "../../../providers/UserProvider";
import {authStore} from "../../../store/AuthStore";
import {useState} from "react";
import {handleFormErrors} from "../../../helpers/helper";


const LoginForm = () => {
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [nonFieldVisible,  setNonFieldVisible] = useState(false)
    const [nonFieldErrorMessage, setNonFieldErrorMessage] = useState([])

    const onFinish = (credentials) => {
        setIsLoading(true)
        UserProvider.login(credentials)
            .then((data) => {
                if (!data.hasErrors) {
                    console.log(data)

                    authStore.addToken(data.data.auth_token)
                    history.replace('/home')
                }
                else {
                    handleFormErrors(data, form, setNonFieldErrorMessage, setNonFieldVisible)
                    setIsLoading(false)
                }
            })
    }

    const [form] = Form.useForm()

    return (
        <Form
            className={'an-banner-form'}
            autoComplete={"off"}
            form={form}
            initialValues={{remember: true}}
            onFinish={onFinish}
        >
            {nonFieldVisible ? (
                <Alert className={'tw-pb-2 tw-mb-5'}
                    description={nonFieldErrorMessage}
                    message={"Error"}
                    type={"error"}
                />
            ) : (
                ""
            )}

            <Form.Item
                label=""
                name="email"
                rules={[{required: true, message: 'Email field is required'}]}
            >
                <Input size={"large"} placeholder={'*Email Address'} type={"email"} className={'tw-mb-4'}/>
            </Form.Item>

            <Form.Item
                label=""
                name="password"
                rules={[{required: true, message: 'Password is required'}]}
            >
                <Input.Password size={"large"} placeholder={'*Password'} type={"password"}/>

            </Form.Item>

            <Link to={'/recoverpassword'}><p className={'tw-mb-3 tw-text-right tw-text-primary tw-font-semibold'}>Forgot password?</p></Link>


            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'} loading={isLoading}>
                    Login
                </Button>
            </Form.Item>

        </Form>
    )
}

export default LoginForm