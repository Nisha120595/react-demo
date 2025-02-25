import React , { Component } from 'react'; 

class Count extends Component {
    constructor(){
        super();
        this.state = {
            count : 0
        }
    }

    increment(value){
        if(value === 'increase'){
                // this.setState({
                //     count : this.state.count + 1
                // } , () => {
                //     console.log('callback incremented value' , this.state.count) // Callback function in setState function
                // });

                this.setState((prevState,props) => ({
                    count : prevState.count + 1
                }))
                console.log('increase' , this.state.count);
        } else {
            // this.setState({
            //     count : this.state.count - 1
            // } , () => {
            //     console.log('callback decrease value' , this.state.count) // Callback function in setState function
            // });

            this.setState((prevState,props) => ({
                count : prevState.count - 1
            }))
            console.log('decrease' , this.state.count);
        }
    }

    incrementFive(value){
        this.increment(value);
        this.increment(value);
        this.increment(value);
        this.increment(value);
        this.increment(value);
    }

    render() {
        return (
            <div>
                Count = {this.state.count}<br/>
                <button onClick = {() => this.incrementFive('increase')}>Increment by 5</button>
                <button onClick = {() => this.incrementFive()}>Decrement by 5</button>
                <button onClick = {() => this.increment('increase')}>Increment</button>
                <button onClick = {() => this.increment()}>Decrement</button>
            </div>
        )
    }
}

export default Count;