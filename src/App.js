import React from 'react';
import {Layout, Spin} from 'antd';
import './App.less';
import './App.css'
import {Content} from "antd/es/layout/layout";
import SetNewPassword from './Pages/ForgetPassword/SetNewPassword';
import Navbar from "./Components/Ui/Navbar/Navbar";
import {Redirect, Route, Switch} from "react-router-dom";
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
import FullScreenLoader from "./helpers/FullScreenLoader";


import ProjectCard from "./Components/Cards/ProjectCard";
import ImageDisplayCard from "./Components/Cards/ImageDisplayCard";
import ProjectListing from "./Pages/ProjectListing/ProjectListing";


const Loader = observer(({auth}) => {
    return (
        auth.isLoading ?
            <FullScreenLoader/>
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
                <ProjectListing/>
                <ImportProject/>

            </Content>
        </Layout>

    </>
);

export default App;