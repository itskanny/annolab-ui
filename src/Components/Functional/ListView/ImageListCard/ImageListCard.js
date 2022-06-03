import {formatDate} from "../../../../helpers/DataFormater";
import {Button, Tooltip} from "antd";
import {DeleteOutlined, EditOutlined} from "@ant-design/icons";
import React from "react";
import FloatingImageTag from "./FloatingImageTag";
import ImageTag from "./ImageTag";
import {Link, useRouteMatch} from "react-router-dom";


const ImageListCard = ({item, setEditVisible, deleteHandler}) => {

    const match = useRouteMatch()

    return (
        <>

            <div className={'tw-h-[250px] tw-relative tw-group'}>
                <Link to={`${match.url}/${item.id}/annotate`}>
                    <div
                        className={'tw-overflow-clip tw-relative tw-w-full tw-h-[200px] tw-shadow-card-shadow group-hover:tw-shadow-card-hover-shadow tw-rounded-tl-[7px] tw-rounded-br-[7px] tw-rounded-tr-[25px] tw-rounded-bl-[25px]  tw-transition-all tw-duration-500 tw-ease-in-out'}>
                        <img alt={'Project Iamge'} loading={"lazy"} className={'tw-h-full tw-w-full tw-object-cover '}
                             src={item.image}/>
                        <div
                            className={'tw-absolute tw-top-0 tw-bottom-0 tw-left-0 tw-right-0 tw-bg-black/0 group-hover:tw-bg-black/50 tw-transition-all tw-duration-500 tw-ease-in-out'}/>
                    </div>
                </Link>

                <FloatingImageTag is_annotated={item.is_annotated}/>

                <div
                    className={'tw-absolute tw-mx-[18px] tw-px-[20px] tw-py-[10px] tw-rounded-tl-[7px] tw-rounded-br-[7px] tw-rounded-tr-[25px] tw-rounded-bl-[25px] tw-shadow-card-shadow tw-bottom-0 tw-left-0 tw-right-0 tw-bg-white tw-transition-all tw-duration-500 tw-max-h-[78px] tw-ease-in-out group-hover:tw-max-h-[300px]'}>
                    <p>{item.name}</p>
                    <div className={'tw-flex tw-justify-between'}>
                        <p className={'tw-mb-0'}>{formatDate(item.updated_date, 'LL')}</p>
                        <ImageTag isAnnotated={item.is_annotated} floating={false}/>
                    </div>

                    <div
                        className={'tw-mt-2  tw-transition-all tw-duration-500 tw-ease-in-out tw-ease-in-out tw-opacity-0 group-hover:tw-opacity-100'}>
                        <div className={'tw-flex tw-justify-between'}>
                            <Tooltip title={'Edit Image'}><Button
                                onClick={() => setEditVisible({state: true, row: item.id})}
                                type="dashed" shape={'circle'}
                                icon={<EditOutlined className={'tw-text-icon'}/>}/></Tooltip>
                            <Tooltip title={'Delete Image'}><Button onClick={() => deleteHandler(item.id)} type="dashed"
                                                                    shape={'circle'}
                                                                    icon={<DeleteOutlined
                                                                        style={{color: 'red'}}/>}/></Tooltip>
                        </div>
                    </div>

                </div>

            </div>

        </>
    )

}

export default ImageListCard
