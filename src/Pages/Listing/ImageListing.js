import React, { useState} from "react";

import ListPage from "../../Components/Functional/ListingTable/ListPage";
import {ImageProvider} from "../../providers/ImageProvider";
import AddImagesModelForm
    from "../../Components/Forms/ModelForms/ImageModalForms/AddImagesModelForm/AddImagesModelForm";
import {Avatar, Button, Space, Tag} from "antd";
import {formatDate} from "../../helpers/DataFormater";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {openNotification} from "../../helpers/helper";
import EditImageModalForm
    from "../../Components/Forms/ModelForms/ImageModalForms/EditImageModalForm/EditImageModalForm";
import ImageListCard from "../../Components/Functional/ListView/ImageListCard/ImageListCard";


const ImageListing = (props) => {

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
            render: (_, row) => (
                <Space size="middle" className={'tw-w-full tw-flex tw-justify-evenly'}>
                    <Button onClick={() => setEditVisible({state: true, row: row.id})} type="dashed" shape={'circle'}
                            icon={<EditOutlined className={'tw-text-icon'}/>}/>
                    <Button onClick={() => deleteHandler(row.id)} type="dashed" shape={'circle'}
                            icon={<DeleteOutlined style={{color: 'red'}}/>}/>
                </Space>
            ),
        },
    ];

    const statistics = [
        {
            title: 'Total Images',
            text: props.proj.total_images
        },
        {
            title: 'Annotated Images',
            text: props.proj.annotated_images
        }
    ]

    const [visible, setVisible] = useState(false)
    const [render, setRender] = useState(false)
    const [loading, setLoading] = useState(false)
    const [editVisible, setEditVisible] = useState({state: false, row: 0})
    const [view, setView] = useState('list')

    const deleteHandler = (id) => {

        setLoading(true)
        ImageProvider.deleteImage(props.proj.id, id)
            .then(data => {
                if (!data.hasErrors) {
                    setRender(Math.random())
                    openNotification('success', 'Image deleted successfully', true)
                } else {
                    openNotification('error', 'Failed to delete Image', false)
                }

                setLoading(false)
            })
    }

    const tableViewIconHandler = () => {
        setView('table')
    }
    const listViewIconHandler = () => {
        setView('list')
    }


    const openModelHandler = () => {
        setVisible(true)
    }

    console.log(props.proj)

    return (

        <>
            <AddImagesModelForm setRender={setRender} visible={visible} setVisible={setVisible} proj={props.proj}/>
            <EditImageModalForm setRender={setRender} visible={editVisible} setVisible={setEditVisible}
                                proj={props.proj}/>

            {view === 'list'?
                <ListPage
                    item={props.proj}
                    headerTag={true}
                    headerTagText={'Ongoing'}
                    headerExtras={[
                        <Button onClick={null} type="dashed" shape={'circle'} key={'edit'}
                                icon={<EditOutlined className={'tw-text-icon'}/>}/>,
                        <Button onClick={null} type="dashed" shape={'circle'} key={'delete'}
                                icon={<DeleteOutlined style={{color: 'red'}}/>}/>
                    ]}
                    statistics={statistics}
                    headerType={'All Images'}
                    headerButtonHandler={openModelHandler}
                    viewType={view}
                    render={render}
                    fetcher={() => ImageProvider.fetchImages(props.proj.id)}
                    itemTemplate={<ImageListCard setEditVisible={setEditVisible}/>}
                    showTableViewIcon={true}
                    tableViewIconHandler={tableViewIconHandler}
                    showListViewIcon={true}
                    listViewIconHandler={listViewIconHandler}
                />
                :
                <ListPage
                loading={loading}
                render={render}
                headerTag={true}
                headerTagText={'Ongoing'}
                item={props.proj}
                headerExtras={[
                    <Button onClick={null} type="dashed" shape={'circle'} key={'edit'}
                            icon={<EditOutlined className={'tw-text-icon'}/>}/>,
                    <Button onClick={null} type="dashed" shape={'circle'} key={'delete'}
                            icon={<DeleteOutlined style={{color: 'red'}}/>}/>
                ]}
                headerButtonHandler={openModelHandler}
                headerType={'All Images'}
                statistics={statistics}
                viewType={'table'}
                columns={IMAGE_COLUMNS}
                fetcher={() => ImageProvider.fetchImages(props.proj.id)}
                showTableViewIcon={true}
                tableViewIconHandler={tableViewIconHandler}
                showListViewIcon={true}
                listViewIconHandler={listViewIconHandler}
                />
            }
            {/*<ListPage*/}
            {/*    loading={loading}*/}
            {/*    render={render}*/}
            {/*    headerTag={true}*/}
            {/*    headerTagText={'Ongoing'}*/}
            {/*    item={props.proj}*/}
            {/*    headerExtras={[*/}
            {/*        <Button onClick={null} type="dashed" shape={'circle'} key={'edit'}*/}
            {/*                icon={<EditOutlined className={'tw-text-icon'}/>}/>,*/}
            {/*        <Button onClick={null} type="dashed" shape={'circle'} key={'delete'}*/}
            {/*                icon={<DeleteOutlined style={{color: 'red'}}/>}/>*/}
            {/*    ]}*/}
            {/*    headerButtonHandler={openModelHandler}*/}
            {/*    headerType={'All Images'}*/}
            {/*    statistics={statistics}*/}
            {/*    viewType={'table'}*/}
            {/*    columns={IMAGE_COLUMNS}*/}
            {/*    fetcher={() => ImageProvider.fetchImages(props.proj.id)}*/}
            {/*/>*/}

            {/*<ListPage*/}
            {/*    item={props.proj}*/}
            {/*    headerTag={true}*/}
            {/*    headerTagText={'Ongoing'}*/}
            {/*    headerExtras={[*/}
            {/*        <Button onClick={null} type="dashed" shape={'circle'} key={'edit'}*/}
            {/*                icon={<EditOutlined className={'tw-text-icon'}/>}/>,*/}
            {/*        <Button onClick={null} type="dashed" shape={'circle'} key={'delete'}*/}
            {/*                icon={<DeleteOutlined style={{color: 'red'}}/>}/>*/}
            {/*    ]}*/}
            {/*    statistics={statistics}*/}
            {/*    headerType={'All Images'}*/}
            {/*    headerButtonHandler={openModelHandler}*/}
            {/*    viewType={view}*/}
            {/*    render={render}*/}
            {/*    fetcher={() => ImageProvider.fetchImages(props.proj.id)}*/}
            {/*    itemTemplate={<ImageListCard setEditVisible={setEditVisible}/>}*/}
            {/*    showTableViewIcon={true}*/}
            {/*    tableViewIconHandler={tableViewIconHandler}*/}
            {/*    showListViewIcon={true}*/}
            {/*    listViewIconHandler={listViewIconHandler}*/}
            {/*/>*/}

        </>
    )
};

export default ImageListing;