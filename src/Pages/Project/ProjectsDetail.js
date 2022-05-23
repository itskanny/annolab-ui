import {Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import ImageListing from "../Listing/ImageListing";
import PageNotFound from "../404NotFound";
import React, {useEffect, useState} from "react";
import {InlineLoader} from "../../helpers/FullScreenLoader";
import {ProjectProvider} from "../../providers/ProjectProvider";


const ProjectsDetail = () => {

    const match = useRouteMatch()
    const params = useParams()

    const [loading, setLoading] = useState(true)
    const [selectedProject, setSelectedProject] = useState(null)
    const [refresh, setRefresh] = useState(false)

    const fetchSelectedProject = () => {
        ProjectProvider.checkProjectExists(params.projectId)
            .then(data => {
                if (!data.hasErrors) {
                    setSelectedProject(() => {
                        setLoading(false)
                        return data.data
                    })
                } else {
                    setLoading(false)
                }

            })

    }

    useEffect(() => {
        fetchSelectedProject()
    }, [refresh])


    return (

        <>
            {loading ?
                <InlineLoader/>
                :
                selectedProject ?
                    <Switch>

                        <Route path={`${match.path}`} exact>
                            <p>Project detail page for {params.projectId}</p>
                        </Route>
                        <Route path={`${match.path}/images`}>
                            <ImageListing proj={selectedProject} refresh={setRefresh}/>
                        </Route>
                        <Route path={'/*'} exact>
                            <PageNotFound/>
                        </Route>
                    </Switch>
                    :
                    <PageNotFound/>
            }
        </>


    )

}

export default ProjectsDetail