import {Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import PageNotFound from "../404NotFound";
import React, {useEffect, useState} from "react";
import {InlineLoader} from "../../helpers/FullScreenLoader";
import {TeamProvider} from "../../providers/TeamProvider";
import TeamDisplay from "../DisplayPages/TeamDisplay";


const TeamDetail = ({props}) => {

    const match = useRouteMatch()
    const params = useParams()

    const [loading, setLoading] = useState(true)
    const [selectedTeam, setSelectedTeam] = useState(null)

    const fetchSelectedTeam = () => {
        TeamProvider.checkTeamExists(params.teamId)
            .then(data => {
                if (!data.hasErrors) {
                    setSelectedTeam(() => {
                        setLoading(false)
                        return data.data
                    })
                } else {
                    setLoading(false)
                }

            })

    }

    useEffect(() => {
        fetchSelectedTeam()
    }, [])

    return (
        <>
            {loading ?
                <InlineLoader/>
                :
                selectedTeam ?
                    <Switch>

                        <Route path={`${match.path}`} exact>
                            <TeamDisplay team={selectedTeam}/>
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

export default TeamDetail