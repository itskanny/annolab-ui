import React from "react";
import { Col, Row } from "antd";
import AddProjectForm from "../../Components/Forms/AddProject/AddProjectForm";
import "./AddProject.css";
import { Button } from "antd";
import Navbar from "../../Components/Ui/Navbar/Navbar";

const AddProject = () => {
  return (
    <div >
        <Navbar></Navbar>
      <div>
        <h3 className="h1">Create Project</h3>
        
      </div>

      <div className="center">
        <Col className={"gutter-row tw-mt-10 md:tw-mt-0"} span={24} md={8}>
          <AddProjectForm />
        </Col>
      </div>
      < div className=" flex justify-end ...">

        </div>
    </div>
  );
};

export default AddProject;
