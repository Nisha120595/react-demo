import React , {Component} from 'react'
import withCounter from './withCounter'

class ClickCounter extends Component {

    render(){
       const {name , currentCount , changeHandler} = this.props
       return <button onClick={changeHandler}> {this.props.fromWhere} {name} Click {currentCount} Times</button>
    }
}

//Instead of exporting ClickCounter , we export the higher order component i.e. withCounter
export default withCounter(ClickCounter,5)