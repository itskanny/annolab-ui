import React from 'react';
import { Layout} from 'antd';
import './App.less';
import {Content, Header} from "antd/es/layout/layout";
import Signup from "./Pages/Signup/Signup";
import Login from './Pages/Login/Login';

const App = () => (
    <Layout className={'tw-h-full'}>
        {/*<Header>*/}

        {/*</Header>*/}
        <Content>
            <Login/>
        </Content>
    </Layout>
);

export default App;