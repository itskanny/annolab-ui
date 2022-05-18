import {Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import ProjectListing from "../Listing/ProjectListing";
import ImageListing from "../Listing/ImageListing";
import PageNotFound from "../404NotFound";
import React from "react";


const ProjectDetail = props => {

    const match = useRouteMatch()
    const params = useParams()

    return (
        <>
            <Switch>

                <Route path={`${match.path}`} exact>
                    <ProjectListing/>
                </Route>

                <Route path={`${match.path}/:projectId/images`}>
                    <ImageListing/>
                </Route>
                <Route path={'/*'} exact>
                    <PageNotFound/>
                </Route>
            </Switch>

        </>
    )
}

export default ProjectDetail