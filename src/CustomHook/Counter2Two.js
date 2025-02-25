import React from 'react'
import useCounter from './useCounter'

function Counter2Two() {

    const [count , increment , decrement , reset] = useCounter(10,10)

    return(
        <div>
            <div>Count - {count}</div>
            <button type="button" onClick={increment}>Increment</button>
            <button type="button" onClick={decrement}>Decrement</button>
            <button type="button" onClick={reset}>Reset</button>
        </div>
    )
}

export default Counter2Two