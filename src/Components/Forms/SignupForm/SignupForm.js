import {Alert, Button, Form, Input} from "antd";
import {Link, useHistory} from "react-router-dom";
import {UserProvider} from "../../../providers/UserProvider";
import {handleFormErrors, openNotification} from "../../../helpers/helper";
import {useState} from "react";
import {authStore} from "../../../store/AuthStore";


const SignupForm = props => {
    const [form] = Form.useForm()
    const history = useHistory()
    const [isLoading, setIsLoading] = useState(false)
    const [nonFieldVisible,  setNonFieldVisible] = useState(false)
    const [nonFieldErrorMessage, setNonFieldErrorMessage] = useState([])


    const onFinish = (values) => {
        setIsLoading(true)
        UserProvider.signup(values)
            .then(data => {
                if (!data.hasErrors){
                    console.log(data)
                    authStore.signupUser(data.data, values.password).then(result => {
                        if (result){
                            openNotification('success', "User signed up successfully", true)
                            authStore.setSetup(true)
                            history.replace('/updateprofile')
                        }
                        else {
                            setIsLoading(false)
                            openNotification('error', "User signup failed", false)
                            authStore.setLoading(false)
                        }
                    })
                }
                else {
                    handleFormErrors(data, form, setNonFieldErrorMessage, setNonFieldVisible)
                    setIsLoading(false)
                }

            })
    }

    return (
        <Form
            className={'an-banner-form'}
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
                rules={[{required: true, message: 'Email Address is required'}]}
            >
                <Input size={"large"} placeholder={'*Email Address'} type={"email"} className={'tw-mb-4'}/>
            </Form.Item>

            <Form.Item
                label=""
                name="name"
                rules={[{required: true, message: 'Enter your name'}]}
                normalize={(name => {
                    return name.replace(/\b(\w)/g, s => s.toUpperCase());
                })}
            >
                <Input size={"large"} placeholder={'*Full Name'} type={"text"} className={'tw-mb-4'}/>
            </Form.Item>

            <Form.Item
                label=""
                name="password"
                rules={[{required: true, message: 'Create a strong password'}]}
            >
                <Input.Password size={"large"} placeholder={'*Password'} type={"password"}/>
            </Form.Item>

            <Form.Item
                label=""
                name="confirm"
                dependencies={["password"]}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Confirm your password",
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("password") === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(
                                new Error("The two passwords that you entered do not match!")
                            );
                        },
                    }),
                ]}
            >
                <Input.Password size={"large"} placeholder={'*Confirm Password'} type={"password"}/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'} loading={isLoading}>
                    Register
                </Button>
                <p className={'tw-mb-0 tw-text-center tw-mt-5'}>If you already have an account</p>
                <p className={'tw-m-0 tw-text-center '}>You can <Link to={'login'}><span
                    className={'tw-text-primary tw-font-semibold'}>Login Here!</span></Link></p>
            </Form.Item>

        </Form>
    )
}

export default SignupForm