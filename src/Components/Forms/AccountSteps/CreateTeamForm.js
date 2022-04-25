import {Button, Form, Input, Upload, Alert} from "antd";
import TextArea from "antd/es/input/TextArea";
import {observer} from "mobx-react";
import {InlineLoader} from "../../../helpers/FullScreenLoader";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {projectStore} from "../../../store/ProjectStore";
import {authStore} from "../../../store/AuthStore";
import {handleFormErrors, openNotification} from "../../../helpers/helper";

const CreateTeamObserved = observer(({auth}) =>{
    return (
        auth.user.isLoading() ?
            <InlineLoader/>
            : <TeamForm/>
    )
})

const TeamForm = props => {
    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const [nonFieldVisible,  setNonFieldVisible] = useState(false)
    const [nonFieldErrorMessage, setNonFieldErrorMessage] = useState([])

    const onFinish = (values) => {

        setIsLoading(true)

        projectStore.create({...values, avatar: values.avatar.fileList[0].originFileObj, organization: authStore.user.organization.id})
            .then(data => {
                if (!data.hasErrors){
                    console.log(projectStore.getProject)
                    openNotification('success', "Team created successfully", true)
                    history.replace('addimage')
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
                rules={[{ required: true, message: 'Enter Team Name' }]}
            >
                <Input size={"large"} placeholder={'*Team Name'} type={"text"}/>
            </Form.Item>

            <Form.Item
                label=""
                name="description"
                rules={[{ required: true, message: 'Enter Team Description' }]}
            >
                <TextArea size={"large"} placeholder={'*Team Description'} type={"textarea"}/>

            </Form.Item>

            <Form.Item
                label=""
                name="avatar"
                rules={[{ required: true, message: 'Select avatar' }]}
            >
                <Upload
                    accept={"image/png, image/jpeg, image/jpg"}
                    style={{width: '100%'}}
                    action={process.env.REACT_APP_BASE_URL + `teams/`}
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
                    beforeUpload={ file => {
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
                    Create
                </Button>
            </Form.Item>

        </Form>
    )
}


const CreateTeamForm = props => {

    return (
        <CreateTeamObserved auth={authStore}/>
    )
}

export default CreateTeamForm