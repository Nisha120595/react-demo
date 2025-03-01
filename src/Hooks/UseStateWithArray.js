import React , { useState } from 'react'

function UseStateWithArray() {

    const [items , setItems] = useState([])

    function addNumber() {
        setItems([ ...items , {
            id : items.length,
            value : Math.floor(Math.random() * 10 ) + 1
        }])
    }

    return(
         <div>
             <button onClick={addNumber}>Add a number</button>
             <ul>
                 {
                    items.map(item => <li key={item.id}>{item.value}</li>)
                 }
             </ul>
         </div>
    )
}

export  default UseStateWithArray