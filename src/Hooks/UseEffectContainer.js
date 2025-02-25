import React , { useState } from 'react'
import UseEffectDemo2 from './UseEffectDemo2'

function UseEffectContainer() {

    const [display , setDisplay] = useState(true)

    return(
        <div>
             <button onClick={() => setDisplay(!display)}>Toggle Display</button>
             {display && <UseEffectDemo2 />}
        </div>
    )
}

export  default UseEffectContainer