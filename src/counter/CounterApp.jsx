import { useCounter } from "../hooks/useCounter"



export const CounterApp = () => {
    const {counter, increment, decrement, reset } = useCounter()
    
  return (
    <>
        <h1>Counter with hook: { counter }</h1>
        <hr />
        <button onClick={() => increment(3)} >+1</button>
        <button onClick={reset}>Reset</button>
        <button onClick={decrement}>-1</button>
    </>
  )
}
