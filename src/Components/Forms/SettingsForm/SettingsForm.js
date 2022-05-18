import {Button, DatePicker, Form, Upload,Input} from "antd";

const SettingsForm = props => {

    return (
        <Form className={'an-banner-form'}>

<Form.Item
                label=""
                name="email"
                rules={[{required: true, message: 'Email Address is required'}]}
            >
                <Input size={"large"} placeholder={'*Email Address'} type={"email"} className={'tw-mb-4'}/>
            </Form.Item>

            <Form.Item
                label=""
                name="name"
                rules={[{required: true, message: 'Enter your name'}]}
                normalize={(name => {
                    return name.replace(/\b(\w)/g, s => s.toUpperCase());
                })}
            >
                <Input size={"large"} placeholder={'*Full Name'} type={"text"} className={'tw-mb-4'}/>
            </Form.Item>



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

            <Form.Item
                label=""
                name="organization_name"
                rules={[{ required: true, message: 'Enter Organization Name' }]}
            >
                <Input size={"large"} placeholder={'*Organization Name'} type={"text"}/>
            </Form.Item>
            <Form.Item
                label=""
                name="project_name"
                rules={[{ required: true, message: 'Enter Project Name' }]}
            >
                <Input size={"large"} placeholder={'*Project Name'} type={"text"}/>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'}>
                    Update
                </Button>
            </Form.Item>

        </Form>
    )
}

export default SettingsForm