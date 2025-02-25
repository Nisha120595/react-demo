import React , { Component } from 'react';

// class Welcome extends Component {
//     render() {
//     return (
//         <div>
//            <h2>Hello {this.props.name} a.k.a {this.props.heroName}</h2>
//            {this.props.children}
//         </div>
//       )
//     }
// }


class Welcome extends Component {
  constructor(){
    super();
    this.onClick = this.onClick.bind(this);
  }
  onClick = (e) => {
    console.log("Output: ", e.target.id);
  }
  render() {
    //const {name, heroName} = this.props; // Destructuring in class Component
    //const {state1, state2} = this.state;
  return (
      <div>
         <h2>Hello ES6</h2>
         <p>More info <a href='#' onClick={this.onClick} id="moreInfo">here</a></p>
      </div>
    )
  }
}

export default Welcome