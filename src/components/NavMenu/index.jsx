import React from "react";
import { Nav, Button, Image } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import inbox from "./../../assets/icons/inbox.svg";
import send from "./../../assets/icons/send.svg";
import draft from "./../../assets/icons/draft.svg";
import newMessage from "./../../assets/icons/new-message.svg";
const Index = () => {
  return (
    <>
      <Nav
        defaultActiveKey="/dashboard"
        className="flex-column border-md-end"
      >
        <Button
          variant=""
          className={`text-start hover-btn rounded-3 py-2 ps-2 shadow-none`}
          as={NavLink}
          to="/dashboard/new"
        >
          <span className="pe-2">
            {/*<AiOutlineInbox className="fs-5"/>*/}
            <Image src={newMessage} width={24} />
          </span>
          Написать
        </Button>
        <Button
          variant=""
          className="text-start hover-btn rounded-3 py-2 ps-2 shadow-none"
          as={NavLink}
          to="/dashboard/inbox"
        >
          <span className="pe-2">
            {/*<AiOutlineInbox className="fs-5"/>*/}
            <Image src={inbox} width={24} />
          </span>
          Входящие
        </Button>
        <Button
          variant=""
          className="text-start hover-btn rounded-3 py-2 ps-2 shadow-none"
          as={NavLink}
          to="/dashboard/sent"
        >
          <span className="pe-2">
            {/*<AiOutlineInbox className="fs-5"/>*/}
            <Image src={send} width={24} />
          </span>
          Отправленные
        </Button>
        <Button
          variant=""
          className="text-start hover-btn rounded-3 py-2 ps-2 shadow-none"
          as={NavLink}
          to="/dashboard/drafts"
        >
          <span className="pe-2">
            {/*<AiOutlineInbox className="fs-5"/>*/}
            <Image src={draft} width={24} />
          </span>
          Черновики
        </Button>
      </Nav>
    </>
  );
};

export default Index;
