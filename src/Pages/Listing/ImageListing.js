import React, {useState} from "react";
import ListPage from "../../Components/Functional/ListingTable/ListPage";
import {ImageProvider} from "../../providers/ImageProvider";
import AddImagesModelForm
    from "../../Components/Forms/ModelForms/ImageModalForms/AddImagesModelForm/AddImagesModelForm";
import {Avatar, Button, Space, Tag, Tooltip} from "antd";
import {formatDate} from "../../helpers/DataFormater";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {openNotification} from "../../helpers/helper";
import EditImageModalForm
    from "../../Components/Forms/ModelForms/ImageModalForms/EditImageModalForm/EditImageModalForm";
import ImageListCard from "../../Components/Functional/ListView/ImageListCard/ImageListCard";
import EditModalForm from "../../Components/Forms/ModelForms/ProjectModalForms/EditModalForm/EditModalForm";
import DeleteModelForm from "../../Components/Forms/ModelForms/ProjectModalForms/DeleteModalForm/DeleteModelForm";


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
                    <Tooltip title={'Edit Image'}><Button onClick={() => setEditVisible({state: true, row: row.id})}
                                                          type="dashed" shape={'circle'}
                                                          icon={<EditOutlined className={'tw-text-icon'}/>}/></Tooltip>
                    <Tooltip title={'Delete Image'}><Button onClick={() => deleteHandler(row.id)} type="dashed"
                                                            shape={'circle'}
                                                            icon={<DeleteOutlined style={{color: 'red'}}/>}/></Tooltip>
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
    const [projectEditVisible, setProjectEditVisible] = useState({state: false, row: props.proj})
    const [projectDeleteVisible, setProjectDeleteVisible] = useState({state: false, row: props.proj})


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

    const openProjectDeleteModelHandler = () => {
        setProjectDeleteVisible({state: true, row: props.proj})
    }

    const openProjectEditModelHandler = () => {
        setProjectEditVisible({state: true, row: props.proj})
    }

    return (

        <>
            <EditModalForm redirect={true} refresh={props.refresh} setRender={setRender} visible={projectEditVisible}
                           setVisible={setProjectEditVisible}/>
            <DeleteModelForm redirect={true} setRender={setRender} visible={projectDeleteVisible}
                             setVisible={setProjectDeleteVisible}/>
            <AddImagesModelForm setRender={setRender} visible={visible} setVisible={setVisible} proj={props.proj}/>
            <EditImageModalForm setRender={setRender} visible={editVisible} setVisible={setEditVisible}
                                proj={props.proj}/>

            {view === 'list' ?
                <ListPage
                    item={props.proj}
                    headerTag={true}
                    headerTagText={'Ongoing'}
                    headerExtras={[
                        <Tooltip title={'Edit Project'} key={'edit'}> <Button onClick={openProjectEditModelHandler} type="dashed"
                                                                              shape={'circle'}
                                                                              icon={<EditOutlined
                                                                                  className={'tw-text-icon'}/>}/></Tooltip>,
                        <Tooltip title={'Delete Project'} key={'delete'}><Button onClick={openProjectDeleteModelHandler} type="dashed"
                                                                                 shape={'circle'} key={'delete'}
                                                                                 icon={<DeleteOutlined
                                                                                     style={{color: 'red'}}/>}/></Tooltip>
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
                        <Tooltip title={'Edit Project'} key={'edit'}> <Button onClick={openProjectEditModelHandler} type="dashed"
                                                                              shape={'circle'}
                                                                              icon={<EditOutlined
                                                                                  className={'tw-text-icon'}/>}/></Tooltip>,
                        <Tooltip title={'Delete Project'} key={'delete'}><Button onClick={openProjectDeleteModelHandler} type="dashed"
                                                                                 shape={'circle'} key={'delete'}
                                                                                 icon={<DeleteOutlined
                                                                                     style={{color: 'red'}}/>}/></Tooltip>
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

        </>
    )
};

export default ImageListing;