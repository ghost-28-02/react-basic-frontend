import React from "react";
import Template from "../components/Template";
import loginImg from "../assests/login.png"; // 

const Login = ({setIsLoggedIn}) => {
  return (
    <Template
      title="Welcome Back"
      description={
        <>
          Build skills for today, tomorrow, and beyond. <br />
          <span className="italic text-secondary font-medium">
            Education to future-proof your career.
          </span>
        </>
      }
      image={loginImg}
      formType="login"
      setIsLoggedIn = {setIsLoggedIn}
    />
  );
};

export default Login;