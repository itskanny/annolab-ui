import {ConfigProvider, Table} from "antd";
import React from "react";
import CustomizedEmpty from "../../../helpers/CustomizedEmpty";
import animationData from "../../../images/lotties/no-data.json";

const DataTable = (props) => {

    return (
        <>
            <ConfigProvider renderEmpty={() => (
                <CustomizedEmpty
                    description={'No data found to be displayed'}
                    lottieAnimation={animationData}
                    height={205}
                    width={225}

                />)}
            >
                <Table
                    columns={props.columns}
                    dataSource={props.data}
                    rowKey="id"
                    bordered
                    loading={props.loading}

                />
            </ConfigProvider>
        </>
    )
}

export default DataTable