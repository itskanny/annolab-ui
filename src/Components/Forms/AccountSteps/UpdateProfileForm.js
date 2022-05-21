import {Alert, Button, DatePicker, Form, Upload} from "antd";
import {authStore} from "../../../store/AuthStore";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {handleFormErrors, openNotification} from "../../../helpers/helper";
import ObservedUserLoader from "../../../helpers/UserLoader";


const ProfileForm = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [form] = Form.useForm()
    const history = useHistory()
    const [nonFieldVisible, setNonFieldVisible] = useState(false)
    const [nonFieldErrorMessage, setNonFieldErrorMessage] = useState([])


    const onFinish = (values) => {
        setIsLoading(true)
        authStore.user.partiallyUpdate({
            date_of_birth: values.data_of_birth.format('YYYY-MM-DD'),
        })
            .then(data => {
                if (!data.hasErrors) {
                    openNotification('success', "Profile updated successfully", true)
                    history.push('createorganization')
                } else {
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
                name="data_of_birth"
                rules={[{required: true, message: 'Enter Your Date Of Birth'}]}
            >
                <DatePicker format={'YYYY-MM-DD'} size={"large"} placeholder={'Date of birth'}/>
            </Form.Item>

            <Form.Item
                label=""
                name="avatar"
            >
                <Upload
                    accept={"image/png, image/jpeg, image/jpg"}
                    style={{width: '100%'}}
                    action={process.env.REACT_APP_BASE_URL + `users/${authStore.user.getId}/`}
                    multiple={false}
                    name={'avatar'}
                    // showUploadList={false}
                    maxCount={1}
                    listType='picture'
                    className="avatar-uploader an-avatar-uploader"
                    headers={
                        {
                            "Authorization": `token ${authStore.token}`,
                        }
                    }
                    method={'PATCH'}

                >
                    {/*{imageUrl ? <div><img src={imageUrl} alt="avatar" style={{width: '100%', height: '100%', objectFit: ''}} /></div> : uploadButton}*/}
                    <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                        <span tabIndex="0" className="ant-upload" role="button">
                            <div>
                                <div style={{marginTop: "8px"}}>Upload Avatar</div>
                            </div>
                        </span>
                    </div>
                </Upload>
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'} loading={isLoading}>
                    Update
                </Button>
            </Form.Item>

        </Form>
    )
}

const UpdateProfileForm = () => {

    return <ObservedUserLoader preventOrganizationRedirect={true} auth={authStore} node={<ProfileForm/>}/>

}

export default UpdateProfileForm