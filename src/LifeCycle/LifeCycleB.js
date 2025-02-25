import React , { Component } from 'react'

class LifeCycleB extends Component {

    constructor(props){
        super();
        this.state = {
            name : 'Vishwas'
        }
        console.log(`LifeCycleB Constructor`);
    }

    static getDerivedStateFromProps(props , state){  //Should Return new state or null
        console.log(`LifeCycleB getDerivedStateFromProps`);
        return null;
    }

    shouldComponentUpdate(nexProp , nextState){  //should return true or false
        console.log(`LifeCycleB shouldComponentUpdate`);
        return true;
    }

    getSnapshotBeforeUpdate(prevProp , prevState){ //Should Return updated state or null
        console.log(`LifeCycleB getSnapshotBeforeUpdate`);
        return null;
    }

    componentDidUpdate(prevProp , prevState , snapshot){
        console.log(`LifeCycleB componentDidUpdate`);
    }

    componentDidMount(){
        console.log(`LifeCycleB componentDidMount`);
    }

    changeStateHandler = event => {
        this.setState({
            name : "nisha"
        })
    }

    render () {
        console.log(`LifeCycleB render`);
        return (
            <div>
                <div>LifeCycleB</div>
                <button onClick={this.changeStateHandler}>Change State from child</button>
            </div>
        )
    }
}

export default LifeCycleB