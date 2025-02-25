import React , { Component } from 'react';

class Message extends Component {

    constructor(){
      super();
      this.state = {
        message : 'Welcome Visitor',
        subscribe : 'Subscribe',
        arg : 'change'
      }
    }

    messageChange(arg){
      (arg === 'change') ? this.setStateValue('Thank you for subscribing', 'Unsubscribe' , '') : 
                           this.setStateValue('Welcome Visitor' , 'Subscribe' , 'change') ;
    }

    setStateValue(arg1,arg2,arg3){
      this.setState({
        message: arg1,
        subscribe : arg2,
        arg : arg3
      });
    }

    render() {
    return (
        <div>
           <h1>{this.state.message}</h1>
           <button onClick = {() => this.messageChange(this.state.arg)}>{this.state.subscribe}</button>
        </div>
      )
    }
}

export default Message