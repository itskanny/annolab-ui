import ListCard from "../../Components/Functional/AnnotationLists/AnnotationImageList/ListCard";
import {Route, Switch, useRouteMatch} from "react-router-dom";
import '../../annotator.scss'
import Annotator from "../../Components/Functional/AnnotationTool/AnnolabAnnotator";


const Annotate = ({proj}) => {

    const match = useRouteMatch()

    return (
        <>
            <div className={'tw-flex tw-h-full tw-w-full'}>

                <div className={'tw-w-48 md:tw-w-56 lg:tw-w-60 xl:tw-w-72 tw-mx-3 tw-my-5'}>

                    <ListCard proj={proj}/>
                </div>



                <Switch>
                    <Route path={`${match.path}/:imgId`}>
                        <Annotator proj={proj} />
                    </Route>
                </Switch>


            </div>

        </>
    )
}

export default Annotate
