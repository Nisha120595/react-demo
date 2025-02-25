import React , { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
    constructor(){
        super();
        this.state = {
            ParentName : 'Parent'
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler(param){
        this.setState({
            ParentName : 'Big Parent'
        },() => {
            alert(`Hello ${this.state.ParentName} from ${(typeof(param) == 'string') ? param : ''}`);
        })
        console.log(`Hello ${this.state.ParentName}`);
    }

    render(){
        return(
            <div>
                <ChildComponent greetParent = {this.clickHandler}><h3>This is from Parent Component</h3></ChildComponent>
            </div>
        )
    }
}

export default ParentComponent