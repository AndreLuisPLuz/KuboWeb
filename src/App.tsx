import Login from "./pages/Login"
import './App.css'
import Register from "./pages/Register"
import Home from "./pages/Home"
import Personalize from "./pages/Personalize"
import Kitchen from "./pages/Kitchen"
import Bedroom from "./pages/Bedroom"
import { ThemeProvider } from "./contexts/Theme"
import { Route, Routes } from "react-router-dom"

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
