import { List} from "antd";
import { useState} from "react";
import {Link} from "react-router-dom";


const ListSettings = () => {


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
      dataSource={data}
      renderItem={item => (
        <List.Item aria-orientation="left">
          {/* <Typography.Text mark></Typography.Text><Link to="#">{item}</Link> */}

                <Link to={item.path}>{item.name}</Link>

        </List.Item>
      )}
    />


        </>

    )
}

export default ListSettings