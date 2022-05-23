import React, {useState} from "react";

import ListPage from "../../Components/Functional/ListingTable/ListPage";
import {TeamProvider} from "../../providers/TeamProvider";
import {Link, useHistory, useLocation} from "react-router-dom";
import {Avatar, Button, Space} from "antd";
import {formatDate} from "../../helpers/DataFormater";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import EditModalForm from "../../Components/Forms/ModelForms/TeamModalForms/EditModalForm/EditModalForm";
import DeleteModelForm from "../../Components/Forms/ModelForms/TeamModalForms/DeleteModalForm/DeleteModelForm";


const TeamListing = (props) => {

    const location = useLocation()

    const TEAM_COLUMNS = [

        {
            title: 'Team Image',
            dataIndex: 'avatar',
            key: 'avatar',
            render: (avatar, row) => <Link to={`${location.pathname}${location.pathname[location.pathname.length-1] === '/' ? row.id : `/${row.id}`}`}><Avatar src={avatar}/></Link>,

        },
        {
            title: 'Team ID',
            dataIndex: 'id',
            key: 'id',
            render: (id, row) => <Link to={`${location.pathname}${location.pathname[location.pathname.length-1] === '/' ? row.id : `/${row.id}`}`}><p className={'tw-mb-0 tw-text-black hover:tw-text-primary'} >{id}</p></Link>,
            sorter: (a, b) => a.id - b.id,
        },
        {
            title: 'Team Name',
            dataIndex: 'name',
            key: 'name',
            render: (name, row) => <Link to={`${location.pathname}${location.pathname[location.pathname.length-1] === '/' ? row.id : `/${row.id}`}`}><p className={'tw-mb-0 tw-text-black hover:tw-text-primary'} >{name}</p></Link>,
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
            render: (_,row) => (
                <Space size="middle">
                    <Button onClick={() => setEditVisible({state: true, row: row})} type="dashed" shape={'circle'}
                            icon={<EditOutlined className={'tw-text-icon'}/>}/>
                    <Button onClick={() => setDeleteVisible({state: true, row: row})} type="dashed" shape={'circle'}
                            icon={<DeleteOutlined style={{color: 'red'}}/>}/>
                </Space>
            ),
        },
    ];

    const addTeamHandler = () => {
        history.push('/addteam')
    }

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


    return (

        <>
            <DeleteModelForm setRender={setRender} visible={deleteVisible} setVisible={setDeleteVisible}/>
            <EditModalForm setRender={setRender} visible={editVisible} setVisible={setEditVisible}/>
            {/*<ListPage columns={TEAM_COLUMNS} title={props.org.name} tableType={'All Teams'} buttonText={'Add Team'} fetcher={TeamProvider.fetchTeams}/>*/}

            <ListPage
                render={render}
                headerTag={true}
                headerTagText={'Owner'}
                item={props.org}
                headerExtras={[
                    <Button onClick={null} type="dashed" shape={'circle'} key={'edit'}
                            icon={<EditOutlined className={'tw-text-icon'}/>}/>,
                    <Button onClick={null} type="dashed" shape={'circle'} key={'delete'}
                            icon={<DeleteOutlined style={{color: 'red'}}/>}/>
                ]}
                headerButtonHandler={addTeamHandler}
                headerType={'All Teams'}
                statistics={statistics}
                viewType={'table'}
                columns={TEAM_COLUMNS}
                fetcher={TeamProvider.fetchTeams}
                showTableViewIcon={true}
                tableViewIconHandler={null}
                showListViewIcon={false}
                listViewIconHandler={null}
            />
        </>
    );
};

export default TeamListing;