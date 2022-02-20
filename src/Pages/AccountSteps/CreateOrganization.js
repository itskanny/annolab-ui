import {Col, Row,} from "antd";
import CreateOrganizationForm from "../../Components/Forms/AccountSteps/CreateOrganizationForm";
import Banner from "../../Components/Ui/Banner/Banner";


const CreateOrganization = props => {

    return (
        <>
            <Row align={"middle"} className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>
                <Col span={24} md={16} className={'gutter-row tw-h-full'}>
                    <Banner
                        typeText={'Just A Little Further'}
                        name={'AnnoLab'}
                        tagLine={'Dream Annotator'}
                        stepperText={'Complete Setup by completing following actions'}
                        stepperDescription={'Create your organization and own it'}
                        actionLink={''}
                    />
                </Col>
                <Col className={'gutter-row tw-mt-10 md:tw-mt-0'} span={24} md={8}>
                    <CreateOrganizationForm/>
                </Col>
            </Row>
        </>
    )
}

export default CreateOrganization