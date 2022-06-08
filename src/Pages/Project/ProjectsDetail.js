import {Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import ImageListing from "../Listing/ImageListing";
import PageNotFound from "../404NotFound";
import React, {useEffect, useState} from "react";
import {InlineLoader} from "../../helpers/FullScreenLoader";
import {ProjectProvider} from "../../providers/ProjectProvider";
import ImageDetail from "../Image/ImageDetail";
import Annotate from "../Annotation/Annotate";


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
                        {/*<Route path={`${match.path}/images/:imageID`}>*/}
                        {/*    <ImageDetail proj={selectedProject} />*/}
                        {/*</Route>*/}
                        <Route path={`${match.path}/images`} exact>
                            <ImageListing proj={selectedProject} refresh={setRefresh}/>
                        </Route>
                        <Route path={`${match.path}/images/annotate`}>
                            <Annotate proj={selectedProject}/>
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