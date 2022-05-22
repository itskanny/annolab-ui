import {Alert, Button, Form, Input, Upload} from "antd";
import {authStore} from "../../../store/AuthStore";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {OrganizationProvider} from "../../../providers/OrganizationProvider";
import {handleFormErrors, normFile, openNotification} from "../../../helpers/helper";
import ObservedUserLoader from "../../../helpers/UserLoader";

const OrganizationForm = () => {
    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const [nonFieldVisible,  setNonFieldVisible] = useState(false)
    const [nonFieldErrorMessage, setNonFieldErrorMessage] = useState([])

    const onFinish = (values) => {
        setIsLoading(true)
        // OrganizationProvider.create({...values, avatar: values.avatar.fileList[0]})
        OrganizationProvider.create({...values, avatar: values.avatar[0].originFileObj, owner: authStore.user.getId})
            .then(data => {
                if (!data.hasErrors){
                    authStore.user.setOrganization(data.data)
                    authStore.setSelectedOrganizationId(data.data.id)
                    authStore.backendError = false
                    authStore.needsOrganization = false
                    openNotification('success', "Organization created successfully", true)
                    history.replace('createproject')
                }
                else {
                    console.log(data)
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
                name="name"
                rules={[{ required: true, message: 'Enter Organization Name' }]}
            >
                <Input size={"large"} placeholder={'*Organization Name'} type={"text"}/>
            </Form.Item>
            <Form.Item
                label=""
                name="tagline"
                rules={[{ required: true, message: 'Enter Organization Tagline' }]}
            >
                <Input size={"large"} placeholder={'*Organization Tagline'} type={"text"}/>
            </Form.Item>

            <Form.Item
                label=""
                name="avatar"
                rules={[{required: true, message: 'Select an avatar for organization'}]}
                valuePropName={'fileList'}
                getValueFromEvent={normFile}
            >
                <Upload
                    accept={"image/png, image/jpeg, image/jpg"}
                    style={{width: '100%'}}
                    action={process.env.REACT_APP_BASE_URL + `organizations/`}
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
                    beforeUpload={ () => {
                        return false
                    }}
                    method={'POST'}
                >
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
                    Create Organization
                </Button>
            </Form.Item>

        </Form>
    )
}

const CreateOrganizationForm = () => {

    return (
        <ObservedUserLoader preventOrganizationRedirect={true} auth={authStore} node={<OrganizationForm/>}/>
    )
}

export default CreateOrganizationForm