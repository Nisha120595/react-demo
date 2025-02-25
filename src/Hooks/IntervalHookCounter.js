import React , { useState , useEffect } from 'react'

function IntervalHookCounter() {

    const [count , setCount] = useState(0)

    const tick = () => {
        console.log('tick triggered')
        //setCount(prevValue => prevValue+1)  //code will work fine and no need to add any dependency
        setCount(count+1) //make sure to add dependency for this approach
    }

    useEffect(() => {
      console.log('use effect triggered')
      const Interval = setInterval(tick , 1000) 
      return () => {
          console.log('unmounting triggered')
          clearInterval(Interval)
      } 
    },[count])

    return(
        <div>
            {count}
        </div>
    )
}

export  default IntervalHookCounter