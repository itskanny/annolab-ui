import {Alert, Button, Form, Input, Modal, Upload} from "antd";
import {useState} from "react";
import {handleFormErrors, normFile, openNotification} from "../../../../../helpers/helper";
import TextArea from "antd/es/input/TextArea";
import {authStore} from "../../../../../store/AuthStore";
import {ProjectProvider} from "../../../../../providers/ProjectProvider";


const EditModalForm = (props) => {

    const [form] = Form.useForm()
    const [isLoading, setIsLoading] = useState(false)
    const [nonFieldVisible, setNonFieldVisible] = useState(false)
    const [nonFieldErrorMessage, setNonFieldErrorMessage] = useState([])


    const onFinish = (values) => {

        setIsLoading(true)

        ProjectProvider.editProject(props.visible.row.id, values.avatar ? {
                ...values,
                avatar: values.avatar[0].originFileObj
            }
            :
            {...values})
            .then(data => {
                if (!data.hasErrors) {
                    openNotification('success', "Project updated successfully", true)
                    if(props.redirect){
                        props.refresh(Math.random())
                    }
                    form.resetFields()
                    setIsLoading(false)
                    props.setRender(Math.random())
                    props.setVisible(prevState => ({state: false, row: prevState.row}))

                } else {
                    handleFormErrors(data, form, setNonFieldErrorMessage, setNonFieldVisible)
                    form.resetFields()
                    setIsLoading(false)
                    props.setRender(Math.random())
                    props.setVisible(prevState => ({state: false, row: prevState.row}))
                }
                Modal.destroyAll()
            })
    }

    const handleCancel = () => {
        Modal.destroyAll()
        props.setVisible(prevState => ({state: false, row: prevState.row}))
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
                title={'Edit Project'}
                closable={false}
                destroyOnClose={true}
                centered
                onCancel={handleCancel}
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
                    fields={[
                        {
                            name: ["name"],
                            value: props.visible.row.name
                        },
                        {
                            name: ["description"],
                            value: props.visible.row.description
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
                        rules={[{required: true, message: 'Enter Project Name'}]}
                        className={props.fieldClasses}
                    >
                        <Input size={"large"} value={props.visible.row.name} placeholder={'*Project Name'} type={"text"}/>
                    </Form.Item>


                    <Form.Item
                        label=""
                        name="description"
                        rules={[{required: true, message: 'Enter Description'}]}
                        className={props.fieldClasses}
                    >
                        <TextArea size={"large"} value={props.visible.row.description} placeholder={'*Type Description'} type={"textarea"}/>
                    </Form.Item>

                    <Form.Item
                        label=""
                        name="avatar"
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

                </Form>


            </Modal>
        </>
    )
}

export default EditModalForm