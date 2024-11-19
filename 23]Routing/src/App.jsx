import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import Router from './Routingggg/Router'
import About from './Routingggg/About'
import Contact from './Routingggg/Contact'

function App() {
  return (
    <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Router />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App
