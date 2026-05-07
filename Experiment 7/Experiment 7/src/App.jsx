import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Greet from './component/Greet'

function App() {

  return (
    <>
      <Greet name = "Rahul Dravid" course = "Course: Computer Science" marks = "Marks: 90"/>
      <Greet name = "Virat Kohli" course = "Course: Information Technology" marks = "Marks: 75"/>
      <Greet name = "Mahendra Singh Dhoni" course = "Course: Electronics" marks = "Marks: 95"/>
    </>
  )
}

export default App