import React from 'react';
import {Layout} from 'antd';
import './App.less';
import {Content, Header} from "antd/es/layout/layout";
import SetNewPassword from './Pages/ForgetPassword/SetNewPassword';
import Navbar from "./Components/Ui/Navbar/Navbar";

const App = () => (
    <Layout className={"tw-h-full"}>

        <Navbar/>
        <Content>
            <SetNewPassword/>
        </Content>
    </Layout>
);

export default App;