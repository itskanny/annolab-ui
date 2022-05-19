import {Route, Switch, useRouteMatch} from "react-router-dom";
import PageNotFound from "../404NotFound";
import React from "react";
import TeamListing from "../Listing/TeamListing";
import TeamDetail from "./TeamDetail";


const Team = (props) => {

    const match = useRouteMatch()
    // const params = useParams()

    return (
        <>
            <Switch>

                <Route path={`${match.path}`} exact>
                    <TeamListing org={props.org}/>
                </Route>

                <Route path={`${match.path}/:teamId`}>
                    <TeamDetail/>
                </Route>
                <Route path={'/*'} exact>
                    <PageNotFound/>
                </Route>
            </Switch>
        </>
    )
}

export default Team