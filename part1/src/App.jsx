import { useState } from 'react'

const Header = (props) => {
  return (
      <h1>{props.name}</h1>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.setState}>
    {props.name}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header name="give feedback"/>
      <Button name="good" setState={() => setGood(good+1)}/>
      <Button name="neutral" setState={() => setNeutral(neutral+1)}/>
      <Button name="bad" setState={() => setBad(bad+1)}/>
      <Header name="statistics"/>
      <p> good {good} </p>
      <p> neutral {neutral} </p>
      <p> bad {bad} </p>
    </div>
  )
}

export default App
