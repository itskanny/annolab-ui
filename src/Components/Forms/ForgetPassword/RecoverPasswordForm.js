import {Alert, Button, Form, Input} from "antd";
import {Link, useHistory} from "react-router-dom";
import {UserProvider} from "../../../providers/UserProvider";
import {useState} from "react";
import {handleFormErrors, openNotification} from "../../../helpers/helper";


const RecoverPasswordForm = props => {
    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const [nonFieldVisible,  setNonFieldVisible] = useState(false)
    const [nonFieldErrorMessage, setNonFieldErrorMessage] = useState([])


    const onFinish = (values) => {
        setIsLoading(true)
        UserProvider.resetPassword(values)
            .then(data => {
                if (!data.hasErrors){
                    openNotification('success', 'Email sent to your account for further instructions', true)
                    history.push('/login')
                }
                else {
                    openNotification('error', 'Some error occurred', false)
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
            initialValues={{remember: true}}
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
                rules={[{ required: true, message: 'Email is required' }]}
            >
                <Input size={"large"} placeholder={'*Email Address'} type={"email"} className={'tw-mb-4'}/>
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'} loading={isLoading}>
                    Recover
                </Button>

            </Form.Item>
            <Link to={'/login'}><p className={'tw-m-0 tw-text-center '}>or <span className={'tw-text-primary tw-font-semibold'}>Login</span></p></Link>


        </Form>
    )
}

export default RecoverPasswordForm