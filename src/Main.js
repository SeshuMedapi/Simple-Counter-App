import React, {useState} from 'react'

const Main = () => {
  const [count, setCount] = useState(0)
  const onClickIncrement = () => {
    setCount(count + 1)
  }

  const onClickDecrement = () => {
    setCount(count-1)
  }

  const onClickReset = () => {
    setCount(0)
  }

  return (
    <div>
      <center>
      <h1 className='heading'>Simple Counter App</h1>
      <h1>{count}</h1>
      <button className='button-increment' onClick={onClickIncrement}>Increment</button>
      <button className='button-decrement' onClick={onClickDecrement}>Decrement</button> <br/>
      <button className='button-reset' onClick={onClickReset}>Reset</button>

      </center>
    </div>
  )
}

export default Main
