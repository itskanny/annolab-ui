import {Button, Form, Modal, Upload} from "antd";
import {useState} from "react";
import {openNotification} from "../../../../helpers/helper";
import {authStore} from "../../../../store/AuthStore";


const AddImagesModelForm = (props) => {

    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const [uploadCount, setUploadCount] = useState(0)

    const onFinish = () => {
        if (!isLoading) {
            openNotification('success', 'Pictures added successfully', true)
            setUploadCount(0)
            Modal.destroyAll()
            props.setRender(Math.random())
            props.setVisible(false)
        }
    }

    const handleCancel = () => {
        Modal.destroyAll()
        props.setVisible(false)
    };

    const handleOk = () => {
        form.validateFields()
            .then(() => {
                onFinish()
            })
    };

    return (
        <>
            <Modal
                visible={props.visible}
                title={'Add Images'}
                closable={false}
                destroyOnClose={true}
                centered
                onCancel={() => props.setVisible(false)}
                footer={[
                    <Button key="back" onClick={handleCancel}>
                        Cancel
                    </Button>,
                    <Button key="submit" type="primary" loading={isLoading} onClick={handleOk}>
                        Done
                    </Button>,
                ]}
            >
                <Form
                    className={'an-banner-form'}
                    form={form}
                    initialValues={{remember: true}}
                    onFinish={onFinish}
                >
                    <p>Select Images to upload</p>
                    <Form.Item
                        label=""
                        name="image"
                        rules={[{required: true, message: 'Select Images'}]}
                    >
                        <Upload
                            accept={"image/png, image/jpeg, image/jpg"}
                            style={{width: '100%'}}
                            action={process.env.REACT_APP_BASE_URL + `projects/${props.proj.id}/images/`}
                            data={{
                                'project': `${props.proj.id}`
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
                                        if (count === info.fileList.length) {
                                            setIsLoading(false)
                                        }
                                        return count
                                    })
                                } else if (info.file.status === 'error') {
                                    setUploadCount(prevState => {
                                        const count = prevState + 1
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

                </Form>
            </Modal>
        </>
    )

}

export default AddImagesModelForm