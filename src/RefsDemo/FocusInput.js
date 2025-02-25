import React , { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {

    constructor(){
        super()
        this.ComponentRef = React.createRef()
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.ComponentRef.current.FocusInput()
    }

    render(){
        return(
            <div>
                <Input ref = {this.ComponentRef} name = "Nisha" />
                <button onClick = {this.clickHandler} >Focus Input</button>
            </div>
        )
    }
}

export default FocusInput