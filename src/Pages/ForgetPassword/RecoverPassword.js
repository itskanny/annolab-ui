import {Col, Row,} from "antd";
import RecoverPasswordForm from "../../Components/Forms/ForgetPassword/RecoverPasswordForm";

import Banner from "../../Components/Ui/Banner/Banner";


const RecoverPassword = props => {

    return (
        <>
            <Row align={"middle"} className={'tw-p-4 tw-pt-8 md:tw-h-full  md:tw-flex-col lg:tw-flex-row tw-flex-col tw-justify-center tw-mx-2 sm:tw-mx-4 md:tw-mx-0 lg:tw-mx-20 xl:tw-mx-36 2xl:tw-mx-48'}>
                <Col span={24} md={16} className={'gutter-row tw-h-full'}>
                    <Banner
                        typeText={'Recover Password'}
                        actionDescription={'If you don`t have an account Registered'}
                        actionPrefix={'You can '}
                        actionText={'Sign Up'}
                        actionLink={''}
                    />
                </Col>
                <Col className={'gutter-row tw-mt-10 md:tw-mt-0'} span={24} md={8}>
                    <RecoverPasswordForm/>
                </Col>
            </Row>
        </>
    )
}

export default RecoverPassword