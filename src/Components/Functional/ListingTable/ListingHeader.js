import {Button, Tooltip} from "antd";
import {PlusOutlined, TableOutlined, UnorderedListOutlined} from "@ant-design/icons";
import React from "react";


const ListingHeader = ({text, buttonHandler, showListViewIcon, listViewIconHandler, showTableViewIcon, tableViewIconHandler, viewType}) => {

    return(
        <>
            <div className={'tw-flex tw-justify-between tw-mx an-list-header'}>
                <p className={'tw-font-semibold tw-text-lg tw-mb-0 tw-flex-1'}>{text}</p>
                {showListViewIcon && <Tooltip title={'Show in List View'}><Button className={`tw-mr-2 ${viewType === 'list' && 'an-view-active'}`} onClick={listViewIconHandler} type={`dashed`} shape={'circle'} key={'listView'}
                        icon={<UnorderedListOutlined className={'tw-text-icon'}/>}/></Tooltip>}
                {showTableViewIcon && <Tooltip title={'Show in Table View'}><Button className={`tw-mr-2 ${viewType === 'table' && 'an-view-active'}`} onClick={tableViewIconHandler} type="dashed" shape={'circle'} key={'tableView'}
                        icon={<TableOutlined className={'tw-text-icon'}/>}/></Tooltip>}
                <Tooltip title={'Add Data'}><Button className={'tw-mr-2'} onClick={buttonHandler} type="primary" shape={'circle'} icon={<PlusOutlined style={{color: 'white'}}/>}/></Tooltip>
            </div>
        </>
    )
}

export default ListingHeader