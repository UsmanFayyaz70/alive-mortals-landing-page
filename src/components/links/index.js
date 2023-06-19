import { Button, Col, Tooltip, message } from 'antd'
import { BsTwitter, BsFillPersonFill } from 'react-icons/bs'
import { RxDiscordLogo } from 'react-icons/rx'
import { MdOutlineAlternateEmail } from 'react-icons/md'

import React from 'react'

import './index.css'

const Links = () => {
    const [messageApi, contextHolder] = message.useMessage();
    return (
        <>
            {contextHolder}
            <Col span={24}>
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
            <Col span={24} >
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
            <Col span={24} >
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
        </>
    )
}

export default Links