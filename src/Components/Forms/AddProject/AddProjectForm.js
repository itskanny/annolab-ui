import React from "react";
import {Divider} from "antd";
import OrganizationSelector from "../../Functional/OrganizationSelector/OrganizationSelector";
import CreateProjectForm from "../AccountSteps/CreateProjectForm";
import {authStore} from "../../../store/AuthStore";
import ObservedUserLoader from "../../../helpers/UserLoader";

const AddProjectForm = (props) => {
  return (
    <>
      <ObservedUserLoader
          auth={authStore}
          node={
            <>
              <OrganizationSelector data={props.data} />

              <Divider className={'tw-mb-5'}/>

              <CreateProjectForm fieldClasses={'tw-mb-5'} />
            </>
          }
      />

    </>
  );
};

export default AddProjectForm;
