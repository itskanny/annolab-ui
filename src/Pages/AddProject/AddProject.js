import React from "react";
import { Col, Row } from "antd";
import AddProjectForm from "../../Components/Forms/AddProject/AddProjectForm";
import Navbar from "../../Components/Navbar/Navbar";
import "./AddProject.css";
import { Button } from "antd";

const AddProject = () => {
  return (
    <div >
      <Navbar></Navbar>
      <div  >
        <h3 className="h1">Create Project</h3>
        
      </div>

      <div className="center">
        <Col className={"gutter-row tw-mt-10 md:tw-mt-0"} span={24} md={8}>
          <AddProjectForm />
        </Col>
      </div>
      < div className=" flex justify-end ...">
        <Button  className="h-12 px-6 m-2" type="primary" htmlType="submit" >
          Save
        </Button>

        <Button className="h-12 px-6 m-2" type="primary" htmlType="cancel" >
          Cancel
        </Button>
        </div>
    </div>
  );
};

export default AddProject;
