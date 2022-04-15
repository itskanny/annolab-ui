import {Button, DatePicker, Form, Upload} from "antd";
import {authStore} from "../../../store/AuthStore";
import {useState} from "react";
import {LoadingOutlined, PlusOutlined} from "@ant-design/icons";

function getBase64(img, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
}

const UpdateProfileForm = props => {

    const [imageUrl, setImageUrl] = useState()
    const [loading, setLoading] = useState(false)

    const uploadButton = (
        <div>
            {loading ? <LoadingOutlined/> : <PlusOutlined/>}
            <div style={{marginTop: 8}}>Upload Avatar</div>
        </div>
    );

    const handleChange = info => {
        if (info.file.status === 'uploading') {
            setLoading(true)
            return;
        }
        if (info.file.status === 'done') {
            // Get this url from response in real world.
            getBase64(info.file.originFileObj, imageUrl => {
                    setImageUrl(imageUrl)
                    setLoading(false)
                }
            );
        }
    };

    return (
        <Form className={'an-banner-form'}>

            <Form.Item
                label=""
                name="dob"
                rules={[{required: true, message: 'Enter Your Date Of Birth'}]}
            >
                <DatePicker size={"large"} placeholder={'Date of birth'}/>
            </Form.Item>

            <Form.Item
                label=""
                name="avatar"
                rules={[{required: true, message: 'Select Icon'}]}
            >
                <Upload
                    style={{width: '100%'}}
                    action={process.env.REACT_APP_BASE_URL + 'groups/'}
                    multiple={false}
                    name={'avatar'}
                    // showUploadList={false}
                    maxCount={1}
                    listType='picture'
                    className="avatar-uploader an-avatar-uploader"
                    onChange={handleChange}
                    headers={
                        {
                            "Authorization": `token ${authStore.token}`,
                        }
                    }

                >
                    {/*{imageUrl ? <div><img src={imageUrl} alt="avatar" style={{width: '100%', height: '100%', objectFit: ''}} /></div> : uploadButton}*/}
                    <div className="ant-upload ant-upload-select ant-upload-select-picture-card">
                        <span tabIndex="0" className="ant-upload" role="button">
                            <div>
                                <div style={{marginTop: "8px"}}>Upload Avatar</div>
                            </div>
                        </span>
                    </div>
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