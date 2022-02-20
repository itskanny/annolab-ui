import {Button, Form, Input,Upload} from "antd";


const CreateOrganizationForm = props => {

    return (
        <Form className={'an-banner-form'}>

            <Form.Item
                label=""
                name="organization_name"
                rules={[{ required: true, message: 'Enter Organization Name' }]}
            >
                <Input size={"large"} placeholder={'*Organization Name'} type={"text"}/>
            </Form.Item>
            <Form.Item
                label=""
                name="organization_tagline"
                rules={[{ required: true, message: 'Enter Organization Tagline' }]}
            >
                <Input size={"large"} placeholder={'*Organization Tagline'} type={"text"}/>
            </Form.Item>

             <Form.Item
                label=""
                name="organization_file"
                rules={[{ required: true, message: 'Select Icon' }]}
            >
                <Upload
                    listType="picture-card"
                    showUploadList={false}
                    className="avatar-uploader"
                >
                    Upload File
                </Upload>
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'}>
                    Create
                </Button>
            </Form.Item>

        </Form>
    )
}

export default CreateOrganizationForm