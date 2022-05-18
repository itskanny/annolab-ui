import {Avatar, Button, Divider, Input, List,Typography, Popover, Skeleton, Space} from "antd";
import {ArrowDown2} from "iconsax-react";
import {useEffect, useState} from "react";
import {authStore} from "../../store/AuthStore";
import DropdownList from "../../Components/Functional/DropdownList/DropdownList";
import {PlusOutlined} from "@ant-design/icons";
import {ProjectProvider} from "../../providers/ProjectProvider";
import {openNotification} from "../../helpers/helper";
import {Link} from "react-router-dom";


const ListSettings = (props) => {

    const [loading, setLoading] = useState(true)

    const data = [
        'Public Profile',
        'Account',
        'Home',
        'Projects',
        'Annotations',
        'Organizations',
        'Log Out',
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
                <li><Typography.Text mark></Typography.Text><Link to="#">{item}</Link></li>
            </ul>
        </List.Item>
      )}
    />


        </>

    )
}

export default ListSettings