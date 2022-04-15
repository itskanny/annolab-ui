import {Button, Form, Input,Upload,DatePicker} from "antd";


const CreateProjectForm = props => {

    return (
        <Form className={'an-banner-form'}>

            <Form.Item
                label=""
                name="project_name"
                rules={[{ required: true, message: 'Enter Project Name' }]}
            >
                <Input size={"large"} placeholder={'*Project Name'} type={"text"}/>
            </Form.Item>


            <Form.Item
                label=""
                name="avatar_file"
                rules={[{ required: true, message: 'Select Icon' }]}
            >
                <Upload
                    listType="picture-card"
                    showUploadList={false}
                    className="avatar-uploader"
                >
                    Upload Avatar
                </Upload>
            </Form.Item>
     
            <Form.Item
                label=""
                name="type_description"
                rules={[{ required: true, message: 'Enter Type Description' }]}
            >
                <Input size={"large"} placeholder={'*Type Description'} type={"text"}/>
            </Form.Item>
    

            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'}>
                    Create
                </Button>
            </Form.Item>

        </Form>
    )
}

export default CreateProjectForm