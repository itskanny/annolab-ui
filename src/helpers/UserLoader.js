import {observer} from "mobx-react";
import {InlineLoader} from "./FullScreenLoader";
import {Button, Result} from "antd";
import {Link, Redirect} from "react-router-dom";

const ObservedUserLoader = observer(({auth, preventOrganizationRedirect, node}) => {
    return (
        auth.user.isLoading() ?
            <InlineLoader/>
            :
            preventOrganizationRedirect ?
                <>{node}</>
                :
                auth.needsOrganization ?
                    <Redirect to={'/createorganization'}/>
                    :
                    auth.backendError ?
                        <Result
                            status="500"
                            title="500"
                            subTitle="Sorry, something went wrong."
                            extra={<Link to={'/home'}><Button type="primary">Back Home</Button></Link>}
                        />
                        :
                        <>{node}</>
    )
})

export default ObservedUserLoader