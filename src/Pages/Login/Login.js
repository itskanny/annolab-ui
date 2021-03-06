import {Col, Row,} from "antd";

import LoginForm from "../../Components/Forms/Login/LoginForm";
import Banner from "../../Components/Ui/Banner/Banner";


const Login = props => {

    return (
        <>
            <Row align={"middle"} className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>
                <Col span={24} md={16} className={'gutter-row tw-h-full'}>
                    <Banner
                        typeText={'Sign In to'}
                        name={'AnnoLab'}
                        tagLine={'Dream Annotator'}
                        actionDescription={'If you don`t have an account then Register'}
                        actionPrefix={'You can '}
                        actionText={'Register Here!'}
                        actionLink={'/signup'}
                    />
                </Col>
                <Col className={'gutter-row tw-mt-10 md:tw-mt-0'} span={24} md={8} >
                    <LoginForm/>
                </Col>
            </Row>
        </>
    )
}

export default Login