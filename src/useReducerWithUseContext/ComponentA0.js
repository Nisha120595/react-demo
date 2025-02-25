import React, {useContext} from 'react'
import {countContext} from './CreateContextHere'

function ComponentA0() {
    const countVar = useContext(countContext)
    return(
        <div>
           Component A0
           <button onClick={() => countVar.dispatchState('increment')}>Increment</button>
           <button onClick={() => countVar.dispatchState('decrement')}>Decrement</button>
           <button onClick={() => countVar.dispatchState('reset')}>Reset</button>
        </div>
    )
}

export default ComponentA0