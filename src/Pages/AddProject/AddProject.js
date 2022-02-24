import React from "react";
import {Col} from "antd";
import AddProjectForm from "../../Components/Forms/AddProject/AddProjectForm";
import "./AddProject.css";

const AddProject = () => {
    return (
        <div>
            <div>
                <h3 className="h1">Create Project</h3>

            </div>

            <div className="center">
                <Col className={"gutter-row tw-mt-10 md:tw-mt-0"} span={24} md={8}>
                    <AddProjectForm/>
                </Col>
            </div>
            < div className=" flex justify-end ...">

            </div>
        </div>
    );
};

export default AddProject;
