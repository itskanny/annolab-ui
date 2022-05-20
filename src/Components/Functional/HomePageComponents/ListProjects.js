import {Button, Divider, Popover, Space} from "antd";
import {ArrowDown2} from "iconsax-react";
import {useEffect, useState} from "react";
import {authStore} from "../../../store/AuthStore";
import DropdownList from "../DropdownList/DropdownList";
import {PlusOutlined} from "@ant-design/icons";
import {ProjectProvider} from "../../../providers/ProjectProvider";
import {openNotification} from "../../../helpers/helper";
import ProjectsList from "./ProjectsList";
import OrganizationSelector from "../OrganizationSelector/OrganizationSelector";

const ListProjects = (props) => {

    const [selectedOrganization, setSelectedOrganization] = useState(authStore.user.organization.getOrganization)
    const [projects, setProjects] = useState([])
    const [loading, setLoading] = useState(true)

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


    return (
        <>
            <OrganizationSelector data={props.data} setOrganization={setSelectedOrganization} setLoading={setLoading}/>
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