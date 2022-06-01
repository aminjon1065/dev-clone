import React from "react";
import { Routes, Route } from "react-router-dom";
import Inbox from "../../views/Dashboard/Mails/Inbox";
import Main from "../../views/Dashboard/Main";
import NotFound from "./../../views/NotFound/";
const Index = () => {
  return (
    <Routes>
      <Route path={"/"} element={<Main />} />
      <Route path={"/inbox"} element={<Inbox />} />
      <Route path={"*"} element={<NotFound />} />
    </Routes>
  );
};

export default Index;
