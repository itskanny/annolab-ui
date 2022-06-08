import {Avatar, Button, Card, Col, Row, Space, Table, Tooltip} from "antd";
import {authStore} from "../../store/AuthStore";
import ObservedUserLoader from "../../helpers/UserLoader";
import ListProjects from "../../Components/Functional/HomePageComponents/ListProjects";
import {Link, useHistory} from "react-router-dom";
import Meta from "antd/es/card/Meta";
import React, {useState} from "react";
import {formatDate} from "../../helpers/DataFormater";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";



const TeamDisplay = (props) => {

    const [editVisible, setEditVisible] = useState({state: false, row: {}})
    const [deleteVisible, setDeleteVisible] = useState({state: false, row: {}})


    const TEAM_COLUMNS = [

        {
            title: 'User Image',
            dataIndex: 'avatar',
            key: 'avatar',
            render: avatar => <Avatar src={avatar}/>,
            // render: (avatar, row) => <Link
            //     to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/${row.id}`}`}><Avatar
            //     src={avatar}/></Link>,

        },
        {
            title: 'User ID',
            dataIndex: 'id',
            key: 'id',
            // render: (id, row) => <Link
            //     to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/${row.id}`}`}>
            //     <p className={'tw-mb-0 tw-text-black hover:tw-text-primary'}>{id}</p></Link>,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'User Name',
            dataIndex: 'name',
            key: 'name',
            // render: (name, row) => <Link
            //     to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/${row.id}`}`}>
            //     <p className={'tw-mb-0 tw-text-black hover:tw-text-primary'}>{name}</p></Link>,
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
            sorter: (a, b) => a.total_members - b.total_members,
        },

        {
            title: 'Action',
            key: 'action',
            render: (_, row) => (
                <Space size="middle" className={'tw-w-full tw-flex tw-justify-evenly'}>
                    <Tooltip title={'Edit Team'}><Button onClick={() => setEditVisible({state: true, row: row})} type="dashed" shape={'circle'}
                                                         icon={<EditOutlined className={'tw-text-icon'}/>}/></Tooltip>
                    <Tooltip title={'Delete Team'}><Button onClick={() => setDeleteVisible({state: true, row: row})} type="dashed" shape={'circle'}
                                                           icon={<DeleteOutlined style={{color: 'red'}}/>}/></Tooltip>
                </Space>
            ),
        },
    ];

    const dataSource2 = [
        {
            avatar: "",
            id: 6,
            name: "User Name",
            email:"tantuu.com",
            action: "hju"

        }
    ]


    const PROJECT_COLUMNS = [

        {
            title: 'Project Image',
            dataIndex: 'avatar',
            key: 'avatar',
            render: avatar => <Avatar src={avatar}/>,
            // render: (avatar, row) => <Link
            //     to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/${row.id}`}/images`}><Avatar
            //     src={avatar}/></Link>,

        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            // render: (id, row) => <Link
            //     to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/${row.id}`}/images`}>
            //     <p className={'tw-mb-0 tw-text-black hover:tw-text-primary'}>{id}</p></Link>,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Title',
            dataIndex: 'name',
            key: 'name',
            // render: (name, row) => <Link
            //     to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/${row.id}`}/images`}>
            //     <p className={'tw-mb-0 tw-text-black hover:tw-text-primary'}>{name}</p></Link>,
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Total Images',
            dataIndex: 'total_images',
            key: 'total_images',
            sorter: (a, b) => a.total_images - b.total_images,
        },
        {
            title: 'Annotated Images',
            dataIndex: 'annotated_images',
            key: 'annotated_images',
            sorter: (a, b) => a.annotated_images - b.annotated_images,
        },
        {
            title: 'Created Date',
            dataIndex: 'created_date',
            key: 'created_date',
            render: timestamp => formatDate(timestamp, 'LL'),
            sorter: (a, b) => new Date(a.created_date) - new Date(b.created_date),
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
            render: (_, row) => (
                <Space size="middle" className={'tw-w-full tw-flex tw-justify-evenly'}>
                    <Tooltip title={'Edit Project'}><Button onClick={() => setEditVisible({state: true, row: row})} type="dashed" shape={'circle'}
                                                            icon={<EditOutlined className={'tw-text-icon'}/>}/></Tooltip>
                    <Tooltip title={'Delete Project'}><Button onClick={() => setDeleteVisible({state: true, row: row})} type="dashed" shape={'circle'}
                                                              icon={<DeleteOutlined style={{color: 'red'}}/>}/></Tooltip>
                </Space>
            ),
        },
    ];

    const dataSource1 = [
        {
            avatar: "",
            id: 6,
            name: "zain",
            total_images: 7,
            annotated_images: 9,
            created_date: 5,
            action: "hju"

        }
    ]



    return (
        <>
            <Row align={"top"} justify={"center"}
                 className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-6 lg:tw-mx-12 xl:tw-mx-20 2xl:tw-mx-28 tw-justify-center'}

            >
                <Col span={24} md={8} className={'tw-pr-3'}>
                    <Card >
                        <Meta title="Team Name" description="This will be the orgnizations description that will contain all the details for the orgnization." />
                    </Card>
                </Col>
                <Col span={0} md={16} className={'tw-pl-3'}>
                    <Card>

                        <h2>Current Ptojects</h2>
                    <Tooltip className={' tw-justify-end' }  title={'Edit Projects'} key={'edit'}> <Button /*onClick={organizationEditHandler}*/ type="dashed"
                                                                                                                 shape={'circle'} key={'edit'}
                                                                                                                 icon={<EditOutlined
                                                                                                                     className={'tw-text-icon'}/>}/></Tooltip>

                    <Table dataSource={dataSource1} columns={PROJECT_COLUMNS} />

                    </Card>

<Card>
                    <h2>Current Users</h2>
                    <Tooltip title={'Edit Teams'} key={'edit'}> <Button /*onClick={organizationEditHandler}*/ type="dashed"
                                                                                                              shape={'circle'} key={'edit'}
                                                                                                              icon={<EditOutlined
                                                                                                                  className={'tw-text-icon'}/>}/></Tooltip>
                    <Table dataSource={dataSource2} columns={TEAM_COLUMNS} />
</Card>

                </Col>
            </Row>
        </>
    )
}
export default TeamDisplay