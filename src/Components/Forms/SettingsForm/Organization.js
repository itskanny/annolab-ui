import {Button, Form, Upload,Input} from "antd";

const Organization = props => {

    return (
        <Form className={'an-banner-form'}>


<Form.Item
                label=""
                name="name"
                rules={[{ required: true, message: 'Enter Organization Name' }]}
            >
                <Input size={"large"} placeholder={'*Organization Name'} type={"text"}/>
            </Form.Item>
            <Form.Item
                label=""
                name="tagline"
                rules={[{ required: true, message: 'Enter Organization Tagline' }]}
            >
                <Input size={"large"} placeholder={'*Organization Tagline'} type={"text"}/>
            </Form.Item>

              <Form.Item
                label=""
                name="avatar"
                rules={[{ required: true, message: 'Select Icon' }]}
            >
                <Upload
                    multiple={false}
                    listType="picture-card"
                    className="avatar-uploader"
                >
                    Upload Avatar
                </Upload>
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'}>
                    Update
                </Button>
            </Form.Item>

        </Form>
    )
}

export default Organization