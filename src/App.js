import React from "react";
import { Layout } from "antd";
import "./App.less";
import { Content, Header } from "antd/es/layout/layout";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import ImportProject from "./Pages/ImportProject/ImportProject";
import Invite from "./Pages/Invite/Invite";


const App = () => (
  <Layout className={"tw-h-full"}>

    <Content>
      <Router>
        <Switch>
          <Route path="/">
            <Invite></Invite>
          </Route>
        </Switch>
      </Router>
    </Content>
  </Layout>
);

export default App;
