import React , {Component} from 'react'

class Counter extends Component {

    constructor(){
        super()
        this.state = {
            count : 0
        }
    }

    clickHandler = () => {
        this.setState(prevValue => {
            return { count : prevValue.count+1}
        })
    }

    render(){
    //    return <div>{this.props.render(this.state.count,this.clickHandler)}</div>
       return <div>{this.props.children(this.state.count,this.clickHandler)}</div>
    }
}

export default Counter