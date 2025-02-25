import React from 'react'

function Count({text , count}) {
    console.log(`Count triggered ${text}`)
    return(
        <div>{text} - {count}</div>
    )
}

 export default React.memo(Count)
//export default Count