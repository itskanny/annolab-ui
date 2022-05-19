import DataTable from "./DataTable";
import {useEffect, useState} from "react";
import {Button, Result} from "antd";
import {Link} from "react-router-dom";

const ListingTable = props => {


    const [loading, setLoading] = useState(false)
    const [data, setData] = useState([])
    const [result, setResult] = useState(null)


    const fetchData = () => {
        setLoading(true)
        props.fetcher()
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
    },[])

    return (
        <>
            {result ? <Result
                    status={result.status}
                    title={result.status}
                    subTitle="Failed to retrieve"
                    extra={<Link className={'tw-flex tw-items-center tw-justify-center'} to={'/home'}><Button type="primary">Back Home</Button></Link>}
                />
                :
                <DataTable columns={props.columns} data={data} loading={loading}/>

            }
        </>
    )

}

export default ListingTable