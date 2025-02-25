import React from 'react'

function Title() {
    console.log("Title triggered")
    return(
        <h3>Use callback Hook Demo</h3>
    )
}

 export default React.memo(Title)
//export default Title