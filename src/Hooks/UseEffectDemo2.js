import React , { useState , useEffect } from 'react'

function UseEffectDemo2() {

    const [axis , setAxis] = useState({X:0,Y:0})
    // const [X , setX] = useState(0)
    // const [Y , setY] = useState(0)

    function logMouseMove(e){
        console.log('logMouseMove')
        //console.log(X,Y)
        // setX(e.clientX)
        // setY(e.clientY)

         setAxis({...axis , X:e.clientX})
         setAxis({...axis , Y:e.clientY})
    }

    useEffect(() => {
        console.log('UseEffect Triggered')
        window.addEventListener('mousemove' , logMouseMove)
        // return () => {
        //     console.log('Component unmounted')
        //     window.removeEventListener('mousemove' , logMouseMove)
        // }
    },[axis.X,axis.Y])

     //return <div>X : {X} , Y : {Y}</div> 
    return <div>X : {axis.X} , Y : {axis.Y}</div> 
}

export  default UseEffectDemo2