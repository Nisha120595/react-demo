import React, { useRef, useEffect } from 'react'
import useInput from './useInput'

function UserForm(){

    const [firstName , bindFirstName , resetFirstName] = useInput('')
    const [lastName , bindLastName , resetLastName] = useInput('Rajput')

    const inputRef = useRef(null)

    function onSubmitHandler(e){
        e.preventDefault()
        alert (`Hello ${firstName} ${lastName}`)
        onResetHandler()
    }

    function onResetHandler(e){
        resetFirstName('')
        resetLastName('')
        inputRef.current.focus()
    }

    useEffect(() => {
        inputRef.current.focus()
    },[])

    return(
        <div>
            <form onSubmit={onSubmitHandler} onReset={onResetHandler}>
                <div>
                    <label>First Name = </label>
                    <input type="text" {...bindFirstName} ref={inputRef}/>
                </div>
                <div>
                    <label>last Name = </label>
                    <input type="text" {...bindLastName} />
                </div>
                <button type="submit">Submit</button>
                <button type="reset">Reset</button>
            </form>
        </div>
    )
}

export default UserForm