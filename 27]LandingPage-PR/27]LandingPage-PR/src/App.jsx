import React from 'react'
import Com from './Com'
import Pann from './Folderr/Pann'
import Pharmacy from './Folderr/Pharmacy'
import Imgs from './Folderr/Imgs'
import DairyProduct from './Folderr/DairyProduct'
import SnacksProduct from './Folderr/SnacksProduct'
import HookahProduct from './Folderr/HookahProduct'
import MouthProduct from './Folderr/MouthProduct'
import ColdDrinksProduct from './Folderr/ColdDrinksProduct'
import CandiesProduct from './Folderr/CandiesProduct'
import Footer from './Folderr/Footer'

export default function App() {
  return (
    <div>
      <Com/>
      <Pann/>
      <Pharmacy/>
      <Imgs/>
      <DairyProduct/>
      <SnacksProduct/>
      <HookahProduct/>
      <MouthProduct/>
      <ColdDrinksProduct/>
      <CandiesProduct/>
      <Footer/>
    </div>
  )
}
