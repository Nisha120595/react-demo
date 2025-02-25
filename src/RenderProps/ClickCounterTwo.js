import React , {Component} from 'react'

class ClickCounterTwo extends Component {

    render(){
       const {count , clickHandler} = this.props
       return <button onClick={clickHandler}>Clicked {count} Times</button>
    }
}

export default ClickCounterTwo