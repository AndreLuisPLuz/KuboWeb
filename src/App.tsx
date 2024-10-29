import './App.css'

import { ThemeProvider } from "./contexts/Theme"
import { Route, Routes } from "react-router-dom"
import Login from './Pages/Login'
import Register from './Pages/Register'
import Personalize from './Pages/Personalize'
import Home from './Pages/Home'
import Kitchen from './Pages/Kitchen'
import Bedroom from './Pages/Bedroom'

function App() {

  return (
      <ThemeProvider>
       <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>
        <Route path="/personalize" element={<Personalize />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/kitchen" element={<Kitchen />}/>
        <Route path="/bedroom" element={<Bedroom />}/>
       </Routes>
      </ThemeProvider>
  )
}

export default App
