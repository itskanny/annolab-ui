import React from "react";
import ListPage from "../../Components/Functional/ListingTable/ListPage";
import {ProjectProvider} from "../../providers/ProjectProvider";
import {useProjectColumns} from "../../constants/TableColumns/TableColumns";
import {useHistory} from "react-router-dom";



const ProjectListing = (props) => {

    const history = useHistory()

    const PROJECT_COLUMNS = useProjectColumns()

    const addProjectHandler = () => {
        history.push('/addproject')
    }

    return (

        <>
            <ListPage buttonHandler={addProjectHandler} columns={PROJECT_COLUMNS} title={props.org.name} tableType={'All Projects'} buttonText={'Add Project'} fetcher={ProjectProvider.fetchProjects}/>
        </>);
};

export default ProjectListing;