import React , {Component} from 'react';

class EventBind extends Component {

    constructor(props){
        super(props);

        this.state = {
            message : 'Hello'
        }

        // this.clickHandler = this.clickHandler.bind(this)  //Third method (Recommended)
    }

    //Third Method
    // clickHandler(){
    //     this.setState({
    //         message : 'Good Bye!'
    //     })
    // }

    //Fourth Method
    clickHandler = () => {
        this.setState({
            message : 'Good Bye!'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.message}</h1>
                <button onClick = {this.clickHandler}>Click</button> {/* for third and fourth method */}
                {/* <button onClick = {this.clickHandler.bind(this)}>Click</button> //First Method */}
                {/* <button onClick = {() => this.clickHandler()}>Click</button> //Second Method */}
            </div>
        )
    }
}

export default EventBind