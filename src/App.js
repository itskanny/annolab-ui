import React from 'react';
import { Layout} from 'antd';
import './App.less';
import './App.css'
import {Content} from "antd/es/layout/layout";
import SetNewPassword from './Pages/ForgetPassword/SetNewPassword';
import Navbar from "./Components/Ui/Navbar/Navbar";
import { Route} from "react-router-dom";
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


const App = () => (
    <>
        <Layout className={"tw-h-full"}>

            <Navbar/>
            <List/>
            <Content>
                <Route path="/addimage">
                    <AddImage/>
                </Route>
                <Route path="/createorganization">
                    <CreateOrganization/>
                </Route>
                <Route path="/createproject">
                    <CreateProject/>
                </Route>
                <Route path="/createteam">
                    <CreateTeam/>
                </Route>
                <Route path="/updateprofile">
                    <UpdateProfile/>
                </Route>
                <Route path="/addproject">
                    <AddProject/>
                </Route>
                <Route path="/exportproject">
                    <ExportProject/>
                </Route>
                <Route path="/recoverpassword">
                    <RecoverPassword/>
                </Route>
                <Route path="/setnewpassword">
                    <SetNewPassword/>
                </Route>

                <Route path="/invite">
                    <Invite/>
                </Route>

                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/signup">
                    <Signup/>
                </Route>
                <Route path="/importproject">
                    <ImportProject/>
                </Route>

            </Content>
        </Layout>

    </>
);

export default App;