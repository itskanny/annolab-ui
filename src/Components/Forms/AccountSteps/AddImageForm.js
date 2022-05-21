import {Button, Form, Upload} from "antd";
import {authStore} from "../../../store/AuthStore";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {projectStore} from "../../../store/ProjectStore";
import {openNotification} from "../../../helpers/helper";
import ObservedUserLoader from "../../../helpers/UserLoader";

const ImageForm = () => {
    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const [uploadCount, setUploadCount] = useState(0)

    const onFinish = () => {
        if (!isLoading) {
            openNotification('success', 'Images uploaded', true)
            openNotification('success', 'Basic setup completed now you can freely use Annolab', true)
            authStore.setSetup(false)
            history.replace('home')
        }
    }

    return (
        <Form
            className={'an-banner-form'}
            form={form}
            initialValues={{remember: true}}
            onFinish={onFinish}
        >
            <Form.Item
                label=""
                name="image"
                rules={[{required: true, message: 'Select Images'}]}
            >
                <Upload
                    accept={"image/png, image/jpeg, image/jpg"}
                    style={{width: '100%'}}
                    action={process.env.REACT_APP_BASE_URL + `projects/${projectStore.id}/images/`}
                    data={{
                        'project': `${projectStore.id}`
                    }}
                    multiple={true}
                    name={'image'}
                    listType='picture'
                    className="avatar-uploader an-avatar-uploader"
                    headers={
                        {
                            "Authorization": `token ${authStore.token}`,
                        }
                    }
                    beforeUpload={() => {
                        if (!isLoading) {
                            setIsLoading(true)
                        }
                    }}
                    onRemove={() => {
                        setUploadCount(prevState => {
                            if (uploadCount > 0) {
                                return prevState - 1
                            }
                            return prevState
                        })
                    }}
                    method={'POST'}
                    onChange={(info) => {
                        if (info.file.status === 'done') {
                            setUploadCount(prevState => {
                                const count = prevState + 1
                                console.log(count)
                                if (count === info.fileList.length) {
                                    setIsLoading(false)
                                }
                                return count
                            })
                        } else if (info.file.status === 'error') {
                            setUploadCount(prevState => {
                                const count = prevState + 1
                                console.log(count)
                                if (count === info.fileList.length) {
                                    setIsLoading(false)
                                }
                                return count
                            })
                            openNotification('error', `${info.file.name} failed to be uploaded`, false)
                        }
                    }}
                >
                    <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                        <span tabIndex="0" className="ant-upload" role="button">
                            <div>
                                <div style={{marginTop: "8px"}}>Upload Images</div>
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



const AddImageForm = () => {
    const history = useHistory()

    if (!projectStore.id) {
        history.replace('createproject')
    }

    return (
        <ObservedUserLoader auth={authStore} node={<ImageForm/>}/>
    )
}

export default AddImageForm