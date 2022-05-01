import React from "react";
import {Card} from "antd";
import Meta from "antd/es/card/Meta"
import './ProjectCrad.css'

//const { createRoot } = ReactDOM;


const ProjectCard = (props) => {



    return (

        <>

            <Card
                hoverable
                style={{ width: 240 , padding:"20px"}}
                cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
            >
                <Meta title={props.title} description={props.description} />

                <h5 className="h5_PC">Total Images:</h5><p className="p_PC">{props.totalImages}</p><br/>
                <h5 className="h5_PC">Annotated:</h5><p className="p_PC">{props.annotatedImages}</p><br/>
                <h5 className="h5_PC">Tested:</h5><p className="p_PC">{props.testedImages}</p>


            </Card>

    </>);
};

export default ProjectCard;