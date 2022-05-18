import React from "react";
import ProjectCard from "../../Components/Cards/ProjectCard";

import {Avatar, Button, Card, Col, Divider, List, Row} from "antd";
import {data} from "autoprefixer";
import {Table, Tag, Space} from 'antd';


const ProjectListing = (props) => {

    const columns = [

        {
            title: 'Project Image',
            dataIndex: 'avatar',
            key: 'avatar',
            render: avatar => <Avatar src="https://joeschmoe.io/api/v1/random"/>,
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: text => <a>{text}</a>,
            sorter: (a, b) => a.title.length - b.title.length,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Total Images',
            dataIndex: 'totalImages',
            key: 'totalImages',
            sorter: (a, b) => a.totalImages - b.totalImages,
        },
        {
            title: 'Annotated Images',
            dataIndex: 'annotatedImages',
            key: 'annotatedImages',
            sorter: (a, b) => a.annotatedImages - b.annotatedImages,
        },
        {
            title: 'Tested Images',
            dataIndex: 'testedImages',
            key: 'testedImages',
            sorter: (a, b) => a.testedImages - b.testedImages,
        },
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
            title: 'Project1',
            description: 'This is project 1 Images',
            totalImages: 20,
            annotatedImages: 200,
            testedImages: 50,
            avatar: 'https://joeschmoe.io/api/v1/random'
        },
        {
            key: '2',
            title: 'Project2',
            description: 'This is project 2 Images',
            totalImages: 2010,
            annotatedImages: 600,
            testedImages: 50,
            avatar: 'https://joeschmoe.io/api/v1/random'
        },
        {
            key: '3',
            title: 'Project3',
            description: 'This is project 3 Images',
            totalImages: 250,
            annotatedImages: 1400,
            testedImages: 50,
            avatar: 'https://joeschmoe.io/api/v1/random'
        },
        {
            key: '4',
            title: 'Project4',
            description: 'This is project 4 Images',
            totalImages: 260,
            annotatedImages: 120,
            testedImages: 50,
            avatar: 'https://joeschmoe.io/api/v1/random'
        },
        {
            key: '5',
            title: 'Project5',
            description: 'This is project 5 Images ',
            totalImages: 70,
            annotatedImages: 280,
            testedImages: 50,
            avatar: 'https://joeschmoe.io/api/v1/random'
        },
        {
            key: '6',
            title: 'Project6',
            description: 'This is project  6 Images ',
            totalImages: 80,
            annotatedImages: 260,
            testedImages: 50,
            avatar: 'https://joeschmoe.io/api/v1/random'
        },
        {
            key: '7',
            title: 'Project7',
            description: 'This is project 7 Images ancd this is very long long long desvription top check',
            totalImages: 290,
            annotatedImages: 20,
            testedImages: 50,
            avatar: 'https://joeschmoe.io/api/v1/random'
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
                                    <p className={'tw-font-bold tw-text-2xl tw-mb-0'}>All Projects</p>


                                    <Button type={"primary"}>Add Project</Button>
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

export default ProjectListing;