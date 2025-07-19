import React from 'react';
import dices from "../assets/photo/dices 1.png"
import { Navigate, useNavigate, useNavigation } from 'react-router-dom';

const Hero = ({toggle}) => {
    const navigate = useNavigate();

const navigateToGame=()=>{
navigate("/game")
}
    
     
 
  return (
    <>
    <div className="main p-auto flex justify-center align-center h-screen">
    <div className='text-3xl'>
        <img className='pr-4' src={dices} alt="" />
    </div>
    <div className="title gap-2  flex flex-col justify-center align-middle ">
      <h1 className='text-7xl '>DICE GAME</h1>
      <button onClick={navigateToGame} className=' border-1 p-3 w-28 text-white bg-black hover:bg-gray-800 hover:cursor-pointer  '>PLAY NOW</button>
    </div>
    </div>
    </>
  )
}

export default Hero