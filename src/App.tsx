import './App.css'

import { ThemeProvider } from "./contexts/Theme"
import { Route, Routes } from "react-router-dom"
import Login from './pages/Login'
import Register from './pages/Register'
import Personalize from './pages/Personalize'
import Home from './pages/Home'
import Kitchen from './pages/Kitchen'
import Bedroom from './pages/Bedroom'
import { UserProvider } from './contexts/User'

function App() {

  return (
      <ThemeProvider>
        <UserProvider>
          <Routes>
            <Route path="/" element={<Login />}/>
            <Route path="/register" element={<Register />}/>
            <Route path="/personalize" element={<Personalize />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/kitchen" element={<Kitchen />}/>
            <Route path="/bedroom" element={<Bedroom />}/>
          </Routes>
        </UserProvider>
      </ThemeProvider>
  )
}

export default App
