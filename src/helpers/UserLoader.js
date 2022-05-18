import {observer} from "mobx-react";
import {InlineLoader} from "./FullScreenLoader";

const ObservedUserLoader = observer(({auth, node}) =>{
    return (
        auth.user.isLoading() ?
            <InlineLoader/>
            : <>{node}</>
    )
})

export default ObservedUserLoader