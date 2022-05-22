import React, {useEffect, useState} from "react";

import ListPage from "../../Components/Functional/ListingTable/ListPage";
import {ImageProvider} from "../../providers/ImageProvider";
import AddImagesModelForm from "../../Components/Forms/ModelForms/ImageModalForms/AddImagesModelForm/AddImagesModelForm";
import {Avatar, Button, Divider, List, Space, Tag} from "antd";
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
            <AddImagesModelForm setRender={setRender} visible={visible} setVisible={setVisible} proj={props.proj}/>
            <EditImageModalForm setRender={setRender} visible={editVisible} setVisible={setEditVisible} proj={props.proj}/>
            <ListPage loading={loading} render={render} buttonHandler={openModelHandler} title={props.proj.name} tableType={'All Images'} buttonText={'Add Images'} columns={IMAGE_COLUMNS} fetcher={() => ImageProvider.fetchImages(props.proj.id)}/>


            <div className={'tw-mx-16 tw-my-5'}>

                <List
                    grid={{ gutter: 25, column: 3 }}
                    dataSource={data}
                    renderItem={item => (
                        <List.Item>
                            <div className={'tw-h-[250px] tw-relative tw-group'}>
                                <img className={'tw-w-full tw-h-[200px] tw-absolute tw-object-cover tw-shadow-card-shadow tw-rounded-tl-[7px] tw-rounded-br-[7px] tw-rounded-tr-[25px] tw-rounded-bl-[25px] tw-scale-0 tw-opacity-100 group-hover:tw-opacity-50 tw-transition-all tw-duration-500 tw-ease-in-out'} src={item.image}/>

                                <div className={'tw-absolute tw-left-2 tw-top-3 '}>
                                    {/*<div className={'tw-rounded-[5px] tw-text-white tw-bg-amber/80 tw-border tw-border-amber tw-px-2 tw-py-0'}>*/}
                                    {/*    Not Annotated*/}
                                    {/*</div>*/}
                                    <div className={'tw-rounded-[5px] tw-text-white tw-bg-primary/80 tw-border tw-border-primary tw-px-2 tw-py-0'}>
                                        Annotated
                                    </div>
                                    {/*{item.is_annotated ?  <Tag color={"success"}>Annotated</Tag> : <Tag color={"processing"}>Not Annotated</Tag>}*/}
                                </div>

                                <div className={'tw-absolute tw-mx-[18px] tw-px-[20px] tw-py-[10px] tw-rounded-tl-[7px] tw-rounded-br-[7px] tw-rounded-tr-[25px] tw-rounded-bl-[25px] tw-shadow-card-shadow tw-bottom-0 tw-left-0 tw-right-0 tw-bg-white'}>
                                    <p>{item.name}</p>
                                    <div className={'tw-flex tw-justify-between'}>
                                        <p className={'tw-mb-0'}>{formatDate(item.updated_date, 'LL')}</p>
                                        <div className={'tw-rounded-[5px] tw-text-primary tw-bg-primary/10 tw-border tw-border-primary tw-px-2 tw-py-0'}>
                                            Annotated
                                        </div>
                                    </div>

                                    <div className={'tw-mt-2 tw-hidden tw-transition-all tw-duration-500 tw-ease-in-out group-hover:tw-block '}>
                                        <div className={'tw-flex tw-justify-between'}>
                                            <Button onClick={() => setEditVisible({state: true, row: item.id})} type="dashed" shape={'circle'} icon={<EditOutlined className={'tw-text-icon'}/>}/>
                                            <Button onClick={() => deleteHandler(item.id)} type="dashed" shape={'circle'} icon={<DeleteOutlined style={{color: 'red'}}/>}/>
                                        </div>
                                    </div>

                                </div>

                            </div>
                        </List.Item>
                    )}
                />


            </div>
        </>
    )
};

export default ImageListing;