import React from 'react';
import {Layout, Spin} from 'antd';
import './App.less';
import './App.css'
import {Content} from "antd/es/layout/layout";
import SetNewPassword from './Pages/ForgetPassword/SetNewPassword';
import Navbar from "./Components/Ui/Navbar/Navbar";
import {Redirect, Route} from "react-router-dom";
import ImportProject from "./Pages/ImportProject/ImportProject";
import Signup from "./Pages/Signup/Signup";
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

const Loader = observer(({auth}) => {
    return (
        auth.isLoading ?
            <div className={'tw-h-full tw-w-full tw-z-50 tw-flex tw-justify-center tw-items-center tw-absolute'}>
                <Spin/>
            </div>
            : <></>
    )
})

authStore.loadUserData()

const App = () => (
    <>
        <Loader auth={authStore}/>
        <Layout className={"tw-h-full"}>

            <Navbar/>
            <List/>
            <Content>

                <Route path={'/'} exact>
                    <Redirect to={'/home'}/>
                </Route>
                <Route path={'/home'} exact
                       render={
                            (props) => {
                                return authStore.isLoggedIn ? <HomePage/> : <Redirect to="/login"/>
                            }
                       }
                />
                <Route path={"/addimage"} exact
                       render={
                           (props) => {
                               return authStore.isLoggedIn ? <AddImage/> : <Redirect to="/login"/>
                           }
                       }
                />

                <Route path="/createorganization" exact
                       render={
                           (props) => {
                               return authStore.isLoggedIn ? <CreateOrganization/> : <Redirect to="/login"/>
                           }
                       }
                />
                <Route path="/createproject" exact
                       render={
                           (props) => {
                               return authStore.isLoggedIn ? <CreateProject/> : <Redirect to="/login"/>
                           }
                       }
                />
                <Route path="/createteam" exact
                       render={
                           (props) => {
                               return authStore.isLoggedIn ? <CreateTeam/> : <Redirect to="/login"/>
                           }
                       }
                />
                <Route path="/updateprofile" exact
                       render={
                           (props) => {
                               return authStore.isLoggedIn ? <UpdateProfile/> : <Redirect to="/login"/>
                           }
                       }
                />
                <Route path="/addproject" exact
                       render={
                           (props) => {
                               return authStore.isLoggedIn ? <AddProject/> : <Redirect to="/login"/>
                           }
                       }
                />
                <Route path="/exportproject" exact
                       render={
                           (props) => {
                               return authStore.isLoggedIn ? <ExportProject/> : <Redirect to="/login"/>
                           }
                       }
                />
                <Route path="/recoverpassword" exact
                       render={
                           (props) => {
                               return !authStore.isLoggedIn ? <RecoverPassword/> : <Redirect to="/home"/>
                           }
                       }
                />
                <Route path="/setnewpassword/:uid/:token" exact
                       render={
                           (props) => {
                               return !authStore.isLoggedIn ? <SetNewPassword/> : <Redirect to="/home"/>
                           }
                       }
                />

                <Route path="/invite" exact
                       render={
                           (props) => {
                               return authStore.isLoggedIn ? <Invite/> : <Redirect to="/login"/>
                           }
                       }
                />

                <Route path="/login" exact
                       render={
                           (props) => {
                               return !authStore.isLoggedIn ? <Login/> : <Redirect to="/home"/>
                           }
                       }
                />
                <Route path="/signup" exact
                       render={
                           (props) => {
                               return !authStore.isLoggedIn ? <Signup/> : <Redirect to="/home"/>
                           }
                       }
                />
                <Route path="/importproject" exact
                       render={
                           (props) => {
                               return authStore.isLoggedIn ? <ImportProject/> : <Redirect to="/login"/>
                           }
                       }
                />

            </Content>
        </Layout>

    </>
);

export default App;