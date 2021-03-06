import React, { useState } from "react";
import logo from "./../../../assets/images/logo.png";
import { Container, FloatingLabel, Image, Form, Button } from "react-bootstrap";
import { BiLogIn } from "react-icons/bi";
import { SignInServices } from "../../../services/signIn.services";
import { useNavigate } from "react-router-dom";
import Toast from "../../../components/ToastAuth";
import ButtonLoader from "../../../components/loaders/buttonLoader";

const Index = () => {
  const navigate = useNavigate();
  const [errorsAuth, setErrorsAuth] = useState("");
  const [loader, setLoader] = useState(false);
  const [credintials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const emailChange = (e) => {
    setCredentials({ ...credintials, email: e.target.value });
  };

  const passwordChange = (e) => {
    setCredentials({ ...credintials, password: e.target.value });
  };
  const AuthUser = async () => {
    setLoader(true);
    SignInServices(credintials)
      .then((res) => {
        if (res.status === 201) {
          localStorage.setItem("__token", res.data.token);
          navigate("/dashboard", { state: true });
          console.clear();
          setLoader(false);
        }
      })
      .catch((err) => {
        setErrorsAuth(err);
        setLoader(false);
      });
  };
  return (
    <>
      {errorsAuth ? <Toast setErrorsAuth={setErrorsAuth} /> : null}

      <Container className="vh-100 d-flex justify-content-center align-items-center">
        <Container className="sign-in-container col-sm-12 col-md-6 col-lg-5 col-xl-4">
          <Image src={logo} className="mx-auto d-block mb-2" width={96} />
          <FloatingLabel
            controlId="floatingInput"
            label="Email адрес"
            className="mb-3"
          >
            <Form.Control
              type="email"
              placeholder="name@example.com"
              value={credintials.email}
              onChange={emailChange}
              className="sign-in-input shadow-sm"
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingPassword" label="Пароль">
            <Form.Control
              type="password"
              placeholder="********"
              value={credintials.password}
              onChange={passwordChange}
              className="sign-in-input shadow-sm"
            />
          </FloatingLabel>
          <Button
            size="lg"
            className="w-100 mt-3 text-apple-milk shadow-none"
            variant="apple-cyan"
            onClick={AuthUser}
          >
            {loader ? (
              <ButtonLoader />
            ) : (
              <>
                <span className="me-1">
                  <BiLogIn />
                </span>
                Войти
              </>
            )}
          </Button>
        </Container>
      </Container>
    </>
  );
};

export default Index;
