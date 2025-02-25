import React , { Component , PureComponent } from 'react'
import PureComp from './PureComp'
import RegComp from './RegComp'
import MemoComp from './MemoComp'

class ParentComp extends Component {

    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    componentDidMount(){
        // setInterval(() => {   // pure component will re-render every time because prop will change everytime
        //     this.setState(prevState => ({
        //         count : prevState.count +1 
        //     }))
        // }, 2000);

        setInterval(() => {   // pure component will not re-render every time because prop is not changing everytime
            this.setState({
                count : 0
            })
        }, 2000);
    }

    render(){
        console.log("Parent Component here");
        return(
            <div>
                Parent Component
                {/* <RegComp count = {this.state.count}/>
                <PureComp count = {this.state.count}/> */}
                <MemoComp count = {this.state.count}/>
            </div>
        )
    }
}

export default ParentComp