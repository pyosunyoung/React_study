import React from 'react'
import './MainPageCss.css'
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div className='mainContainer'>
      <span><h1>prod by pyoseonyoung</h1></span>
      <div className='mainTitle'><p>Rock-Paper-Scissors</p></div>
      <span><h2>"Get your fingers ready! The ultimate Rock-Paper-Scissors showdown starts now!"</h2></span>
      <span><h2 style={{color:"red"}}>"Game Rules : If anyone wins game 3, the game will be reset."</h2></span>
      <div className='next_page'>
        <Link to={'/RockPaperScissors'} className='start-btn'>Game Start</Link>
      </div>
    </div>
  )
}

export default MainPage
