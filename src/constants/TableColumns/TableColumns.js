import {Avatar, Space} from "antd";
import React from "react";
import {formatDate} from "../../helpers/DataFormater";
import {Link, useLocation} from "react-router-dom";


export function useTeamColumns(){
    const location = useLocation()

    return [

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
            render: () => (
                <Space size="middle">
                    <p className={'tw-mb-0'}>Edit</p>
                    <p className={'tw-mb-0'}>Delete</p>
                </Space>
            ),
        },
    ];
}
