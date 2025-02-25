import React , { Component } from 'react';

class ClassClick extends Component{
    ClickHandler(params) { // No function keyword required
        console.log("Click Me Triggered");        
    }
  render(){
      return(
          <div>
              <button onClick={this.ClickHandler}>Click Me</button>
          </div>
      )
  }
}

export default ClassClick