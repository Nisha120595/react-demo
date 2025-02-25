import React, { useRef, useEffect, useState } from 'react' 

function HookTimer() {

    const [timer , setTimer] = useState(0)
    const intervalRef = useRef()

    useEffect(() => {
        intervalRef.current = setInterval(() => {
            setTimer(prevValue => prevValue+1)
        },1000)
        return () => {
            //clearInterval(intervalRef.current)
        }
    },[])

    return (
        <div>
            Hook Timer - {timer}
            <button type="button" onClick={() => clearInterval(intervalRef.current)}>Clear Interval</button>
        </div>
    )
}

export default HookTimer