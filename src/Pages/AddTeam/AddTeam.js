import {authStore} from "../../store/AuthStore";
import {Card, Col, Row, Typography} from "antd";
import React from "react";
import AddTeamForm from "../../Components/Forms/AddTeamForm/AddTeamForm";
import ObservedUserLoader from "../../helpers/UserLoader";
const {Paragraph} = Typography;


const AddTeam = () => {

    return (
        <>

            <Row align={"top"}
                 className={'tw-p-4 tw-pt-4  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>


                <Col span={0} lg={10} xl={12} className={'tw-pr-3'}>
                    <Card title={'About Teams'}>
                        <p>Team reside in workspaces containing invited users who will work on projects. Teams are: </p>

                        <Paragraph>
                            <ul>
                                <li>
                                    <p>Unique in names</p>
                                </li>
                                <li>
                                    <p>Are in workspaces and contain Invited users</p>
                                </li>
                                <li>
                                    <p>These teams can be assigned to projects</p>
                                </li>
                            </ul>
                        </Paragraph>
                    </Card>
                </Col>

                <Col className={"gutter-row tw-mt-10 md:tw-mt-0 tw-pl-3"} span={24} md={16} lg={14} xl={12}>
                    <Card title={'Add Team'}>
                        <ObservedUserLoader auth={authStore} node={<AddTeamForm/>}/>
                    </Card>

                </Col>
            </Row>
        </>
    )
}

export default AddTeam