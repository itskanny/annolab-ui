import { Card, Col, Row} from "antd";
import ListSettings from "./ListSettings";
import {Redirect, Route, Switch} from "react-router-dom";
import React from "react";
import {useRouteMatch} from "react-router-dom/cjs/react-router-dom";
import PageNotFound from "../404NotFound";
import PublicProfile from "../../Components/Forms/SettingsForm/PublicProfile";
import Organization from "../../Components/Forms/SettingsForm/Organization";




const Settings = props => {

    const match = useRouteMatch()


    return (
        <>
            <Row align={"top"} justify={"center"}
                 className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-6 lg:tw-mx-12 xl:tw-mx-20 2xl:tw-mx-28 tw-justify-center'}

            >
                <Col span={24} md={8} className={'tw-pr-3'}>
                    <Card >
                        <ListSettings/>
                    </Card>
                </Col>
                <Col span={0} md={12} className={'tw-pl-3'}>
                    <Card
                        title={'Settings'}

                    >
                        <div >
                            <div className={'tw-w-full tw-justify-start'}>

                                <Switch>

                                    <Route path={`${match.path}`} exact>
                                        <Redirect to={`${match.url}/profile`}/>
                                    </Route>
                                    <Route path={`${match.path}/profile`}>
                                        <PublicProfile/>
                                    </Route>
                                    <Route path={`${match.path}/org`}>
                                        <Organization/>
                                    </Route>
                                    <Route path={'*'}>
                                        <PageNotFound/>
                                    </Route>

                                </Switch>
                            </div>

                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Settings