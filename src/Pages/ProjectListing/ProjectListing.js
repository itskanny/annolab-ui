import React from "react";
import ProjectCard from "../../Components/Cards/ProjectCard";
import {Container} from "postcss";
import {Col, Row} from "antd";


const ProjectListing = () => {

    const data = [
        {
            key: '1',
            title: 'Project Name',
            description: 'This is project Images',
            totalImages: 250,
            annotatedImages: 200,
            testedImages: 50
        },
        {
            key: '2',
            title: 'Project Name',
            description: 'This is project Images',
            totalImages: 250,
            annotatedImages: 200,
            testedImages: 50
        },
        {
            key: '3',
            title: 'Project Name',
            description: 'This is project Images',
            totalImages: 250,
            annotatedImages: 200,
            testedImages: 50
        },
        {
            key: '3',
            title: 'Project Name',
            description: 'This is project Images',
            totalImages: 250,
            annotatedImages: 200,
            testedImages: 50
        },
        {
            key: '3',
            title: 'Project Name',
            description: 'This is project Images',
            totalImages: 250,
            annotatedImages: 200,
            testedImages: 50
        },
        {
            key: '3',
            title: 'Project Name',
            description: 'This is project Images',
            totalImages: 250,
            annotatedImages: 200,
            testedImages: 50
        },
        {
            key: '3',
            title: 'Project Name',
            description: 'This is project Images',
            totalImages: 250,
            annotatedImages: 200,
            testedImages: 50
        }

    ];


    return (

        <><h1 align={'center'} className={"h1_AP"} >All Projects</h1>
            <Row align={"middle"}
                 className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>
                <Col span={24} md={24} className={'gutter-row tw-h-full'}>

                    <div style={{display: "flex", flexWrap: "wrap", paddingLeft: "10px", paddingRight: "10px"}}>

                        {data.map(projectcard => <ProjectCard title={projectcard.title}
                                                              description={projectcard.description}
                                                              totalImages={projectcard.totalImages}
                                                              annotatedImages={projectcard.annotatedImages}
                                                              testedImages={projectcard.testedImages}/>)}

                    </div>
                    </Col>
                    </Row>
                </>);
                };

                export default ProjectListing;