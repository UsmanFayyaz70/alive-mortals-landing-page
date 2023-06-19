import React from 'react'
import "./index.css"
import { Alert, Button, Col, Row, Tooltip } from 'antd'
import { BsTwitter, BsFillPersonFill } from 'react-icons/bs'
import { RxDiscordLogo } from 'react-icons/rx'
import { MdOutlineAlternateEmail } from 'react-icons/md'
const Screen = () => {
    const handleEmailClicked = () => {
        <Alert message="SUCCESS" type='success' />
    }
    return (
        <>
            <link href='https://fonts.googleapis.com/css?family=Chewy' rel='stylesheet'></link>
            <Row justify={'center'}>
                <Col span={10} style={{ marginRight: "60px" }}>
                    <h1 className='glow' style={{ marginTop: "21px" }}>
                        Website Coming Soon...
                    </h1>
                </Col>
            </Row>
            <Row style={{ margin: "59px 0px 0px 17px" }} gutter={[0, 0]}>
                <Col span={24}>
                    <Tooltip placement='right' title="Twitter">
                        <Button
                            className='link-btn'
                            type='link'
                            // style={{ height: "100px", width: "120px" }}
                            size='medium'
                            icon={<BsTwitter size={25} />}
                            ghost
                        />
                    </Tooltip>
                </Col>
                <Col span={24} >
                    <Tooltip placement='right' title="Discord">
                        <Button
                            className='link-btn'
                            type='link'
                            size='medium'
                            icon={<RxDiscordLogo size={25} />}
                            ghost
                        />
                    </Tooltip>
                </Col>
                <Col span={24} >
                    <Tooltip placement='right' title="Founder">
                        <Button
                            className='link-btn'
                            type='link'
                            // style={{ color: "black" }}
                            size='medium'
                            icon={<BsFillPersonFill size={25} />}
                            ghost
                        />
                    </Tooltip>
                </Col>
                <Col span={24} >
                    <Tooltip placement='right' title="nft@alivemortals.club">
                        <Button
                            className='link-btn'
                            type='link'
                            size='medium'
                            icon={<MdOutlineAlternateEmail size={25} />}
                            ghost
                            onClick={() => {
                                navigator.clipboard.writeText("nft@alivemortals.club")
                                return alert("Email has been copied to clipboard")
                            }}
                        />
                    </Tooltip>
                </Col>
            </Row>
            <Row style={{ marginLeft: "20px" }}>


            </Row>
            <Row style={{ marginLeft: "20px" }}>

            </Row>
            <Row style={{ marginLeft: "20px" }}>

            </Row>
        </>
    )
}

export default Screen