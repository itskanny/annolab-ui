import {Route, Switch, useRouteMatch} from "react-router-dom";
import ProjectListing from "../Listing/ProjectListing";
import PageNotFound from "../404NotFound";
import React from "react";
import ProjectsDetail from "./ProjectsDetail";


const Projects = props => {

    const match = useRouteMatch()
    // const params = useParams()

    return (
        <>
            <Switch>

                <Route path={`${match.path}`} exact>
                    <ProjectListing org={props.org} refresh={props.refresh}/>
                </Route>

                <Route path={`${match.path}/:projectId`}>
                    <ProjectsDetail/>
                </Route>
                <Route path={'/*'} exact>
                    <PageNotFound/>
                </Route>
            </Switch>

        </>
    )
}

export default Projects