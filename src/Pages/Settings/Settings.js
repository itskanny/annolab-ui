import {Button, Card, Col, Row} from "antd";
import PublicProfile from "../../Components/Forms/SettingsForm/PublicProfile";
import ListSettings from "./ListSettings";
import Organization from "../../Components/Forms/SettingsForm/Organization";




const Settings = props => {

    return (
        <>
            <Row align={"top"} justify={"center"}
                 className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-6 lg:tw-mx-12 xl:tw-mx-20 2xl:tw-mx-28 tw-justify-center'}

            >
                <Col span={24} md={8} className={'tw-pr-3'}>
                    <Card >
                        <ListSettings></ListSettings>
                    </Card>
                </Col>
                <Col span={0} md={12} className={'tw-pl-3'}>
                    <Card
                        title={'Settings'}

                    >
                        <div >
                            <div className={'tw-w-full tw-justify-start'}>
                                <Organization></Organization>
                            </div>

                        </div>
                    </Card>
                </Col>
            </Row>
        </>
    )
}

export default Settings