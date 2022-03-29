import {Alert, Button, Form, Input} from "antd";
import {useState} from "react";
import {UserProvider} from "../../../providers/UserProvider";
import {useHistory, useParams} from "react-router-dom";
import {handleFormErrors, openNotification} from "../../../helpers/helper";


const SetNewPasswordForm = props => {

    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const params = useParams()
    const history = useHistory()
    const [nonFieldVisible,  setNonFieldVisible] = useState(false)
    const [nonFieldErrorMessage, setNonFieldErrorMessage] = useState([])


    const onFinish = (values) => {
        setIsLoading(true)
        UserProvider.updatePassword({
            new_password: values.new_password,
            re_new_password: values.re_new_password,
            uid: params['uid'],
            token: params['token'],
        })
            .then(data => {
                if (!data.hasErrors){
                    history.replace('/login')
                }
                else {
                    console.log(data)
                    if (data.status === 400) {
                        form.setFields(
                            Object.keys(data.data).map((field) => {
                                if (field === 'non_field_errors'){
                                    setNonFieldErrorMessage(data.data[field])
                                    setNonFieldVisible(true)
                                    return {}
                                }
                                else if (field === 'token' || field === 'uid'){
                                    openNotification('error', 'UID or Token Invalid', false)
                                    return {}
                                }
                                else {
                                    return {
                                        name: field,
                                        errors: data.data[field],
                                    };
                                }

                            })
                        );
                    }
                    else {
                        openNotification(
                            "error",
                            data.status < 500 ? data.data.detail : "Some Internal error occurred",
                            false
                        );
                    }
                    handleFormErrors(data, form, setNonFieldErrorMessage, setNonFieldVisible)
                    setIsLoading(false)
                }
            })
    }

    return (
        <Form
            className={'an-banner-form'}
            form={form}
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
                name="new_password"
                rules={[{ required: true, message: 'Create a strong password' }]}
            >
                <Input.Password size={"large"} placeholder={'*Password'} type={"password"}/>

            </Form.Item>

            <Form.Item
                label=""
                name="re_new_password"
                dependencies={["new_password"]}
                hasFeedback
                rules={[
                    {
                        required: true,
                        message: "Confirm your password",
                    },
                    ({getFieldValue}) => ({
                        validator(_, value) {
                            if (!value || getFieldValue("new_password") === value) {
                                return Promise.resolve();
                            }

                            return Promise.reject(
                                new Error("The two passwords that you entered do not match!")
                            );
                        },
                    }),
                ]}
            >
                <Input.Password size={"large"} placeholder={'*Retype Password'} type={"password"}/>

            </Form.Item>



            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'} loading={isLoading}>
                    Update
                </Button>
            </Form.Item>

        </Form>
    )
}

export default SetNewPasswordForm