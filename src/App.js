import React from 'react';
import { Layout} from 'antd';
import './App.less';
import {Content, Header} from "antd/es/layout/layout";
import Signup from "./Pages/Signup/Signup";
import Login from './Pages/Login/Login';
import RecoverPassword from './Pages/ForgetPassword/RecoverPassword';
import SetNewPassword from './Pages/ForgetPassword/SetNewPassword';

const App = () => (
    <Layout className={'tw-h-full'}>
        {/*<Header>*/}

        {/*</Header>*/}
        <Content>
            <SetNewPassword/>
        </Content>
    </Layout>
);

export default App;