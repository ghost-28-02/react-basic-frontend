import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {

  const navigate = useNavigate();

  function clickHandler(){
    navigate("/")
  }
  return (
    <>
      <div>About</div>
      <button onClick={clickHandler}>Move to Home</button>
    </>
  )
}

export default About;
