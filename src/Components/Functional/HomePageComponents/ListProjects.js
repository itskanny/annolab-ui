import {Button, Divider, Popover, Space} from "antd";
import {ArrowDown2} from "iconsax-react";
import {useEffect, useState} from "react";
import {authStore} from "../../../store/AuthStore";
import DropdownList from "../DropdownList/DropdownList";
import {PlusOutlined} from "@ant-design/icons";
import {ProjectProvider} from "../../../providers/ProjectProvider";
import {openNotification} from "../../../helpers/helper";
import ProjectsList from "./ProjectsList";

const ListProjects = (props) => {

    const [selectedOrganization, setSelectedOrganization] = useState(authStore.user.organization.getOrganization)
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

    const changeOrganization = (id) => {
        if (id !== selectedOrganization.id) {
            authStore.setSelectedOrganizationId(id)
            setSelectedOrganization(props.data.find(obj => obj.id === id))
            setLoading(true)
        }


    }

    const fetchProjects = () => {
        ProjectProvider.fetchProjects()
            .then(data => {
                if (!data.hasErrors) {
                    setProjects(() => {
                        setLoading(false)
                        return data.data.slice(0,props.listSize ? props.listSize : data.data.length)
                    })
                } else {
                    setProjects(() => {
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
                <Popover
                    className={'organization-select-dropdown'} title={'Organizations'}
                    trigger={'click'}
                    content={content}

                >

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


            <ProjectsList data={projects} loading={loading} obj={selectedOrganization}/>

        </>

    )
}

export default ListProjects