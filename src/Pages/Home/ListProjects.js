import {Avatar, Button, Divider, Input, List, Popover, Skeleton, Space} from "antd";
import {ArrowDown2} from "iconsax-react";
import {useEffect, useState} from "react";
import {authStore} from "../../store/AuthStore";
import DropdownList from "../../Components/Functional/DropdownList/DropdownList";
import {PlusOutlined} from "@ant-design/icons";
import {ProjectProvider} from "../../providers/ProjectProvider";
import {openNotification} from "../../helpers/helper";

const ListProjects = (props) => {

    const [selectedOrganization, setSelectedOrganization] = useState(authStore.user.organization.getOrganization)
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    const changeOrganization = (id) => {
        authStore.setSelectedOrganizationId(id)
        setSelectedOrganization(props.data.find(obj => obj.id === id))
        setLoading(true)
    }

    const fetchProjects = () => {
        ProjectProvider.fetchProjects()
            .then(data => {
                console.log(data)
                if (!data.hasErrors) {
                    setProjects(prevState => {
                        setLoading(false)
                        return data.data
                    })
                } else {
                    setProjects(prevState => {
                        setLoading(false)
                        return []
                    })
                    openNotification('error', 'Could not load projects')
                }
            })
    }

    useEffect(() => {
        fetchProjects()
    }, [selectedOrganization])

    const content = (
        <DropdownList data={props.data} handleChange={changeOrganization}/>
    );

    return (
        <>
            <div className={'tw-mb-5 tw-flex tw-w-full tw-justify-between tw-items-center'}>
                <p className={'tw-m-0 tw-font-semibold'}>Organization</p>
                <Popover className={'organization-select-dropdown'} title={'Organizations'}
                         trigger={'click'}
                         content={content}>

                    <Button>
                        {/* eslint-disable-next-line react/jsx-no-undef */}
                        <Space>
                            <p className={'tw-font-semibold tw-m-0'}>{selectedOrganization.name}</p>
                            <ArrowDown2 size={20}/>
                        </Space>
                    </Button>

                </Popover>
            </div>
            <Divider className={'tw-mb-5'}/>
            <Space className={'tw-flex tw-justify-between tw-w-full tw-mb-4'}>
                <p className={'tw-font-semibold tw-m-0'}>Organization Projects</p>
                <Button type="primary" shape={'circle'} icon={<PlusOutlined style={{color: 'white'}}/>}/>
            </Space>
            <div className={'tw-mb-5'}>
                <Input size={"middle"} placeholder={'Search Projects'}/>
            </div>


            {loading ?
                <div className={'list-skeleton'}>
                    <Skeleton avatar paragraph={{rows: 0}} active/>
                    <Divider className={'tw-m-0 tw-mb-2'}/>
                    <Skeleton avatar paragraph={{rows: 0}} active/>
                    <Divider/>
                    <Skeleton avatar paragraph={{rows: 0}} active/>
                </div>
                :
                <List
                    dataSource={projects}
                    renderItem={item => {
                        return (
                            <List.Item>
                                {/*<List.Item.Meta*/}
                                {/*    avatar={<Avatar src={item.avatar} />}*/}
                                {/*    title={`${selectedOrganization.name}/${item.name}`}*/}
                                {/*/>*/}
                                {/*onClick={e => props.handleChange(item.id)}*/}
                                {/*className={'tw-m-0 hover:tw-bg-item-hover tw-cursor-pointer'}*/}
                                {!loading && <div className={'tw-flex tw-items-center'}>
                                    <Avatar src={item.avatar}/>
                                    <p className={'tw-m-0 tw-ml-4 tw-text-gray-800 tw-cursor-pointer hover:tw-underline'}>{`${selectedOrganization.name}/${item.name}`}</p>
                                </div>}

                                {/*<Skeleton loading={loading} active avatar>*/}
                                {/*    <List.Item.Meta*/}
                                {/*        avatar={<Avatar src={item.avatar}/>}*/}

                                {/*    />*/}
                                {/*</Skeleton>*/}

                            </List.Item>
                        )
                    }}
                >

                </List>
            }


        </>

    )
}

export default ListProjects