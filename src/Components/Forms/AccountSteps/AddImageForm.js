import {Alert, Button, Form, Upload} from "antd";
import {authStore} from "../../../store/AuthStore";
import {observer} from "mobx-react";
import {InlineLoader} from "../../../helpers/FullScreenLoader";
import {useState} from "react";
import {useHistory} from "react-router-dom";
import {projectStore} from "../../../store/ProjectStore";
import {handleFormErrors, openNotification} from "../../../helpers/helper";


const AddImageObserved = observer(({auth}) => {
    return (
        auth.user.isLoading() ?
            <InlineLoader/>
            : <ImageForm/>
    )
})

const ImageForm = props => {
    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const history = useHistory()
    const [nonFieldVisible, setNonFieldVisible] = useState(false)
    const [nonFieldErrorMessage, setNonFieldErrorMessage] = useState([])
    const [uploadCount, setUploadCount] = useState(0)

    const onFinish = (values) => {

        setIsLoading(true)

        projectStore.create({
            ...values,
            avatar: values.avatar.fileList[0].originFileObj,
            organization: authStore.user.organization.id
        })
            .then(data => {
                if (!data.hasErrors) {
                    console.log(projectStore.getProject)
                    openNotification('success', "Images uploaded successfully", true)
                    history.replace('home')
                } else {
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
                name="image"
                rules={[{required: true, message: 'Select Images'}]}
            >
                <Upload
                    accept={"image/png, image/jpeg, image/jpg"}
                    style={{width: '100%'}}
                    action={process.env.REACT_APP_BASE_URL + `images/`}
                    data={{
                        'project': `${projectStore.id}`
                    }
                    }
                    multiple={true}
                    name={'image'}
                    listType='picture'
                    className="avatar-uploader an-avatar-uploader"
                    headers={
                        {
                            "Authorization": `token ${authStore.token}`,
                        }
                    }
                    beforeUpload={file => {
                        if (!isLoading){
                            setIsLoading(true)
                        }
                    }}
                    onRemove={file => {
                        setUploadCount(prevState => {
                            if (uploadCount>0){
                                return prevState-1
                            }
                            return prevState
                        })
                    }}
                    method={'POST'}
                    onChange={(info)=>{
                        if (info.file.status === 'done'){
                            setUploadCount(prevState => {
                                const count = prevState+1
                                console.log(count)
                                if (count === info.fileList.length){
                                    setIsLoading(false)
                                }
                                return count
                            })
                        }
                        else if (info.file.status === 'error'){
                            setUploadCount(prevState => {
                                const count = prevState+1
                                console.log(count)
                                if (count === info.fileList.length){
                                    setIsLoading(false)
                                }
                                return count
                            })
                            openNotification('error', `${info.file.name} filed to be uploaded`, false)
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


const AddImageForm = props => {
    const history = useHistory()

    if (!projectStore.id) {
        history.replace('createproject')
    }

    return (
        <AddImageObserved auth={authStore}/>
    )
}

export default AddImageForm