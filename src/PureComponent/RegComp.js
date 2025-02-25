import React , { Component } from 'react'

class RegComp extends Component {
    render(){
        console.log("Regular Component here");
        return(
        <div>Regular Component {this.props.count}</div>
        )
    }
}

export default RegComp