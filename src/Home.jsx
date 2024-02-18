import { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom' 
import './App.css'
import Todo from './todopage'

const Home=()=> {
  let arr = ["A To-do list is a love letter to your future self.", "Yor mind is for having ideas, not holding them.", "The power of To-do list lies in its ability to transform intensions into actions.", "Your Todo list is the compass in the chaos, guiding you to success.", "A to-do list turns your abstract goals into actionable tasks.","The simple act of making a todo list transforms vague aspirations into concrete steps toward success."]
  let randomly=Math.floor(Math.random()*6)
  
  return (
    <>
    
       <div>
        <img src="bg.png" className='mx-auto'/>
        <h2 className='m-10 text-2xl'>{arr[randomly]}</h2>
        <Link to="/Todo"><button className='m-10 bg-white text-black' >Begin !!</button></Link>
        </div>
       
    </>
  )
}


export default Home