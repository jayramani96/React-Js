import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let obj = {
    name:"jay",
    subject:"react"
  }

  //destructing//
  const{name,subject} = obj;
  console.log(name);
  console.log(subject);

  //map// 
  let arr = [1,2, "jay"]


  // spread Opretor//
  let arr2 = [...arr,"spread"]
  console.log(arr2);

  let arr3 = [
    {name: "raj", subject: "react"},
    {name: "meet", subject: "html"},
    {name: "harsh", subject: "css"},
    {name: "abhi", subject: "js"}
  ]

  return (
    <>
     <div>
      <h1>Array and Object</h1>
      {
        arr.map((e,i)=>{
          return <div key={i}>
            <p>{e}</p>
          </div>
        })
      }
      {
        arr3.map((e,i)=>{
          return <div key={i}>
            <p>{e.name} : {e.subject}</p>
            
          </div>
        })
      }
     </div>
    </>
  )
}

export default App
