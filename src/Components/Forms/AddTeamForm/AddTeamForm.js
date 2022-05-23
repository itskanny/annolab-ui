import ObservedUserLoader from "../../../helpers/UserLoader";
import {authStore} from "../../../store/AuthStore";
import OrganizationSelector from "../../Functional/OrganizationSelector/OrganizationSelector";
import {Divider} from "antd";
import React from "react";
import CreateTeamForm from "../AccountSteps/CreateTeamForm";


const AddTeamForm = () => {

    const DUMMY_DATA = [

        {
            ...authStore.user.organization.getOrganization
        },

    ]
    return (
        <>
            <ObservedUserLoader
                auth={authStore}
                node={
                    <>
                        <OrganizationSelector data={DUMMY_DATA} />

                        <Divider className={'tw-mb-5'}/>

                        <CreateTeamForm fieldClasses={'tw-mb-5'} />
                    </>
                }
            />

        </>
    );
}

export default AddTeamForm