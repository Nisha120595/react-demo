import React , { useState } from 'react'

function UseState() {

    //count variable will contain current state
    //useState function will accept initial state as parameter
    //useState will return current state and method that will be able to update the state
    //setCount is the returned method which will update the state

    const [count , setCount] = useState(0)

    return(
         <div><button onClick={() => setCount(count+1)}>Count {count} </button></div>
    )
}

export  default UseState