import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LandingPage from './component/Landing Page/LandingPage'
import FloatingHearts from './component/FloatingHeart'
import Happy from './component/Landing Page/Happy'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <FloatingHearts/>
      <LandingPage/>
      {/* <Happy/> */}
    </>
  )
}

export default App
