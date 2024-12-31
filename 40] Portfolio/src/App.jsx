import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Component/Header'
import Home from './Component/home/Home'
import About from './Component/about/About'
import Skills from './Component/skills/Skills'
import Services from './Component/services/Services'
import Contact from './Component/contact/Contact'
import Footer from './Component/footer/Footer'
import ScrollUp from './Component/scrollUp/ScrollUp'
import Project from './Component/portfolio/Project'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header/>

     <main className='main'>
      <Home/>
      <About />
      <Skills />
      <Services />
      <Project />
      <Contact />

     </main>

     <Footer />
     <ScrollUp />
    </>
  )
}

export default App
