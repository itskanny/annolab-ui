import React from "react";
import { Col, Row } from "antd";
import AddProjectForm from "../../Components/Forms/AddProject/AddProjectForm";


import { Button } from "antd";
import Navbar from "../../Components/Ui/Navbar/Navbar";

const ExportProject=()=>{

    




    return(<>
    <Navbar/>
    <h3 align={'center'} className="h1">Export Images</h3> 


    <Row align={"center"} className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>
    <h1  className="h2">You can Export dataset in any of the following formats.</h1> 
    </Row> 
    
    
    </>)
}

export default ExportProject;

