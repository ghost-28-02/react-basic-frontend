import React from 'react'
import { useNavigate } from 'react-router-dom'

const Support = () => {

  const navigate = useNavigate();

  function clickHandler(){
    navigate(-1);
  }
  return (
    <>
      <div>Support</div>
      <button onClick={clickHandler}>Go Back</button>
    </>
  )
}

export default Support
