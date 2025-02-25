import React, {Component} from 'react'

// function ChildComponent(props) {
//     return(
//         <div>
//             <button onClick = {props.greetParent}>Greet Parent</button>
//             {/* <button onClick = {() => props.greetParent('child')}>Greet Parent</button> */}
//         </div>
//     )
// }

class ChildComponent extends Component {
    render(){
        const {greetParent} = this.props;
        return(
            <div>
                {/* <button onClick = {greetParent}>Greet Parent</button> */}
                <button onClick = {() => greetParent('child')}>Greet Parent</button>
                <div>{this.props.children}</div>
            </div>
        )
    }
}

export default ChildComponent