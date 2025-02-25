import React, { useRef, useEffect } from 'react' 

function UseRefDemo() {

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    },[])

    return <>
        <input ref={inputRef} type="text" />
        <button ref={inputRef}>Hello</button>
    </>
}

export default UseRefDemo