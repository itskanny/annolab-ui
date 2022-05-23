import React from "react";

const ImageTag = ({isAnnotated, opacity, textWhite}) => {

    return (
        <>
            {isAnnotated ?
                <div
                    className={`tw-rounded-[5px] ${textWhite? `tw-text-white` : 'tw-text-primary'} tw-bg-primary/${opacity} tw-border tw-border-primary tw-px-2 tw-py-0`}>
                    Annotated
                </div>
                :
                <div className={`tw-rounded-[5px] ${textWhite? `tw-text-white` : 'tw-text-amber'}  tw-bg-amber/${opacity ? opacity : '10'} tw-border tw-border-amber tw-px-2 tw-py-0`}>
                    Not Annotated
                </div>
            }
        </>
    )

}

export default ImageTag