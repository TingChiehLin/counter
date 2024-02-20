import * as React from 'react'
import './App.css'

function App() {
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setCount((preState) => (preState + 1))  
    }, 1000)
    return () => {
      clearInterval(interval)
    }
  }, [count])

  return (
    <>
      <span>{count}</span>
    </>
  )
}

export default App
