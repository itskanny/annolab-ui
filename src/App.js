import React from 'react';
import { Layout} from 'antd';
import './App.less';
import {Content, Header} from "antd/es/layout/layout";
import Signup from "./Pages/Signup/Signup";

const App = () => (
    <Layout >
        <Header>

        </Header>
        <Content>
            <Signup/>
        </Content>
    </Layout>
);

export default App;