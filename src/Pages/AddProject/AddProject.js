import React from "react";
import {Col, Row} from "antd";
import AddProjectForm from "../../Components/Forms/AddProject/AddProjectForm";
import "./AddProject.css";


const AddProject = () => {
    return (


        <>
            <div>
                <h3 className="h1">Create Project</h3>
            </div>
            <Row align={"middle"} className={'tw-p-4 tw-pt-4  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>

                <Col className={"gutter-row tw-mt-10 md:tw-mt-0"} span={24} md={8}>
                    <AddProjectForm/>
                </Col>
            </Row>
        </>



        // <div>
        //     <div>
        //         <h3 className="h1">Create Project</h3>
        //
        //     </div>
        //
        //     <Row className="center">
        //         <Col className={"gutter-row tw-mt-10 md:tw-mt-0"} span={24} md={8}>
        //             <AddProjectForm/>
        //         </Col>
        //     </Row>
        //     < div className=" flex justify-end ...">
        //
        //     </div>
        // </div>
    );
};

export default AddProject;
