import React, { useState, useMemo } from 'react'

function UseMemoDemo(){

    const [counterOne , setCounterOne] = useState(0)
    const [counterTwo , setCounterTwo] = useState(0)

    const handleSetCounterOne = () => {
        setCounterOne(counterOne+1)
    } 

    const handleSetCounterTwo = () => {
        setCounterTwo(counterTwo+1)
    } 

    const isEven = useMemo(() => {
        let i =0
        while (i<2000000000) i++
        return counterOne % 2 === 0
    } , [counterOne])

    return (
        <div>
            <div>
                 <button onClick={handleSetCounterOne}>Count One - {counterOne}</button>
                 {/* <span>{isEven() ? 'Even' : 'Odd'}</span> */}
                  <span>{isEven ? 'Even' : 'Odd'}</span>   {/*isEven stores value now , so it is not a function call anymore */}
            </div>
            <div>
                 <button onClick={handleSetCounterTwo}>Count One - {counterTwo}</button>
            </div>
        </div>
    )
}

export default UseMemoDemo