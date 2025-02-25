import React , { Component } from 'react'
import LifeCycleB from './LifeCycleB'

class LifeCycleA extends Component {

    constructor(props){
        super();
        this.state = {
            name : 'Vishwas'
        }
        console.log(`LifeCycleA Constructor`);
    }

    shouldComponentUpdate(nexProp , nextState){ //should return true or false
        console.log(`LifeCycleA shouldComponentUpdate`);
        return true;
    }

    getSnapshotBeforeUpdate(prevProp , prevState){ //Should Return updated state or null
        console.log(`LifeCycleA getSnapshotBeforeUpdate`);
        return null;
    }

    componentDidUpdate(prevProp , prevState , snapshot){
        console.log(`LifeCycleA componentDidUpdate`);
    }

    static getDerivedStateFromProps(props , state){  //Should Return new state or null
        console.log(`LifeCycleA getDerivedStateFromProps`);
        return null;
    }

    componentDidMount(){
        console.log(`LifeCycleA componentDidMount`);
    }

    changeStateHandler = event => {
        this.setState({
            name : "nisha"
        })
    }

    render () {
        console.log(`LifeCycleA render`);
        return (
            <div>
                <div>LifeCycleA</div>
                <button onClick={this.changeStateHandler}>Change State</button>
                <LifeCycleB />
            </div>
        )
    }
}

// Execution sequence for Mounting Lifecycle Methods ----------
// LifeCycleA Constructor
// LifeCycleA getDerivedStateFromProps
// LifeCycleA render
// LifeCycleB Constructor
// LifeCycleB getDerivedStateFromProps
// LifeCycleB render
// LifeCycleB componentDidMount
// LifeCycleA componentDidMount


// Execution sequence for Updating Lifecycle Methods ---------
// LifeCycleA getDerivedStateFromProps
// LifeCycleA shouldComponentUpdate
// LifeCycleA render
// LifeCycleB getDerivedStateFromProps
// LifeCycleB shouldComponentUpdate
// LifeCycleB render
// LifeCycleB getSnapshotBeforeUpdate
// LifeCycleA getSnapshotBeforeUpdate
// LifeCycleB componentDidUpdate
// LifeCycleA componentDidUpdate

export default LifeCycleA