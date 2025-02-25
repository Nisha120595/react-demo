import React, {useContext} from 'react'
import {countContext} from './CreateContextHere'

function ComponentD0() {
    const countVar = useContext(countContext)
    return(
        <div>
           Component D0
           <button onClick={() => countVar.dispatchState('increment')}>Increment</button>
           <button onClick={() => countVar.dispatchState('decrement')}>Decrement</button>
           <button onClick={() => countVar.dispatchState('reset')}>Reset</button>
        </div>
    )
}

export default ComponentD0