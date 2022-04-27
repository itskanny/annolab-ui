import {Button, Card, Col, Dropdown, List, Menu, Popover, Row, Space} from "antd";
import {authStore} from "../../store/AuthStore";
import {useState} from "react";
import {ArrowDown2} from "iconsax-react";
import ObservedUserLoader from "../../helpers/UserLoader";
import {Option} from "antd/es/mentions";
import DropdownList from "../../Components/Functional/DropdownList/DropdownList";
import ListProjects from "./ListProjects";



const Home = props => {
    const DUMMY_DATA = [

        {
            ...authStore.user.organization.getOrganization
        },
        {
            name: 'tesds',
            id: '43',
        },
        {
            name: 'tesasdsd',
            id: '44',
        }

    ]


    return (
        <>
            <Row align={"top"} justify={"center"}
                 className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-6 lg:tw-mx-12 xl:tw-mx-20 2xl:tw-mx-28 tw-justify-center'}

            >
                <Col span={24} md={8}>
                    <Card >
                        <ListProjects data={DUMMY_DATA}/>
                    </Card>
                </Col>
                <Col span={0} md={16} className={'tw-pl-3'}>
                    <Card title={'Annolab'}>

                    </Card>
                </Col>
            </Row>
        </>
    )
}


const HomePage = props => {

    return (
        <ObservedUserLoader auth={authStore} node={<Home/>}/>
    )
}
export default HomePage