import ImageTag from "./ImageTag";
import React from "react";


const FloatingImageTag = ({is_annotated}) => {

    return (
        <>
            <div className={'tw-absolute tw-left-2 tw-top-3 '}>
                <ImageTag isAnnotated={is_annotated} opacity={80} textWhite={true}/>
            </div>
        </>
    )
}

export default FloatingImageTag