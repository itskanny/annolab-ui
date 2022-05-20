import {Button, Popover, Space} from "antd";
import {ArrowDown2} from "iconsax-react";
import {useState} from "react";
import {authStore} from "../../../store/AuthStore";
import DropdownList from "../DropdownList/DropdownList";


const OrganizationSelector = (props) => {

    const [selectedOrganization, setSelectedOrganization] = useState(authStore.user.organization.getOrganization)

    const changeOrganization = (id) => {
        if (id !== selectedOrganization.id) {
            authStore.setSelectedOrganizationId(id)
            setSelectedOrganization(() => {
                const org = props.data.find(obj => obj.id === id)
                props.setOrganization && props.setOrganization(org)
                return org
            })
            props.setLoading && props.setLoading(true)
        }


    }

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
        </>
    )
}

export default OrganizationSelector