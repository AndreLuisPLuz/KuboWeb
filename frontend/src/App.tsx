import Login from "./pages/Login"
import './App.css'
import Register from "./pages/Register"
import Home from "./pages/Home"
import { ThemeProvider } from "./contexts/Theme"

function App() {

  return (
      <ThemeProvider>
        <Home/>
      </ThemeProvider>
  )
}

export default App
