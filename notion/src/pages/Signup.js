import React from "react";
import Template from "../components/Template";
import signupImg from "../assests/signup.png"; // don’t forget this import

const Signup = ({setIsLoggedIn}) => {
  return (
    <Template
      title={
        <>
          Join the millions learning to code with{" "}
          <span className="text-secondary">StudyMotion</span> for free
        </>
      }
      description={
        <>
          Build skills for today, tomorrow, and beyond. <br />
          <span className="italic text-secondary font-medium">
            Education to future-proof your career.
          </span>
        </>
      }
      image={signupImg}

      formType="signup"
      setIsLoggedIn={setIsLoggedIn}
    />
  );
};

export default Signup;