import {Button, Form, Input, Modal} from "antd";
import {useForm} from "antd/es/form/Form";
import {useState} from "react";
import {AnnotationProvider} from "../../../../providers/AnnotationProvider";
import {openNotification} from "../../../../helpers/helper";


const AnnotatorModalForm = ({isModalVisible, setIsModalVisible, annotation, setAnnotations, annotations, img}) => {


    const [form] = useForm()
    const [loading, setLoading] = useState(false)


    const handleOk = () => {
        form.resetFields()
        setIsModalVisible(false);
    };


    const enterPressed = () => {
        form.validateFields()
            .then((values) => {
                addClass(values)
            })
    }

    const addClass = (values) => {
        annotation.classification = values.classification
        setLoading(true)
        AnnotationProvider.create({...annotation, image: img.id})
            .then(data => {
                if (!data.hasErrors){
                    openNotification('success', 'Annotation Created', true)
                    setLoading(false)
                    data.data.key = annotations.length + 1
                    data.data.visible = true
                    setAnnotations([...annotations, data.data])
                }
                else {
                    openNotification('error', 'Annotation could not be created', false)
                    setLoading(false)
                }
            })
        handleOk()
    }


    return (
        <Modal
            title="Label class" visible={isModalVisible} onOk={enterPressed}
            destroyOnClose={true}
            onCancel={handleOk}
            footer={<Button type={"primary"} loading={loading} onClick={enterPressed}>Add</Button> }
            centered={true}
        >
            <Form
                form={form}
                onFinish={addClass}
            >
                <Form.Item
                    label=""
                    name="classification"
                    rules={[{required: true, message: 'Type classification'}]}
                >
                    <Input addonBefore={'Class Name'} onPressEnter={enterPressed} />

                </Form.Item>

            </Form>
        </Modal>
    )
}
export default AnnotatorModalForm