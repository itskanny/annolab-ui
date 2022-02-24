import React from "react";
import { Col, Row } from "antd";



import { Button } from "antd";
import Navbar from "../../Components/Ui/Navbar/Navbar";
import InviteWalaForm from "../../Components/Forms/InviteForm/InviteWalaFom";


const Invite = () => {


    return(<>
        <Navbar/>
        <h1  className="h1">Invite People</h1>

        <Row align={"center"} className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>

            <Col className={"gutter-row tw-mt-10 md:tw-mt-0"} span={24} md={8}>
                <InviteWalaForm></InviteWalaForm>
            </Col>
        </Row>

    </>);
}
export default Invite;