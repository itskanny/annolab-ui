import {Button, List, Tooltip} from "antd";
import {DeleteOutlined, EyeInvisibleOutlined, EyeOutlined} from "@ant-design/icons";
import React, {useEffect, useState} from "react";
import {AnnotationProvider} from "../../../providers/AnnotationProvider";
import {openNotification} from "../../../helpers/helper";
import {InlineLoader} from "../../../helpers/FullScreenLoader";


const AnnotationList = ({annotations, img, setAnnotations, render, setRender, setUpdater}) => {

    const [loading, setLoading] = useState(false)

    const fetchImages = () => {
        setLoading(true)
        AnnotationProvider.fetchAnnotations(img.id)
            .then(data => {
                if (!data.hasErrors){
                    data.data.forEach(((data, index) => {
                        data.key = index + 1
                        data.visible = true
                    }))
                    setAnnotations(data.data)
                }
                else {
                    openNotification('error', 'Annotations could not be loaded', false)
                }
                setLoading(false)
            })
    }

    const deleteHandler = (id) => {
        AnnotationProvider.deleteAnnotation(id)
            .then(data => {
                if (!data.hasErrors){
                    openNotification('success', 'Annotation deleted successfully', true)
                    setRender(Math.random())
                }
                else {
                    openNotification('error', 'Annotation could not be deleted', false)
                }
            })
    }

    const visibilityHandler = (item) => {
        item.visible = !item.visible
        setUpdater(Math.random())
    }

    useEffect(() => {
        fetchImages()
    }, [render])



    return (
        <>
            <h3 className={'tw-font-semibold tw-text-lg'}>Annotations</h3>
            {loading ?
                <InlineLoader/>
                :
                <List
                    dataSource={annotations}
                    renderItem={item => {
                        return (
                            <List.Item>
                                <div className="tw-flex tw-justify-between tw-items-center tw-w-full">
                                    <p className={'tw-font-semibold tw-mb-0'}>{item.key}</p>
                                    <p className={'tw-mb-0'}>{item.classification}</p>
                                    <Tooltip title={'Hide Annotation'}><Button
                                        onClick={() => visibilityHandler(item)} type="dashed"
                                        shape={'circle'}
                                        icon={item.visible ? <EyeInvisibleOutlined />: <EyeOutlined/>}/></Tooltip>
                                    <Tooltip title={'Delete Annotation'}><Button
                                        onClick={() => deleteHandler(item.id)} type="dashed"
                                        shape={'circle'}
                                        icon={<DeleteOutlined style={{color: 'red'}}/>}/></Tooltip>
                                </div>
                            </List.Item>

                        )
                    }}
                >

                </List>
            }

        </>
    )
}

export default AnnotationList