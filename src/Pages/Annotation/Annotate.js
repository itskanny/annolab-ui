import ListCard from "../../Components/Functional/AnnotationLists/AnnotationImageList/ListCard";

const Annotate = ({proj}) => {


    return (
        <>
            <div className={'tw-flex tw-h-full tw-w-full'}>

                <div className={'tw-w-80 tw-mx-3 tw-my-5'}>

                    <ListCard proj={proj}/>
                </div>

                <div className="tw-bg-blue-600 tw-flex-1"><p>Holla</p></div>
            </div>

        </>
    )
}

export default Annotate
