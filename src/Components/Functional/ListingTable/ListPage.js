import ListingTable from "./ListingTable";
import React from "react";
import AnnolabPageHeader from "../../Ui/PageHeader/PageHeader";
import StatisticsHolder from "../../Ui/Statistics/StatisticsHolder";
import ListingHeader from "./ListingHeader";
import AnnolabDivider from "../../Ui/AnnolabDivider/AnnolabDivider";
import ListView from "../ListView/ListView";


const ListPage = ({item, headerTag, headerTagText, headerExtras, statistics, headerType, headerButtonHandler, render, viewType, loading, columns, fetcher, itemTemplate, showListViewIcon, listViewIconHandler, showTableViewIcon, tableViewIconHandler}) => {


    return (
        <>
            <div className={'tw-mx-4 lg:tw-mx-8 xl:tw-mx-12 2xl:tw-mx-16 tw-my-5'}>
                {/*<Col className={"gutter-row tw-mt-10 md:tw-mt-0"} span={24} md={24}>*/}
                <AnnolabPageHeader
                    item={item}
                    tag={headerTag}
                    tagText={headerTagText}
                    extras={[
                        ...headerExtras
                    ]}
                />

                <div className={'tw-mx-10 tw-mt-5'}>
                    <StatisticsHolder statistics={statistics}/>
                    <div className={'tw-mx-4 '}>
                        <ListingHeader text={headerType} buttonHandler={headerButtonHandler} listViewIconHandler={listViewIconHandler} showListViewIcon={showListViewIcon} showTableViewIcon={showTableViewIcon} tableViewIconHandler={tableViewIconHandler} viewType={viewType}/>
                        {/*<div className={'tw-flex tw-w-full tw-justify-between tw-mb-5'}>*/}
                        {/*    <p className={'tw-font-semibold tw-text-base tw-t tw-mb-0'}>{props.tableType}</p>*/}


                        {/*    <Button onClick={props.buttonHandler} type={"primary"}>{props.buttonText}</Button>*/}
                        {/*</div>*/}
                        <AnnolabDivider/>

                        {(!viewType || viewType === 'table') &&
                            <ListingTable loading={loading} render={render} columns={columns}
                                          fetcher={fetcher}/>
                        }

                        {viewType === 'list' &&
                            <ListView
                                render={render}
                                fetcher={fetcher}
                                // itemTemplate={<ImageListCard setEditVisible={setEditVisible}/>}
                                itemTemplate={itemTemplate}
                            />
                        }



                    </div>

                </div>
            </div>
        </>
    )
}

export default ListPage