import React from 'react'
import "./index.css"
import { Alert, Col, Row } from 'antd'
import Links from '../links'
const Screen = () => {
    const handleEmailClicked = () => {
        <Alert message="SUCCESS" type='success' />
    }
    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Chewy' rel='stylesheet'></link>
            <Row justify={'center'}>
                <Col span={10} style={{ marginRight: "25px" }}>
                    <h1 className='glow' style={{ marginTop: "20px" }}>
                        Website Coming Soon...
                    </h1>
                </Col>
            </Row>

            <Row style={{ margin: "0px 0px 0px 17px" }} gutter={[0, 0]}>
                <Links />
            </Row>
            <Row>
            </Row>
            <Row>
            </Row>
        </>
    )
}

export default Screen