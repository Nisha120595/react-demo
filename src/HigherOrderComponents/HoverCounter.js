import React , {Component} from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    render(){
       const {name , currentCount , changeHandler} = this.props
       return <h3 onMouseOver={changeHandler}> {this.props.react} {name} hovered {currentCount} times</h3>
    }
}

//Instead of exporting HoverCounter , we export the higher order component i.e. withCounter
export default withCounter(HoverCounter,10)