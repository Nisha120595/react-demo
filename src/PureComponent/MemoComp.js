import React from 'react'
import { tsPropertySignature } from '@babel/types'

function MemoComp({count}) {
    console.log("From memo component");
    return (
    <div>This is Memo Component {count}</div>
    )
}

export default React.memo(MemoComp) //React.memo is a higher order component that provides functionalities of pure component in a functional component