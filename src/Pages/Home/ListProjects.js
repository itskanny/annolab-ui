import {Avatar, Button, Divider, Input, List, Popover, Space} from "antd";
import {Add, ArrowDown2} from "iconsax-react";
import {useState} from "react";
import {authStore} from "../../store/AuthStore";
import DropdownList from "../../Components/Functional/DropdownList/DropdownList";
import {PlusOutlined, SearchOutlined} from "@ant-design/icons";


const DUMMY_PROJECTS = [
    {
        "id": 36,
        "name": "Bilal's Project 1",
        "description": "An awesome project",
        "avatar": "http://localhost:8000/media/project_avatars/1_6.jpg",
        "organization": 42
    },
    {
        "id": 37,
        "name": "Team 1",
        "description": "sfsdfsdf",
        "avatar": "http://localhost:8000/media/project_avatars/1_8_bZSpEmJ.jpg",
        "organization": 42
    },
    {
        "id": 42,
        "name": "Team 2",
        "description": "dasdasdas",
        "avatar": "http://localhost:8000/media/project_avatars/1_8_usfv6oT.jpg",
        "organization": 42
    },
    {
        "id": 43,
        "name": "Team 4",
        "description": "dsadasdasd",
        "avatar": "http://localhost:8000/media/project_avatars/1_8_TTTWjwG.jpg",
        "organization": 42
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
            <Popover className={'organization-select-dropdown'} title={'Organizations'} trigger={'click'}
                     content={content}>
                <Button className={'tw-mb-5'}>
                    {/* eslint-disable-next-line react/jsx-no-undef */}
                    <Space>
                        <p className={'tw-font-semibold tw-m-0'}>{selectedOrganization.name}</p>
                        <ArrowDown2 size={20}/>
                    </Space>
                </Button>
            </Popover>
            <Divider className={'tw-mb-5'}/>
            <Space className={'tw-flex tw-justify-between tw-w-full tw-mb-4'}>
                <p className={'tw-font-semibold tw-m-0'}>Organization Projects</p>
                <Button type="primary" shape={'circle'} icon={<PlusOutlined style={{color: 'white'}}/>}/>
            </Space>
            <div className={'tw-mb-5'}>
                <Input size={"middle"}  placeholder={'Search Projects'}/>
            </div>
            <List
                dataSource={DUMMY_PROJECTS}
                renderItem={item => {
                    return (
                        <List.Item>
                            {/*<List.Item.Meta*/}
                            {/*    avatar={<Avatar src={item.avatar} />}*/}
                            {/*    title={`${selectedOrganization.name}/${item.name}`}*/}
                            {/*/>*/}
                            {/*onClick={e => props.handleChange(item.id)}*/}
                            {/*className={'tw-m-0 hover:tw-bg-item-hover tw-cursor-pointer'}*/}
                            <div className={'tw-flex tw-items-center'}>
                                <Avatar src={item.avatar}/>
                                <p className={'tw-m-0 tw-ml-4 tw-text-gray-800 tw-cursor-pointer hover:tw-underline'}>{`${selectedOrganization.name}/${item.name}`}</p>
                            </div>

                        </List.Item>
                    )
                }}
            >

            </List>

        </>

    )
}

export default ListProjects