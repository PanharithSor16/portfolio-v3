// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import { kMaxLength } from 'buffer'
import './App.css'

function App() {
  return (
    <>
    <div className=' w-fit fixed top-0 left-20 font-semibold text-3xl right-0 -ml -5 mt-2'>
      <span className=' ballet  bg-black text-blue-50 p-2'>Sor</span>
      <span className=' ballet bg-black text-red-400 p-2'>Panharith</span>
    </div>
   <div className=' mt-5 grid-cols-1'>
    
     <div
      style={{
        display: "flex",
        gridTemplateColumns: `repeat(${1}, 50px)`,
      }}
     className=' w-fit fixed top-0 left-0 right-0 -ml -5 mt-10'
      // className=' flex top-5'
    >
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          style={{
            width: 30,
            height: 35,
            margin: 10,
            backgroundColor: "grey",
      borderRadius: 10,
      opacity: 0,
      animation: `fadeIn 0.4s ease forwards`,
      animationDelay: `${index * 0.08}s`,
          }}
        />
      ))}
    </div>

     <div
      style={{
        display: "flex",
        gridTemplateColumns: `repeat(${1}, 50px)`,
      }}
     className=' w-fit fixed bottom-0 left-0 right-0 -ml-5 mb-2'
      // className=' flex top-5'

    >
      {Array.from({ length: 50 }).map((_, index) => (
        <div
          key={index}
          style={{
            width: 30,
            height: 35,
            margin: 10,
            backgroundColor: "grey",
            borderRadius: 10,
      opacity: 0,
      animation: `fadeIn 0.4s ease forwards`,
      animationDelay: `${index * 0.08}s`,
          }}
        />
      ))}
    </div>
    <div>
      
    </div>
    </div>
    
    </>
  )
}


export default App
