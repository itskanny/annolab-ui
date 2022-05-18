import React from "react";
import {Card} from "antd";
import Meta from "antd/es/card/Meta"
import './ProjectCrad.css'

//const { createRoot } = ReactDOM;


const ImageDisplayCard = () => {



    return (

        <>
            <Card
                hoverable
                style={{ width: 240 }}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title="Status" description="Annotated/Tested/Pending" />



            </Card>

        </>);
};

export default ImageDisplayCard;