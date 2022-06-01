import React from 'react';
import {Nav, Button, Image} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import inbox from './../../assets/icons/inbox.svg'
import send from './../../assets/icons/send.svg'
const Index = () => {
    return (
        <>
            <Nav defaultActiveKey="/home" className="flex-column">
                <Button variant="" className="text-start hover-btn rounded-3 py-2 ps-2" as={Link} to="/inbox">
                    <span className="pe-2">
                       {/*<AiOutlineInbox className="fs-5"/>*/}
                        <Image src={inbox} width={24}/>
                    </span>
                    Inbox
                </Button>
                <Button variant="" className="text-start hover-btn rounded-3 py-2 ps-2" as={Link} to="/inbox">
                    <span className="pe-2">
                       {/*<AiOutlineInbox className="fs-5"/>*/}
                        <Image src={send} width={24}/>
                    </span>
                    Send
                </Button>
                <Button variant="" className="text-start hover-btn rounded-3 py-2 ps-2" as={Link} to="/inbox">
                    <span className="pe-2">
                       {/*<AiOutlineInbox className="fs-5"/>*/}
                        <Image src={inbox} width={24}/>
                    </span>
                    Inbox
                </Button>
            </Nav>
        </>
    );
};

export default Index;