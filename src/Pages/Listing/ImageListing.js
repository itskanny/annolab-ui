import React, {useState} from "react";

import ListPage from "../../Components/Functional/ListingTable/ListPage";
import {ImageProvider} from "../../providers/ImageProvider";
import AddImagesModelForm from "../../Components/Forms/ModelForms/AddImagesModelForm/AddImagesModelForm";
import {Avatar, Button, Space, Tag} from "antd";
import {formatDate} from "../../helpers/DataFormater";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import {openNotification} from "../../helpers/helper";


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
                    <Button type="dashed" shape={'circle'} icon={<EditOutlined className={'tw-text-icon'}/>}/>
                    <Button onClick={() => deleteHandler(row.id)} type="dashed" shape={'circle'} icon={<DeleteOutlined style={{color: 'red'}}/>}/>
                </Space>
            ),
        },
    ];

    const [visible, setVisible] = useState(false)
    const [render, setRender] = useState(false)
    const [loading, setLoading] = useState(false)

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



    const openModelHandler = () =>{
        setVisible(true)
    }

    return (

        <>
            <AddImagesModelForm setRender={setRender} visible={visible} setVisible={setVisible} proj={props.proj}/>

            <ListPage loading={loading} render={render} buttonHandler={openModelHandler} title={props.proj.name} tableType={'All Images'} buttonText={'Add Images'} columns={IMAGE_COLUMNS} fetcher={() => ImageProvider.fetchImages(props.proj.id)}/>
        </>
    )
};

export default ImageListing;