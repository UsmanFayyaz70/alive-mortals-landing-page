import React from 'react'
import "./index.css"
import { Button, Tooltip, message } from 'antd'
import { BsTwitter, BsFillPersonFill } from 'react-icons/bs'
import { RxDiscordLogo } from 'react-icons/rx'
import { MdOutlineAlternateEmail } from 'react-icons/md'

import { Alert, Col, Row } from 'antd'
import Links from '../links'
const Screen = () => {
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <>
            <link
                href='https://fonts.googleapis.com/css?family=Chewy'
                rel='stylesheet'
            ></link>
            <Row justify={'center'}>
                <Col span={11}>
                    <Row justify={'end'}>
                        <Col span={19}>
                            <h1
                                className='glow'
                                style={{ marginTop: "20px" }}
                            >
                                Website Coming Soon...
                            </h1>
                        </Col>
                    </Row>
                </Col>
            </Row >

            <Row style={{ margin: "0px 0px 0px 17px" }} gutter={[0, 0]}>
                {contextHolder}
                <Col span={13}>
                    <Tooltip placement='right' title="Twitter">
                        <Button
                            className='link-btn'
                            type='link'
                            href='https://twitter.com/MortalitiesClub'
                            target='_blank'
                            // style={{ height: "100px", width: "120px" }}
                            size='medium'
                            icon={<BsTwitter size={25} />}
                            ghost
                        />
                    </Tooltip>
                </Col>
                <Col span={13} >
                    <Tooltip placement='right' title="Discord">
                        <Button
                            className='link-btn'
                            href='https://discord.gg/mD2wByEQ'
                            target='_blank'
                            type='link'
                            size='medium'
                            icon={<RxDiscordLogo size={25} />}
                            ghost
                        />
                    </Tooltip>
                </Col>
                <Col span={13} >
                    <Tooltip placement='right' title="Founder">
                        <Button
                            className='link-btn'
                            type='link'
                            href='https://twitter.com/Nawaf_Aslam'
                            target='_blank'
                            size='medium'
                            icon={<BsFillPersonFill size={25} />}
                            ghost
                        />
                    </Tooltip>
                </Col>
                <Col span={13} >
                    <Tooltip placement='right' title="nft@alivemortals.club">
                        <Button
                            className='link-btn'
                            type='link'
                            size='medium'
                            icon={<MdOutlineAlternateEmail size={25} />}
                            ghost
                            onClick={() => {
                                navigator.clipboard.writeText("nft@alivemortals.club")
                                messageApi.open({
                                    content: 'Email has been copied to clipboard!',
                                    duration: 2,
                                    type: 'success'
                                });
                            }}
                        // return alert("Email has been copied to clipboard")
                        />
                    </Tooltip>
                </Col>
            </Row>
            <Row>
            </Row>
            <Row>
            </Row>
        </>
    )
}

export default Screen