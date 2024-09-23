import Login from "./pages/Login"
import './App.css'
import Register from "./pages/Register"
import Home from "./pages/Home"
import Personalize from "./pages/Personalize"
import { ThemeProvider } from "./contexts/Theme"

function App() {

  return (
      <ThemeProvider>
        <Personalize/>
      </ThemeProvider>
  )
}

export default App
