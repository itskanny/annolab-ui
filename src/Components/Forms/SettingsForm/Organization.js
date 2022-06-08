import {Button, Form, Upload, Input, Alert} from "antd";
import ObservedUserLoader from "../../../helpers/UserLoader";
import {authStore} from "../../../store/AuthStore";
import {handleFormErrors, normFile, openNotification} from "../../../helpers/helper";
import {useState} from "react";
import {OrganizationProvider} from "../../../providers/OrganizationProvider";
import {observer} from "mobx-react";


const OrganizationUpdateForm = observer(({auth}) => {
    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const [nonFieldVisible, setNonFieldVisible] = useState(false)
    const [nonFieldErrorMessage, setNonFieldErrorMessage] = useState([])


    const onFinish = (values) => {

        setIsLoading(true)

        OrganizationProvider.editOrganization(auth.selectedOrganizationId, values.avatar ? {
                ...values,
                avatar: values.avatar[0].originFileObj
            }
            :
            {...values})
            .then(data => {
                if (!data.hasErrors) {
                    openNotification('success', "Organization updated successfully", true)
                    console.log(data.data)
                    auth.user.organization.setOrganization(data.data)
                    setIsLoading(false)

                } else {
                    handleFormErrors(data, form, setNonFieldErrorMessage, setNonFieldVisible)
                    setIsLoading(false)
                }
            })
    }

    return (
        <>
            <Form
                className={'an-banner-form'}
                form={form}
                initialValues={{remember: true}}
                fields={[
                    {
                        name: ["name"],
                        value: auth.user.organization.name
                    },
                    {
                        name: ["tagline"],
                        value: auth.user.organization.tagline
                    }
                ]}
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
                    rules={[{required: true, message: 'Enter Organization Name'}]}

                >
                    <Input size={"large"} value={auth.user.organization.name} placeholder={'*Organization Name'} type={"text"}/>
                </Form.Item>


                <Form.Item
                    label=""
                    name="tagline"
                    rules={[{required: true, message: 'Enter Tagline'}]}

                >
                    <Input size={"large"} value={auth.user.organization.tagline} placeholder={'*Enter Tagline'} type={"text"}/>
                </Form.Item>

                <Form.Item
                    label=""
                    name="avatar"
                    valuePropName={'fileList'}
                    getValueFromEvent={normFile}
                >
                    <Upload
                        accept={"image/png, image/jpeg, image/jpg"}
                        style={{width: '100%'}}
                        action={process.env.REACT_APP_BASE_URL + `projects/`}
                        multiple={false}
                        name={'avatar'}
                        // showUploadList={false}
                        maxCount={1}
                        listType='picture'
                        className="avatar-uploader an-avatar-uploader"
                        headers={
                            {
                                "Authorization": `token ${auth.token}`,
                            }
                        }
                        beforeUpload={() => {
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
                        Update
                    </Button>
                </Form.Item>

            </Form>
        </>
    )
})



const Organization = () => {

    return (
        <ObservedUserLoader preventOrganizationRedirect={false} auth={authStore} node={<OrganizationUpdateForm auth={authStore}/>}/>
    )
}

export default Organization