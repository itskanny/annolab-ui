import {Button, Form, Input, Upload, Alert} from "antd";
import TextArea from "antd/es/input/TextArea";
import {authStore} from "../../../store/AuthStore";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {projectStore} from "../../../store/ProjectStore";
import {handleFormErrors, normFile, openNotification} from "../../../helpers/helper";
import ObservedUserLoader from "../../../helpers/UserLoader";

const ProjectForm = props => {
    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const [nonFieldVisible,  setNonFieldVisible] = useState(false)
    const [nonFieldErrorMessage, setNonFieldErrorMessage] = useState([])

    const onFinish = (values) => {

        setIsLoading(true)

        projectStore.create({...values, avatar: values.avatar[0].originFileObj, organization: authStore.getSelectedOrganizationId})
            .then(data => {
                if (!data.hasErrors){
                    console.log(projectStore.getProject)
                    openNotification('success', "Project created successfully", true)
                    history.replace(`${props.redirect ? props.redirect : `/org/${authStore.getSelectedOrganizationId}/projects/${data.data.id}/images`}`)
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
                rules={[{ required: true, message: 'Enter Project Name' }]}
                className={props.fieldClasses}
            >
                <Input size={"large"} placeholder={'*Project Name'} type={"text"}/>
            </Form.Item>




            <Form.Item
                label=""
                name="description"
                rules={[{ required: true, message: 'Enter Description' }]}
                className={props.fieldClasses}
            >
                <TextArea size={"large"} placeholder={'*Type Description'} type={"textarea"}/>
            </Form.Item>

            <Form.Item
                label=""
                name="avatar"
                rules={[{ required: true, message: 'Select avatar' }]}
                valuePropName={'fileList'}
                getValueFromEvent={normFile}
                className={props.fieldClasses}
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


            <Form.Item

                className={props.fieldClasses}
            >
                <Button type="primary" htmlType="submit" block size={'large'} loading={isLoading}>
                    Create
                </Button>
            </Form.Item>

        </Form>
    )
}

const CreateProjectForm = props => {

    return (
        <ObservedUserLoader auth={authStore} node={<ProjectForm redirect={props.redirect} fieldClasses={props.fieldClasses}/>}/>
    )
}

export default CreateProjectForm