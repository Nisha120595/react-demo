import React , {Component} from 'react'

class HoverCounterTwo extends Component {

    render(){
        const {count , clickHandler} = this.props
       return <h3 onMouseOver={clickHandler}>Hovered {count} Times</h3>
    }
}

export default HoverCounterTwo