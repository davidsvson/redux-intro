import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Profile from './components/Profile'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Profile />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
