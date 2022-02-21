import React from "react";
import { Layout } from "antd";
import "./App.less";
import { Content, Header } from "antd/es/layout/layout";
import Signup from "./Pages/Signup/Signup";
import Login from "./Pages/Login/Login";
import RecoverPassword from "./Pages/ForgetPassword/RecoverPassword";
import SetNewPassword from "./Pages/ForgetPassword/SetNewPassword";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SignupForm from "./Components/Forms/SignupForm/SignupForm";
import AddProject from "./Pages/AddProject/AddProject";

const App = () => (
  <Layout className={"tw-h-full"}>
    {/*<Header>*/}

    {/*</Header>*/}
    <Content>
      <Router>
        <Switch>
          <Route path="/">
            <AddProject></AddProject>
          </Route>
        </Switch>
      </Router>
    </Content>
  </Layout>
);

export default App;
