import {Col, Row,} from "antd";

import SignupForm from "../../Components/Forms/SignupForm/SignupForm";
import Banner from "../../Components/Ui/Banner/Banner";

const Signup = props => {

    return (
        <>
            <Row align={"middle"} className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>
                <Col span={24} md={16} className={'gutter-row tw-h-full'}>
                    <Banner
                        typeText={'Sign Up to'}
                        name={'AnnoLab'}
                        tagLine={'Dream Annotator'}
                        actionDescription={'If you already have an account'}
                        actionPrefix={'You can '}
                        actionText={'Login Here!'}
                        actionLink={'/login'}
                    />
                </Col>
                <Col className={'gutter-row tw-mt-10 md:tw-mt-0'} span={24} md={8}>
                    <SignupForm/>
                </Col>
            </Row>
        </>
    )
}

export default Signup