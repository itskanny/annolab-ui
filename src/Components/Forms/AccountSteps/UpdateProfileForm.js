import {Button, DatePicker, Form, Upload} from "antd";

const UpdateProfileForm = props => {

    return (
        <Form className={'an-banner-form'}>

            <Form.Item
                label=""
                name="dob"
                rules={[{ required: true, message: 'Enter Your Date Of Birth' }]}
            >
                <DatePicker size={"large"} placeholder={'Date of birth'} />
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

export default UpdateProfileForm