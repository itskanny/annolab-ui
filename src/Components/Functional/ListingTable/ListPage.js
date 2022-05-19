import {Button, Card, Col, Divider, Row} from "antd";
import ListingTable from "./ListingTable";
import React from "react";


const ListPage = props => {

    return (
        <>
            <Row align={"middle"}
                 className={'tw-p-4 tw-pt-4  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>
                <Col className={"gutter-row tw-mt-10 md:tw-mt-0"} span={24} md={24}>


                    <Card title={props.title}>
                        <div className={'tw-flex tw-w-full tw-justify-between tw-mb-5'}>
                            <p className={'tw-font-semibold tw-text-xl tw-mb-0'}>{props.tableType}</p>


                            <Button type={"primary"}>{props.buttonText}</Button>
                        </div>
                        <Divider className={'tw-mb-5'}/>
                        <ListingTable columns={props.columns} fetcher={props.fetcher}/>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default ListPage