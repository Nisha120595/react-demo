import React , { PureComponent } from 'react'

class PureComp extends PureComponent {
    render(){
        console.log("Pure Component here");
        return(
            <div>Pure Component {this.props.count}</div>
        )
    }
}

export default PureComp