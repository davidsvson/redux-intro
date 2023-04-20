import { Profiler, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import Profile from './components/Profile'
import { useSelector } from 'react-redux'

function App() {
  const [count, setCount] = useState(0)
  const alias = useSelector(state => state.profile.alias );

  return (
    <div className="App">
      <h2>Välkommen, {alias} </h2> 

      <Profile />
      <Counter />
      <Counter />
      <Counter />
    </div>
  )
}

export default App
