import {Button, Card, Col, Row} from "antd";
import {authStore} from "../../store/AuthStore";
import ObservedUserLoader from "../../helpers/UserLoader";
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
                <Col span={24} md={8} className={'tw-pr-3'}>
                    <Card >
                        <ListProjects data={DUMMY_DATA}/>
                    </Card>
                </Col>
                <Col span={0} md={16} className={'tw-pl-3'}>
                    <Card
                        title={'Annolab'}

                    >
                        <div >
                            <p className={'tw-text-xl tw-font-semibold'}>Its a lot easier when done together</p>
                            <p className={'tw-text-base'}>
                                Anno-Lab is the solution to your complex pictures data set and It
                                provides solution to annotate images with accuracy. It helps you get work done fast by allowing you to work
                                with your teams and team members on the same dataset.
                            </p>
                            <div className={'tw-w-full tw-flex tw-justify-start'}>
                                <Button className={'tw-mr-7'}>Add Project</Button>
                                <Button>Read Guide</Button>
                            </div>

                        </div>
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