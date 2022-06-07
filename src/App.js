import React from 'react';
import {Layout, Modal, Spin} from 'antd';
import './App.less';
import './App.css'
import {Content} from "antd/es/layout/layout";
import SetNewPassword from './Pages/ForgetPassword/SetNewPassword';
import Navbar from "./Components/Ui/Navbar/Navbar";
import {Redirect, Route, Switch, useHistory} from "react-router-dom";
import ImportProject from "./Pages/ImportProject/ImportProject";
import Signup from "./Pages/Signup/Signup";
import Settings from "./Pages/Settings/Settings";
import Login from "./Pages/Login/Login";
import Invite from "./Pages/Invite/Invite";
import RecoverPassword from "./Pages/ForgetPassword/RecoverPassword";
import ExportProject from "./Pages/ExportProject/ExportProject";
import AddProject from "./Pages/AddProject/AddProject";
import UpdateProfile from "./Pages/AccountSteps/UpdateProfile";
import CreateTeam from "./Pages/AccountSteps/CreateTeam";
import CreateProject from "./Pages/AccountSteps/CreateProject";
import CreateOrganization from "./Pages/AccountSteps/CreateOrganization";
import AddImage from "./Pages/AccountSteps/AddImage";
import List from "./Pages/List/List";
import {authStore} from "./store/AuthStore";
import HomePage from "./Pages/Home/HomePage";
import {observer} from "mobx-react";
import PageNotFound from "./Pages/404NotFound";
import OrganizationDetailPage from "./Pages/Organization/OrganizationDetail";
import AddTeam from "./Pages/AddTeam/AddTeam";

const Loader = observer(({auth}) => {
    return (
        auth.isLoading ?
            <div
                className={`tw-h-full tw-w-full tw-z-50 tw-flex tw-justify-center tw-items-center tw-absolute tw-bg-white`}>
                <Spin/>
            </div>
            : <></>
    )
})


authStore.loadUserData()

const App = () => {
    const history = useHistory()


    history.listen(() =>{
        Modal.destroyAll()
    })

    return (
        <>
            <Loader
                auth={authStore}
            />
            <Layout className={"tw-h-full"}>

                <Navbar/>
                <List/>
                <Content>
                    <Switch>

                        <Route path={'/'} exact>
                            <Redirect to={'/home'}/>
                        </Route>
                        <Route path={'/home'} exact
                               render={
                                   () => {
                                       return authStore.isLoggedIn ? <HomePage/> : <Redirect to="/login"/>
                                   }
                               }
                        />
                        <Route path={"/addimage"} exact
                               render={
                                   () => {
                                       return authStore.isLoggedIn ? <AddImage/> : <Redirect to="/login"/>
                                   }
                               }
                        />

                        <Route path="/createorganization" exact
                               render={
                                   () => {
                                       return authStore.isLoggedIn ? <CreateOrganization/> : <Redirect to="/login"/>
                                   }
                               }
                        />
                        <Route path="/createproject" exact
                               render={
                                   () => {
                                       return authStore.isLoggedIn ? <CreateProject/> : <Redirect to="/login"/>
                                   }
                               }
                        />
                        <Route path="/createteam" exact
                               render={
                                   () => {
                                       return authStore.isLoggedIn ? <CreateTeam/> : <Redirect to="/login"/>
                                   }
                               }
                        />
                        <Route path="/updateprofile" exact
                               render={
                                   () => {
                                       return authStore.isLoggedIn ? <UpdateProfile/> : <Redirect to="/login"/>
                                   }
                               }
                        />
                        <Route path="/addproject" exact
                               render={
                                   () => {
                                       return authStore.isLoggedIn ? <AddProject/> : <Redirect to="/login"/>
                                   }
                               }
                        />
                        <Route path="/addteam" exact
                               render={
                                   () => {
                                       return authStore.isLoggedIn ? <AddTeam/> : <Redirect to="/login"/>
                                   }
                               }
                        />
                        <Route path="/exportproject" exact
                               render={
                                   () => {
                                       return authStore.isLoggedIn ? <ExportProject/> : <Redirect to="/login"/>
                                   }
                               }
                        />
                        <Route path="/recoverpassword" exact
                               render={
                                   () => {
                                       return !authStore.isLoggedIn ? <RecoverPassword/> : <Redirect to="/home"/>
                                   }
                               }
                        />
                        <Route path="/setnewpassword/:uid/:token" exact
                               render={
                                   () => {
                                       return !authStore.isLoggedIn ? <SetNewPassword/> : <Redirect to="/home"/>
                                   }
                               }
                        />

                        <Route path="/invite" exact
                               render={
                                   () => {
                                       return authStore.isLoggedIn ? <Invite/> : <Redirect to="/login"/>
                                   }
                               }
                        />

                        <Route path="/login" exact
                               render={
                                   () => {
                                       return !authStore.isLoggedIn ? <Login/> : <Redirect to="/home"/>
                                   }
                               }
                        />
                        <Route path="/signup" exact
                               render={
                                   () => {
                                       return !authStore.isLoggedIn ? <Signup/> : <Redirect to="/home"/>
                                   }
                               }
                        />
                        <Route path="/importproject" exact
                               render={
                                   () => {
                                       return authStore.isLoggedIn ? <ImportProject/> : <Redirect to="/login"/>
                                   }
                               }
                        />
                        <Route path={'/org/:orgnizationId'}
                               render={
                                   () => {
                                       return authStore.isLoggedIn ? <OrganizationDetailPage/> : <Redirect to="/login"/>
                                   }
                               }
                        />
                        <Route path="/settings"
                          render={
                              (props) => {
                                  return authStore.isLoggedIn ? <Settings/> : <Redirect to="/login"/>
                               }
                           }
                    />

                        <Route path={'/*'} exact>
                            <PageNotFound/>
                        </Route>
                    </Switch>
                </Content>
            </Layout>

        </>)
};

export default App;