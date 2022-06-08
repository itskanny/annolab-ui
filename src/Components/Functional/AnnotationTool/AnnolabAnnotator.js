import React, {useEffect, useState} from "react";
import {ImageProvider} from "../../../providers/ImageProvider";
import {useHistory, useParams} from "react-router-dom";
import CanvasBoard from "./CanvasBoard";
import {PageHeader} from "antd";
import {InlineLoader} from "../../../helpers/FullScreenLoader";
import AnnotationList from "./AnnotationList";

const Annotator = ({proj}) => {

    const params = useParams()
    const history = useHistory()
    const [imParam, setImParam] = useState(params.imgId)

    const [annotations, setAnnotations] = useState([]);
    const [newAnnotation, setNewAnnotation] = useState([]);
    const [render, setRender] = useState(false)

    const [img, setImg] = useState(null)
    const [loading, setLoading] = useState(true)
    const [update, serUpdater] = useState(false)


    const fetchSelectedImage = () => {
        ImageProvider.checkImageExists(proj.id ,params.imgId)
            .then(data => {
                if (!data.hasErrors) {
                    setImg(() => {
                        setLoading(false)
                        setRender(Math.random())
                        return data.data
                    })

                } else {
                    setLoading(false)
                }

            })

    }

    useEffect(() => {
        fetchSelectedImage()
    }, [imParam])

    useEffect(() => {
        if (imParam !== params.imgId){
            setImParam(params.imgId)
        }

    })


    return (
        <>
            {
                loading ?
                    <InlineLoader/>
                    :

                    <div className="tw-flex-1 tw-flex tw-flex-col tw-mx-3 tw-my-5 an-border-radius an-border">
                        <div className={'tw-border-b tw-border-border-color'}>
                            <PageHeader className={''} title={proj.name} onBack={history.goBack}
                                        style={{padding: '5px 15px'}}/>
                        </div>
                        <div className={'tw-flex-1 tw-flex '}>
                            <div className={'tw-h-70 tw-flex-1 an-wrapper tw-bg-icon'}>
                                <div>
                                    <CanvasBoard img={img} annotations={annotations} setAnnotations={setAnnotations} newAnnotation={newAnnotation} setNewAnnotation={setNewAnnotation}/>
                                </div>
                            </div>
                            <div className={'tw-resize tw-border-l tw-border-border-color tw-px-3 tw-py-5 tw-w-40 lg:tw-w-48 xl:tw-w-60'}>
                                <AnnotationList setUpdater={serUpdater} setRender={setRender} render={render} annotations={annotations} img={img} setAnnotations={setAnnotations}/>
                            </div>
                        </div>
                    </div>
            }

        </>
    )
}

export default Annotator