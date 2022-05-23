import {Route, Switch, useParams, useRouteMatch} from "react-router-dom";
import Projects from "../Project/Projects";
import PageNotFound from "../404NotFound";
import React, {useEffect, useState} from "react";
import {OrganizationProvider} from "../../providers/OrganizationProvider";
import {InlineLoader} from "../../helpers/FullScreenLoader";
import ObservedUserLoader from "../../helpers/UserLoader";
import {authStore} from "../../store/AuthStore";
import Team from "../Team/Team";

const OrganizationDetail = () => {
    const match = useRouteMatch()
    const params = useParams()

    const [loading, setLoading] = useState(true)
    const [selectedOrganization, setSelectedOrganization] = useState(null)
    const [refresh, setRefresh] = useState(false)

    const fetchSelectedOrganization = () => {
        OrganizationProvider.checkOrganizationExists(params.orgnizationId)
            .then(data => {
                if (!data.hasErrors){
                    setSelectedOrganization(() => {
                        setLoading(false)
                        return data.data
                    })
                }
                else {
                   setLoading(false)
                }

            })

    }

    useEffect(() => {
        fetchSelectedOrganization()
    }, [refresh])

    return (
        <>
            {loading ?
                <InlineLoader/>
                :
                selectedOrganization ?
                    <Switch>
                        <Route path={`${match.path}`} exact>
                            <p>Organization detail page for {params.orgnizationId}</p>
                        </Route>

                        <Route path={`${match.path}/projects`}>
                            <Projects org={selectedOrganization} refresh={setRefresh}/>
                        </Route>

                        <Route path={`${match.path}/teams`}>
                            <Team org={selectedOrganization} refresh={setRefresh}/>
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

const OrganizationDetailPage = () => {

    return (
        <ObservedUserLoader auth={authStore} node={<OrganizationDetail/>}/>
    )
}

export default OrganizationDetailPage