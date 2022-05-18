import {Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import TeamListing from "../Listing/Team Listing";
import ProjectDetail from "../Project/ProjectDetail";
import PageNotFound from "../404NotFound";
import React from "react";

const OrganizationDetail = (props) => {
    const match = useRouteMatch()
    const params = useParams()

    return (
        <>
            <Switch>
                <Route path={`${match.path}`} exact>
                    <p>Organization detail page for {params.orgnizationId}</p>
                </Route>

                <Route path={`${match.path}/projects`}>
                    <ProjectDetail/>
                </Route>

                <Route path={`${match.path}/teams`}>
                    <TeamListing/>
                </Route>

                <Route path={'/*'} exact>
                    <PageNotFound/>
                </Route>
            </Switch>
        </>
    )
}

export default OrganizationDetail