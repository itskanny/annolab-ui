import React from 'react';
import { Layout} from 'antd';
import './App.less';
import {Content, Header} from "antd/es/layout/layout";
import Signup from "./Pages/Signup/Signup";
import Login from './Pages/Login/Login';
import RecoverPassword from './Pages/ForgetPassword/RecoverPassword';
import SetNewPassword from './Pages/ForgetPassword/SetNewPassword';
import UpdateProfile from './Pages/AccountSteps/UpdateProfile';
import CreateOrganization from './Pages/AccountSteps/CreateOrganization';
import CreateProject from './Pages/AccountSteps/CreateProject';
import CreateTeam from './Pages/AccountSteps/CreateTeam';
import AddImage from './Pages/AccountSteps/AddImage';

const App = () => (
    <Layout className={'tw-h-full'}>
        {/*<Header>*/}

        {/*</Header>*/}
        <Content>
            <AddImage/>

        </Content>
    </Layout>
);

export default App;