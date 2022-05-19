import React from "react";
import ListPage from "../../Components/Functional/ListingTable/ListPage";
import {ProjectProvider} from "../../providers/ProjectProvider";
import {useProjectColumns} from "../../constants/TableColumns/TableColumns";



const ProjectListing = (props) => {

    const PROJECT_COLUMNS = useProjectColumns()


    return (

        <>
            <ListPage columns={PROJECT_COLUMNS} title={props.org.name} tableType={'All Projects'} buttonText={'Add Project'} fetcher={ProjectProvider.fetchProjects}/>

        </>);
};

export default ProjectListing;