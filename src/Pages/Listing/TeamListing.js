import React from "react";

import {useTeamColumns} from "../../constants/TableColumns/TableColumns";
import ListPage from "../../Components/Functional/ListingTable/ListPage";
import {TeamProvider} from "../../providers/TeamProvider";


const TeamListing = (props) => {

    const TEAM_COLUMNS = useTeamColumns()

    return (

        <>
            <ListPage columns={TEAM_COLUMNS} title={props.org.name} tableType={'All Teams'} buttonText={'Add Team'} fetcher={TeamProvider.fetchTeams}/>
        </>);
};

export default TeamListing;