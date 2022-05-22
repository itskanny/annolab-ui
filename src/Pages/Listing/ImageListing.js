import React, {useEffect, useState} from "react";

import ListPage from "../../Components/Functional/ListingTable/ListPage";
import {ImageProvider} from "../../providers/ImageProvider";
import AddImagesModelForm from "../../Components/Forms/ModelForms/ImageModalForms/AddImagesModelForm/AddImagesModelForm";
import {Avatar, Button, List, Space, Tag} from "antd";
import {formatDate} from "../../helpers/DataFormater";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {openNotification} from "../../helpers/helper";
import EditImageModalForm from "../../Components/Forms/ModelForms/ImageModalForms/EditImageModalForm/EditImageModalForm";


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
            render: status => status? <Tag color={'blue'}>Annotated</Tag>: <Tag color={"cyan"}>Not Annotated</Tag>,
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
            render: (_,row) => (
                <Space size="middle" className={'tw-w-full tw-flex tw-justify-evenly'}>
                    <Button onClick={() => setEditVisible({state: true, row: row.id})} type="dashed" shape={'circle'} icon={<EditOutlined className={'tw-text-icon'}/>}/>
                    <Button onClick={() => deleteHandler(row.id)} type="dashed" shape={'circle'} icon={<DeleteOutlined style={{color: 'red'}}/>}/>
                </Space>
            ),
        },
    ];

    const [visible, setVisible] = useState(false)
    const [render, setRender] = useState(false)
    const [loading, setLoading] = useState(false)
    const [editVisible, setEditVisible] = useState({state: false, row: 0})
    const [data, setData] = useState([])
    const [result, setResult] = useState(null)



    const deleteHandler = (id) => {

        setLoading(true)
        ImageProvider.deleteImage(props.proj.id, id)
            .then(data => {
                if (!data.hasErrors){
                    setRender(Math.random())
                    openNotification('success', 'Image deleted successfully', true)
                }
                else {
                    openNotification('error', 'Failed to delete Image', false)
                }

                setLoading(false)
            })
    }


    const fetchData = () => {
        setLoading(true)
        ImageProvider.fetchImages(props.proj.id)
            .then(data => {
                if (!data.hasErrors) {
                    setData(() => {
                        setLoading(false)
                        return data.data
                    })
                } else {
                    setResult({
                        errors: true,
                        status: data.status,
                        statusText: data.statusText,
                    })

                }

            })
    }

    useEffect(() => {
        fetchData()
    },[])


    const openModelHandler = () =>{
        setVisible(true)
    }

    return (

        <>
            {/*<AddImagesModelForm setRender={setRender} visible={visible} setVisible={setVisible} proj={props.proj}/>*/}
            {/*<EditImageModalForm setRender={setRender} visible={editVisible} setVisible={setEditVisible} proj={props.proj}/>*/}
            {/*<ListPage loading={loading} render={render} buttonHandler={openModelHandler} title={props.proj.name} tableType={'All Images'} buttonText={'Add Images'} columns={IMAGE_COLUMNS} fetcher={() => ImageProvider.fetchImages(props.proj.id)}/>*/}


            <div className={'tw-mx-16 tw-my-5'}>

                <List
                    grid={{ gutter: 16, column: 3 }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <div className={'tw-bg-red-700 tw-h-56 tw-relative'}>
                                <img className={'tw-w-full tw-h-full tw-object-cover'} src={item.image}/>
                                <div className={'tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-bg-black/70 tw-h-20'}>

                                </div>
                                <div className={'tw-absolute tw-right-2 tw-top-3'}>
                                    {/*{item.is_annotated ?  <Tag color={"success"}>Annotated</Tag> : <Tag color={"processing"}>Not Annotated</Tag>}*/}
                                    <div className={'tw-p-0.5 tw-bg-primary/50 tw-text-pr tw-border tw-border-primary tw-rounded-md'}>
                                        <b>Not Annotated</b>
                                    </div>
                                </div>
                            </div>
                        </List.Item>
                    )}
                />


            </div>

            {/*<div className={'tw-grid tw-grid-cols-3 tw-h-full tw-gap-3 '}>*/}
            {/*    <div className={'tw-bg-red-700 tw-h-56 tw-relative'}>*/}
            {/*        <img className={'tw-w-full tw-h-full tw-object-cover'} src={"http://localhost:8000/media/organization_avatars/1_7_2ewoOpw.jpg"}/>*/}
            {/*        <div className={'tw-absolute tw-bottom-0 tw-left-0 tw-right-0 tw-bg-black/70 tw-h-20'}>*/}

            {/*        </div>*/}
            {/*        <Tag color={"processing"}>Not Annotated</Tag>*/}
            {/*    </div>*/}
            {/*    <div className={'tw-bg-yellow-400 tw-h-56'}>*/}
            {/*        <img className={'tw-w-full tw-h-full tw-object-cover'} src={"http://localhost:8000/media/avatars/1_9_GV0nEyy.jpg"}/>*/}

            {/*    </div>*/}
            {/*    <div className={'tw-bg-blue-600 tw-h-56'}>*/}
            {/*        <img className={'tw-w-full tw-h-full tw-object-cover'} src={'http://localhost:8000/media/project_avatars/1_7_JXIq5uG.jpg'}/>*/}

            {/*    </div>*/}

            {/*    <div className={'tw-bg-red-700 tw-h-56'}>*/}
            {/*        <img className={'tw-w-full tw-h-full tw-object-cover'} src={"http://localhost:8000/media/organization_avatars/1_7_2ewoOpw.jpg"}/>*/}
            {/*    </div>*/}
            {/*    <div className={'tw-bg-yellow-400 tw-h-56'}>*/}
            {/*        <img className={'tw-w-full tw-h-full tw-object-cover'} src={"http://localhost:8000/media/avatars/1_9_GV0nEyy.jpg"}/>*/}

            {/*    </div>*/}
            {/*    <div className={'tw-bg-blue-600 tw-h-56'}>*/}
            {/*        <img className={'tw-w-full tw-h-full tw-object-cover'} src={'http://localhost:8000/media/project_avatars/1_7_JXIq5uG.jpg'}/>*/}

            {/*    </div>*/}

            {/*    <div className={'tw-bg-red-700 tw-h-56'}>*/}
            {/*        <img className={'tw-w-full tw-h-full tw-object-cover'} src={"http://localhost:8000/media/organization_avatars/1_7_2ewoOpw.jpg"}/>*/}
            {/*    </div>*/}
            {/*    <div className={'tw-bg-yellow-400 tw-h-56'}>*/}
            {/*        <img className={'tw-w-full tw-h-full tw-object-cover'} src={"http://localhost:8000/media/avatars/1_9_GV0nEyy.jpg"}/>*/}

            {/*    </div>*/}
            {/*    <div className={'tw-bg-blue-600 tw-h-56'}>*/}
            {/*        <img className={'tw-w-full tw-h-full tw-object-cover'} src={'http://localhost:8000/media/project_avatars/1_7_JXIq5uG.jpg'}/>*/}

            {/*    </div>*/}

            {/*</div>*/}
        </>
    )
};

export default ImageListing;