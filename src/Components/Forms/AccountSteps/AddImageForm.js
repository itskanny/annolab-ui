import {Button, Form, Image,Upload} from "antd";


const AddImageForm = props => {

    return (
        <Form className={'an-banner-form'}>

         
             <Form.Item
                label=""
                name="image_file"
                rules={[{ required: true, message: 'Select Image' }]}
            >
                <Upload
                    listType="picture-card"
                    showUploadList={false}
                    className="avatar-uploader"
                >
                    Upload File
                </Upload>
            </Form.Item>

            <Form.Item
                label=""
                name="images"
                rules={[{ required: true, message: 'No Images Selected' }]}


            >
                <Image
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
              />
            </Form.Item>


            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'}>
                    Create
                </Button>
            </Form.Item>

        </Form>
    )
}

export default AddImageForm