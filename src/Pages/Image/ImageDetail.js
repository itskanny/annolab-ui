import {Redirect, Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {ImageProvider} from "../../providers/ImageProvider";
import {InlineLoader} from "../../helpers/FullScreenLoader";
import PageNotFound from "../404NotFound";
import Annotate from "../Annotation/Annotate";


const ImageDetail = ({proj}) => {

    const match = useRouteMatch()
    const params = useParams()

    const [loading, setLoading] = useState(true)
    const [selectedImage, setSelectedImage] = useState(null)

    const fetchSelectedImage = () => {
        ImageProvider.checkImageExists(proj.id ,params.imageID)
            .then(data => {
                if (!data.hasErrors) {
                    setSelectedImage(() => {
                        setLoading(false)
                        return data.data
                    })
                } else {
                    setLoading(false)
                }

            })

    }

    useEffect(() => {
        fetchSelectedImage()
    }, [])

    return (
        <>
            {loading ?
                <InlineLoader/>
                :
                selectedImage ?
                    <Switch>

                        <Route path={`${match.path}`} exact>
                            <Redirect to={`${match.url}/annotate`}/>
                        </Route>
                        <Route path={`${match.path}/annotate`}>
                            <Annotate proj={proj} img={selectedImage}/>
                        </Route>

                    </Switch>
                    :
                    <PageNotFound/>
            }
        </>
    )
}

export default ImageDetail