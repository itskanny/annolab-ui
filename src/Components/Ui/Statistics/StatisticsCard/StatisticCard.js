import React from "react";

const StatisticCard = ({title, text}) => {


    return (
        <>
            <div className={'tw-flex tw-justify-between tw-items-center tw-shadow-card-shadow tw-px-4 tw-py-4 an-border-radius'}>
                <h5 className={'tw-flex-1'}>{title}</h5>
                <div className={'tw-ml-6 tw-mr-3 tw-border-l tw-h-full tw-border-border-color '}/>
                <h5>{text}</h5>
            </div>
        </>
    )
}

export default StatisticCard