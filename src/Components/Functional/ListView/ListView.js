import {Button, ConfigProvider, List, Result, Skeleton} from "antd";
import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import CustomizedEmpty from "../../../helpers/CustomizedEmpty";
import animationData from "../../../images/lotties/no-data.json";


const ListView = ({itemTemplate, render, fetcher}) => {

    const [data, setData] = useState([])
    const [result, setResult] = useState(null)
    const [loading, setLoading] = useState(false)

    const fetchData = () => {
        setLoading(true)
        fetcher()
            .then(data => {
                if (!data.hasErrors) {
                    setData(() => {
                        setLoading(false)
                        return data.data
                    })
                } else {
                    setResult({
                        errors: true,
                        status: data.status,
                        statusText: data.statusText,
                    })

                }

            })
    }

    useEffect(() => {
        fetchData()
    }, [render])

    return (
        <>
            <div
                className={'tw-pb-5 an-pagination-center'}
            >
                {result ? <Result
                        status={result.status}
                        title={result.status}
                        subTitle="Failed to retrieve"
                        extra={<Link className={'tw-flex tw-items-center tw-justify-center'} to={'/home'}><Button
                            type="primary">Back Home</Button></Link>}
                    />
                    :
                    <>
                        {(!data.length && loading) &&
                            <div className={'tw-grid tw-grid-cols-3 tw-gap-[25px]'}>
                                <Skeleton active avatar={false}/>
                                <Skeleton active avatar={false}/>
                                <Skeleton active avatar={false}/>
                                <Skeleton active avatar={false}/>
                                <Skeleton active avatar={false}/>
                                <Skeleton active avatar={false}/>
                            </div>
                        }
                        <ConfigProvider renderEmpty={() => (
                            <CustomizedEmpty
                                description={'No data found to be displayed'}
                                lottieAnimation={animationData}
                                height={205}
                                width={225}

                            />)}
                        >
                            <List
                                loading={loading}
                                pagination={{
                                    pageSize: 6,
                                }}
                                grid={{gutter: 25, column: 3}}
                                dataSource={data}
                                renderItem={item => (
                                    <List.Item>
                                        {React.cloneElement(itemTemplate, {item: item})}
                                    </List.Item>
                                )}
                            />
                        </ConfigProvider>
                    </>


                }
            </div>

        </>
    )

}

export default ListView