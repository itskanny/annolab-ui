import React from "react";
import {Button, Card, Col, Row, Typography} from "antd";
import AddProjectForm from "../../Components/Forms/AddProject/AddProjectForm";
import {authStore} from "../../store/AuthStore";
const {Paragraph} = Typography;


const AddProject = () => {
    const DUMMY_DATA = [

        {
            ...authStore.user.organization.getOrganization
        },

    ]

    return (
        <>

            <Row align={"top"}
                 className={'tw-p-4 tw-pt-4  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>


                <Col span={0} lg={10} xl={12} className={'tw-pr-3'}>
                    <Card title={'About Projects'}>
                        <p>Projects reside in workspaces containing images to be worked on. Projects are: </p>
                        <Typography>

                        </Typography>
                        <Paragraph>
                            <ul>
                                <li>
                                    <p>Unique in names</p>
                                </li>
                                <li>
                                    <p>Are in workspaces and contain images</p>
                                </li>
                                <li>
                                    <p>Teams can be assigned to them</p>
                                </li>
                            </ul>
                        </Paragraph>
                    </Card>
                </Col>

                <Col className={"gutter-row tw-mt-10 md:tw-mt-0 tw-pl-3"} span={24} md={16} lg={14} xl={12}>
                    <Card title={'Add Project'}>
                        <AddProjectForm data={DUMMY_DATA}/>
                    </Card>

                </Col>
            </Row>
        </>

    );
};

export default AddProject;
