import React from "react";

const ImageTag = ({isAnnotated, floating, textWhite}) => {

    return (
        <>
            {isAnnotated ?
                <div
                    className={`tw-rounded-[5px] ${textWhite? `tw-text-white` : 'tw-text-primary'} ${floating ? 'tw-bg-primary/80' : 'tw-bg-primary/10' } tw-border tw-border-primary tw-px-2 tw-py-0`}>
                    Annotated
                </div>
                :
                <div className={`tw-rounded-[5px] ${textWhite? `tw-text-white` : 'tw-text-amber'}  ${floating ? 'tw-bg-amber/80' : 'tw-bg-amber/10' } tw-border tw-border-amber tw-px-2 tw-py-0`}>
                    Not Annotated
                </div>
            }
        </>
    )

}

export default ImageTag