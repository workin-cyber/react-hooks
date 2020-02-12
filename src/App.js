import React from 'react'
import Counter from './counter'
import Effect from './effect'
import Ref from './ref'

function App() {
  const [isAlive, setIsAlive] = React.useState(true)

  return <div className='App'>
    {/* <Counter /> */}
    <Ref />
    {isAlive ? <Effect /> : null} //דוגמא
    <button onClick={() => setIsAlive(!isAlive)}>set is alive</button>
  </div>
}

export default App
