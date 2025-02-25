import React , { useState } from 'react'

function UseStateWithPrevValue() {

    const defaultValue = 0
    const [count , setCount] = useState(defaultValue)

    function IncrementBy5() {
        for(var i=0;i<5;i++){
            setCount(prevValue => prevValue + 1)
            //setCount(count+1)  //won't give proper result
         }
    }

    return(
        <div>
             Count : {count}
             <button onClick={() => setCount(defaultValue)}>Reset</button>
             <button onClick={() => setCount(prevValue => prevValue + 1)}>Increment</button>
             <button onClick={() => setCount(prevValue => prevValue - 1)}>Decrement</button>
             <button onClick={IncrementBy5}>IncrementBy5</button>
             {/* <button onClick={() => setCount(count+5)}>IncrementBy5</button> */}
        </div>
    )
}

export  default UseStateWithPrevValue