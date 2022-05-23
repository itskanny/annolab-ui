import {Button} from "antd";
import {PlusOutlined} from "@ant-design/icons";
import React from "react";


const ListingHeader = ({text, buttonHandler}) => {

    return(
        <>
            <div className={'tw-flex tw-justify-between tw-mx'}>
                <p className={'tw-font-semibold tw-text-lg tw-mb-0'}>{text}</p>
                <Button onClick={buttonHandler} type="primary" shape={'circle'} icon={<PlusOutlined style={{color: 'white'}}/>}/>
            </div>
        </>
    )
}

export default ListingHeader