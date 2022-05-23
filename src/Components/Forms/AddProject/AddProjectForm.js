import React from "react";
import {Divider} from "antd";
import OrganizationSelector from "../../Functional/OrganizationSelector/OrganizationSelector";
import CreateProjectForm from "../AccountSteps/CreateProjectForm";
import {authStore} from "../../../store/AuthStore";
import ObservedUserLoader from "../../../helpers/UserLoader";

const AddProjectForm = () => {

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
                        <OrganizationSelector data={DUMMY_DATA}/>

                        <Divider className={'tw-mb-5'}/>

                        <CreateProjectForm fieldClasses={'tw-mb-5'}/>
                    </>
                }
            />

        </>
    );
};

export default AddProjectForm;
