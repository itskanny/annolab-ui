import React from "react";
import { Col, Row } from "antd";
import AddProjectForm from "../../Components/Forms/AddProject/AddProjectForm";
import Navbar from "../../Components/Navbar/Navbar";

import { Button } from "antd"; 

const ImportProject=()=>{




    return(
        <>    
    <Navbar/>
    <h1  className="h1">Import Images</h1>
    <div className=" flex justify-center ">


    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded">
  Import
</button>
    <button class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
  Cancel
</button>

        </div>


    

<Row align={"center"} className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>
<Col className={'gutter-row tw-mt-10 md:tw-mt-0'} >
 <h1  className="h2">Drag and Drop files here or click to browse</h1> 
 </Col>

 
 <Row align={"center"} className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>

 <div class="flex justify-center">
  <div class="mb-3 w-96">
    <label for="formFile" class="form-label inline-block mb-2 text-gray-700">Click Here to Import</label>
    <input class="form-control
    block
    w-full
    px-3
    py-1.5
    text-base
    font-normal
    text-gray-700
    bg-white bg-clip-padding
    border border-solid border-gray-300
    rounded
    transition
    ease-in-out
    m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" type="file" id="formFile"/>
  </div>
</div>

</Row>
    
</Row> 


    
    </>);
}

export default ImportProject;

