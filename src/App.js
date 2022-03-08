import React from 'react';
import {Col, Layout} from 'antd';
import './App.less';
import './App.css'
import {Content} from "antd/es/layout/layout";
import SetNewPassword from './Pages/ForgetPassword/SetNewPassword';
import Navbar from "./Components/Ui/Navbar/Navbar";
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
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
<List></List>

        <Router>




                <Route path="/addimage">
                    <AddImage></AddImage>
                </Route>
                <Route path="/createorganization">
                    <CreateOrganization></CreateOrganization>
                </Route>
                <Route path="/createproject">
                    <CreateProject></CreateProject>
                </Route>
                <Route path="/createteam">
                    <CreateTeam></CreateTeam>
                </Route>
                <Route path="/updateprofile">
                    <UpdateProfile></UpdateProfile>
                </Route>
                <Route path="/addproject">
                    <AddProject></AddProject>
                </Route>
                <Route path="/exportproject">
                    <ExportProject></ExportProject>
                </Route>
                <Route path="/recoverpassword">
                    <RecoverPassword></RecoverPassword>
                </Route>
                <Route path="/setnewpassword">
                    <SetNewPassword></SetNewPassword>
                </Route>

                <Route path="/invite">
                    <Invite></Invite>
                </Route>

                <Route path="/login">
                    <Login></Login>
                </Route>
                <Route path="/signup">
                    <Signup></Signup>
                </Route>
                <Route path="/importproject">
                    <ImportProject></ImportProject>
                </Route>


        </Router>
    </>
);

export default App;