import {Col, Row} from "antd";

const Signup = props => {

    return (
        <>
            <Row>
                <Col span={12}>
                    <Row>
                        <Col span={12}>
                            Inner col 1
                        </Col>
                        <Col span={12}>
                            Inner col 2
                        </Col>
                    </Row>
                </Col>
                <Col span={12}>col-12</Col>
            </Row>
        </>
    )
}

export default Signup