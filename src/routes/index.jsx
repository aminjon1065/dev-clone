import React from "react";
import { Routes, Route } from "react-router-dom";
import SignIn from "../views/Auth/SignIn";
import SignUp from "../views/Auth/SignUp";
import Views from "../views";
import Dashboard from "../views/Dashboard";
import NotFound from "../views/NotFound";

const Index = () => {
  return (
    <>
      <div className={"bg-gray-bg vh-100"}>
        <Routes>
          <Route path="/" element={<Views/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path={"*"} element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
};

export default Index;
