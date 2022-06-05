import ListCard from "../../Components/Functional/AnnotationLists/AnnotationImageList/ListCard";
import {Button, List, PageHeader, Tooltip} from "antd";
import {useHistory, useParams} from "react-router-dom";
import {DeleteOutlined, EyeInvisibleOutlined} from "@ant-design/icons";
import React, {useState} from "react";
import CanvasBoard from "../../Components/Functional/AnnotationTool/CanvasBoard";

const Annotate = ({proj, img}) => {

    const params = useParams()

    const [selectedImage, setSelectedImage] = useState({})

    const history = useHistory()

    const DUMMY_ANNOTATIONS = [
        {
            id: 1,
            class: 'Car',
        },
        {
            id: 2,
            class: 'Plane',
        },
        {
            id: 3,
            class: 'Boat',
        },
        {
            id: 4,
            class: 'Laptop',
        }
    ]




    return (
        <>
            <div className={'tw-flex tw-h-full tw-w-full'}>

                <div className={'tw-w-48 md:tw-w-56 lg:tw-w-60 xl:tw-w-72 tw-mx-3 tw-my-5'}>

                    <ListCard proj={proj} />
                </div>

                <div className="tw-flex-1 tw-flex tw-flex-col tw-mx-3 tw-my-5 an-border-radius an-border">
                    <div className={'tw-border-b tw-border-border-color'}>
                        <PageHeader className={''} title={proj.name} onBack={history.goBack}
                                    style={{padding: '5px 15px'}}/>
                    </div>
                    <div className={'tw-flex-1 tw-flex '}>
                        <div className={'tw-flex-1 an-wrapper tw-bg-icon'}>
                            <CanvasBoard img={img}/>
                        </div>
                        <div className={'tw-resize tw-border-l tw-border-border-color tw-px-3 tw-py-5 tw-w-40 lg:tw-w-48 xl:tw-w-60'}>
                            <h3 className={'tw-font-semibold tw-text-lg'}>Annotations</h3>
                            <List
                                dataSource={DUMMY_ANNOTATIONS}
                                renderItem={item => {
                                    return (
                                        <List.Item>
                                            <div className="tw-flex tw-justify-between tw-items-center tw-w-full">
                                                <p className={'tw-font-semibold tw-mb-0'}>{item.id}</p>
                                                <p className={'tw-mb-0'}>{item.class}</p>
                                                <Tooltip title={'Hide Annotation'}><Button
                                                    onClick={null} type="dashed"
                                                    shape={'circle'}
                                                    icon={<EyeInvisibleOutlined />}/></Tooltip>
                                                <Tooltip title={'Delete Annotation'}><Button
                                                    onClick={null} type="dashed"
                                                    shape={'circle'}
                                                    icon={<DeleteOutlined style={{color: 'red'}}/>}/></Tooltip>
                                            </div>
                                        </List.Item>

                                    )
                                }}
                            >

                            </List>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Annotate
