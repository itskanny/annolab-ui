import {Button, Form, Modal, Upload} from "antd";
import {authStore} from "../../../../../store/AuthStore";
import {useState} from "react";
import {normFile, openNotification} from "../../../../../helpers/helper";
import {ImageProvider} from "../../../../../providers/ImageProvider";


const EditImageModalForm = (props) =>{

    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)


    const onFinish = (values) => {

        setIsLoading(true)

        ImageProvider.editImage(props.proj.id, props.visible.row, {'image': values.image[0].originFileObj})
            .then(data => {
                if (!data.hasErrors) {
                    openNotification('success', "Image updated successfully", true)
                    Modal.destroyAll()
                    props.setRender(Math.random())
                    props.setVisible({static: false, row: 0})

                } else {
                    console.log(data)
                    openNotification('error', "Image edit failed", false)
                    Modal.destroyAll()
                    props.setVisible({static: false, row: 0})
                }
                setIsLoading(false)
            })
    }

    const handleCancel = () => {
        Modal.destroyAll()
        props.setVisible({static: false, row: 0})
    };


    const handleOk = () => {
        form.validateFields()
            .then((values) => {
                onFinish(values)
            })
    };

    return (
        <>
            <Modal
                visible={props.visible.state}
                title={'Edit Image'}
                closable={false}
                destroyOnClose={true}
                centered
                onCancel={() => props.setVisible({static: false, row: 0})}
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

                    <p>Upload the image you want to upload</p>

                    <Form.Item
                        label=""
                        name="image"
                        rules={[{required: true, message: 'Select image'}]}
                        valuePropName={'fileList'}
                        getValueFromEvent={normFile}
                    >
                        <Upload
                            accept={"image/png, image/jpeg, image/jpg"}
                            style={{width: '100%'}}
                            action={process.env.REACT_APP_BASE_URL + `teams/`}
                            multiple={false}
                            name={'image'}
                            // showUploadList={false}
                            maxCount={1}
                            listType='picture'
                            className="avatar-uploader an-avatar-uploader"
                            headers={
                                {
                                    "Authorization": `token ${authStore.token}`,
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
                                        <div style={{marginTop: "8px"}}>Select Image to Update</div>
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

export default EditImageModalForm