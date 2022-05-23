import StatisticCard from "./StatisticsCard/StatisticCard";
import React from "react";


const StatisticsHolder = ({statistics}) => {

    return (
        <>
            <div className={'tw-my-10 tw-grid tw-gap-4 tw-grid-cols-3'}>
                {statistics.map(statistic => <StatisticCard key={`${statistic.title}-${Math.random()}${Math.random()} `} title={statistic.title} text={statistic.text}/>)}
            </div>
        </>
    )
}

export default StatisticsHolder