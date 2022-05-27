import { List} from "antd";
import { useState} from "react";
import {Link} from "react-router-dom";


const ListSettings = (props) => {

    const [loading, setLoading] = useState(true)

    const data = [
        {
        name:'Public Profile',
        path:'/settings/profile'
    },
    {
        name:'Organizations Profile',
        path:'/settings/org'
    }
      ];



    return (
        <>

{/* <Divider orientation="left"></Divider> */}
    <List
    //   header={<div>Header</div>}
    //   footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={item => (
        <List.Item aria-orientation="left">
          {/* <Typography.Text mark></Typography.Text><Link to="#">{item}</Link> */}
            <ul>
                <li><Link to={item.path}>{item.name}</Link></li>
            </ul>
        </List.Item>
      )}
    />


        </>

    )
}

export default ListSettings