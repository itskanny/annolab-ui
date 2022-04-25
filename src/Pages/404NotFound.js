import { Result, Button } from 'antd';
import {Link} from "react-router-dom";



const PageNotFound = () => {
    return <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={<Link className={'tw-flex tw-items-center tw-justify-center'} to={'/home'}><Button type="primary" size={'large'} >Back Home</Button></Link>}
    />
}

export default PageNotFound