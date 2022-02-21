import {Button, Form, Input,Upload,DatePicker} from "antd";


const CreateTeamForm = props => {

    return (
        <Form className={'an-banner-form'}>

            <Form.Item
                label=""
                name="team_name"
                rules={[{ required: true, message: 'Enter Team Name' }]}
            >
                <Input size={"large"} placeholder={'*Team Name'} type={"text"}/>
            </Form.Item>


            <Form.Item
                label=""
                name="disband_date"
                rules={[{ required: true, message: 'Enter Disband Date' }]}
            >
                <DatePicker size={"large"} placeholder={'*Disband Date'} />
            </Form.Item>

            <Form.Item
                label=""
                name="team_icon"
                rules={[{ required: true, message: 'Select Team Icon' }]}
            >
                <Upload
                    listType="picture-card"
                    showUploadList={false}
                    className="avatar-uploader"
                >
                    Team Icon
                </Upload>
            </Form.Item>
     
            <Form.Item
                label=""
                name="team_description"
                rules={[{ required: true, message: 'Enter Team Description' }]}
            >
                <Input size={"large"} placeholder={'*Team Description'} type={"text"}/>
            </Form.Item>
    

            <Form.Item>
                <Button type="primary" htmlType="submit" block size={'large'}>
                    Create
                </Button>
            </Form.Item>

        </Form>
    )
}

export default CreateTeamForm