import React from 'react'

function Column(){
    return(
        // <React.Fragment>
        //     <td>Nisha</td>
        //     <td>Rajput</td>
        // </React.Fragment>



        //ShortHand property to use fragment (We cannot pass key attribute in the shorthand property)
        <> 
            <td>Nisha</td>
            <td>Rajput</td>
        </>
    )
}

export default Column