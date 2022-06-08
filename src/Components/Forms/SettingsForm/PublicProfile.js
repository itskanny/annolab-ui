import {Button,  Form, Upload, Input, Alert} from "antd";
import ObservedUserLoader from "../../../helpers/UserLoader";
import {authStore} from "../../../store/AuthStore";
import {observer} from "mobx-react";
import {useState} from "react";
import {handleFormErrors,  openNotification} from "../../../helpers/helper";

const PublicProfileUpdateForm = observer(({auth}) => {

    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const [nonFieldVisible, setNonFieldVisible] = useState(false)
    const [nonFieldErrorMessage, setNonFieldErrorMessage] = useState([])


    const onFinish = (values) => {

        setIsLoading(true)

        authStore.user.partiallyUpdate(
            {name: values.name})
            .then(data => {
                if (!data.hasErrors) {
                    openNotification('success', "User updated successfully", true)
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
                        value: auth.user.getName
                    },
                    {
                        name: ["data_of_birth"],
                        value: auth.user.getDateOfBirth
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
                    rules={[{required: true, message: 'Enter your Name'}]}

                >
                    <Input size={"large"} value={auth.user.getName} placeholder={'*User Name'} type={"text"}/>
                </Form.Item>


                {/*<Form.Item*/}
                {/*    label=""*/}
                {/*    name="data_of_birth"*/}
                {/*    rules={[{required: true, message: 'Enter Your Date Of Birth'}]}*/}
                {/*>*/}
                {/*    <DatePicker format={'YYYY-MM-DD'} size={"large"} placeholder={'Date of birth'}/>*/}
                {/*</Form.Item>*/}

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
        </>
    )
})

const PublicProfile = props => {

    return (
        <ObservedUserLoader preventOrganizationRedirect={false} auth={authStore} node={<PublicProfileUpdateForm auth={authStore}/>}/>

    )
}

export default PublicProfile







