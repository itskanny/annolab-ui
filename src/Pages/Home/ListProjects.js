import {Button, Divider, Input, List, Popover, Space} from "antd";
import {Add, ArrowDown2} from "iconsax-react";
import {useState} from "react";
import {authStore} from "../../store/AuthStore";
import DropdownList from "../../Components/Functional/DropdownList/DropdownList";
import {PlusOutlined, SearchOutlined} from "@ant-design/icons";


const DUMMY_PROJECTS = [
    {

    }
]


const ListProjects = (props) => {

    const [selectedOrganization, setSelectedOrganization] = useState(authStore.user.organization.getOrganization)

    const changeOrganization = (id) => {
        setSelectedOrganization(props.data.find(obj => obj.id === id))
    }

    const content = (
        <DropdownList data={props.data} handleChange={changeOrganization}/>
    );

    return (
        <>
            <Popover className={'organization-select-dropdown'} title={'Organizations'} trigger={'click'} content={content}>
                <Button className={'tw-mb-5'}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Space>
                        {selectedOrganization.name}
                        <ArrowDown2 size={20}/>
                    </Space>
                </Button>
            </Popover>
            <Divider className={'tw-mb-5'}/>
            <Space className={'tw-flex tw-justify-between tw-w-full tw-mb-4'}>
                Organization Projects
                <Button type="primary" shape={'circle'} icon={<PlusOutlined style={{color: 'white'}}/>}>
                </Button>
            </Space>
            <Input size={"middle"} placeholder={'Search Projects'}/>
            <List
                // dataSource={}
            >

            </List>

        </>

    )
}

export default ListProjects