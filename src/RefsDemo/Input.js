import React , { Component } from 'react'

class Input extends Component {

    constructor(){
        super();
        this.inputRef = React.createRef();
    }

    //Create a method which will intern focus on input element and not in componentdidmount method
    FocusInput(){
        this.inputRef.current.focus();
    }

    render(){
        return(
            <div>
                <input type = "text" ref = {this.inputRef}/>
            </div>
        )
    }
}

export default Input