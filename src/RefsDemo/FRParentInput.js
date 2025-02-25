import React , { Component } from 'react'
import FRInput from './FRInput'

class FRParentInput extends Component {

    constructor(){
        super()
        this.ComponentRef = React.createRef()
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(){
        this.ComponentRef.current.focus()
    }

    render(){
        return(
            <div>
                <FRInput ref = {this.ComponentRef} name="Nisha" />
                <button onClick = {this.clickHandler} >Focus Input</button>
            </div>
        )
    }
}

export default FRParentInput