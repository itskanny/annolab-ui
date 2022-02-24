import React from 'react'

import { Upload, message, Button } from 'antd';

const props = {
    headers: {
        authorization: 'authorization-text',
    },
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    name: 'file',
};


const UploadImg=()=>{


    return(

        <>
            <Upload {...props}
                    onChange={(response) => {
                        if (response.file.status !== 'uploading') {
                            console.log(response.file, response.fileList);
                        }
                        if (response.file.status === 'done') {
                            message.success(`${response.file.name} 
                               file uploaded successfully`);
                        } else if (response.file.status === 'error') {
                            message.error(`${response.file.name} 
                             file upload failed.`);
                        }
                    }}
            >
                <Button>Upload File</Button>
            </Upload>
        </>);
}

export default UploadImg