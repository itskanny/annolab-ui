import React, {useState} from "react";
import ListPage from "../../Components/Functional/ListingTable/ListPage";
import {ProjectProvider} from "../../providers/ProjectProvider";
import {Link, useHistory, useLocation} from "react-router-dom";
import {Avatar, Button, Space, Tooltip} from "antd";
import {formatDate} from "../../helpers/DataFormater";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import DeleteModelForm from "../../Components/Forms/ModelForms/ProjectModalForms/DeleteModalForm/DeleteModelForm";
import EditModalForm from "../../Components/Forms/ModelForms/ProjectModalForms/EditModalForm/EditModalForm";
import OrganizationEditModalForm
    from "../../Components/Forms/ModelForms/OrganizationModalForm/EditModalForm/OrganizationEditModalForm";

const ProjectListing = (props) => {

    const location = useLocation()

    const PROJECT_COLUMNS = [

        {
            title: 'Project Image',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (avatar, row) => <Link
                to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/${row.id}`}/images`}><Avatar
                src={avatar}/></Link>,

        },
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',
            render: (id, row) => <Link
                to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/${row.id}`}/images`}>
                <p className={'tw-mb-0 tw-text-black hover:tw-text-primary'}>{id}</p></Link>,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Title',
            dataIndex: 'name',
            key: 'name',
            render: (name, row) => <Link
                to={`${location.pathname}${location.pathname[location.pathname.length - 1] === '/' ? row.id : `/${row.id}`}/images`}>
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

    const statistics = [
        {
            title: 'Total Projects',
            text: props.org.total_projects
        },
        {
            title: 'Total Teams',
            text: props.org.total_teams
        }
    ]

    const history = useHistory()

    const [editVisible, setEditVisible] = useState({state: false, row: {}})
    const [render, setRender] = useState(false)
    const [deleteVisible, setDeleteVisible] = useState({state: false, row: {}})
    const [organizationEditVisible, setOrganizationEditVisible] = useState({state: false, row: props.org})

    const addProjectHandler = () => {
        history.push('/addproject')
    }

    const organizationEditHandler = () => {
        setOrganizationEditVisible({state: true, row: props.org})
    }

    return (

        <>
            <OrganizationEditModalForm redirect={true} refresh={props.refresh} setRender={setRender}
                                       visible={organizationEditVisible} setVisible={setOrganizationEditVisible}/>
            <DeleteModelForm setRender={setRender} visible={deleteVisible} setVisible={setDeleteVisible}/>
            <EditModalForm setRender={setRender} visible={editVisible} setVisible={setEditVisible}/>

            <ListPage
                render={render}
                headerTag={true}
                headerTagText={'Owner'}
                item={props.org}
                headerExtras={[
                    <Tooltip title={'Edit Organization'} key={'edit'}> <Button onClick={organizationEditHandler} type="dashed"
                                                                  shape={'circle'} key={'edit'}
                                                                  icon={<EditOutlined
                                                                      className={'tw-text-icon'}/>}/></Tooltip>,
                    // <Button onClick={null} type="dashed" shape={'circle'} key={'delete'}
                    //         icon={<DeleteOutlined style={{color: 'red'}}/>}/>
                ]}
                headerButtonHandler={addProjectHandler}
                headerType={'All Projects'}
                statistics={statistics}
                viewType={'table'}
                columns={PROJECT_COLUMNS}
                fetcher={ProjectProvider.fetchProjects}
                showTableViewIcon={true}
                tableViewIconHandler={null}
                showListViewIcon={false}
                listViewIconHandler={null}
            />
        </>);
};

export default ProjectListing;