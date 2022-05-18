import React from "react";
import ProjectCard from "../../Components/Cards/ProjectCard";

import {Avatar, Button, Card, Col, Divider, List, Row} from "antd";
import {data} from "autoprefixer";
import {Table, Tag, Space} from 'antd';


const ImageListing = (props) => {

    const columns = [

        {
            title: 'Team Image',
            dataIndex: 'avatar',
            key: 'avatar',
            render: avatar => <Avatar src="https://joeschmoe.io/api/v1/random"/>,
        },
        // {
        //     title: 'Team ID',
        //     dataIndex: 'teamID',
        //     key: 'teamID',
        //     render: text => <a>{text}</a>,
        //     sorter: (a, b) => a.teamID.length - b.teamID.length,
        // },
        // {
        //     title: 'Team Name',
        //     dataIndex: 'teamName',
        //     key: 'teamName',
        //     render: text => <a>{text}</a>,
        //     sorter: (a, b) => a.teamName.length - b.teamName.length,
        // },
        {
            title: 'Project Title',
            dataIndex: 'projectTitle',
            key: 'projectTitle',
            render: text => <a>{text}</a>,
            sorter: (a, b) => a.projectTitle.length - b.projectTitle.length,
        },
        // {
        //     title: 'Description',
        //     dataIndex: 'description',
        //     key: 'description',
        // },
        {
            title: 'Image Status',
            dataIndex: 'imageStatus',
            key: 'imageStatus',
            sorter: (a, b) => a.imageStatus - b.imageStatus,
        },
        {
            title: 'Created Date',
            dataIndex: 'createdDate',
            key: 'createdDate',
            sorter: (a, b) => a.createdDate - b.createdDate,
        },
        // {
        //     title: 'Tested Images',
        //     dataIndex: 'testedImages',
        //     key: 'testedImages',
        //     sorter: (a, b) => a.testedImages - b.testedImages,
        // },
        {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
                <Space size="middle">
                    <a>Edit</a>
                    <a>Delete</a>
                </Space>
            ),
        },
    ];

    const data = [
        {
            key: '1',
            avatar: 'https://joeschmoe.io/api/v1/random',
            teamID: 2,
            teamName: "Name",

            projectTitle: 'Project 1',

            imageStatus: "Annotated",
            createdDate: "01/May/2022",


        },
        {
            key: '2',
            avatar: 'https://joeschmoe.io/api/v1/random',
            teamID: 2,
            teamName: "Name 2",

            projectTitle: 'Project 1',

            imageStatus: "Annotated",
            createdDate: "01/May/2022",
        },
        {
            key: '3',
            avatar: 'https://joeschmoe.io/api/v1/random',
            teamID: 3,
            teamName: "Name",

            projectTitle: 'Project 1',

            imageStatus: "Annotated",
            createdDate: "01/May/2022",
        },
        {
            key: '4',
            avatar: 'https://joeschmoe.io/api/v1/random',
            teamID: 4,
            teamName: "Name",

            projectTitle: 'Project 1',

            imageStatus: "Annotated",
            createdDate: "01/May/2022",
        },
        {
            key: '5',
            avatar: 'https://joeschmoe.io/api/v1/random',
            teamID: 5,
            teamName: "Name",

            projectTitle: 'Project 1',

            imageStatus: "Annotated",
            createdDate: "01/May/2022",
        },
        {
            key: '6',
            avatar: 'https://joeschmoe.io/api/v1/random',
            teamID: 6,
            teamName: "Name",

            projectTitle: 'Project 1',

            imageStatus: "Annotated",
            createdDate: "01/May/2022",
        },
        {
            key: '7',
            avatar: 'https://joeschmoe.io/api/v1/random',
            teamID: 7,
            teamName: "Name",

            projectTitle: 'Project 1',

            imageStatus: "Annotated",
            createdDate: "01/May/2022",
        }

    ];


    return (

        <>
            {/*<div className={'tw-flex tw-items-center tw-justify-center tw-flex-col'}>*/}

            <Row align={"middle"}
                 className={'tw-p-4 tw-pt-4  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>
                <Col className={"gutter-row tw-mt-10 md:tw-mt-0"} span={24} md={24}>


                    <div align="center">

                        <Card>
                            <div className={'tw-flex tw-w-full tw-justify-between tw-mb-5'}>
                                <p className={'tw-font-bold tw-text-2xl tw-mb-0'}>All Images</p>


                                <Button type={"primary"}>Add More Images</Button>
                            </div>
                            <Divider className={'tw-mb-5'}/>
                            <Card>
                                <Table columns={columns} dataSource={data}/>;
                            </Card>
                        </Card>
                        {/*<List*/}

                        {/*    itemLayout="horizontal"*/}
                        {/*    dataSource={data}*/}
                        {/*    renderItem={item => (*/}
                        {/*        <List.Item>*/}
                        {/*            <List.Item.Meta*/}
                        {/*                avatar={<Avatar src="https://joeschmoe.io/api/v1/random"/>}*/}
                        {/*                title={item.title}*/}
                        {/*                description={item.description}*/}
                        {/*            />*/}
                        {/*            /!*<h5 >Title:</h5><p >{item.title}</p><br/>*!/*/}
                        {/*            /!*<h5 >Description:</h5><p className="p_PC">{item.description}</p><br/>*!/*/}
                        {/*            <h5 className="h5_PC">Total Images:</h5><p className="p_PC">{item.totalImages}</p><br/>*/}
                        {/*            <h5 className="h5_PC">Annotated:</h5><p className="p_PC">{item.annotatedImages}</p><br/>*/}
                        {/*            <h5 className="h5_PC">Tested:</h5><p className="p_PC">{item.testedImages}</p>*/}
                        {/*        </List.Item>*/}
                        {/*    )}*/}
                        {/*/>*/}
                    </div>
                </Col>
            </Row>

            {/*</div>*/}


        </>);
};

export default ImageListing;