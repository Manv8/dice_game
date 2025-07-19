import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const GamePage = () => {

  const [selectedNumber, setSelectedNumber] = useState();
  const [showAlert, setShowAlert] = useState("")
  const [number, setNumber] = useState(1);
  const [score, setScore] = useState(0);
  const [showRules, setShowRules] = useState(false)

  const navigation = useNavigate();

  const arrNumver = [1, 2, 3, 4, 5, 6];

  const rulesHandler = () => {
    setShowRules((prev)=>!prev)
  }

  const generateDiceNum = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);

  }
  const resetScore = () => {
    setScore(0)
  }

  const roleDice = () => {
    if (!selectedNumber) {
      setShowAlert("First you have to select the number")
      return
    }

    const randomNumber = generateDiceNum(1, 7);
    setNumber((prev) => randomNumber);

    if (randomNumber == selectedNumber) {
      setScore((prev) => prev + 2);
    } else {
      setScore((prev) => prev - 2)
    }


    setSelectedNumber(undefined)
  }
  const selectnumberHandler = (value) => {
    setSelectedNumber(value)
    setShowAlert("")
  }

  return (
    <div className='flex flex-col p-7 w-3/4 m-auto' >
      <button className='border-2-blue-500 rounded-xl p-2 bg-green-500 max-w-80 hover:bg-green-400 hover:cursor-pointer' onClick={() => { navigation("/") }}> ← Back</button>
      <div className="uppr flex justify-between text-4xl" >
        <div className="score">
          <h1>{score}</h1>
          <p>YOUR SCORE</p>

        </div>

        <div className="option flex flex-col ">
                {showAlert ? <div className='text-red-500'> {showAlert} </div> : ""}
          <div className="dice-option flex justify-between gap-4 hover:cursor-pointer">

            {arrNumver.map((value, id) => (
              <div
                key={id}
                onClick={() => selectnumberHandler(value)}
                className={`border-2 min-h-20 min-w-20  p-auto border-black cursor-pointer 
      ${value === selectedNumber ? 'bg-black text-white' : 'bg-white text-black'} 
      hover:bg-black hover:text-white`}
              >
                {value}
              </div>
            ))}
          </div>
          <p className='m-auto'>SELECT DICE</p>
        </div>
      </div>

      <div className=" flex flex-col m-auto gap-4 max-w-80 p-2">
        <img onClick={roleDice} className='h-40 w-40 m-auto' src={`/src/assets/dice_${number}.png`} alt={`${number}`} />

        <button onClick={resetScore} className='border-2-red-500 rounded-xl p-2 bg-red-500  hover:cursor-pointer hover:bg-red-400'>RESET</button>

        <button onClick={rulesHandler} className='border-2-blue-500 rounded-xl p-2 bg-blue-500  hover:bg-blue-400 hover:cursor-pointer'>SHOW RULES</button>

   
      </div>
           {showRules ? <div className='bg-pink-200 flex flex-col p-2.5 max-w-80 m-auto   align-middle'>
          <h2 className='text-3xl text-'>How to play dice game</h2>
          <p>Select any number</p>
          <p>Click on dice image</p>
          <p>after click on dice if selected number is equal to dice number you will get same point as dice</p>
          <p>if you get wrong guess then 2 point will be dedcuted</p>

        </div> : " "}
    </div>
  )
}

export default GamePage