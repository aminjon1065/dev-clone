import React from 'react';
import {Nav, Button, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {AiOutlineInbox} from 'react-icons/ai'
import inbox from './../../assets/icons/inbox.svg'
import send from './../../assets/icons/send.svg'
const Index = () => {
    return (
        <>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Link variant="" className="text-start hover-btn rounded-3 py-2 ps-2" as={Button} to="/inbox">
                    <span className="pe-2">
                       {/*<AiOutlineInbox className="fs-5"/>*/}
                        <Image src={inbox} width={24}/>
                    </span>
                    Inbox
                </Link>
                <Link variant="" className="text-start hover-btn rounded-3 py-2 ps-2" as={Button} to="/inbox">
                    <span className="pe-2">
                       {/*<AiOutlineInbox className="fs-5"/>*/}
                        <Image src={send} width={24}/>
                    </span>
                    Send
                </Link>
                <Link variant="" className="text-start hover-btn rounded-3 py-2 ps-2" as={Button} to="/inbox">
                    <span className="pe-2">
                       {/*<AiOutlineInbox className="fs-5"/>*/}
                        <Image src={inbox} width={24}/>
                    </span>
                    Inbox
                </Link>
            </Nav>
        </>
    );
};

export default Index;