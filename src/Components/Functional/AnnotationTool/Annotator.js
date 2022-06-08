import React, {useEffect, useState} from "react";
import LabelStudio from "@heartexlabs/label-studio";
import {ImageProvider} from "../../../providers/ImageProvider";
import {useParams} from "react-router-dom";
import {InlineLoader} from "../../../helpers/FullScreenLoader";


const Annotator = ({proj}) => {

    const params = useParams()
    const [imParam, setImParam] = useState(params.imgId)
    const [ls, setLs] = useState(null)
    const [img, setImg] = useState(null)
    const [loading, setLoading] = useState(true)


    const fetchSelectedImage = () => {
        ImageProvider.checkImageExists(proj.id ,params.imgId)
            .then(data => {
                if (!data.hasErrors) {
                    setImg(() => {
                        setLoading(false)
                        return data.data
                    })
                    setLs(new LabelStudio('annolab-annotator', {
                        config: `
                                  <View>
                                    <Image name="img" value="$image"></Image>
                                    <RectangleLabels name="tag" toName="img">
                                      <Label value="Hello"></Label>
                                      <Label value="World"></Label>
                                    </RectangleLabels>
                                  </View>
                            `,

                        interfaces: [
                            "panel",
                            "update",
                            "submit",
                            "controls",
                            "side-column",
                            "annotations:menu",
                            "annotations:add-new",
                            "annotations:delete",
                            "predictions:menu",
                        ],

                        user: {
                            pk: 1,
                            firstName: "James",
                            lastName: "Dean"
                        },

                        task: {
                            annotations: [],
                            predictions: [],
                            id: data.data.id,
                            data: {
                                image: data.data.image
                            }
                        },

                        onLabelStudioLoad: function (LS) {
                            var c = LS.annotationStore.addAnnotation({
                                userGenerate: true
                            });
                            LS.annotationStore.selectAnnotation(c.id);
                        }
                    }))
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


    return(
        <>
            <div className={'annotator tw-h-full tw-w-full'}>
                {
                    loading ?
                        <InlineLoader/>
                        :
                        <div id={'annolab-annotator'}/>

                }
            </div>
        </>
    )
}

export default Annotator