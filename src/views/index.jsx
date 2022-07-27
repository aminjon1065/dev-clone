import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
const Index = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("__token");
  useEffect(() => {
    if (!token) {
      navigate("/sign-in");
    }

  });

  return (
    <div>
      Main
      <Button variant="apple-red">
        <Link to="/sign-in">Sign In</Link>
      </Button>
      <Button variant="apple-green">
        <Link to="/dashboard">Dashboard</Link>
      </Button>
    </div>
  );
};

export default Index;
