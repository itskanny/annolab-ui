import {Avatar, Button, Card, Col, Row, Space, Table, Tooltip} from "antd";
import Meta from "antd/es/card/Meta";
import React, {useState} from "react";
import {formatDate} from "../../helpers/DataFormater";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {ProjectProvider} from "../../providers/ProjectProvider";
import {Link, useLocation} from "react-router-dom";
import ListingTable from "../../Components/Functional/ListingTable/ListingTable";
import userLoader from "../../helpers/UserLoader";
import {TeamProvider} from "../../providers/TeamProvider";


const OrgnizationDisplay = ({org,}) => {


    const [projectsLoading, setProjectsLoading] = useState(false)
    const [teamLoading, setTeamLoading] = useState(false)

    const [render, setRender] = useState(false)

    const location = useLocation()

    const TEAM_COLUMNS = [

        {
            title: 'Team Image',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (avatar, row) => <Link
                to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/teams/${row.id}`}`}><Avatar
                src={avatar}/></Link>,

        },
        {
            title: 'Team ID',
            dataIndex: 'id',
            key: 'id',
            render: (id, row) => <Link
                to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/teams/${row.id}`}`}>
                <p className={'tw-mb-0 tw-text-black hover:tw-text-primary'}>{id}</p></Link>,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Team Name',
            dataIndex: 'name',
            key: 'name',
            render: (name, row) => <Link
                to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/teams/${row.id}`}`}>
                <p className={'tw-mb-0 tw-text-black hover:tw-text-primary'}>{name}</p></Link>,
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
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, row) => (
        //         <Space size="middle" className={'tw-w-full tw-flex tw-justify-evenly'}>
        //             <Tooltip title={'Edit Team'}><Button onClick={() => setEditVisible({state: true, row: row})} type="dashed" shape={'circle'}
        //                                                  icon={<EditOutlined className={'tw-text-icon'}/>}/></Tooltip>
        //             <Tooltip title={'Delete Team'}><Button onClick={() => setDeleteVisible({state: true, row: row})} type="dashed" shape={'circle'}
        //                                                    icon={<DeleteOutlined style={{color: 'red'}}/>}/></Tooltip>
        //         </Space>
        //     ),
        // },
    ];

    const PROJECT_COLUMNS = [

        {
            title: 'Project Image',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (avatar, row) => <Link
                to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/projects/${row.id}`}/images`}><Avatar
                src={avatar}/></Link>,

        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (id, row) => <Link
                to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/projects/${row.id}`}/images`}>
                <p className={'tw-mb-0 tw-text-black hover:tw-text-primary'}>{id}</p></Link>,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Title',
            dataIndex: 'name',
            key: 'name',
            render: (name, row) => <Link
                to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/projects/${row.id}`}/images`}>
                <p className={'tw-mb-0 tw-text-black hover:tw-text-primary'}>{name}</p></Link>,
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
        // {
        //     title: 'Action',
        //     key: 'action',
        //     render: (_, row) => (
        //         <Space size="middle" className={'tw-w-full tw-flex tw-justify-evenly'}>
        //             <Tooltip title={'Edit Project'}><Button onClick={() => setEditVisible({state: true, row: row})} type="dashed" shape={'circle'}
        //                                                     icon={<EditOutlined className={'tw-text-icon'}/>}/></Tooltip>
        //             <Tooltip title={'Delete Project'}><Button onClick={() => setDeleteVisible({state: true, row: row})} type="dashed" shape={'circle'}
        //                                                       icon={<DeleteOutlined style={{color: 'red'}}/>}/></Tooltip>
        //         </Space>
        //     ),
        // },
    ];

    return (
        <>
            <Row align={"top"} justify={"center"}
                 className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-6 lg:tw-mx-12 xl:tw-mx-20 2xl:tw-mx-28 tw-justify-center'}

            >
                <Col span={24} md={8} className={'tw-pr-3'}>
                    <Card>
                        <Meta title={org.name} description={org.tagline}/>
                    </Card>
                </Col>
                <Col span={0} md={16} className={'tw-pl-3'}>

                    <Card>
                        <div className={'tw-flex tw-justify-between tw-mb-3'}>
                            <h2 className={'tw-font-semibold tw-mb-0'}>Organization Projects</h2>
                            <Link to={`org${org.id}/projects`}><Button type={"primary"}>All Projects</Button></Link>
                        </div>

                        <ListingTable loading={projectsLoading} render={render} columns={PROJECT_COLUMNS}
                                      fetcher={ProjectProvider.fetchProjects} listSize={3}/>

                    </Card>

                    <Card>
                        <div className={'tw-flex tw-justify-between tw-mb-3'}>
                            <h2 className={'tw-font-semibold tw-mb-0'}>Organization Teams</h2>
                            <Link to={`/org/${org.id}/teams`}> <Button type={"primary"}>All Teams</Button></Link>
                        </div>
                        <ListingTable loading={teamLoading} render={render} columns={TEAM_COLUMNS}
                                      fetcher={TeamProvider.fetchTeams} listSize={3}/>                    </Card>
                </Col>
            </Row>
        </>
    )
}
export default OrgnizationDisplay