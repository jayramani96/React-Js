import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarCom from './Components/NavbarCom';
import SliderCom from './Components/SliderCom';
import Card1 from './Components/Card1';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <NavbarCom/>
       <SliderCom/>
       <Card1/>
    </>
  )
}

export default App
