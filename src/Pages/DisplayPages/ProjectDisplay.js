import {Avatar, Button, Card, Col, Row, Space, Table, Tag, Tooltip} from "antd";
import {authStore} from "../../store/AuthStore";
import ObservedUserLoader from "../../helpers/UserLoader";
import ListProjects from "../../Components/Functional/HomePageComponents/ListProjects";
import {Link, useHistory} from "react-router-dom";
import Meta from "antd/es/card/Meta";
import React, {useState} from "react";
import {formatDate} from "../../helpers/DataFormater";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {ImageProvider} from "../../providers/ImageProvider";
import {openNotification} from "../../helpers/helper";



const ProjectDisplay = (props) => {

    const [editVisible, setEditVisible] = useState({state: false, row: {}})
    const [deleteVisible, setDeleteVisible] = useState({state: false, row: {}})


    const TEAM_COLUMNS = [

        {
            title: 'Team Image',
            dataIndex: 'avatar',
            key: 'avatar',
            render: avatar => <Avatar src={avatar}/>,
            // render: (avatar, row) => <Link
            //     to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/${row.id}`}`}><Avatar
            //     src={avatar}/></Link>,

        },
        {
            title: 'Team ID',
            dataIndex: 'id',
            key: 'id',
            // render: (id, row) => <Link
            //     to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/${row.id}`}`}>
            //     <p className={'tw-mb-0 tw-text-black hover:tw-text-primary'}>{id}</p></Link>,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Team Name',
            dataIndex: 'name',
            key: 'name',
            // render: (name, row) => <Link
            //     to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/${row.id}`}`}>
            //     <p className={'tw-mb-0 tw-text-black hover:tw-text-primary'}>{name}</p></Link>,
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Total Members',
            dataIndex: 'total_members',
            key: 'total_members',
            sorter: (a, b) => a.total_members - b.total_members,
        },
        {
            title: 'Created Date',
            dataIndex: 'created_date',
            key: 'created_date',
            render: timestamp => formatDate(timestamp, 'LL'),
            sorter: (a, b) => new Date(a.created_date) - new Date(b.created_date),
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
            name: "Team Name",
            total_members: 7,

            created_date: 5,
            action: "hju"

        }
    ]

    // const deleteHandler = (id) => {
    //
    //     setLoading(true)
    //     ImageProvider.deleteImage(props.proj.id, id)
    //         .then(data => {
    //             if (!data.hasErrors) {
    //                 setRender(Math.random())
    //                 openNotification('success', 'Image deleted successfully', true)
    //             } else {
    //                 openNotification('error', 'Failed to delete Image', false)
    //             }
    //
    //             setLoading(false)
    //         })
    // }

    const IMAGE_COLUMNS = [

        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
            render: avatar => <Avatar src={avatar}/>,
        },
        {
            title: 'Image ID',
            dataIndex: 'id',
            key: 'id',
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Image Name',
            dataIndex: 'name',
            key: 'name',
            render: image => <p className={'tw-mb-0'}>{image}</p>,
            sorter: (a, b) => a.name.length - b.name.length,
        },
        {
            title: 'Image Status',
            dataIndex: 'is_annotated',
            key: 'is_annotated',
            render: status => status ? <Tag color={'blue'}>Annotated</Tag> : <Tag color={"cyan"}>Not Annotated</Tag>,
            sorter: (a, b) => a.imageStatus - b.imageStatus,
        },
        {
            title: 'Created Date',
            dataIndex: 'created_date',
            key: 'created_date',
            render: timestamp => formatDate(timestamp, 'LL'),
            sorter: (a, b) => new Date(a.created_date) - new Date(b.created_date),
        },
        {
            title: 'Action',
            key: 'action',
            // render: (_, row) => (
            //     <Space size="middle" className={'tw-w-full tw-flex tw-justify-evenly'}>
            //         <Tooltip title={'Edit Image'}><Button onClick={() => setEditVisible({state: true, row: row.id})}
            //                                               type="dashed" shape={'circle'}
            //                                               icon={<EditOutlined className={'tw-text-icon'}/>}/></Tooltip>
            //         <Tooltip title={'Delete Image'}><Button onClick={() => deleteHandler(row.id)} type="dashed"
            //                                                 shape={'circle'}
            //                                                 icon={<DeleteOutlined style={{color: 'red'}}/>}/></Tooltip>
            //     </Space>
            // ),
        },
    ];


    const dataSource1 = [
        {
            avatar: "",
            id: 6,
            name: "zain",
            is_annotated: "yes",

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
                        <Meta title="Project Name" description="This will be the projects description that will contain all the details for the orgnization." />
                    </Card>
                </Col>
                <Col span={0} md={16} className={'tw-pl-3'}>
<Card>
    <h3>Current Images</h3>
                    <Tooltip title={'Edit Images'} key={'edit'}> <Button /*onClick={organizationEditHandler}*/ type="dashed"
                                                                                                                     shape={'circle'} key={'edit'}
                                                                                                                     icon={<EditOutlined
                                                                                                                         className={'tw-text-icon'}/>}/></Tooltip>

                    <Table dataSource={dataSource1} columns={IMAGE_COLUMNS} />

</Card>
<Card>
    <h3>Current Teams</h3>
                    <Tooltip title={'Edit Teams'} key={'edit'}> <Button /*onClick={organizationEditHandler}*/ type="dashed"
                                                                                                                     shape={'circle'} key={'edit'}
                                                                                                                     icon={<EditOutlined
                                                                                                                         className={'tw-text-icon'}/>}/></Tooltip>
                    <Table dataSource={dataSource2} columns={TEAM_COLUMNS} />;
</Card>
                </Col>
            </Row>
        </>
    )
}
export default ProjectDisplay;