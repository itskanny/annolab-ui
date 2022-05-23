import {Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import ImageListing from "../Listing/ImageListing";
import PageNotFound from "../404NotFound";
import React, {useEffect, useState} from "react";
import {InlineLoader} from "../../helpers/FullScreenLoader";
import {ProjectProvider} from "../../providers/ProjectProvider";


const ProjectsDetail = props => {

    const match = useRouteMatch()
    const params = useParams()

    const [loading, setLoading] = useState(true)
    const [selectedProject, setSelectedProject] = useState(null)

    const fetchSelectedProject = () => {
        ProjectProvider.checkProjectExists(params.projectId)
            .then(data => {
                if (!data.hasErrors) {
                    setSelectedProject(() => {
                        setLoading(false)
                        console.log(data)
                        return data.data
                    })
                } else {
                    setLoading(false)
                }

            })

    }

    useEffect(() => {
        fetchSelectedProject()
    }, [])


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
                            <ImageListing proj={selectedProject}/>
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